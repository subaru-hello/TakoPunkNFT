require('@nomiclabs/hardhat-waffle');
// const { toHaveStyle } = require('@testing-library/jest-dom/dist/matchers');
const dotenv = require('dotenv');
// const { hexStripZeros } = require('ethers/lib/utils');
const { task } = require('hardhat/config');

dotenv.config();
/** @type import('hardhat/config').HardhatUserConfig */

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  // eslint-disable-next-line no-restricted-syntax
  for (const account of accounts) {
    // eslint-disable-next-line no-console
    console.log(account.address);
  }
});

// toHaveStyle(
//   'accounts',
//   'Prints the list of accounts',
//   async (taskArgs, hew) => {
//     const accounts = await hexStripZeros.ethers.getSigners();

//     for (const account of accoutns) {
//       console.log(account.address);
//     }
//   }
// );
module.exports = {
  solidity: '0.8.17',
  netwoeks: {
    goerli: {
      url: process.env.REACT_APP_GOERLI_RPC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
  },
  etherscan: {
    apikey: process.env.REACT_APP_ETHERSCAN_KEY,
  },
};
