// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2],
      4: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc0, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Bidder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v221, v222, v223], secs: v225, time: v224, didSend: v36, from: v220 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v235, time: v234, didSend: v43, from: v233 } = txn2;
  ;
  ;
  const v245 = stdlib.addressEq(v220, v233);
  stdlib.assert(v245, {
    at: './index.rsh:33:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bidder'
    });
  const v247 = stdlib.add(v224, v223);
  const v249 = [v221, v222, v247];
  stdlib.protect(ctc2, await interact.seeParams(v249), {
    at: './index.rsh:38:30:application',
    fs: ['at ./index.rsh:38:30:application call to [unknown function] (defined at: ./index.rsh:38:30:function exp)', 'at ./index.rsh:38:30:application call to "liftedInteract" (defined at: ./index.rsh:38:30:application)'],
    msg: 'seeParams',
    who: 'Bidder'
    });
  
  let v250 = v222;
  let v251 = true;
  let v252 = v220;
  let v253 = stdlib.checkedBigNumberify('./index.rsh:41:36:decimal', stdlib.UInt_max, '0');
  let v254 = v234;
  let v255 = v224;
  
  while (await (async () => {
    const v269 = stdlib.le(v255, v247);
    const v270 = v251 ? v269 : false;
    
    return v270;})()) {
    const v275 = ctc.selfAddress();
    const v277 = stdlib.addressEq(v252, v275);
    let v279;
    if (v277) {
      const v283 = ['None', null];
      v279 = v283;
      }
    else {
      const v280 = stdlib.protect(ctc3, await interact.getBid(v250), {
        at: './index.rsh:47:47:application',
        fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:13:function exp)', 'at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:13:function exp)'],
        msg: 'getBid',
        who: 'Bidder'
        });
      v279 = v280;
      }
    let v284;
    switch (v279[0]) {
      case 'None': {
        const v285 = v279[1];
        v284 = false;
        
        break;
        }
      case 'Some': {
        const v286 = v279[1];
        const v287 = stdlib.gt(v286, v250);
        v284 = v287;
        
        break;
        }
      }
    const v288 = stdlib.fromSome(v279, stdlib.checkedBigNumberify('./index.rsh:51:41:decimal', stdlib.UInt_max, '0'));
    
    const txn3 = await (ctc.sendrecv({
      args: [v220, v221, v247, v250, v251, v252, v253, v254, v288],
      evt_cnt: 1,
      funcNum: 3,
      lct: v254,
      onlyIf: v284,
      out_tys: [ctc1],
      pay: [v288, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v291], secs: v293, time: v292, didSend: v119, from: v290 } = txn3;
        
        sim_r.txns.push({
          amt: v291,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v252,
          tok: undefined /* Nothing */
          });
        const cv250 = v291;
        const cv251 = v251;
        const cv252 = v290;
        const cv253 = v291;
        const cv254 = v292;
        const cv255 = v254;
        
        await (async () => {
          const v250 = cv250;
          const v251 = cv251;
          const v252 = cv252;
          const v253 = cv253;
          const v254 = cv254;
          const v255 = cv255;
          
          if (await (async () => {
            const v269 = stdlib.le(v255, v247);
            const v270 = v251 ? v269 : false;
            
            return v270;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v220,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v252,
              tok: v221
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v221
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v247],
      tys: [ctc4, ctc0, ctc1, ctc1, ctc5, ctc4, ctc1, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v307, time: v306, didSend: v150, from: v305 } = txn4;
      ;
      const v308 = stdlib.addressEq(v220, v305);
      stdlib.assert(v308, {
        at: './index.rsh:69:21:dot',
        fs: ['at ./index.rsh:67:40:application call to [unknown function] (defined at: ./index.rsh:67:40:function exp)'],
        msg: 'sender correct',
        who: 'Bidder'
        });
      const cv250 = v250;
      const cv251 = v251;
      const cv252 = v252;
      const cv253 = v253;
      const cv254 = v306;
      const cv255 = v254;
      
      v250 = cv250;
      v251 = cv251;
      v252 = cv252;
      v253 = cv253;
      v254 = cv254;
      v255 = cv255;
      
      continue;
      }
    else {
      const {data: [v291], secs: v293, time: v292, didSend: v119, from: v290 } = txn3;
      ;
      const v297 = stdlib.gt(v291, v250);
      stdlib.assert(v297, {
        at: './index.rsh:56:24:application',
        fs: ['at ./index.rsh:55:13:application call to [unknown function] (defined at: ./index.rsh:55:20:function exp)'],
        msg: null,
        who: 'Bidder'
        });
      ;
      const cv250 = v291;
      const cv251 = v251;
      const cv252 = v290;
      const cv253 = v291;
      const cv254 = v292;
      const cv255 = v254;
      
      v250 = cv250;
      v251 = cv251;
      v252 = cv252;
      v253 = cv253;
      v254 = cv254;
      v255 = cv255;
      
      continue;}
    
    }
  ;
  ;
  stdlib.protect(ctc2, await interact.showOutcome(v252), {
    at: './index.rsh:76:55:application',
    fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:32:function exp)'],
    msg: 'showOutcome',
    who: 'Bidder'
    });
  
  return;
  
  
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1, ctc1]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  
  
  const v213 = stdlib.protect(ctc2, await interact.getSale(), {
    at: './index.rsh:28:79:application',
    fs: ['at ./index.rsh:27:17:application call to [unknown function] (defined at: ./index.rsh:27:21:function exp)'],
    msg: 'getSale',
    who: 'Creator'
    });
  const v214 = v213[stdlib.checkedBigNumberify('./index.rsh:28:79:application', stdlib.UInt_max, '0')];
  const v215 = v213[stdlib.checkedBigNumberify('./index.rsh:28:79:application', stdlib.UInt_max, '1')];
  const v216 = v213[stdlib.checkedBigNumberify('./index.rsh:28:79:application', stdlib.UInt_max, '2')];
  
  const txn1 = await (ctc.sendrecv({
    args: [v214, v215, v216],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:30:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v221, v222, v223], secs: v225, time: v224, didSend: v36, from: v220 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v221
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v221, v222, v223], secs: v225, time: v224, didSend: v36, from: v220 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v220, v221, v222, v223, v224],
    evt_cnt: 0,
    funcNum: 1,
    lct: v224,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:13:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:31:17:decimal', stdlib.UInt_max, '1'), v221]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v235, time: v234, didSend: v43, from: v233 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:31:17:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v221
        });
      const v247 = stdlib.add(v224, v223);
      const v250 = v222;
      const v251 = true;
      const v252 = v220;
      const v253 = stdlib.checkedBigNumberify('./index.rsh:41:36:decimal', stdlib.UInt_max, '0');
      const v254 = v234;
      const v255 = v224;
      
      if (await (async () => {
        const v269 = stdlib.le(v255, v247);
        const v270 = v251 ? v269 : false;
        
        return v270;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v220,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v252,
          tok: v221
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v221
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v235, time: v234, didSend: v43, from: v233 } = txn2;
  ;
  ;
  const v245 = stdlib.addressEq(v220, v233);
  stdlib.assert(v245, {
    at: './index.rsh:33:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v247 = stdlib.add(v224, v223);
  let v250 = v222;
  let v251 = true;
  let v252 = v220;
  let v253 = stdlib.checkedBigNumberify('./index.rsh:41:36:decimal', stdlib.UInt_max, '0');
  let v254 = v234;
  let v255 = v224;
  
  while (await (async () => {
    const v269 = stdlib.le(v255, v247);
    const v270 = v251 ? v269 : false;
    
    return v270;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc1],
      timeoutAt: ['time', v247],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      stdlib.protect(ctc3, await interact.timeout(), {
        at: './index.rsh:68:37:application',
        fs: ['at ./index.rsh:68:37:application call to [unknown function] (defined at: ./index.rsh:68:37:function exp)', 'at ./index.rsh:68:37:application call to "liftedInteract" (defined at: ./index.rsh:68:37:application)', 'at ./index.rsh:67:40:application call to [unknown function] (defined at: ./index.rsh:67:40:function exp)'],
        msg: 'timeout',
        who: 'Creator'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v220, v221, v247, v250, v251, v252, v253, v254],
        evt_cnt: 0,
        funcNum: 4,
        lct: v254,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:69:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v307, time: v306, didSend: v150, from: v305 } = txn4;
          
          ;
          const cv250 = v250;
          const cv251 = v251;
          const cv252 = v252;
          const cv253 = v253;
          const cv254 = v306;
          const cv255 = v254;
          
          await (async () => {
            const v250 = cv250;
            const v251 = cv251;
            const v252 = cv252;
            const v253 = cv253;
            const v254 = cv254;
            const v255 = cv255;
            
            if (await (async () => {
              const v269 = stdlib.le(v255, v247);
              const v270 = v251 ? v269 : false;
              
              return v270;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v220,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v252,
                tok: v221
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v221
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc1, ctc1, ctc5, ctc4, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v307, time: v306, didSend: v150, from: v305 } = txn4;
      ;
      const v308 = stdlib.addressEq(v220, v305);
      stdlib.assert(v308, {
        at: './index.rsh:69:21:dot',
        fs: ['at ./index.rsh:67:40:application call to [unknown function] (defined at: ./index.rsh:67:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv250 = v250;
      const cv251 = v251;
      const cv252 = v252;
      const cv253 = v253;
      const cv254 = v306;
      const cv255 = v254;
      
      v250 = cv250;
      v251 = cv251;
      v252 = cv252;
      v253 = cv253;
      v254 = cv254;
      v255 = cv255;
      
      continue;
      }
    else {
      const {data: [v291], secs: v293, time: v292, didSend: v119, from: v290 } = txn3;
      ;
      const v297 = stdlib.gt(v291, v250);
      stdlib.assert(v297, {
        at: './index.rsh:56:24:application',
        fs: ['at ./index.rsh:55:13:application call to [unknown function] (defined at: ./index.rsh:55:20:function exp)'],
        msg: null,
        who: 'Creator'
        });
      ;
      stdlib.protect(ctc3, await interact.seeBid(v290, v291), {
        at: './index.rsh:58:40:application',
        fs: ['at ./index.rsh:58:40:application call to [unknown function] (defined at: ./index.rsh:58:40:function exp)', 'at ./index.rsh:58:40:application call to "liftedInteract" (defined at: ./index.rsh:58:40:application)', 'at ./index.rsh:55:13:application call to [unknown function] (defined at: ./index.rsh:55:20:function exp)'],
        msg: 'seeBid',
        who: 'Creator'
        });
      
      const cv250 = v291;
      const cv251 = v251;
      const cv252 = v290;
      const cv253 = v291;
      const cv254 = v292;
      const cv255 = v254;
      
      v250 = cv250;
      v251 = cv251;
      v252 = cv252;
      v253 = cv253;
      v254 = cv254;
      v255 = cv255;
      
      continue;}
    
    }
  ;
  ;
  stdlib.protect(ctc3, await interact.showOutcome(v252), {
    at: './index.rsh:76:55:application',
    fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:32:function exp)'],
    msg: 'showOutcome',
    who: 'Creator'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAKAAEEKCAwCFlhoI0GJgIBAAAiNQAxGEECuilkSSJbNQEhBls1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQMMQADaSSQMQABdJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/oAEkSc087AyBjT+D0Q0/zEAEkQ0/zQDIQRbNP40AyEFWzQDVzgBFzQDVzkgNAMhB1syBjQDIQhbQgFMSCQ0ARJENARJIhJMNAISEUQoZEk1AyVbNf9JNQUXNf6ABNQMbNY0/hZQsDIGNP8MRDT+iAIQNP40AyEFWw1EsSKyATQDIQdbsggjshA0A1c5ILIHszQDVwAgNAMhBFs0/zT+NANXOAEXMQA0/jIGNAMhCFtCANVJIwxAAFcjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQRbNf6BOFs1/YAEmouRdLAjNP6IAas0/zEAEkQ0/zT+NP00AyEFWwg0AyVbIzT/IjIGNP1CAHhIIQmIAWwiNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQZbNf6BEFs1/YAE93ETTTT/FlA0/hZQNP0WULAhCYgBMbEisgEishIkshAyCrIUNP+yEbMxADT/FlA0/hZQNP0WUDIGFlAoSwFXAEBnSCM1ATIGNQJCAKg1/zX+Nf01/DX7Nfo1+TX4Nfc0+zT/NPkOEEEAMjT3NPgWUDT5FlA0+hZQNPsWUQcIUDT8UDT9FlA0/hZQKEsBVwBpZ0gkNQEyBjUCQgBZsSKyATT9sggjshA097IHs7EisgEjshIkshA0/LIUNPiyEbOxIrIBIrISJLIQMgmyFTIKshQ0+LIRs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 105,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v221",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v222",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v223",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v221",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v222",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v223",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v291",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v291",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200134a3803806200134a83398101604081905262000026916200028b565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e3415600762000184565b620000e36040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b3380825260208381018051516001600160a01b039081168386019081528251840151604080880191825293518401516060808901918252436080808b0182815260016000819055929092558751808a019a909a5294519095168887015291519187019190915251908501525160a0808501919091528151808503909101815260c0909301905281516200017b926002920190620001ae565b50505062000374565b81620001aa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001bc9062000337565b90600052602060002090601f016020900481019282620001e057600085556200022b565b82601f10620001fb57805160ff19168380011785556200022b565b828001600101855582156200022b579182015b828111156200022b5782518255916020019190600101906200020e565b50620002399291506200023d565b5090565b5b808211156200023957600081556001016200023e565b604051606081016001600160401b03811182821017156200028557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200029f57600080fd5b604080519081016001600160401b0381118282101715620002d057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002ea57600080fd5b620002f462000254565b60208501519092506001600160a01b03811681146200031257600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c908216806200034c57607f821691505b602082108114156200036e57634e487b7160e01b600052602260045260246000fd5b50919050565b610fc680620003846000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a159146100835780638323075714610096578063a7661d54146100ab578063ab53f2c6146100be578063f4cedab0146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610ccb565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b9366004610ccb565b6102d4565b3480156100ca57600080fd5b506100d361049d565b60405161007a929190610d17565b61005d6100ef366004610ccb565b61053a565b610104600160005414600b61074a565b61011e8135158061011757506001548235145b600c61074a565b60008080556002805461013090610d51565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610d51565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610da2565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101f4929190610e3a565b60405180910390a16102083415600861074a565b61022261021b3383602001516001610774565b600961074a565b805161023a906001600160a01b03163314600a61074a565b610242610b72565b815181516001600160a01b03918216905260208084015183519216910152606082015160808301516102749190610e72565b815160409081019190915282810151602080840180519290925281516001910152835181516001600160a01b0390911692019190915280516000606090910152805143608091820152830151905160a001526102cf8161078c565b505050565b6102e4600460005414601461074a565b6102fe813515806102f757506001548235145b601561074a565b60008080556002805461031090610d51565b80601f016020809104026020016040519081016040528092919081815260200182805461033c90610d51565b80156103895780601f1061035e57610100808354040283529160200191610389565b820191906000526020600020905b81548152906001019060200180831161036c57829003601f168201915b50505050508060200190518101906103a19190610e98565b90506103b58160400151431015601661074a565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516103e6929190610e3a565b60405180910390a16103fa3415601261074a565b8051610412906001600160a01b03163314601361074a565b61041a610b72565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451820152606080860151838601805191909152608080880151825190151595019490945260a08088015182519616959093019490945260c086015184519091015282514392019190915260e0840151915101526102cf8161078c565b6000606060005460028080546104b290610d51565b80601f01602080910402602001604051908101604052809291908181526020018280546104de90610d51565b801561052b5780601f106105005761010080835404028352916020019161052b565b820191906000526020600020905b81548152906001019060200180831161050e57829003601f168201915b50505050509050915091509091565b61054a600460005414600f61074a565b6105648135158061055d57506001548235145b601061074a565b60008080556002805461057690610d51565b80601f01602080910402602001604051908101604052809291908181526020018280546105a290610d51565b80156105ef5780601f106105c4576101008083540402835291602001916105ef565b820191906000526020600020905b8154815290600101906020018083116105d257829003601f168201915b50505050508060200190518101906106079190610e98565b905061061a81604001514310601161074a565b6040805133815283356020808301919091528401358183015290517f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc19181900360600190a161067034602084013514600d61074a565b606081015161068690602084013511600e61074a565b8060a001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f193505050501580156106c7573d6000803e3d6000fd5b506106d0610b72565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151835182015281830180518684013590819052608080870151835190151595019490945281513393019290925280516060019190915280514392019190915260e0830151905160a001526102cf8161078c565b816107705760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b600061078283853085610978565b90505b9392505050565b8060200151602001516107a05760006107b2565b805160400151602082015160a0015111155b15610900576040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091528151516001600160a01b039081168252825160209081015182168184015283516040908101518185015281850180515160608087019190915281518401511515608080880191909152825184015190951660a08701528151015160c0860152519092015160e084015260046000554360015590516108dc9183910160006101008201905060018060a01b0380845116835280602085015116602084015260408401516040840152606084015160608401526080840151151560808401528060a08501511660a08401525060c083015160c083015260e083015160e083015292915050565b604051602081830303815290604052600290805190602001906102cf929190610be4565b8051516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610942573d6000803e3d6000fd5b5061095f8160000151602001518260200151604001516001610a52565b6000808055600181905561097590600290610c68565b50565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916109df91610f57565b60006040518083038185875af1925050503d8060008114610a1c576040519150601f19603f3d011682016040523d82523d6000602084013e610a21565b606091505b5091509150610a3282826001610a66565b5080806020019051810190610a479190610f73565b979650505050505050565b610a5d838383610aa1565b6102cf57600080fd5b60608315610a75575081610785565b825115610a855782518084602001fd5b60405163100960cb60e01b815260048101839052602401610767565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610b0091610f57565b60006040518083038185875af1925050503d8060008114610b3d576040519150601f19603f3d011682016040523d82523d6000602084013e610b42565b606091505b5091509150610b5382826002610a66565b5080806020019051810190610b689190610f73565b9695505050505050565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610bdf6040518060c001604052806000815260200160001515815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b905290565b828054610bf090610d51565b90600052602060002090601f016020900481019282610c125760008555610c58565b82601f10610c2b57805160ff1916838001178555610c58565b82800160010185558215610c58579182015b82811115610c58578251825591602001919060010190610c3d565b50610c64929150610c9e565b5090565b508054610c7490610d51565b6000825580601f10610c84575050565b601f01602090049060005260206000209081019061097591905b5b80821115610c645760008155600101610c9f565b600060408284031215610cc557600080fd5b50919050565b600060408284031215610cdd57600080fd5b6107858383610cb3565b60005b83811015610d02578181015183820152602001610cea565b83811115610d11576000848401525b50505050565b8281526040602082015260008251806040840152610d3c816060850160208701610ce7565b601f01601f1916919091016060019392505050565b600181811c90821680610d6557607f821691505b60208210811415610cc557634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610d9d57600080fd5b919050565b600060a08284031215610db457600080fd5b60405160a0810181811067ffffffffffffffff82111715610de557634e487b7160e01b600052604160045260246000fd5b604052610df183610d86565b8152610dff60208401610d86565b60208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b801515811461097557600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610e6281610e2c565b8015156040840152509392505050565b60008219821115610e9357634e487b7160e01b600052601160045260246000fd5b500190565b6000610100808385031215610eac57600080fd5b6040519081019067ffffffffffffffff82118183101715610edd57634e487b7160e01b600052604160045260246000fd5b81604052610eea84610d86565b8152610ef860208501610d86565b6020820152604084015160408201526060840151606082015260808401519150610f2182610e2c565b816080820152610f3360a08501610d86565b60a082015260c084015160c082015260e084015160e0820152809250505092915050565b60008251610f69818460208701610ce7565b9190910192915050565b600060208284031215610f8557600080fd5b815161078581610e2c56fea264697066735822122038c4872018e0b72b4672586d10e31ba32f477435aa019a1a12a8452271956d1064736f6c634300080c0033`,
  BytecodeLen: 4938,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:32:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:74:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:41:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bidder": Bidder,
  "Creator": Creator
  };
export const _APIs = {
  };
