async function main() {
  const UniswapV3Factory = await ethers.getContractFactory('UniswapV3Factory')

  // Start deployment, returning a promise that resolves to a contract object
  const uniswapV3Factory = await UniswapV3Factory.deploy()
  console.log('Contract deployed to address:', uniswapV3Factory.address);//0xb96eb0A6cE4c5C258413E09d5E575966245cAf9F
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
