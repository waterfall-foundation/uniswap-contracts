### Deploy core
```
 cd core/
 yarn install
 yarn deploy:waterfall
```

### Deploy multicall
```
 cd multicall/
 yarn install
 yarn deploy:waterfall
```

### Deploy router

```
 cd router/
 yarn install
```
**set `factoryAdr`, `wethAdr` in /migrations/2_deploy_router.js**

```
 yarn deploy:waterfall
```

***
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

### deploy:
    TickLens

run
```
 npx hardhat run scripts/deploy2.js --network waterfall
```