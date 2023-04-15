import React, { useEffect, useState } from 'react';
import useContract from '../hooks/useContract';
import Card from '../components/Card';
import '../index.css';

const Home = () => {
  const { getCampaigns } = useContract();
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    getCampaigns().then((c) => {
      setCampaigns(c);
    });
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
