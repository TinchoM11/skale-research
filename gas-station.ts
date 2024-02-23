import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

const RPC = "https://mainnet.skalenodes.com/v1/elated-tan-skat";
const PK = process.env.PK as string;

// It's just a simple transfer from a wallet/bucket to a users wallet
// A simple transfer fee is 0.0000000021 sFuel
// Contract calls around 0.0000000142434 TX Fee
// So 0.001 sFuel is enough for aprox 500K transfers // 70K contract calls
const transferNative = async () => {
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  // Send 0.0001 Native
  const tx = {
    to: "0x23eD50dB3e7469695DD30FFD22a7B42716A338FC",
    value: ethers.utils.parseEther("0.001"),
  };
  const wallet = new ethers.Wallet(PK, provider);
  const sendResult = await wallet.sendTransaction(tx);
  console.log("Transaction Hash: ", sendResult.hash);
};

transferNative();

