import fs from "fs";
import path from "path";
import { TokenAssociateTransaction, AccountId } from "@hashgraph/sdk";
import { FireblocksSDK } from 'fireblocks-sdk';
import { FireblocksProvider } from "./utils/FireblocksProvider";



// Set network (mainnet or testnet)
const network = 'testnet';

// Set token ID, for example "0.0.4577248"
const TOKEN_ID = "<token_id>"
const privkeyPath = "<path_to_private_key_file>";
const apiKey = "<api_key>";

// Add your vault account IDs to the array, for example [0, 1, 2]
const vaultAccountIds = []


const associateToken = async() => {

    try {

        const apiSecret = fs.readFileSync(path.resolve(__dirname, privkeyPath), "utf8");
        const fireblocks = new FireblocksSDK(apiSecret, apiKey);
    
        vaultAccountIds.forEach( async (vaultId) => {
        
            const provider = new FireblocksProvider(fireblocks, vaultId, network);
            const client = await provider.getClient()
            const accoundId = (await fireblocks.getDepositAddresses(String(vaultId), "HBAR_TEST"))[0].address

            const transaction = await new TokenAssociateTransaction()
            .setAccountId(accoundId)
            .setTokenIds([TOKEN_ID])
            .setNodeAccountIds([new AccountId(3)])
            .execute(client)
            .catch( e => {
                console.log("Submitting to the network failed:\n", e)
            })
            
            console.log(transaction)
        })

    } catch(e) {
        console.log(e)
    } 
}


associateToken()