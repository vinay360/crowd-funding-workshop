// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract CrowdFunding {
    
    struct Campaign {
        uint256 id;
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string imageUrl;
        address[] donators;
        uint256[] donations;
    }

    Campaign[] public campaigns;
    uint256 public totalCampaigns = 0;

    function createCampaign(string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _imageUrl) public {
        Campaign memory campaign;
        campaign.id = totalCampaigns;
        campaign.owner = msg.sender;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.imageUrl = _imageUrl;
        campaign.amountCollected = 0;
        campaigns.push(campaign);
        totalCampaigns++;
    }

    function getAllCampaigns() public view returns(Campaign[] memory) {
        return campaigns;
    }

    function getCampaign(uint256 id) public view returns(Campaign memory) {
        require(id < totalCampaigns, "Invalid CampaignId");
        return campaigns[id];
    }

    function donate(uint256 id) public payable {
        require(id < totalCampaigns, "Not a valid campaign id");
        require(campaigns[id].target > campaigns[id].amountCollected, "Target already achieved");
        require(msg.value > 0, "Amount must be greater than zero");
        campaigns[id].donators.push(msg.sender);
        campaigns[id].donations.push(msg.value);
        campaigns[id].amountCollected += msg.value;
        if(campaigns[id].amountCollected >= campaigns[id].target)
            transferFunds(id);
    }  

    function transferFunds(uint256 id) private {
        address ownerAddress = campaigns[id].owner;
        uint256 amount = campaigns[id].amountCollected;
        payable(ownerAddress).call{value: amount}("");
    }
}
