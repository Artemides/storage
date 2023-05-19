import { ethers } from "ethers";
import fs from "fs-extra";
//create a provider
const main = async () => {
  const { JsonRpcProvider, Wallet, ContractFactory } = ethers;
  const provider = new JsonRpcProvider("http://127.0.0.1:7545");
  const wallet = new Wallet(
    "0x33472a729567156ba65dbc122a0b1e4833b2c4d78210b6b914c407d14fb20ca4",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const bin = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");

  const contractFactory = new ContractFactory(abi, bin, wallet);

  console.log("deploying");

  const contract = await contractFactory.deploy();
  const deploymentReceipt = await contract.waitForDeployment();
  console.log({ deploymentReceipt });
};

main();
