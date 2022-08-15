const web3 = require('web3');

const Multicall = artifacts.require("Multicall");
// const SwapRouter = artifacts.require("SwapRouter");
// const NonfungibleTokenPositionDescriptor = artifacts.require("NonfungibleTokenPositionDescriptor");
// const NFTDescriptor = artifacts.require("NFTDescriptor");
// const NonfungiblePositionManager = artifacts.require("NonfungiblePositionManager");
// const V3Migrator = artifacts.require("V3Migrator");


const factoryAdr = '0xcA80d6aa2E984d9b82A2230aB6B69947f50feEf1'
const wethAdr = '0xC3687A7a67aFf40D39044Ee936bca63E25901B52'
const NFTDescriptordr = '0xdbf05dE6c8F66836A66Ab05560017FacB4BB9808'
const descAdr = '0xD5506E2B0d6a9361d788b0e24a0C943DA8AC3f4d'

const nativeCurrencyLabelBytes = web3.utils.asciiToHex('WAT');
module.exports = async function (deployer, network, accounts) {


    await deployer.deploy(Multicall);
    const MulticallContract = await Multicall.deployed();
    console.log(`addresses: ${MulticallContract.address}`);


    // await deployer.deploy(SwapRouter, factoryAdr, wethAdr);
    // const SwapRouterContract = await SwapRouter.deployed();
    // console.log(`addresses: ${SwapRouterContract.address}`);


    await deployer.deploy(NFTDescriptor);
    deployer.link(NFTDescriptor, NonfungibleTokenPositionDescriptor);
    // const NFTDescriptorContract = await NFTDescriptor.deployed();
    // NonfungibleTokenPositionDescriptor.link('NFTDescriptor', NFTDescriptorContract.address)

    await deployer.deploy(NonfungibleTokenPositionDescriptor, wethAdr, nativeCurrencyLabelBytes);
    const NonfungibleTokenPositionDescriptorContract = await NonfungibleTokenPositionDescriptor.deployed();
    console.log(`addresses: ${NonfungibleTokenPositionDescriptorContract.address}`);



    // await deployer.deploy(NonfungiblePositionManager, factoryAdr, wethAdr, NFTDescriptordr);
    // const NonfungiblePositionManagerContract = await NonfungiblePositionManager.deployed();
    // console.log(`addresses: ${NonfungiblePositionManagerContract.address}`);
    //
    //
    //
    // await deployer.deploy(V3Migrator, factoryAdr, wethAdr, NonfungiblePositionManagerContract.address);
    // const V3MigratorContract = await V3Migrator.deployed();
    // console.log(`addresses: ${V3MigratorContract.address}`);
};
