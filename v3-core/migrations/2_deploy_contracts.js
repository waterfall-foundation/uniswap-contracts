const UniswapV3Factory = artifacts.require("UniswapV3Factory");

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(UniswapV3Factory);
    const UniswapV3FactoryContract = await UniswapV3Factory.deployed();
    console.log(`addresses: ${UniswapV3FactoryContract.address}`);
};
