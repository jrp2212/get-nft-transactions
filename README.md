## Overview
This repository contains a JavaScript script that utilizes Alchemy's SDK to fetch the details of all the NFT transactions by an address. For each NFT, the fields below are printed, however, to see all fields refer to the [Alchemy API reference](https://docs.alchemy.com/reference/sdk-getassettransfers):


- the from address of the transfer
- the to address of the transfer
- transaction hash of the transfer
- unique id of transfer
- block number where transfer occurred
- token symbol
- asset transfer value


## Steps to Run

Before running the script, ensure that you have [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed on your system. 

Follow these steps to run the script:

1. Clone this repository to your local machine:
`git clone https://github.com/alchemyplatform/[Insert Here]`


2. Navigate to the project folder: `cd get-nft-transactions`


3. Open the `sample.env` file and update the value for the API Key to your own value and rename file to `.env`. If you don't have an Alchemy API Key yet you can [create one for free here](https://alchemy.com/?a=starter-code).

4. Open `get_nft_transactions.js` and update the value of the Wallet Address found within the main function to reflect the wallet that you will be querying.


5. Initialize the project by running the following command: `yarn init --yes`


6. Install the Alchemy SDK and the `dotenv` package running the following commands: `yarn add alchemy-sdk dotenv`


7. Run the script in the terminal: `node get_nft_transactions.js`


By following these steps, the script will get the history of all the NFT transactions by an address, printing out the desired fields to the console.


## Frequently Used Options and Best Practices
When working with the Alchemy SDK, there are several options and best practices that you can consider:

### Pagination
By default, the request for NFTs has a page size of 100. If you have a large number of transfers and want to retrieve all of them, you can implement pagination. Alchemy's API supports pagination using the `page` and `size` parameters. You can adjust the `size` parameter to specify the number of NFTs to retrieve per page and use the `page` parameter to iterate through the pages of results.

### Filtering and Excluding Transactions
The Alchemy API allows you to apply filters to your transaction requests. For example, you can exclude certain transactions based on specific criteria. The exact filtering options depend on the available fields and operators supported by Alchemy's API. Please refer to the linked API reference doc above for more information on how to apply filters to your requests.
