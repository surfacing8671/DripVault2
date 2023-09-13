const axios = require("axios");
const abiDecoder = require("abi-decoder");

const INPUT_DATA = [
  "0xb3165aaf000000000000000000000000a374094527e1673a86de625aa59517c5de346d32fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffba53cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdb600000000000000000000000000000000000000000000000000de0b6b3a764000000000000000000000000000000000000000000000000000000000000000b75680000000000000000000000000000000000000000000000000dddc2284b1c37cb00000000000000000000000000000000000000000000000000000000000b72d60000000000000000000000000000000000000000000000000000000064b3a0bb00000000000000000000000084d55d12384653d9e701f8eb74c60ee9140a67b5",
];
const contractAddressInteractedWith =
  "0x541a2378589E280FDfDde6e530xb5087f95643a9a4069471a28d32c569d9bd57fe4Fb5ECf98a853fC2";

const API_KEY = "TUCW8DV1FFPPUYFJRVBMNKQM69IU7CWYHF";

// https://api.etherscan.io/apis
// this will the pull the abi
const URL = `https://api.polyscan.io/api?module=contract&action=getabi&address=${contractAddressInteractedWith}&apikey=${API_KEY}`;

const abiFromUrl = async () => {
  const res = await axios.get(URL);
  return JSON.parse(res.data.result);
};

const decode = async () => {
  //const ABI = await abiFromUrl();
  // pass the ABI to the decoder
  abiDecoder.addABI([
    {
      inputs: [
        {
          internalType: "contract IUniswapV3Factory",
          name: "factory_",
          type: "address",
        },
        { internalType: "address", name: "owner_", type: "address" },
        { internalType: "uint256", name: "protocolFee_", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    { inputs: [], name: "T", type: "error" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "bunniKeyHash",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint128",
          name: "liquidity",
          type: "uint128",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount0",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount1",
          type: "uint256",
        },
      ],
      name: "Compound",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "bunniKeyHash",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint128",
          name: "liquidity",
          type: "uint128",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount0",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount1",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "shares",
          type: "uint256",
        },
      ],
      name: "Deposit",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "contract IBunniToken",
          name: "token",
          type: "address",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "bunniKeyHash",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "contract IUniswapV3Pool",
          name: "pool",
          type: "address",
        },
        {
          indexed: false,
          internalType: "int24",
          name: "tickLower",
          type: "int24",
        },
        {
          indexed: false,
          internalType: "int24",
          name: "tickUpper",
          type: "int24",
        },
      ],
      name: "NewBunni",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnerUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "amount0",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount1",
          type: "uint256",
        },
      ],
      name: "PayProtocolFee",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "newProtocolFee",
          type: "uint256",
        },
      ],
      name: "SetProtocolFee",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "bunniKeyHash",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint128",
          name: "liquidity",
          type: "uint128",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount0",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount1",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "shares",
          type: "uint256",
        },
      ],
      name: "Withdraw",
      type: "event",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "contract IUniswapV3Pool",
              name: "pool",
              type: "address",
            },
            { internalType: "int24", name: "tickLower", type: "int24" },
            { internalType: "int24", name: "tickUpper", type: "int24" },
          ],
          internalType: "struct BunniKey",
          name: "key",
          type: "tuple",
        },
      ],
      name: "compound",
      outputs: [
        { internalType: "uint128", name: "addedLiquidity", type: "uint128" },
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "contract IUniswapV3Pool",
              name: "pool",
              type: "address",
            },
            { internalType: "int24", name: "tickLower", type: "int24" },
            { internalType: "int24", name: "tickUpper", type: "int24" },
          ],
          internalType: "struct BunniKey",
          name: "key",
          type: "tuple",
        },
      ],
      name: "deployBunniToken",
      outputs: [
        {
          internalType: "contract IBunniToken",
          name: "token",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "contract IUniswapV3Pool",
                  name: "pool",
                  type: "address",
                },
                { internalType: "int24", name: "tickLower", type: "int24" },
                { internalType: "int24", name: "tickUpper", type: "int24" },
              ],
              internalType: "struct BunniKey",
              name: "key",
              type: "tuple",
            },
            {
              internalType: "uint256",
              name: "amount0Desired",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amount1Desired",
              type: "uint256",
            },
            { internalType: "uint256", name: "amount0Min", type: "uint256" },
            { internalType: "uint256", name: "amount1Min", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "address", name: "recipient", type: "address" },
          ],
          internalType: "struct IBunniHub.DepositParams",
          name: "params",
          type: "tuple",
        },
      ],
      name: "deposit",
      outputs: [
        { internalType: "uint256", name: "shares", type: "uint256" },
        { internalType: "uint128", name: "addedLiquidity", type: "uint128" },
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "factory",
      outputs: [
        {
          internalType: "contract IUniswapV3Factory",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "contract IUniswapV3Pool",
              name: "pool",
              type: "address",
            },
            { internalType: "int24", name: "tickLower", type: "int24" },
            { internalType: "int24", name: "tickUpper", type: "int24" },
          ],
          internalType: "struct BunniKey",
          name: "key",
          type: "tuple",
        },
      ],
      name: "getBunniToken",
      outputs: [
        {
          internalType: "contract IBunniToken",
          name: "token",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes[]", name: "data", type: "bytes[]" }],
      name: "multicall",
      outputs: [{ internalType: "bytes[]", name: "results", type: "bytes[]" }],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "protocolFee",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "token", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
      ],
      name: "selfPermit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "token", type: "address" },
        { internalType: "uint256", name: "nonce", type: "uint256" },
        { internalType: "uint256", name: "expiry", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
      ],
      name: "selfPermitAllowed",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "token", type: "address" },
        { internalType: "uint256", name: "nonce", type: "uint256" },
        { internalType: "uint256", name: "expiry", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
      ],
      name: "selfPermitAllowedIfNecessary",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "token", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
      ],
      name: "selfPermitIfNecessary",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "setOwner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
      name: "setProtocolFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IERC20[]",
          name: "tokenList",
          type: "address[]",
        },
        { internalType: "address", name: "recipient", type: "address" },
      ],
      name: "sweepTokens",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "amount0Owed", type: "uint256" },
        { internalType: "uint256", name: "amount1Owed", type: "uint256" },
        { internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "uniswapV3MintCallback",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "contract IUniswapV3Pool",
                  name: "pool",
                  type: "address",
                },
                { internalType: "int24", name: "tickLower", type: "int24" },
                { internalType: "int24", name: "tickUpper", type: "int24" },
              ],
              internalType: "struct BunniKey",
              name: "key",
              type: "tuple",
            },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "shares", type: "uint256" },
            { internalType: "uint256", name: "amount0Min", type: "uint256" },
            { internalType: "uint256", name: "amount1Min", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
          ],
          internalType: "struct IBunniHub.WithdrawParams",
          name: "params",
          type: "tuple",
        },
      ],
      name: "withdraw",
      outputs: [
        { internalType: "uint128", name: "removedLiquidity", type: "uint128" },
        { internalType: "uint256", name: "amount0", type: "uint256" },
        { internalType: "uint256", name: "amount1", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ]);
  const decodeMulticall = abiDecoder.decodeMethod(INPUT_DATA);
  // you have to stringify to see the inner data objects
  console.log("decodeMulticall", JSON.stringify(decodeMulticall, 0, 1));
  // const decodeParamsValue = abiDecoder.decodeMethod(
  //   decodeMulticall.params[1].value[0]
  // );
  // console.log("FINAL OUTPUT", decodeParamsValue);
};
decode();
