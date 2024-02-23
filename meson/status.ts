import fetch from "node-fetch";

const checkStatus = async (swapId: string) => {
  const res = await fetch(`https://relayer.meson.fi/api/v1/swap/${swapId}`);
  const result = await res.json();
  console.log("checkStatus: ", JSON.stringify(result, null, 2));
};

//checkStatus("0x50460aceb8529ff740fc65305bede6add2e895747d5e081784541ef5f4209036");
checkStatus(
  "0xd60d55a60b6ccfdbccfe4c6e518592a84fc9c761602125aec5af41fe42f44bf8"
);

// RETURNS HASHES ON INITIAL AND DESTINTION CHAIN
/// FAILED ONE: POL to BNB
// checkStatus:  {
//     "result": {
//       "EXECUTED": "0x35d45f9fe8928da4de956e6ad8951e8927e240d39538e789bf654e1fb839cd8a",
//       "CANCELLED": "0xee7303da791abe91a62c7776218514031d2442f35a7fc54903cb518ad97db40b"
//     }
//   }

/// SUCCESS ONE: POl to BNB
// checkStatus:  {
//     "result": {
//       "EXECUTED": "0x9473027f9b558d08ce5358064d0dc4448168389448c435ef5fbd996e01b49caa",
//       "RELEASED": "0xa73244d2db32b778ac7baf99664d6286defbd98a7e0b8385818b78734496bf6a"
//     }
//   }

// SUCCES ONE: POL to SKALE
// checkStatus:  {
//     "result": {
//       "EXECUTED": "0x53b0ce80dd5cbb7bc61cc13af9ef49833b6578c7a3b23a7da2714f3b57818516",
//       "RELEASED": "0x840afe0fb55d1a4da9d9504cbf49e7155284fb0f2540ec9ba7714ff0fc6e8ecb"
//     }
//   }