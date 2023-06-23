const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
//const { expect } = require("chai");
//const { ethers } = require("hardhat");
const hre = require("hardhat");
const {
  expect
} = require('chai');
const { ethers } = require("hardhat");


describe("DripVault contract", function () {




  
  it("Should deploy the vault and check the staking token", async function () {

    const Token = await hre.ethers.getContractFactory("DripVault");
    const [owner, addr1, addr2] = await ethers.getSigners();
   const dude = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80')
  
    const dripVault = await Token.deploy("0xADA7F98fb2594E76914EB593e74B348A498Ea5Bd", '10');
  
    await dripVault.deployed();
    

    //const stakedToken = await dripVault.setImmunityToken("0xFaC63811711d6abB2dBa1D4627fCD3A02cC0299A");
    console.log(dripVault.jpeg());
    expect(await dripVault.checkImmunity(owner.address)).to.equal(false);
  });


});