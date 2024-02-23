import fetch from "node-fetch";

async function sendBridgeTx(encoded: string, hash: string) {
  const res = await fetch(
    `https://relayer.meson.fi/api/v1/swap/from-contract/${encoded}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hash: `${hash}`,
      }),
    }
  );
  const result = await res.json();
  console.log("sendBridgeTx: ", JSON.stringify(result, null, 2));
}

sendBridgeTx(
  "0x01000016e36098000000000044c1566100000000000065d59a6792960103c601",
  "0x50460aceb8529ff740fc65305bede6add2e895747d5e081784541ef5f4209036"
);
