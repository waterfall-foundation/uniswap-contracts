const web3 = require('web3')

//TickLens: 0x160E49F6b61374FAb90f4EaB40E6e4E92260d4c2

async function main() {
    const TickLens = await ethers.getContractFactory('TickLens')
    const _TickLens = await TickLens.deploy()
    console.log('TickLens address:', _TickLens.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
