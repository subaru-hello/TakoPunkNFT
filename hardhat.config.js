require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
const dotenv = require('dotenv');
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

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: process.env.REACT_APP_ALCHEPMY_URL_WITH_API_KEY,
      accounts: [process.env.REACT_APP_GOERLI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.REACT_APP_ETHERSCAN_KEY,
    },
  },
};
