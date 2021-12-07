/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */
const Web3 = require("web3");
const net = require("net");
const HDWalletProvider = require("@truffle/hdwallet-provider");

// const HDWalletProvider = require('@truffle/hdwallet-provider');
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 8545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    // },
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websocket: true        // Enable EventEmitter interface for web3 (default: false)
    // },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    // ropsten: {
    // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    // network_id: 3,       // Ropsten's id
    // gas: 5500000,        // Ropsten has a lower block limit than mainnet
    // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
    waterfall: {
      from: '0xeBD561D706A901eCd7836c83c0F1929831bbda64',
      // from: '0x11f8d00f0616d8071532f64f106666738d913a41',

      provider: () => new HDWalletProvider({
        privateKeys: ["ededfd51467443b862f8ea12893fadfa686f747333b431726a2146b45152a218"],
        providerOrUrl: `https://rpc.waterfall.network/rpc`,
      }),
      // url: "https://rpc.waterfall.network/rpc",
      // port: "9545",
      network_id: 333777333,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
      CPADContractAddr: '0x8301f2213c0eed49a7e28ae4c3e91722919b8b47',
      NFTContractAddr: '0x8301f2213c0eed49a7e28ae4c3e91722919b8b47'
    },
    hetsner: {
      // from: 'a7062A2Bd7270740f1d15ab70B3Dee189A87b6DE',

      // provider: () => new HDWalletProvider({
      //   privateKeys: [waterfallPrivateKey],
      //   providerOrUrl: `http://95.216.227.29:9545`,
      // }),
      from: '6bdb9ec41be16ec29993d0d03c74bc1c1b121635',
      host: '95.216.227.29',
      port: '9545',
      // provider,
      network_id: 333777333,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    local: {
      from: '6bdb9ec41be16ec29993d0d03c74bc1c1b121635',
      // provider: () => {
      //   return new Web3.providers.HttpProvider("http://127.0.0.1:8545")
      // },
      // host: "127.0.0.1",
      // port: "8546",
      // url: 'ws://127.0.0.1:8546',
      url: 'http://127.0.0.1:8545',
      network_id: 333777333,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
      CPADContractAddr: '0x8301f2213c0eed49a7e28ae4c3e91722919b8b47',
      NFTContractAddr: '0x8301f2213c0eed49a7e28ae4c3e91722919b8b47'
    },


    testnet: {
      from: '0xeBD561D706A901eCd7836c83c0F1929831bbda64',
      provider: () => new HDWalletProvider({
        privateKeys: ["ededfd51467443b862f8ea12893fadfa686f747333b431726a2146b45152a218"],
        providerOrUrl: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      }),
      // url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      network_id: 97,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
    },

    mainnet: {
      from: '2efe89D3A14642b5a5CAdaafcf489c0f9d2D663c',
      provider: () => new HDWalletProvider({
        privateKeys: [mainnetPrivateKey],
        providerOrUrl: `https://bsc-dataseed1.binance.org`
      }),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      gasPrice: 20000000000,
      gas:  3000000,
      skipDryRun: true,
      CPADContractAddr: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      NFTContractAddr: '0x8301f2213c0eed49a7e28ae4c3e91722919b8b47'
    },

  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.16",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  // enabled: false,
  // host: "127.0.0.1",
  // adapter: {
  //   name: "sqlite",
  //   settings: {
  //     directory: ".db"
  //   }
  // }
  // }
};
