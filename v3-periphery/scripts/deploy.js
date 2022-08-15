const web3 = require('web3')
/*
WETH deployed at: 0x219ed1326b82c468f825cbD727dbaf66810a619C
UniswapInterfaceMulticall address: 0x6e686603139d488F10F1fEAfc8514e6AEaB06Ed5
Quoter address: 0xB77FcD9Ef202878b6e522645996103f974024A0a
NFTDescriptor address: 0xa917F25DdC3B58a51ECB45630BFA5f5B29E65D9d
NonfungibleTokenPositionDescriptor address: 0xc1ef5faBC06F63A6270d657F6930976FAd056649
NonfungiblePositionManager address: 0x25799ea3029760fA62837636F576bc73Fa4Dd0f9
SwapRouter address: 0xaEe97E94eeaCc91f9135c832CD7ddd2d863b6A9b
V3Migrator address: 0x6FAd5780a5Fe15ABa6e6c06d2BaF93FA9F2aBb91
*/

async function main() {
  const factoryAdr = '0xc99d2881497521b60aE190Cd92373e4df2b03897'
  let wethAdr = '0x219ed1326b82c468f825cbD727dbaf66810a619C'

  if(!wethAdr) {
    const WETH = await ethers.getContractFactory('WETH')
    const _WETH = await WETH.deploy()
    wethAdr =  _WETH.address
  }
  console.log('WETH deployed at:', wethAdr)

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
