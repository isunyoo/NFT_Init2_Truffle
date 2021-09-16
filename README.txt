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
truffle(development)> await nft.mint("0x82d85cF1331F9410F84D0B2aaCF5e2753a5afa82")
truffle(development)> await nft.ownerOf(0)
'0x82d85cF1331F9410F84D0B2aaCF5e2753a5afa82'
truffle(development)> await nft.tokenURI(0)
'https://ipfs.io/ipfs/QmaSK3Gf6SuY8VLq8WKpX3Ri6ABJ6qkmMbNe7uhD6H2iSE?filename=0-GRUMPY_CAT.json0'
                        
*** Deploy to Rinkeby ***
$ truffle migrate --reset --compile-all --network rinkeby
$ npx truffle console --network rinkeby
truffle(rinkeby)> migrate
truffle(rinkeby)> nft = await ERC721PresetMinterPauserAutoId.deployed()
truffle(rinkeby)> accounts
truffle(rinkeby)> await nft.mint("0x82d85cF1331F9410F84D0B2aaCF5e2753a5afa82")

*** OpenSea ***
truffle(rinkeby)> nft.address
'0x88B95525e8FA282335fb624AF8e5D680b770577E'
https://rinkeby-api.opensea.io/asset/[nft contract address]/[token id]/validate
https://ropsten-api.opensea.io/asset/0x88B95525e8FA282335fb624AF8e5D680b770577E/0/validate
https://testnets-api.opensea.io/asset/0x88B95525e8FA282335fb624AF8e5D680b770577E/0/validate
https://rinkeby-api.opensea.io/asset/0x88B95525e8FA282335fb624AF8e5D680b770577E/0/validate
0x88B95525e8FA282335fb624AF8e5D680b770577E
