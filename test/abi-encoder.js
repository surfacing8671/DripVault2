//import { encode, toHex, decode, fromHex } from "@findeth/abi";
const encode = require("@findeth/abi");
const toHex = require("@findeth/abi");
const decode = require("@findeth/abi");
const fromHex = require("@findeth/abi");

//import { ethers } from "ethers";
const ethers = require("ethers");
//import { decode } from "punycode";

//const buffer = encode(["address", "uint"], ["0x9D939E22D4a50025CDDAc3d26F9485e49F95D074", "3"]);
//console.log(toHex(buffer));
// const cool = fromHex("0xf6d86ed606f871fa1a557ac0ba607adce07767acf53f492fb215a1a4db4aea6f")
// //const buffer2 = decode(["address", "address", "uint256"], ["0xd8388b41000000000000000000000000beadb1dbcfac426bc9a71434353a0bb567846b850000000000000000000000001f02d459ff917c2974bed009dcea0def26d7c4fe000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"]);
// console.log(decode(["uint256", "address"], cool));
const iface = new Interface([
  [
    {
      inputs: [
        { internalType: "address", name: "zeroExProxy_", type: "address" },
        { internalType: "contract WETH", name: "weth_", type: "address" },
        {
          internalType: "contract IBunniHub",
          name: "bunniHub_",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    { inputs: [], name: "BunniLpZapIn__InsufficientOutput", type: "error" },
    { inputs: [], name: "BunniLpZapIn__PastDeadline", type: "error" },
    { inputs: [], name: "BunniLpZapIn__SameToken", type: "error" },
    { inputs: [], name: "BunniLpZapIn__ZeroExSwapFailed", type: "error" },
    {
      inputs: [],
      name: "bunniHub",
      outputs: [
        { internalType: "contract IBunniHub", name: "", type: "address" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "contract ERC20", name: "tokenIn", type: "address" },
        { internalType: "uint256", name: "tokenAmountIn", type: "uint256" },
        { internalType: "contract ERC20", name: "tokenOut", type: "address" },
        { internalType: "uint256", name: "minAmountOut", type: "uint256" },
        { internalType: "address", name: "recipient", type: "address" },
        { internalType: "address", name: "refundRecipient", type: "address" },
        { internalType: "bool", name: "useContractBalance", type: "bool" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "bytes", name: "swapData", type: "bytes" },
      ],
      name: "doZeroExSwap",
      outputs: [
        { internalType: "uint256", name: "tokenAmountOut", type: "uint256" },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "contract Gate", name: "gate", type: "address" },
        { internalType: "address", name: "nytRecipient", type: "address" },
        { internalType: "address", name: "pytRecipient", type: "address" },
        { internalType: "address", name: "vault", type: "address" },
        { internalType: "contract IxPYT", name: "xPYT", type: "address" },
        { internalType: "uint256", name: "underlyingAmount", type: "uint256" },
        { internalType: "bool", name: "useContractBalance", type: "bool" },
      ],
      name: "enterWithUnderlying",
      outputs: [
        { internalType: "uint256", name: "mintAmount", type: "uint256" },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "contract Gate", name: "gate", type: "address" },
        { internalType: "address", name: "nytRecipient", type: "address" },
        { internalType: "address", name: "pytRecipient", type: "address" },
        { internalType: "address", name: "vault", type: "address" },
        { internalType: "contract IxPYT", name: "xPYT", type: "address" },
        { internalType: "uint256", name: "vaultSharesAmount", type: "uint256" },
        { internalType: "bool", name: "useContractBalance", type: "bool" },
      ],
      name: "enterWithVaultShares",
      outputs: [
        { internalType: "uint256", name: "mintAmount", type: "uint256" },
      ],
      stateMutability: "payable",
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
      inputs: [
        {
          internalType: "contract IUniswapV3Pool",
          name: "pool",
          type: "address",
        },
      ],
      name: "uniswapV3PoolState",
      outputs: [
        { internalType: "uint160", name: "sqrtPriceX96", type: "uint160" },
        { internalType: "int24", name: "tick", type: "int24" },
        { internalType: "uint128", name: "liquidity", type: "uint128" },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "weth",
      outputs: [{ internalType: "contract WETH", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "wrapEthInput",
      outputs: [],
      stateMutability: "payable",
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
          name: "depositParams",
          type: "tuple",
        },
        {
          internalType: "contract ILiquidityGauge",
          name: "gauge",
          type: "address",
        },
        { internalType: "contract ERC20", name: "token0", type: "address" },
        { internalType: "contract ERC20", name: "token1", type: "address" },
        { internalType: "address", name: "recipient", type: "address" },
        { internalType: "uint256", name: "sharesMin", type: "uint256" },
        { internalType: "bool", name: "useContractBalance0", type: "bool" },
        { internalType: "bool", name: "useContractBalance1", type: "bool" },
        { internalType: "bool", name: "compound", type: "bool" },
      ],
      name: "zapIn",
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
          name: "depositParams",
          type: "tuple",
        },
        { internalType: "contract ERC20", name: "token0", type: "address" },
        { internalType: "contract ERC20", name: "token1", type: "address" },
        { internalType: "address", name: "recipient", type: "address" },
        { internalType: "uint256", name: "sharesMin", type: "uint256" },
        { internalType: "bool", name: "useContractBalance0", type: "bool" },
        { internalType: "bool", name: "useContractBalance1", type: "bool" },
        { internalType: "bool", name: "compound", type: "bool" },
      ],
      name: "zapInNoStake",
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
      name: "zeroExProxy",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
  ],
]);

const data = ethers.utils.defaultAbiCoder.encode(
  ["bytes[]"],
  [
    {
      name: "zapIn",
      params: [
        {
          name: "depositParams",
          value: [
            ["0x30eA22C879628514f1494d4BBFEF79D21A6B49A2", "-350", "-150"],
            "30647420028664063710",
            "38820400000000000000",
            "28883542190587877872",
            "37096977351596685377",
            "1689259415",
            "0x85d74963e011088e8fACD733867cef9E92DF5d1a",
          ],
          type: "tuple",
        },
        {
          name: "gauge",
          value: "0xb98fe645c7e2c39b726747dcb72848a9fd8c425f",
          type: "address",
        },
        {
          name: "token0",
          value: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          type: "address",
        },
        {
          name: "token1",
          value: "0xf951e335afb289353dc249e82926178eac7ded78",
          type: "address",
        },
        {
          name: "recipient",
          value: "0x85d74963e011088e8facd733867cef9e92df5d1a",
          type: "address",
        },
        {
          name: "sharesMin",
          value: "6900680148465115903561",
          type: "uint256",
        },
        {
          name: "useContractBalance0",
          value: true,
          type: "bool",
        },
        {
          name: "useContractBalance1",
          value: false,
          type: "bool",
        },
        {
          name: "compound",
          value: false,
          type: "bool",
        },
      ],
    },
  ]
);
console.log(data);

// keccak256("BorrowPermit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");

//const data1 = ethers.utils.defaultAbiCoder.decode(["bytes"],["0x6912f45a00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000000d500b1d8e8ef31e21c99d1db9a6444d3adf1270000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000f4a1400000000000000000000000000000000000000000000000029de7475321df72e000000000000000000000000000000000000000000000000000000000000000200000000000000000000000083f105a3c6d83fd90255057dcd08798335443f9600000000000000000000000083f105a3c6d83fd90255057dcd08798335443f960000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001800000000000000000000000000000000000000000000000000000000000000104be0b188f000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000002000000000000000000000000f664f50631a6f0d72ecdaa0e49b0c019fa72a8dc00000000000000000000000059e8e9100cbfcbcbadf86b9279fa61526bbb8765000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000002dc6c000000000000000000000000000000000000000000000000ad78ebc5ac6200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ec42884914000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000280000000000000000000000000000000000000000000000000000000000000032000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000000d500b1d8e8ef31e21c99d1db9a6444d3adf1270000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000029c9049bdf95b6b000000000000000000000000000000000000000000000000000000000000000020000000000000000000000001a13f4ca1d028320a707d99520abfefca3998b7f0000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000000000000000000000000000000000000000000004000000000000000000000000a51293e7af8e4924f37d32ceb54eeec501f55e870000000000000000000000005eca66b5978a1a2e7bb2e150cd9febf91e1e388d0000000000000000000000005eca66b5978a1a2e7bb2e150cd9febf91e1e388d000000000000000000000000a51293e7af8e4924f37d32ceb54eeec501f55e870000000000000000000000000000000000000000000000000000000000000004000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000009c00000000000000000000000000000000000000000000000000000000000000a400000000000000000000000000000000000000000000000000000000000000084de41691c000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000000d500b1d8e8ef31e21c99d1db9a6444d3adf127000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084454296154000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000010000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa84174000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000322fe6800000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006e000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000006c000000000000000000000000000000000000000000000000000000000000000050000000000000000000000005eca66b5978a1a2e7bb2e150cd9febf91e1e388d0000000000000000000000005eca66b5978a1a2e7bb2e150cd9febf91e1e388d0000000000000000000000003e0e1f4ac1008a7ab13bdd54bd10a8c3da1240bb0000000000000000000000005eca66b5978a1a2e7bb2e150cd9febf91e1e388d0000000000000000000000003e0e1f4ac1008a7ab13bdd54bd10a8c3da1240bb000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001e0000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000003a000000000000000000000000000000000000000000000000000000000000000648cd2e0c70000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa8417400000000000000000000000000000000000000000000000000000000323f28c00000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064c1bce0b70000000000000000000000001bfd67037b42cf73acf2047067bd4f2c47d9bfd600000000000000000000000000000000000000000000000000000000002dc6c000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e486818f2600000000000000000000000000000000000000000000000000000000002dc6c00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000030000000000000000000000001bfd67037b42cf73acf2047067bd4f2c47d9bfd60000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f6190000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa84174000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064c1bce0b70000000000000000000000000d500b1d8e8ef31e21c99d1db9a6444d3adf127000000000000000000000000000000000000000000000000ad78ebc5ac620000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c486818f2600000000000000000000000000000000000000000000000b0157c0f6a5b5b6b00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000d500b1d8e8ef31e21c99d1db9a6444d3adf12700000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa8417400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004447e7ef240000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa84174000000000000000000000000000000000000000000000000000000000b532b80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000104db71410e000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000001a13f4ca1d028320a707d99520abfefca3998b7f000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000002dc0c0000000000000000000000000000000000000000000000000000000000afc31e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"]);
// console.log(data1)
