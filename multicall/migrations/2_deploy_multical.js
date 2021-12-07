const UniswapInterfaceMulticall = artifacts.require("UniswapInterfaceMulticall");

module.exports = async function (deployer, network, addresses) {

  await deployer.deploy(UniswapInterfaceMulticall)
};
