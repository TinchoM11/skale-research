import { ethers } from "ethers";
// Import dotenv and config it
import dotenv from "dotenv";
dotenv.config();

const RPC = "https://mainnet.skalenodes.com/v1/elated-tan-skat";
const PK = process.env.PK as string;

const transferToken = async () => {
  const tokenAddress = "0x5F795bb52dAC3085f578f4877D450e2929D2F13d";
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  const wallet = new ethers.Wallet(PK, provider);
  const erc20Contract = new ethers.Contract(
    tokenAddress,
    ["function transfer(address to, uint256 value) returns (bool)"],
    wallet
  );
  const tx = await erc20Contract.transfer(
    "0x23eD50dB3e7469695DD30FFD22a7B42716A338FC",
    ethers.utils.parseUnits("1", 6)
  );
  console.log("Transaction Hash: ", tx.hash);
};

transferToken();
