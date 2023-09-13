import * as dotenv from 'dotenv';
dotenv.config();
import {HardhatUserConfig, HttpNetworkConfig, HttpNetworkHDAccountsConfig} from 'hardhat/types';
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-truffle5';
import '@cronos-labs/hardhat-cronoscan';
import '@nomiclabs/hardhat-etherscan';

const { POLYGON_MUMBAI_RPC_PROVIDER, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;


const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.6.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.1",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      
      {
        version: "0.5.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  
  networks: {
    hardhat: {},
    
   cronos: {
    url: 'https://cronos-evm.publicnode.com',
    accounts: [`0x${PRIVATE_KEY}`],
    chainId: 25,  
   //gasPrice: 5000000000000000,
},


    polygon: {
      chainId: 137,
      url: 'https://polygon-mainnet.g.alchemy.com/v2/xSOxU6gL0y7hwtPpS9v3JfOUSCkrLqoP',
      accounts: [`0x${PRIVATE_KEY}`]
      }
    },
   

    etherscan: {
      apiKey: ETHERSCAN_API_KEY,
   }

  };
  


export default config;
