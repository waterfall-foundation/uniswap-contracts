const Token1 = artifacts.require("Token1");
const Token2 = artifacts.require("Token2");
const Factory = artifacts.require("UniswapV2Factory")

module.exports = async function (deployer, network, addresses) {

  await deployer.deploy(Token1)
  await deployer.deploy(Token2)
  const tk1 = await Token1.deployed()
  const tk2 = await Token2.deployed()
};
