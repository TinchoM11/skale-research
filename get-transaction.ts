import { ethers } from "ethers";

// const RPC = "https://mainnet.skalenodes.com/v1/elated-tan-skat"; // JUPITER
//const RPC = "https://mainnet.skalenodes.com/v1/green-giddy-denebola"; // NEBULA
const RPC = "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague" // CALYPSO

const getTransactionReceipt = async () => {
  const txHash =
    "0xc53d660888b97f425075c5e5f6480ff27471cb959598ab0d2cb40ab839146168";
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  const txReceipt = await provider.getTransactionReceipt(txHash);
  console.log("Transaction Receipt: ", txReceipt);
};

getTransactionReceipt();
