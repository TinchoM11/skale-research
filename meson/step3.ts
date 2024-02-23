const { Wallet, utils } = require("ethers");
import dotenv from "dotenv";
dotenv.config();

// The private key for fromAddress
const PK = process.env.PK as string;

// only for EOA wallets needed
// REturns the signature needed for the last step of the bridge
function signDataV5(hash: string) {
  const wallet = new Wallet(PK);
  const sig = wallet._signingKey().signDigest(hash);
  return utils.joinSignature(sig);
}

signDataV5(
  "0x890fe0ae1cdaeaf12576749fcc79c8861297c3ef991d9c6f7afc3dfd99bf008a"
);
