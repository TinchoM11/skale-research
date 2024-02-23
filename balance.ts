import { ethers } from "ethers";
import axios from "axios";

// const RPC = "https://mainnet.skalenodes.com/v1/elated-tan-skat"; // JUPITER
//const RPC = "https://mainnet.skalenodes.com/v1/green-giddy-denebola"; // NEBULA
const RPC = "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague" // CALYPSO

const getNativeBalance = async () => {
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  const balance = await provider.getBalance(
    "0x8fA1BBFBE44D346F8D70C265909CCa3Db86fb98D"
  );
  console.log(
    `NativeBalance for 0x8fA1BBFBE44D346F8D70C265909CCa3Db86fb98D is: ${ethers.utils.formatEther(
      balance
    )} sFuel`
  );
  const balance2 = await provider.getBalance(
    "0x23eD50dB3e7469695DD30FFD22a7B42716A338FC"
  );
  console.log(
    `NativeBalance for 0x23eD50dB3e7469695DD30FFD22a7B42716A338FC is: ${ethers.utils.formatEther(
      balance2
    )} sFuel`
  );
};

// This function return ERC-20 and ERC-721 token balances
// We can filter the response to get the token balances wanted
const getTokenBalances = async () => {
  const baseUrl = "https://elated-tan-skat.explorer.mainnet.skalenodes.com/api";
  // ?module=account&action=tokenlist&address={addressHash}
  const address = "0x8a8514e4b0D96Ef66Df57421d9cc64eecA349287";
  const url = `${baseUrl}?module=account&action=tokenlist&address=${address}`;
  const response = await axios.get(url);
  console.log(response.data);
};

getNativeBalance();
//getTokenBalances();
