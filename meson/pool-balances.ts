// GET https://relayer.meson.fi/api/v1/liquidity/:chainId
import fetch from "node-fetch";

const getPoolBalances = async (chain: string) => {
  const res = await fetch(`https://relayer.meson.fi/api/v1/liquidity/2046399126`);
  const result = await res.json();
  console.log("getPoolBalances: ", JSON.stringify(result, null, 2));
};

getPoolBalances("2046399126");
