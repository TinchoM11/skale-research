import { BigNumber, ethers } from "ethers";
import { Client, Presets } from "userop";
import { CLIOpts } from "../../src";
require("dotenv").config();

const RPC = process.env.RPC_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
const ENTRY_POINT = process.env.ENTRYPOINT as string;
const SIMPLE_ACCOUNT_FACTORY = process.env.SIMPLE_ACCOUNT_FACTORY as string;
const PAYMASTER = {
  rpcUrl: process.env.PAYMASTER_URL as string,
  context: { type: process.env.PAYMASTER_CONTEXT },
};

export default async function main(opts: CLIOpts) {
  const paymaster = Presets.Middleware.verifyingPaymaster(
    PAYMASTER.rpcUrl,
    PAYMASTER.context
  );

  const simpleAccount = await Presets.Builder.SimpleAccount.init(
    new ethers.Wallet(PRIVATE_KEY),
    RPC,
    ENTRY_POINT,
    SIMPLE_ACCOUNT_FACTORY,
    undefined
  );
  simpleAccount.useDefaults({ callGasLimit: 6000000 });
  const client = await Client.init(RPC, ENTRY_POINT);

  const provider = new ethers.providers.JsonRpcProvider(RPC);

  const MESON_CONTRACT = "0x25aB3Efd52e6470681CE037cD546Dc60726948D3";
  const ABI = [
    "function postSwapFromContract(uint256 encodedSwap, uint200 postingValue, address contractAddress) payable external",
  ];

  const mesonContract = new ethers.Contract(MESON_CONTRACT, ABI, provider);
  console.log("Contract address", mesonContract.address);

  const initiator = "0x53ccf3bd305ce34e25379d9e33f0062118341300";
  const postingValue = ethers.utils.solidityPack(
    ["address", "uint40"],
    [initiator, 1]
  );

  const txData = mesonContract.interface.encodeFunctionData(
    "postSwapFromContract", // Function name
    [
      "0x0100000f4240980000000000bcf7a43000000000000065dcb2a592960103c601", // Encoded Swap
      postingValue, // Posting Value
      "0x6f39ec807f0ede1d0f97e637d8f0fa3990c13a7e", // My Contract Address
    ]
  );

  const res = await client.sendUserOperation(
    simpleAccount.execute(
      "0x25ab3efd52e6470681ce037cd546dc60726948d3", // to (meson contract)
      0, // tx.Value (0 because it's USDC bridge)
      txData // tx.Data
    ),
    {
      dryRun: opts.dryRun,
      onBuild: (op) => console.log("Signed UserOperation:", op),
    }
  );
  console.log(`UserOpHash: ${res.userOpHash}`);

  console.log("Waiting for transaction...");
  const ev = await res.wait();
  console.log(`Transaction hash: ${ev?.transactionHash ?? null}`);
}

function convertAddressToUint200(initiator: string): bigint {
  // Convert the Ethereum address to a BigInt
  let addressBigInt = BigInt(initiator);

  // Shift the bits 40 places to the left and add 1
  let shifted = (addressBigInt << BigInt(40)) + BigInt(1);
  console.log("Shifted", shifted);
  return shifted;
}
