import fs from "fs";
import path from "path";
import { TokenAssociateTransaction, AccountId } from "@hashgraph/sdk";
import { FireblocksSDK } from 'fireblocks-sdk';
import { FireblocksProvider } from "./utils/FireblocksProvider";



// Set network (mainnet or testnet)
const network: string = 'testnet';

// Set token ID, for example "0.0.4577248"
const TOKEN_ID: string = "<token_id>"

// Fireblocks API auth artifacts
const privkeyPath: string = "<path_to_private_key_file>";
const apiKey: string = "<api_key>";


// Add your vault account IDs to the array, for example [0, 1, 2]
const vaultAccountIds: number[] = [  ]


const associateToken = async() => {

    try {
    
        const apiSecret = fs.readFileSync(path.resolve(__dirname, privkeyPath), "utf8");
        const fireblocks = new FireblocksSDK(apiSecret, apiKey);
    
        vaultAccountIds.forEach( async (vaultId) => {
        
            const provider = new FireblocksProvider(fireblocks, vaultId, network);
            const client = await provider.getClient()
            
            const transaction = await new TokenAssociateTransaction()
            .setAccountId(provider.address)
            .setTokenIds([TOKEN_ID])
            .setNodeAccountIds([new AccountId(3)])
            .execute(client)
            .catch( e => {
                console.log("Submission to the network failed:\n", e)
            })
            
            console.log(transaction)
        })

    } catch(e) {
        console.log(e)
    } 
}


associateToken()