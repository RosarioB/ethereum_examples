# sending_ethers
This repository demostrates how to use the `ethers` library to send ethers from one Ethereum account to another.

There are two files: `simple_tx.ts` contains an example of a very straightforward transaction with no fine-tuning over the transaction parameters. Instead the file `fine_tuned_tx.ts` contains the example of a fine-tuned transaction.

1. Run `npm install`
2. Before using the program in the file: `\ethereum_examples\node_modules\ethers\package.json` in the section export we must add:

        ```
        "./lib.commonjs/utils": {
                "import": "./lib.commonjs/utils/index.js",
                "default": "./lib.commonjs/utils/index.js"
        },
            "./lib.commonjs/providers": {
                "import": "./lib.commonjs/providers/index.js",
                "default": "./lib.commonjs/providers/index.js"
        }
        ```

3. Then we need to fill out the files `.env`, `simple_tx.ts` and `fine_tuned_tx.ts` with the desired informations.

4. To compile and run the two file execute `npm run simple` and `npm run fine_tuned` to compile the typescript code and then execute the `simple_tx.ts` file or the `fine_tuned_tx.ts` file, respectively.
