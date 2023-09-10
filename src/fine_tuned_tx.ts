import ethers, { Wallet } from "ethers";
import { parseUnits } from "ethers/lib.commonjs/utils" ;  
import { InfuraProvider } from "ethers/lib.commonjs/providers";
import 'dotenv/config'

const main = async () => {
  
  const network: string = process.env.ETHEREUM_NETWORK ?? "sepolia";
  const provider: InfuraProvider = new InfuraProvider(
    network,
    process.env.INFURA_PROJECT_ID,
    process.env.API_KEY_SECRET
  );

  const signer = new Wallet(process.env.SIGNER_PRIVATE_KEY ?? '', provider);

  const fromAddress: string = "your_from_ethereum_account";
  const toAddress: string = "your_to_ethereum_account";

  const limit: bigint = await provider.estimateGas({
    from: fromAddress,
    to: toAddress,
    value: parseUnits("0.0000001", "ether"),
  });

  const tx = await signer.sendTransaction({
    from: fromAddress,
    to: toAddress,
    value: parseUnits("0.0000001", "ether"),
    gasLimit: limit,
    nonce: await signer.getNonce(),
    maxPriorityFeePerGas: parseUnits("1", "gwei"),
    chainId: 11155111,
  });
  console.log("Mining transaction...");
  console.log(`https://${network}.etherscan.io/tx/${tx.hash}`);
  
  const receipt: ethers.ethers.TransactionReceipt | null = await tx.wait();
  
  if(receipt != null) {
    console.log(`Mined in block ${receipt.blockNumber}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})