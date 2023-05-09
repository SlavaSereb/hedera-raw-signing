import fs from "fs";
import path from "path";
import { TokenAssociateTransaction, AccountId } from "@hashgraph/sdk";
import { FireblocksSDK } from 'fireblocks-sdk';
import { FireblocksProvider } from "./utils/FireblocksProvider";


const network = 'testnet';
const TOKEN_ID = "0.0.4577248"
const privkeyPath = "/Users/slavaserebriannyi/api_keys/fireblocks_secret.key";
const apiKey = "d5ce7e80-d6a5-598a-88a3-037660377627";
const vaultAccountIds = [ 89 , 0 ]


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