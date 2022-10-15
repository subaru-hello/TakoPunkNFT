const hre = require('hardhat');

async function main() {
  const TakoNFT = await hre.ethers.getContractFactory('TakoNFT');
  const takoNFT = await TakoNFT.deploy();

  await takoNFT.deployed();

  console.log('TakoNFT deployed to:', takoNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
