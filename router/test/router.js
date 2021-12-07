const Router = artifacts.require("UniswapV2Router02");
const {toWei, fromWei} = web3.utils;

const factoryAdr = '0x5F8d320D7a13e9E543e6649787054b131B7dCD78'
const wethAdr = '0xC3687A7a67aFf40D39044Ee936bca63E25901B52'


/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("router", function (/* accounts */) {


  it("should assert true", async function () {
    const router = await Router.new(factoryAdr, wethAdr);
    console.log(router.address)
    try {
      // let res = await router.addLiquidityETH(
      //     '0x052FB2F4fd10D39365EE3557D42180465bE04179',
      //     toWei('100'),
      //     toWei('99'),
      //     toWei('9'),
      //     '0xeBD561D706A901eCd7836c83c0F1929831bbda64',
      //     1638888939,
      //     {value: toWei('10')})
      let res = await router.addLiquidity(
          '0x052FB2F4fd10D39365EE3557D42180465bE04179',
          '0xf239D36859125E46f1dBb0823e3ba6A45eC387e7',
          toWei('100'),
          toWei('99'),
          toWei('100'),
          toWei('99'),
          '0xeBD561D706A901eCd7836c83c0F1929831bbda64',
          1638888939
      )
      console.log(res)
    } catch (e) {
      console.log(e)
    }
    return assert.isTrue(true);
  });
});
