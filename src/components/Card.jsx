import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/campaign-detail/${props.campaign.id}`);
      }}
      className="card"
    >
      <img src={props.campaign.imageUrl} className="image" />
      <div>
        <h3 className="card__title">Title: {props.campaign.title}</h3>
        <p>Description: {props.campaign.description}</p>
        <p>Target: {props.campaign.target}</p>
        <p>Deadline: {props.campaign.deadline}</p>
        <p>Amount Collected: {props.campaign.amountCollected}</p>
      </div>
    </div>
  );
};

export default Card;
