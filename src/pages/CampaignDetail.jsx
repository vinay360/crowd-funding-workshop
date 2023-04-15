import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useContract from '../hooks/useContract';
import '../index.css';

const CampaignDetail = () => {
  const params = useParams();
  const { getCampaignDetails, donate } = useContract();
  const [campaign, updateCampaign] = useState(null);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    const getCampaign = async () => {
      const campaign = await getCampaignDetails(params.id);
      updateCampaign(campaign);
    };
    getCampaign();
  }, []);
  console.log(campaign);
  return (
    <>
      {campaign && (
        <div className="campaign-details">
          <img src={campaign.imageUrl} className="image" />
          <div>
            <h3>Title: {campaign.title}</h3>
            <p>Description: {campaign.description}</p>
            <p>Target: {campaign.target}</p>
            <p>Deadline: {campaign.deadline}</p>
            <p>Amount Collected: {campaign.amountCollected}</p>
          </div>
          <div>
            <div>
              {campaign.donators.map((donator) => (
                <p>{donator}</p>
              ))}
            </div>
            <div>
              {campaign.donations.map((donation) => (
                <p>{donation}</p>
              ))}
            </div>
          </div>
          <div>
            <input
              type="number"
              onChange={(event) => {
                setAmount(event.target.value);
              }}
            />
            <button
              onClick={() => {
                donate(params.id, amount);
              }}
            >
              Donate
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CampaignDetail;
