// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {
  deployer.deploy(ERC721PresetMinterPauserAutoId, "Kitty NFT","CAT_NFT", "https://ipfs.io/ipfs/QmR4bdamUTNypxDLdbhf7drpSJsmAARzwbfTnUAm4jKS2T?filename=1-GHOST_CAT.json");
};