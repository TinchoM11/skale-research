// Imports
import fetch from "node-fetch";

// Requires a Swap and returns the encoded swap to use later
const encodeSwap = async () => {
  const res = await fetch("https://relayer.meson.fi/api/v1/swap", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "bnb:usdc",
      to: "polygon:usdc",
      amount: "1",
      fromAddress: "0x6f39Ec807f0EDE1D0f97E637d8f0Fa3990c13a7e",
      recipient: "0x23eD50dB3e7469695DD30FFD22a7B42716A338FC",
    }),
  });
  const result = await res.json();
  console.log("encodeSwap: ", JSON.stringify(result, null, 2));
};

encodeSwap();
// Returns this:
// encodeSwap:  {
//     "error": {
//       "code": 69,
//       "message": "insufficient-allowance",
//       "data": {
//         "allowance": "0",
//         "swapData": {
//           "encoded": "0x01000016e360980000000000ca26d21c00000000000065d585a092960103c601",
//           "fromAddress": "0x23ed50db3e7469695dd30ffd22a7b42716a338fc",
//           "recipient": "0x23ed50db3e7469695dd30ffd22a7b42716a338fc",
//           "fee": {
//             "serviceFee": "0.5",
//             "lpFee": "0",
//             "totalFee": "0.5"
//           },
//           "signingRequest": {
//             "message": "0x19457468657265756d205369676e6564204d6573736167653a0a353201000016e360980000000000ca26d21c00000000000065d585a092960103c60123ed50db3e7469695dd30ffd22a7b42716a338fc",
//             "hash": "0x3406883cb0364d67770107c772d500d9a6e7e61d81bf90a17da33f8eb0274969"
//           },
//           "dataToSign": [
//             {
//               "message": "0x19457468657265756d205369676e6564204d6573736167653a0a333201000016e360980000000000ca26d21c00000000000065d585a092960103c601",
//               "hash": "0x77292527181857af8c1f0c799519d01f24bd2c5af509166e23fa983661f235f5"
//             },
//             {
//               "message": "0x19457468657265756d205369676e6564204d6573736167653a0a353201000016e360980000000000ca26d21c00000000000065d585a092960103c60123ed50db3e7469695dd30ffd22a7b42716a338fc",
//               "hash": "0x3406883cb0364d67770107c772d500d9a6e7e61d81bf90a17da33f8eb0274969"
//             }
//           ]
//         }
//       }
//     }
//   }

// For smart wallets as origin chain/wallet it returns:
// encodeSwap:  {
//     "result": {
//       "encoded": "0x01000016e360980000000000019558fc00000000000065d6145b92960103c601",
//       "fromContract": "0x6f39ec807f0ede1d0f97e637d8f0fa3990c13a7e",
//       "recipient": "0x23ed50db3e7469695dd30ffd22a7b42716a338fc",
//       "fee": {
//         "serviceFee": "0.5",
//         "lpFee": "0",
//         "totalFee": "0.5"
//       },
//       "initiator": "0x45253373108ace80b5d4bddae5bee80912fecf1a"
//     }
//   }