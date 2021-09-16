// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {
  // deployer.deploy(ERC721PresetMinterPauserAutoId, "Kitty NFT","CAT_NFT", "https://ipfs.io/ipfs/QmR4bdamUTNypxDLdbhf7drpSJsmAARzwbfTnUAm4jKS2T?filename=1-GHOST_CAT.json");
  deployer.deploy(ERC721PresetMinterPauserAutoId, "Kitty NFT","CAT_NFT", "https://ipfs.io/ipfs/QmaSK3Gf6SuY8VLq8WKpX3Ri6ABJ6qkmMbNe7uhD6H2iSE?filename=0-GRUMPY_CAT.json");  
};