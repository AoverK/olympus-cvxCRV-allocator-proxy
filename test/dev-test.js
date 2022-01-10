const { expect } = require("chai");
const { ethers } = require("hardhat");
require('@openzeppelin/hardhat-upgrades');
const cvxCRVProxyArtifact = require('../artifacts/contracts/AdminUpgradeabilityProxy.sol/AdminUpgradeabilityProxy.json');


describe("cvxCRV Allocator Proxy", function() {

    const abi = cvxCRVProxyArtifact.abi;
    const bytecode = cvxCRVProxyArtifact.bytecode

    it("Deploy smart contract to Rinkeby network", async function() {
        // Get the ContractFactory and Signers here.
        const abi = cvxCRVProxyArtifact.abi
        const bytecode = cvxCRVProxyArtifact.bytecode
        const [owner] = await ethers.getSigners();
        const implementationContractAddress = "0x2762ce8721Be304B79139C4e222592B661985C23";
        const adminContractAddress = "0xBB0c4c8eeB9abB4C82122D26675B0DdCF99c6302";
        const bytesMemory = [];

        const cvxCRVProxyImplementationContract = await ethers.getContractFactory(abi, bytecode, owner);
        // Deploy the contract
        const cvxCRVProxyImplementationToken = await cvxCRVProxyImplementationContract.deploy(implementationContractAddress, adminContractAddress, bytesMemory);

        await cvxCRVProxyImplementationToken.deployed();

        console.log("Contract Address: ", cvxCRVProxyImplementationToken.address);
        console.log("Contract Tx Hash: ", cvxCRVProxyImplementationToken.deployTransaction.hash);


    });
});