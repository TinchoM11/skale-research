import { ethers } from "ethers";
// Import dotenv and config it
import dotenv from "dotenv";
dotenv.config();

// const RPC = "https://mainnet.skalenodes.com/v1/elated-tan-skat"; // JUPITER
//const RPC = "https://mainnet.skalenodes.com/v1/green-giddy-denebola"; // NEBULA
const RPC = "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague" // CALYPSO

const PK = process.env.PK as string;

const transferNative = async () => {
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  const tx = {
    to: "0x23eD50dB3e7469695DD30FFD22a7B42716A338FC",
    value: ethers.utils.parseEther("0.0002"),
  };
  const wallet = new ethers.Wallet(PK, provider);
  const sendResult = await wallet.sendTransaction(tx);
  console.log("Transaction Hash: ", sendResult.hash);
};

transferNative();
