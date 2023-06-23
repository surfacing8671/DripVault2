import { Contract } from "@ethersproject/contracts";
import { ethers } from "hardhat";

async function main() {
  const dripVault = await (
    await ethers.getContractFactory("DiamondSafe")
  ).deploy("0x6825340b5b1BBD7c32aCcC8371729d5c6061Ecd7", "3");
  
  console.log("contract deployed at: " + dripVault.address);
  console.log("Finished");
}

const logContractDeploy = (name: string, contract: Contract) => {
  console.log(`${name} address: ${contract.address}`);
  console.log(`${name} deploy tx hash: ${contract.deployTransaction.hash}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
