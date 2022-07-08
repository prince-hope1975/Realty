'reach 0.1';


const MUInt = Maybe(UInt);
const common = {
    showOutcome: Fun([Address], Null)
};
const Params = Tuple(Token, UInt, UInt);
export const main = Reach.App(() => {
    const Creator = Participant('Creator', {
        ...common,
        getSale: Fun([], Params),
        seeBid: Fun([Address, UInt], Null),
        timeout: Fun([], Null),
    });
    const Bidder = ParticipantClass('Bidder', {
        ...common,
        seeParams: Fun([Params], Null),
        getBid: Fun([UInt], MUInt),
    });

    // const T = API("Terminator", {
    //     endContract: Fun([], Null)
    // })
    init();

    Creator.only(() => {
        const [nftId, reservePrice, lenInBlocks] = declassify(interact.getSale());
    });
    Creator.publish(nftId, reservePrice, lenInBlocks);
    const amt = 1;
    commit();
    Creator.pay([
        [amt, nftId]
    ]);
    // returns network time of the last publication of dApp
    const end = lastConsensusTime() + lenInBlocks;
    Bidder.interact.seeParams([nftId, reservePrice, end]);

    const [endit, highestBidder, lastPrice, currentPrice] =
    parallelReduce([true, Creator, 0, reservePrice])
        .invariant(balance(nftId) == amt && balance() == lastPrice)
        .while(endit && lastConsensusTime() <= end)
        // .api(
        //     T.endContract,
        //     () => check(this == Creator),
        //     () => 0,
        //     (_) => [false, highestBidder, lastPrice, currentPrice]
        // )
        .case(Bidder,
            (() => {
                const mbid = highestBidder != this ?
                    declassify(interact.getBid(currentPrice)) :
                    MUInt.None();
                return ({
                    when: maybe(mbid, false, ((b) => b > currentPrice)),
                    msg: fromSome(mbid, 0)
                });
            }),
            ((bid) => bid),
            ((bid) => {
                require(bid > currentPrice);
                transfer(lastPrice).to(highestBidder);
                Creator.interact.seeBid(this, bid);
                return [endit, this, bid, bid];
            }))

    .timeout(absoluteTime(end), () => {
        Creator.interact.timeout();
        Creator.publish();
        return [endit, highestBidder, lastPrice, currentPrice]
    });
    transfer(lastPrice).to(Creator);
    transfer(amt, nftId).to(highestBidder);
    commit();

    each([Creator, Bidder], () => interact.showOutcome(highestBidder));
    exit();
});