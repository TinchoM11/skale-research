import { ethers } from "ethers";

const RPC = "https://mainnet.skalenodes.com/v1/elated-tan-skat";

const getLastBlock = async () => {
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  const block = await provider.getBlock("latest");
  console.log("Block Number: ", block.number);
};

getLastBlock();
