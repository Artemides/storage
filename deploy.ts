import { ethers } from "ethers";
import fs from "fs-extra";
import "dotenv/config";
const main = async () => {
  const { Wallet, JsonRpcProvider, ContractFactory } = ethers;
  const provider = new JsonRpcProvider(process.env.GANACHE_URL);
  const wallet = new Wallet(process.env.ACCOUNT_PRIVATE_KEY!, provider);

  const contractAbi = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.abi",
    "utf8"
  );
  const contractBinary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  const contractFactory = new ContractFactory(
    contractAbi,
    contractBinary,
    wallet
  );

  const contract = await contractFactory.deploy();
  console.log({ contract });
};

main();
