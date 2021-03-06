require('dotenv').config();
const mnemonic = process.env.MNEMONIC || 'frog hidden corn close nominee expire frame expose sort tonight village divorce';
const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");
// Create your own key for Production environments (https://infura.io/)
const INFURA_ID = process.env.INFURA_ID || 'e34c32bc829b495b8c286a346992214e';

const configNetwork = (network, networkId, path = "m/44'/60'/0'/0/", gas = 6000000, gasPrice = 10000000000) => ({
  provider: () => new HDWalletProvider(
    mnemonic, `https://${network}.infura.io/v3/${INFURA_ID}`, 
        0, 1, true, path
    ),
  network_id: networkId,
  gas,
  gasPrice,
});

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "build"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    ropsten: configNetwork('ropsten', 3),
    kovan: configNetwork('kovan', 42),
    rinkeby: configNetwork('rinkeby', 4),
    main: configNetwork('mainnet', 1),
  },
};
