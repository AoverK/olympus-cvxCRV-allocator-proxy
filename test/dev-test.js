const { expect } = require("chai");
const { ethers } = require("hardhat");
require('@openzeppelin/hardhat-upgrades');
const cvxCRVProxyArtifact = require('../artifacts/contracts/AdminUpgradeabilityProxy.sol/AdminUpgradeabilityProxy.json');


describe("cvxCRV Allocator Proxy", function() {
    let _logic_address = "0x0000000000000000000000000000000000000000"
    let _admin_address = "0x0000000000000000000000000000000000000000"
    let _memory_data = [42]
        //let _memory_data = "0xcdcd77c000000000000000000000000000000000000000000000000000000000000000450000000000000000000000000000000000000000000000000000000000000001"



    //const abi = ['constructor("3", "1", "55000000000000000", "1500", "0xBB0c4c8eeB9abB4C82122D26675B0DdCF99c6302", "0xBB0c4c8eeB9abB4C82122D26675B0DdCF99c6302", "0x000000000000000000000000000000000000zero", "Minters Pass", "MP", "https://minters.mypinata.cloud/ipfs/QmeokM9gh2P7K9sxeqzXybuJ9RQjL4uw9aMstSqy1frdD7")'];
    const abi = cvxCRVProxyArtifact.abi;
    //const abi = "0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000c3663566a5800000000000000000000000000000000000000000000000000000000000000005dc000000000000000000000000bb0c4c8eeb9abb4c82122d26675b0ddcf99c6302000000000000000000000000bb0c4c8eeb9abb4c82122d26675b0ddcf99c6302000000000000000000000000000000000000000000000000000000000000dead0000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000000000000000000000000000000000000000000c4d696e746572732050617373000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024d50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005268747470733a2f2f6d696e746572732e6d7970696e6174612e636c6f75642f697066732f516d656f6b4d3967683250374b39737865717a587962754a3952516a4c34757739614d73745371793166726444370000000000000000000000000000";
    const bytecode = cvxCRVProxyArtifact.bytecode

    //it("Should return test results for the public functions, private functions and emitted events", async function() {
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

        //expect(tokenSupply).to.equal(ownerBalance);
        console.log("Contract Address: ", cvxCRVProxyImplementationToken.address);
        console.log("Contract Tx Hash: ", cvxCRVProxyImplementationToken.deployTransaction.hash);


    });
});