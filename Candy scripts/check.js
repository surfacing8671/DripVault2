const Web3 = require('web3');
var fs = require('fs');

const addresses = [
  [
    "0x00649966bedbf78c6e6d101ae29c14c852e9aa03"
  ],
  [
    "0x07f584211b255273ab3bad9f57124b339afe3d54"
  ],
  [
    "0x09e8b32693365634ea24870eb1c23390fce04e72"
  ],
  [
    "0x0cf17da8dafaa4925b142dfd6ed46e56fa04df0a"
  ],
  [
    "0x0e45286a3724edb5dd1b01cda2d7c3f9f7f1a639"
  ],
  [
    "0x0f55730b5e34167aaf418050c0a1e52556041e55"
  ],
  [
    "0x0f71d5fcff66f54954aff56b858d59667dc42e21"
  ],
  [
    "0x103bafc2989ecb0aece6bcd3d653c3ad3e87c6ea"
  ],
  [
    "0x12fe999052b5779fe5a8266c363462bbe38626cd"
  ],
  [
    "0x172a25d57da59ab86792fb8ced103ad871cbef34"
  ],
  [
    "0x196e10464b27951ae775a667b457bb7ed409f771"
  ],
  [
    "0x1f88b983a6b8e7a03d70910fb293b1507b0ab096"
  ],
  [
    "0x2184ffb9d9b087f3ff91c90b438d11026fc42316"
  ],
  [
    "0x253739fd16f90d63382a6e2666428ffef72cf645"
  ],
  [
    "0x272d63f6e2f6398f3724bf70541137d2e329b030"
  ],
  [
    "0x29632ded3afa96f2efe8b4c306c201c84dc40601"
  ],
  [
    "0x2a65da2b843250eff9524dae519039e2aa344807"
  ],
  [
    "0x2ac35a949f2029054fbb3b98e2fef0fa53cf18bd"
  ],
  [
    "0x2f58ad6678e1afb3d99e33478da6ca30a6a3f46c"
  ],
  [
    "0x30036ff2e84dd47e1de39c5873187422641d9b03"
  ],
  [
    "0x30930d7e95a659ad61727a9f0ceb5f10056303f8"
  ],
  [
    "0x325340a3623684b510378628d2650822565ab4cc"
  ],
  [
    "0x32b050b0d585912a24adcc0debbc89b3055ed31c"
  ],
  [
    "0x3475d021f2d2d0a845751dc33c766febbd1986f3"
  ],
  [
    "0x34bd9c01ce957585e3f80a5523b963b3eeef07e4"
  ],
  [
    "0x380be068614e9c462508f2b7954ebc36ca46c0f1"
  ],
  [
    "0x384c0bc1d0ebfbbd2a3fa2ba5e9e365a8b79bc20"
  ],
  [
    "0x3863a6b2a7b0daf5fcde64358bea09943cdf079e"
  ],
  [
    "0x388d408d9df29e47fc8a247122c48f1b55341b74"
  ],
  [
    "0x3918affbdfeaa9d2e7b06aae813a3d194a12086d"
  ],
  [
    "0x3c834a5ad1a0a58ea21195176c6058c3435fe9bc"
  ],
  [
    "0x3d7eab44504bdee7c29313fe36671ac3c1da4aef"
  ],
  [
    "0x41be81c72cca61459ef9daff25f56b16cfd6f38c"
  ],
  [
    "0x41c14d22d4fe77e80e755f50e155400aa15c2a92"
  ],
  [
    "0x41d7059fa2b6aca2a30478fc0558f877c2898dfc"
  ],
  [
    "0x4384276ebd69548bad148fc9eec90de167a0c37d"
  ],
  [
    "0x441bf4e439f952e34578ef98c76930aae8f38549"
  ],
  [
    "0x46b94710620d3e5626c5192aa80d2b362781997a"
  ],
  [
    "0x47d4dc3e01b9837f054dcf8a036c050ecc1987b5"
  ],
  [
    "0x481099ee45575edb56a4c80a89434ad4915a0102"
  ],
  [
    "0x497ce401adaf3d32d9444f6a195ce310ebe306b0"
  ],
  [
    "0x4c46148a2f7d498189477bc25df4ded7bd2bb6e9"
  ],
  [
    "0x4cd863e70fea26e7f07208eb12d0d0fbfd986cc0"
  ],
  [
    "0x514c3c2ee2a980fb2d50fd47ef4316a875f37c0d"
  ],
  [
    "0x524c0a0b45522e837e61e2eb1969a613d4511ee8"
  ],
  [
    "0x578611e5c40e40f1fac3b0d83fd3ca02f27c7a75"
  ],
  [
    "0x578614c2aa2f1921b493ede7b7c5236a1efd961e"
  ],
  [
    "0x599f4382c116f13542b578f51ac488eea16a8849"
  ],
  [
    "0x5abbf6ab860577e89c0483cf141e300bf8b74250"
  ],
  [
    "0x5f775e037901ecf4b996f869b75b3fddf173c416"
  ],
  [
    "0x6524401bec5e3d0f53f4255a2468b78cd355313a"
  ],
  [
    "0x6781490a53d518265055bb3e127422348b8d6962"
  ],
  [
    "0x688aad2ffb4075d12e4adac2558feb3f915c2c95"
  ],
  [
    "0x6c1d8596f7741d053b068261834d8f76a85ac758"
  ],
  [
    "0x756724ecdbbb8f59095888d4685bac9012190f46"
  ],
  [
    "0x783771127632dc8b89b44a22752777c8923c84f2"
  ],
  [
    "0x78795d1f3b2cd0efa0f721c31d67eebbe5bd4364"
  ],
  [
    "0x7b9b7a27a422c0921d5c158c8712b2747fe33ac1"
  ],
  [
    "0x7d4fc5c5d8612c686ddeef7be71910db08098144"
  ],
  [
    "0x80319accf5206894ee9f67cd4e5eb167f10bf200"
  ],
  [
    "0x85f6b07a7921a68d10ace4400432cf4a4c5c08b9"
  ],
  [
    "0x87766e649341eb56e4f6e8a58594064c982a878f"
  ],
  [
    "0x87cbd399440130d50de9a780388524ebb95bca20"
  ],
  [
    "0x88788e2c2d5f3362a8ab63e6a2e00a742fa946a2"
  ],
  [
    "0x8fee41eebb2572e8c0820bbe02a16de358ba214c"
  ],
  [
    "0x9042266c00d6fe1975f0a24d4564bd34fb362d07"
  ],
  [
    "0x90b0edc71b95025ef65ca350350dd47bfcc06b5b"
  ],
  [
    "0x912d8284284286d2c21dd2f069729c49bcf0c602"
  ],
  [
    "0x93e69de6b3355ef031a8edc81e56a676f9b68538"
  ],
  [
    "0x945318cefd5dfa3785e75f2e78270a39aa43e69d"
  ],
  [
    "0x94693cab64781863eb5ac40486bccef57ee75f75"
  ],
  [
    "0x971541c1f8368957411980354ce966dd4a27e0e3"
  ],
  [
    "0x987b81b9550c5808b31b905d8a62a28a240771e0"
  ],
  [
    "0x9cb51ea842d30ce8363b98487e552c191a5e968c"
  ],
  [
    "0x9ef80b4dc17d5bb164caf7ea4dc3eb72949943da"
  ],
  [
    "0x9f0c0a1fbea4bcc2d612df74d308f9754b77166a"
  ],
  [
    "0xa2d767629ef6aafb33a2c072ef067098a0e8e639"
  ],
  [
    "0xa32079fb613bd35159face5251695e658c1be35c"
  ],
  [
    "0xa54710a4d6a2ee9cf0803a4624e3e5e1de90c6d3"
  ],
  [
    "0xa650c44cfacc2ed41fae91ef3fed75422af8f4e9"
  ],
  [
    "0xaa3556436ad11776291c5f9995c18dae8ecc91f5"
  ],
  [
    "0xb1eb4cd2c5e21d0da87cfb0270ccf84e3266d6f0"
  ],
  [
    "0xb6ce120905c7fba534bda1a574e58037a5c0aead"
  ],
  [
    "0xb76e0a38519afe6d7dcaf57adcd385b33d0b4ed8"
  ],
  [
    "0xbab858be4ad6f040b70d1dd55188078d3dad821b"
  ],
  [
    "0xbee69145524cc53e134ec1ebd9af36678dce5bbd"
  ],
  [
    "0xbf2bf0f8450b04caf81471f1f91fe77e37489ba7"
  ],
  [
    "0xc21703d3510e5ae61c5849c7cada24b39c0ab862"
  ],
  [
    "0xc2315631e9dcae4bf6720bd3caa128cf454d4a2b"
  ],
  [
    "0xc265a526f733d4554740ea7d6c846e7263020685"
  ],
  [
    "0xc634c241596e165eb28791e310f86169238be355"
  ],
  [
    "0xc6d1bd5003de5fb4d725530f4b455cad0df24980"
  ],
  [
    "0xc9a8659e72ec83598f8660f813348ba5c291d36f"
  ],
  [
    "0xcf066b771e77391e5cf9cc6fe69ceaced15d863d"
  ],
  [
    "0xcfee857a7b92d9ef40264f7b7e266eced077d3cb"
  ],
  [
    "0xd125eda1eb2fa6f3ac0f6f27682efacfc4008219"
  ],
  [
    "0xd5c28d99e7a7078734c2e8d246366f0779000b22"
  ],
  [
    "0xdce6e664ab25fa93ed0e364528af5b02d97476ff"
  ],
  [
    "0xe1a7fc20a848ee97d2218a6e9c1ecf11194e017e"
  ],
  [
    "0xe1e7c00bd299cadb5e22d6976368da29988ed0e9"
  ],
  [
    "0xe63c9580f032047883eac063e3f0b700033b823a"
  ],
  [
    "0xea4b19449de124e33083eb8cb2b53964e2d27d9c"
  ],
  [
    "0xeded1d2e43cebdd3f966869053269e94bd672559"
  ],
  [
    "0xee50f09f5426ce288a17cd228187108d8906c6bc"
  ],
  [
    "0xee613ca7e8e948509dce6ea6901a6cfe4702ba33"
  ],
  [
    "0xf254a3efdff614aee3e9d83b5724c0bef6a7be6e"
  ],
  [
    "0xf38d029be0e30a21bc0a6749a9a7f21079046a46"
  ],
  [
    "0xf5ec5f3bdda4a1802358ee9a2dbba262dd29a7bc"
  ],
  [
    "0xfc33a26b70cc399e48a2e1e20454a2813551b7b8"
  ],
  [
    "0xfc5a5442b62d0711e1ec2196fae61e94002ce042"
  ],
  [
    "0xfc7bb93d64cd48d5754830b70630d9ee89c87c44"
  ],
  [
    "0xfe8a7ea97a4990298fde17897bf33b299aefc4f0"
  ]
];

// Replace with your Ethereum node URL
const nodeUrl = 'https://cronos-evm.publicnode.com';

// Create a Web3 instance
const web3 = new Web3(nodeUrl, 9651989, 6093864);

// Replace with the address of the smart contract you want to interact with
const contractAddress = '0x7CeA583ea310b3A8a72Ed42B3364aff16d24B3A2';

// Replace with the ABI (Application Binary Interface) of the smart contract
const contractABI = [{ "inputs": [{ "internalType": "contract IERC20", "name": "candyToken_", "type": "address" }, { "internalType": "contract IERC721", "name": "candyNft_", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "flag", "type": "bool" }], "name": "AccountBlocked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "lockId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Claimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "lockId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "nftAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "lockAt", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "duration", "type": "uint256" }], "name": "Locked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "lockId", "type": "uint256" }], "name": "Unlocked", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }], "name": "accountBlocked", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "duration_", "type": "uint256" }], "name": "aprPerDuration", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }, { "internalType": "bool", "name": "flag_", "type": "bool" }], "name": "blockAccount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "enum CandyLock.Rarity", "name": "rarity_", "type": "uint8" }], "name": "boostPerRarity", "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "candyNft", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "candyToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "lid_", "type": "uint256" }], "name": "claimReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount_", "type": "uint256" }, { "internalType": "uint256", "name": "duration_", "type": "uint256" }, { "internalType": "uint256[]", "name": "nftIds_", "type": "uint256[]" }, { "internalType": "enum CandyLock.Rarity[]", "name": "rarities_", "type": "uint8[]" }, { "internalType": "bytes32[][]", "name": "proofs_", "type": "bytes32[][]" }], "name": "lock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }], "name": "lockCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxNftPerLock", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "merkleRoot", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minTokenPerLock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "onERC721Received", "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }, { "internalType": "uint256", "name": "lid_", "type": "uint256" }], "name": "pendingReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" }], "name": "recoverToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId_", "type": "uint256" }], "name": "tokenRarity", "outputs": [{ "internalType": "enum CandyLock.Rarity", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalLockedCandy", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "lid_", "type": "uint256" }], "name": "unlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "duration_", "type": "uint256" }, { "internalType": "uint256", "name": "apr_", "type": "uint256" }], "name": "updateAprRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "enum CandyLock.Rarity", "name": "rarity_", "type": "uint8" }, { "internalType": "uint32", "name": "boostRate_", "type": "uint32" }], "name": "updateBoostRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "limit_", "type": "uint8" }], "name": "updateMaxNftLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "root_", "type": "bytes32" }], "name": "updateMerkleRoot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "limit_", "type": "uint256" }], "name": "updateMinTokenLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }, { "internalType": "uint256", "name": "offset_", "type": "uint256" }, { "internalType": "uint256", "name": "count_", "type": "uint256" }], "name": "viewLocks", "outputs": [{ "components": [{ "internalType": "uint256", "name": "lid", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "lockAt", "type": "uint256" }, { "internalType": "uint256", "name": "duration", "type": "uint256" }, { "internalType": "uint256", "name": "lastRewardAt", "type": "uint256" }, { "internalType": "bool", "name": "unlocked", "type": "bool" }, { "internalType": "uint256[]", "name": "nfts", "type": "uint256[]" }], "internalType": "struct CandyLock.LockData[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }]; // Your contract's ABI

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function getTransactions() {
  try {

    const time1 = 63072000;
    const time2 = 31536000;
    const time3 = 15552000;
    const time4 = 7776000;

    const dataSet = [];
    for (let i = 0; i < addresses.length; i++) {

      const transactions = await contract.methods.viewLocks(addresses[i][0], 0, 100).call();
      const outputFilePath = './output.txt'; // Replace with the existing output JSON file path

      let t1 = 0;
      let t2 = 0;
      let t3 = 0;
      let t4 = 0;


      addresses[i][0]


      for (let j = 0; j < transactions.length; j++) {
    


    
        if (!transactions[j].unlocked) {
          if (transactions[j].duration == time1) {
            t1 += Number(transactions[j].amount);
          }
          else if (transactions[j].duration == time2) {
            t2 += Number(transactions[j].amount);
          }
          else if (transactions[j].duration == time3) {
            t3 += Number(transactions[j].amount);
          }

          else if (transactions[j].duration == time4) {
            t4 += Number(transactions[j].amount);
          }
        }
      }

    
      console.log(`Account data for address: \t ${addresses[i][0]}`)
      console.log(`-----------------------------------------`)
      console.log(`Amount of tokens locked for duration \t  ${time4}\t -->\t ${(t4 / 1e18)}\n`)
      console.log(`Amount of tokens locked for duration \t  ${time3}\t -->\t ${t3 / 1e18}\n`)
      console.log(`Amount of tokens locked for duration \t  ${time2}\t -->\t ${t2 / 1e18}\n`)
      console.log(`Amount of tokens locked for duration \t  ${time1}\t -->\t ${t1 / 1e18}\n`)
      console.log(`-----------------------------------------`)
    
  let addy = addresses[i][0];
 

  const addressData = {
    address: addy,
    TwoYears: t1 / 1e18,
    OneYear: t2 / 1e18,
    SixMonths: t3 / 1e18,
    ThreeMonths: t4 / 1e18,
  };
 

  dataSet.push(addressData);


   
      





    }

    

    const outputFilePath = './LockedDurationCandy.json';
    fs.writeFileSync(outputFilePath, JSON.stringify(dataSet, null, 2));
    console.log('Output file written successfully');


  } catch (error) {
    console.error('Error:', error);
  }
}

getTransactions();
