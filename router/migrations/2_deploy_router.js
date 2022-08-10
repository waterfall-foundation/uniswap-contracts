const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol")

const factoryAdr = '0x5F8d320D7a13e9E543e6649787054b131B7dCD78' //deploy core
const wethAdr = '0x23aB776efA34c5B7A0de7d0dEC55C779b65E52De'

module.exports = async function (deployer) {
  let wethAddress = wethAdr;

  if(!wethAddress) {
    await deployer.deploy(WETH)
    const weth = await WETH.deployed();
    wethAddress = weth?.address;
  }

  console.log('WETH DEPLOYED AT:', wethAddress);
  await deployer.deploy(Router, factoryAdr, wethAddress); //deployed 0xbe11a6b0aD94502AF55B760466898dF8F9bBCF77
};
