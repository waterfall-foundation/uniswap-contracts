# v3 deploy
## v3-core

deploy **UniswapV3Factory**

```
 cd v3-core
 yarn install
 npx hardhat run scripts/deploy.js --network waterfall
```

***
## v3-periphery

```
 cd v3-periphery
 yarn install
```

set ***factoryAdr*** and ***wethAdr*** in scripts/deploy.js

### deploy: 
    Multicall2
    Quoter
    NFTDescriptor
    NonfungibleTokenPositionDescriptor
    NonfungiblePositionManager
    SwapRouter
    V3Migrator

run
```
 npx hardhat run scripts/deploy.js --network waterfall
```

# UI

```
  yarn install
  yarn start
```
### set contract addresses
go to src/constants/addressess.ts and change:
- MULTICALL_ADDRESS
- V3_CORE_FACTORY_ADDRESSES
- QUOTER_ADDRESSES
- NONFUNGIBLE_POSITION_MANAGER_ADDRESSES
- SWAP_ROUTER_ADDRESSES
- V3_MIGRATOR_ADDRESSES

go to src/constants/tokens.ts and change:
- WETH9_EXTENDED
