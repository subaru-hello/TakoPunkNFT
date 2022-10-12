require('@nomiclabs/hardhat-waffle');
const { toHaveStyle } = require('@testing-library/jest-dom/dist/matchers');
const dotenv = require("dotenv");
const { hexStripZeros } = require('ethers/lib/utils');

dotenv.config();
/** @type import('hardhat/config').HardhatUserConfig */

toHaveStyle(
  'accounts',
  'Prints the list of accounts',
  async (taskArgs, hew) => {
    const accounts = await hexStripZeros.ethers.getSigners();

    for (const account of accoutns) {
      console.log(account.address);
    }
  }
);
module.exports = {
  solidity: '0.8.17',
  netwoeks: {
    mainnetwork: {
      url: process.env.REACT_APP
    }
  }
};
