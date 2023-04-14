import React from 'react';
import useConnect from '../hooks/useConnect';

const Navbar = () => {
  const { isConnected, errorMessage, account, connectWallet } = useConnect();
  return (
    <div>
      <button onClick={connectWallet} disabled={isConnected}>
        {isConnected ? account : 'Connect'}
      </button>
    </div>
  );
};

export default Navbar;
