require('dotenv-flow').config({
  path: 'envs/',
  node_env: process.env.NODE_ENV || 'test'
});

console.log("env:", process.env.NODE_ENV || 'test');

const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = process.env.DEPLOYER_PRIVATE_KEY;

module.exports = {

  networks: {
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-2-s3.binance.org:8545/'),
      network_id: 97
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://bsc-dataseed1.binance.org/'),
      network_id: 56
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.6.0",    // Fetch exact version from solc-bin (default: truffle's version)
      docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "istanbul"
      }
    }
  }
};
