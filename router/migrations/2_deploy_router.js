// const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol")

const factoryAdr = '0x5F8d320D7a13e9E543e6649787054b131B7dCD78'
const wethAdr = '0xC3687A7a67aFf40D39044Ee936bca63E25901B52'

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(WETH)
  const weth = await WETH.deployed();

  // await deployer.deploy(Router, factoryAdr, wethAdr)

};
