const hre = require('hardhat');

async function main() {
  const TakoSeptNFT = await hre.ethers.getContractFactory('TakoSeptNFT');
  const takoSeptNFT = await TakoSeptNFT.deploy();

  await takoSeptNFT.deployed();

  console.log('TakoSeptNFT deployed to:', takoSeptNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
