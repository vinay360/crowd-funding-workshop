import { ethers } from 'ethers';
import abi from '../constants/abi.json';
import address from '../constants/address.json';

const useContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(
    address.address,
    abi.abi,
    provider.getSigner()
  );

  async function getCampaigns() {
    const campaigns = await contract.getAllCampaigns();
    return campaigns.map((campaign) => ({
      ...campaign,
      id: parseInt(campaign.id),
      target: ethers.utils.formatEther(campaign.target),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected),
      deadline: parseInt(campaign.deadline),
    }));
  }

  async function createCampaign(campaignDetails) {
    const tx = await contract.createCampaign(
      campaignDetails.title,
      campaignDetails.description,
      ethers.utils.parseUnits(campaignDetails.target),
      new Date(campaignDetails.deadline).getTime(),
      campaignDetails.imgUrl
    );
    const receipt = await tx.wait();
    console.log(receipt);
  }

  async function getCampaignDetails(id) {
    const campaign = await contract.getCampaign(id);
    return {
      ...campaign,
      id: parseInt(campaign.id),
      target: ethers.utils.formatEther(campaign.target),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected),
      deadline: parseInt(campaign.deadline),
      donations: campaign.donations.map((donation) =>
        ethers.utils.formatEther(donation)
      ),
    };
  }

  async function donate(id, value) {
    const tx = await contract.donate(id, {
      value: ethers.utils.parseUnits(value),
    });
    const receipt = await tx.wait();
    console.log(receipt);
  }

  return { getCampaigns, donate, createCampaign, getCampaignDetails };
};

export default useContract;
