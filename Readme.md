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