import React from 'react';

const NavBar = async ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  const connectedAccount = async () => {
    if (window.ethereum) {
      const connectedAccounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccounts(connectedAccounts);
    }
  };

  return (
    <div>
      <div>
        <div>Facebook</div>
        <div>Twitter</div>
        <div>Email</div>
        <div>About</div>
        <div>Mint</div>
        <div>Team</div>
      </div>

      {isConnected ? (
        <div>
          <p>Connected</p>
        </div>
      ) : (
        <button type="button" onClick={connectedAccount}>
          Connect
        </button>
      )}
    </div>
  );
};

export default NavBar;
