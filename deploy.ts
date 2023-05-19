import { ethers } from "ethers";
import fs from "fs-extra";
const main = async () => {
  const { Wallet, JsonRpcProvider } = ethers;
  const provider = new JsonRpcProvider(process.env.GANACHE_URL);
  const wallet = new Wallet(process.env.ACCOUNT_PRIVATE_KEY!, provider);
};
