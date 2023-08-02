// Import necessary modules
const { Alchemy, Network, fromHex } = require("alchemy-sdk");
require('dotenv').config();

// Configure Alchemy SDK with API key and network
const config = {
  apiKey: process.env.API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

// Address to fetch NFTs from (replace with your own)
const fromAddress = "0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1";

// Main function to fetch all NFTS minted by an address
const main = async () => {
    try {
        // Get all transactions for an address from block 0 and store in txns
        const response = await alchemy.core.getAssetTransfers({
            // filter for minting events
            fromBlock: "0x0",
            fromAddress: fromAddress,
            excludeZeroValue: true,
            category: ["erc721", "erc1155"],
        });

        // Log transfer information for each transaction
        const txns = response.transfers;
        txns.forEach((transaction) => {
            console.log(`From: ${transaction.from}`);
            console.log(`To: ${transaction.to}`);
            console.log(`Transaction Hash: ${transaction.hash}`);
            console.log(`Unique ID: ${transaction.uniqueId}`);
            console.log(`Block Number: ${transaction.blockNum}`);
            console.log(`Asset: ${transaction.asset}`);
            console.log(`Value: ${transaction.value}`);
            console.log("---------------------------");
        });
    
    } catch (error) {
        console.error('Error fetching transaction history:', error);
    }
}

// Function to run the main function and handle any errors.
const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
};

runMain();