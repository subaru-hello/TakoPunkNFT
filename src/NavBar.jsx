import React, { useState } from 'react';

function NavBar() {
  const [accounts, setAccounts] = useState('');
  const isConnected = Boolean(accounts);

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
}

export default NavBar;
