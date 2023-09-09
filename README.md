# sending_ethers
This is an example on how we can use the ethers library to send ethers from one Ethereum account to another.

Before using the program in the file: `\ethereum_examples\node_modules\ethers\package.json` in the section export we must add:

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

Then we need to insert our information in the `.env` and in the `main.ts` file.

