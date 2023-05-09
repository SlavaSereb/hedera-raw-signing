# Fireblocks Hedera RAW Signing SDK

### Setup

1. Clone the repository:
```
git clone git@github.com:SlavaSereb/hedera-raw-signing.git
```
2. cd into to the clonned directory:
``` 
cd hedera-raw-signing
```

3. Install dependencies:
```
npm install 
```
4. Make sure that typescript & ts-node are installed globally:
```
sudo npm install -g typscript ts-node
```


### Usage

1. Open the ```associateToken.ts``` file and edit the following values:
```
const network - 'mainnet' or 'testnet' according to the network you are running on

const TOKEN_ID - the ID of the token to associate

const privkeyPath - Path to the fireblocks secret key file

const apiKey - your Fireblocks API key

const vaultAccountIds - an array of numbers that represent the vault account IDs to run this operation for
```
2. Run the script from the terminal:
```
ts-node associateToken.ts
```
OR 
```
npm start
```
