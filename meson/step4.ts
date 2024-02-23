import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config();

// The private key for fromAddress
const PK = process.env.PK as string;

// FOR EOA Wallets
// We use here the signature and encodedSwap from the previous steps
async function sendBridgeTx(signature: string, encodedSwap: string) {
  const res = await fetch(
    `https://relayer.meson.fi/api/v1/swap/${encodedSwap}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fromAddress: "0x23eD50dB3e7469695DD30FFD22a7B42716A338FC",
        recipient: "0x23eD50dB3e7469695DD30FFD22a7B42716A338FC",
        signature: `${signature}`,
      }),
    }
  );
  const result = await res.json();
  console.log("sendBridgeTx: ", JSON.stringify(result, null, 2));
}

// sendBridgeTx:  {
//     "result": {
//       "swapId": "0x50460aceb8529ff740fc65305bede6add2e895747d5e081784541ef5f4209036"
//     }
//   }

// sendBridgeTx:  {
//     "result": {
//       "swapId": "0x33853dfb8ec08ed7664e50f5b634fe05ee7717f7f5a764e4073e705a6d242ee2"
//     }
//   }