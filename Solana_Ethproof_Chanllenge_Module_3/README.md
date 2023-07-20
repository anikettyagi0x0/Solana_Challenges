# Transactions in Action Challenge

Challenge_Task: Take a look at a Failed tx and a Successful tx and share a few key differences between them: 
<br>
[Failed TX](https://explorer.solana.com/tx/3f5385da6aJ86dPXdmZHUZWccBLsi24fwpZhA7ST2nYBZ95XCyG6pCjhyXXZLjqhsSzDxdHxzoi13Yrx4UwEg3J2)
<br>
[Successful TX](https://explorer.solana.com/tx/5qAvAYuACKSLRgewTyCWBqSHTrGg73B61Ao6V2HamZsG1imuZRgQBExbkqTVz8WxU98JTjAzBMGrUvUz2B17yGyQ)


From the provided information, we have two transactions, one that failed and one that succeeded. Let's examine the key differences between the failed transaction and the successful transaction:

**Transaction Status:**

*Failed Transaction:* The first transaction encountered an error and did not complete successfully. The error message indicates "Program Error: 'Instruction #1 Failed'". It appears that the specific instruction in the transaction failed to execute properly.

*Successful Transaction:* The second transaction, on the other hand, was successful and completed without encountering any errors. The program instruction in this transaction returned a success message.

**Result:**

*Failed Transaction:* The result of the failed transaction shows an error, indicating that the transaction did not go through as expected.

*Successful Transaction:* The result of the successful transaction shows "Success", indicating that the transaction was completed successfully without any issues.

**Transaction Version:**

*Failed Transaction:* The failed transaction is using the "LEGACY" transaction version.

*Successful Transaction:* The successful transaction is also using the "LEGACY" transaction version.

**Program Instruction Logs:**

*Failed Transaction:* The logs for the failed transaction indicate that the "Vote Program Instruction" returned an error: "custom program error: 0x0".

*Successful Transaction:* The logs for the successful transaction indicate that the "Vote Program Instruction" returned success.

**Recent Blockhash:**

*Failed Transaction:* The blockhash for the failed transaction is "Cc1QXt5jYuVM8vT7s92x5ZkackNtPSKqtAVrQShBCwtK".

*Successful Transaction:* The blockhash for the successful transaction is "DtdBpXynNtKdsRqTBVXJxwRVwx1tX2dVjnr9d2ud6mf5".

**Fee:**

Both transactions have a fee of ◎0.000005 SOL, indicating the amount charged for processing the transactions.
Overall, the key differences between the two transactions lie in the status (failed vs. successful), the result (error vs. success), and the specific program instruction logs (error message vs. success message). Other differences include the slot number, recent blockhash, and the time of the transactions.

**Program Instruction Logs:**

*Failed Transaction:* The logs for the failed transaction indicate that the "Vote Program Instruction" returned an error: "Program returned error: 'custom program error: 0x0'".

*Successful Transaction:* The logs for the successful transaction indicate that the "Vote Program Instruction" returned success: "Program returned success".
