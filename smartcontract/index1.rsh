'reach 0.1';

export const main = Reach.App(() => {
    const Creator = Participant('Creator', {
        getnft: Fun([], Token),
        nftprice: UInt
    })
    const Buyer = Participant('Buyer', {
        payprice: Fun([UInt], Null)
    })

    init()

    Creator.only(() => {
        const nftId = declassify(interact.getnft())
        const nftPrice = declassify(interact.nftprice)
    })
    Creator.publish(nftId, nftPrice)
    const amt = 1;
    commit();
    Creator.pay([[amt, nftId]])

    Buyer.only(() => {
        interact.payprice(nftPrice)
    })
    commit()
    Buyer.pay(nftPrice)

    transfer(nftPrice).to(Creator)
    transfer(amt, nftId).to(Buyer)

    commit()

});
