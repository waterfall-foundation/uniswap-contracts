const Factory = artifacts.require("UniswapV2Factory.sol");

module.exports = function (deployer, network, addresses) {
  deployer.deploy(Factory, addresses[0])
  // const factory = await Factory.deployed()

};
