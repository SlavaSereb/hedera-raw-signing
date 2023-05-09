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
sudo npm install -g typescript ts-node
```


### Usage

1. Open the ```associateToken.ts``` file and edit the following values:
```
const network - 'mainnet' or 'testnet' according to the network you are running on.
```
```
const TOKEN_ID - the ID of the token to associate. For example: '0.0.12345'
```
```
const privkeyPath - Path to the fireblocks secret key file. For example: '/Users/example/apiKeys/fireblocks_secret.key'
```
```
const apiKey - your Fireblocks API key. For example '8e4160e1-6c47-2e30-3e6d-043c07325691'
```
```
const vaultAccountIds - an array of numbers that represent the vault account IDs to run this operation for.
The vault account ID can be fetched via the API by listing all the vault accounts in the workspace or alternatively by opening a specific vault in the Fireblocks console and taking the numeric value from the URL, for example:
https://console.fireblocks.io/v2/accounts/vault/5 -> vault account ID is 5
```
2. Run the script from the terminal:
```
ts-node associateToken.ts
```
OR 
```
npm start
```
