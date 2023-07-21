// Import Solana web3 functinalities
const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
    Transaction,
    SystemProgram,
    sendAndConfirmRawTransaction,
    sendAndConfirmTransaction
} = require("@solana/web3.js");


// Making a keypair and getting the private key

const newPair = Keypair.generate();
console.log(newPair);


const DEMO_FROM_SECRET_KEY = new Uint8Array(

    [   // Fill this block with your secret Key in array format
      ]            
);

const transferSol = async() => {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    // Get Keypair from Secret Key
    const from = Keypair.fromSecretKey(DEMO_FROM_SECRET_KEY);

    const to = Keypair.generate();

    // Aidrop 2 SOL to Sender wallet

    console.log("Airdopping some SOL to Sender wallet!");
    const fromAirDropSignature = await connection.requestAirdrop(
        new PublicKey(from.publicKey),
        2 * LAMPORTS_PER_SOL
    );

    // Latest blockhash (unique identifer of the block) of the cluster
    let latestBlockHash = await connection.getLatestBlockhash();

    // Confirm transaction using the last valid block height (refers to its time)
    await connection.confirmTransaction({
        blockhash: latestBlockHash.blockhash,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        signature: fromAirDropSignature
    });

    console.log("Airdrop completed for the Sender account");

    console.log("Get Wallet Balance")
    const senderAccountInfo = await connection.getBalance(from.publicKey);
    const senderBalance = parseInt(senderAccountInfo)/LAMPORTS_PER_SOL;
    console.log('Sender wallet balance:', senderBalance);

    // Transfer Money 'from' Wallet of 50% 

    const amountToSend = senderBalance / 2;

    if (amountToSend <= 0) {
        console.log('Insufficient balance to make the transfer.');
        return;
    }

    // Send money from "from" wallet and into "to" wallet
    var transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: from.publicKey,
            toPubkey: to.publicKey,
            lamports: amountToSend * LAMPORTS_PER_SOL
        })
    );

    // Sign transaction
    var signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [from]
        
    );
    console.log('Transaction sent. Signature is', signature);
}

transferSol();
