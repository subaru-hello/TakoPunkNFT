/* eslint-disable no-console */
import React, { useState } from 'react';
// alternative to web3.js
import { ethers, BigNumber } from 'ethers';
import takoSeptNFT from './TakoSpetNFT.json';

const takoSeptNFTAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

function MainMint() {
  const [accounts] = useState('');
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  const handleMint = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        takoSeptNFTAddress,
        takoSeptNFT.abi,
        signer,
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount));
        console.log('response: ', response);
      } catch (err) {
        console.log('error: ', err);
      }
    }
  };
  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <div>
      <h1>TakoSept</h1>
      <p>
        Tako Sept was created for those who loves octopus. For the world in
        piece.
      </p>
      {isConnected ? (
        <div>
          <div>
            <button type="button" onClick={handleDecrement}>
              -
            </button>
            <input type="number" value={mintAmount} />
            <button type="button" onClick={handleIncrement}>
              +
            </button>
          </div>
          <button type="button" onClick={handleMint}>
            Mint Now
          </button>
        </div>
      ) : (
        <p>You must be connected to Mint.</p>
      )}
    </div>
  );
}

export default MainMint;
