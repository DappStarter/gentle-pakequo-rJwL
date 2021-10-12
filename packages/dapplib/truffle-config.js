require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan return mad hole imitate problem slot general'; 
let testAccounts = [
"0xff17f6ca6c019fde2e83487d26d3b615dc34fcc8bb7660db0c0c9d8b3498ad3a",
"0xad56a711bb192456b52165c4df1cb876be58204184f86f4ff2b3ef27abf3b21a",
"0xf871f332697fe572417602dd3a4345a80976ba05cf46383ef922608ef05b9e82",
"0x47cfe3a71203b5414e2498098dc99a9354743d607ce33cb209c537c86236f503",
"0x3d48fcd131e1e437a64c939a0e675cae685dd571c3b7befe6fde4548e7d6f3a4",
"0x0c4f6cfc3aec47cbe01a667b1aad3af16424d8166188568e111085f700aebb7b",
"0xb6953c8374a2ef6820fc7c1882fb7cbc19fee68e34e8af85d0574c89a0beeecc",
"0xf5dfbf1d10cafb0b8daadf24700ea636dfa07d874f79ab190238d98f4f34e23c",
"0xbe20cfe337454df8ed1303545384261b879ca41d98249a3d7f605a8692957d69",
"0x8b05bd80c94942b742ef7fc4efc0a05e7a1bbcdc077abbb77f0b6709fde09080"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

