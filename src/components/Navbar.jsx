import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <button>Connect</button>

      <button
        onClick={() => {
          navigate('/create');
        }}
      >
        Create Campaign
      </button>
    </div>
  );
};

export default Navbar;
