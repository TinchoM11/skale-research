// Imports
import fetch from "node-fetch";

// Get Price
// Just to know the serviceFee
// Not obligatory to run, but util to know how much is the serviceFee 
// and how much will the bridge receive on destination chain
const getPrice = async () => {
  const res = await fetch("https://relayer.meson.fi/api/v1/price", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "polygon:usdc",
      to: "bnb:usdc",
      amount: "1",
      fromAddress: "0x23eD50dB3e7469695DD30FFD22a7B42716A338FC",
    }),
  });
  const result = await res.json();
  console.log("Price: ", result);
};

getPrice();
