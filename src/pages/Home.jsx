import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../index.css';

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    //getCampaigns
  }, []);
  return (
    <div className="home">
      {campaigns.map((campaign) => (
        <Card campaign={campaign} />
      ))}
    </div>
  );
};

export default Home;
