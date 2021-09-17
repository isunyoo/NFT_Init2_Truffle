https://forum.openzeppelin.com/t/create-an-nft-and-deploy-to-a-public-testnet-using-truffle/2961
https://dev.to/yournewempire/deploy-nfts-with-truffle-ipfs-opensea-polygon-5581

$ npm install --save-dev @truffle/hdwallet-provider
$ npm install --save-dev @openzeppelin/contracts
$ npm install truffle

*** Deploy the contract to a local blockchain ***
$ truffle compile
$ truffle migrate --reset --compile-all --network development

*** Interact with our Token MetaData ***
$ truffle console
truffle(development)> nft = await ERC721PresetMinterPauserAutoId.deployed()
truffle(development)> await nft.name()
'Kitty NFT'
truffle(development)> await nft.symbol()
'CAT_NFT'
truffle(develop)> await nft.baseURI() //Depreciated function

*** Mint ***
truffle(development)> await nft.mint("Account_Name")
truffle(development)> await nft.ownerOf(0)
'Account_Name'
truffle(development)> await nft.tokenURI(0)
'https://ipfs.io/ipfs/QmaSK3Gf6SuY8VLq8WKpX3Ri6ABJ6qkmMbNe7uhD6H2iSE?filename=0-GRUMPY_CAT.json0'
                        
*** Deploy to Rinkeby ***
$ truffle migrate --reset --compile-all --network rinkeby
$ npx truffle console --network rinkeby
truffle(rinkeby)> migrate
truffle(rinkeby)> nft = await ERC721PresetMinterPauserAutoId.deployed()
truffle(rinkeby)> accounts
truffle(rinkeby)> await nft.mint("Account_Name")
truffle(rinkeby)> await nft.ownerOf(0)
truffle(rinkeby)> await nft.tokenURI(0)

*** OpenSea metadata validation ***
truffle(rinkeby)> nft.address
'0xEdf5d8e25Cd3789db541127b7E79B56Dfd957BAb'
https://rinkeby-api.opensea.io/asset/[nft contract address]/[token id]/validate
https://rinkeby-api.opensea.io/asset/0xEdf5d8e25Cd3789db541127b7E79B56Dfd957BAb/0/validate
https://rinkeby-api.opensea.io/asset/0xEdf5d8e25Cd3789db541127b7E79B56Dfd957BAb/0



secrets.json
{
    "mnemonic": "",
    "projectId": "",
    "infuraKey": ""
}