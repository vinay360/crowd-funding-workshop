import React from 'react';
import useConnect from '../hooks/useConnect';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const { isConnected, errorMessage, account, connectWallet } = useConnect();
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <button onClick={connectWallet} disabled={isConnected}>
        {isConnected ? account : 'Connect'}
      </button>
      {isConnected && (
        <button
          onClick={() => {
            navigate('/create');
          }}
        >
          Create Campaign
        </button>
      )}
    </div>
  );
};

export default Navbar;
