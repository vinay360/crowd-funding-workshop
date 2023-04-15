import React, { useState } from 'react';
import '../index.css';

const CreateCampaign = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    target: '',
    deadline: '',
    imgUrl: '',
  });
  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(formData);
    //***************Create Campaign******************** */
  }
  return (
    <div className="create-campaign">
      <form onSubmit={onSubmitHandler} className="form">
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input
            className="input"
            type="text"
            placeholder="My Campaign"
            onChange={(event) => {
              setFormData((oldData) => ({
                ...oldData,
                title: event.target.value,
              }));
            }}
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description</label>
          <textarea
            className="input"
            rows={10}
            placeholder="Description"
            onChange={(event) => {
              setFormData((oldData) => ({
                ...oldData,
                description: event.target.value,
              }));
            }}
          />
        </div>
        <div className="form-field">
          <label htmlFor="target">Target</label>
          <input
            className="input"
            type="number"
            placeholder="SHM"
            onChange={(event) => {
              setFormData((oldData) => ({
                ...oldData,
                target: event.target.value,
              }));
            }}
          />
        </div>
        <div className="form-field">
          <label htmlFor="deadline">Deadline</label>
          <input
            className="input"
            type="date"
            onChange={(event) => {
              setFormData((oldData) => ({
                ...oldData,
                deadline: event.target.value,
              }));
            }}
          />
        </div>
        <div className="form-field">
          <label htmlFor="imgUrl">Image URL</label>
          <input
            className="input"
            type="text"
            placeholder="https://..."
            onChange={(event) => {
              setFormData((oldData) => ({
                ...oldData,
                imgUrl: event.target.value,
              }));
            }}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCampaign;
