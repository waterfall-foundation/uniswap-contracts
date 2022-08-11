const web3 = require('web3')
//Multicall2: 0xffC405e4D75471dcDBd3E53c9221eb1d4dE8374b
//Quoter:0x968aF495C501771FE44af46B9f8817773b84C464
//NFTDescriptor:0xEB1cBDD8DA98dcdB19D181b09AE5be3C9733Eaf6
//NonfungibleTokenPositionDescriptor:0x87F03d421990D85AEE3A6F1AEA3EfaD457e74Db6
//NonfungiblePositionManager:0xc2b8611391D184aa0390381aDF43C581064eFCED
//SwapRouter:0x0C2d8C364b508BC6e642f5D15BdD5335da8b6Dee
//V3Migrator:0xE25C7AF5dc0329ECD70053FE71807B731E40eE84

async function main() {
  const factoryAdr = '0xF124BbD27fe529262fb9997e090e658b180c55C1'
  let wethAdr = '0x23aB776efA34c5B7A0de7d0dEC55C779b65E52De'

  if(!wethAdr) {
    const WETH = await ethers.getContractFactory('WETH')
    const _WETH = await WETH.deploy()
    console.log('WETH address:', _WETH.address)
    wethAdr =  _WETH.address
  }
  // const wethAdr =  '0x4FB2Ae8d6BA9588305E09e7713f8f759636fc2c7'

  const UniswapInterfaceMulticall = await ethers.getContractFactory('UniswapInterfaceMulticall')
  const _UniswapInterfaceMulticall = await UniswapInterfaceMulticall.deploy()
  console.log('UniswapInterfaceMulticall address:', _UniswapInterfaceMulticall.address)

  const Quoter = await ethers.getContractFactory('Quoter')
  const _Quoter = await Quoter.deploy(factoryAdr, wethAdr)
  console.log('Quoter address:', _Quoter.address)


  const nativeCurrencyLabelBytes = web3.utils.asciiToHex("WAT\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0");
  const NFTDescriptor = await ethers.getContractFactory('NFTDescriptor')
  const _NFTDescriptor = await NFTDescriptor.deploy()
  console.log('NFTDescriptor address:', _NFTDescriptor.address)

  const NonfungibleTokenPositionDescriptor = await ethers.getContractFactory('NonfungibleTokenPositionDescriptor', {
    libraries: {
      NFTDescriptor:  _NFTDescriptor.address
    }
  })
  const _NonfungibleTokenPositionDescriptor = await NonfungibleTokenPositionDescriptor.deploy(wethAdr, nativeCurrencyLabelBytes)
  console.log('NonfungibleTokenPositionDescriptor address:', _NonfungibleTokenPositionDescriptor.address)
  const NonfungibleTokenPositionDescriptorAddr = _NonfungibleTokenPositionDescriptor.address


  const NonfungiblePositionManager = await ethers.getContractFactory('NonfungiblePositionManager')
  const _NonfungiblePositionManager = await NonfungiblePositionManager.deploy(factoryAdr, wethAdr, NonfungibleTokenPositionDescriptorAddr)
  console.log('NonfungiblePositionManager address:', _NonfungiblePositionManager.address)
  const NonfungiblePositionManagerAddr = _NonfungiblePositionManager.address

  const SwapRouter = await ethers.getContractFactory('SwapRouter')
  const _SwapRouter = await SwapRouter.deploy(factoryAdr, wethAdr)
  console.log('SwapRouter address:', _SwapRouter.address)


  const V3Migrator = await ethers.getContractFactory('V3Migrator')
  const _V3Migrator = await V3Migrator.deploy(factoryAdr, wethAdr, NonfungiblePositionManagerAddr)
  console.log('V3Migrator address:', _V3Migrator.address)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
