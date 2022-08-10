import { Moralis } from "moralis";
import { decode } from "punycode";
const serverUrl = "https://drww6jthgc1z.usemoralis.com:2053/server";
const appId = "TF33IR2fFIdZclNmTe4Xi0myM01dJiXqjSPvStI1";
Moralis.start({ serverUrl, appId });

async function login() {
  Moralis.enableWeb3();
  let user = Moralis.User.current();
  if (!user) {
    try {
      user = await Moralis.authenticate({ signingMessage: "Authenticate" });
      await Moralis.enableWeb3();
      console.log(user);
      console.log(user.get("ethAddress"));
    } catch (error) {
      console.log(error);
    }
  }

  const chainId = 137;
  const chainName = "Polygon Mainnet";
  const currencyName = "MATIC";
  const currencySymbol = "MATIC";
  const rpcUrl = "https://rpc-mainnet.maticvigil.com/";
  const blockExplorerUrl = "https://polygonscan.com/";

  await Moralis.addNetwork(
    chainId,
    chainName,
    currencyName,
    currencySymbol,
    rpcUrl,
    blockExplorerUrl
  );

  await Moralis.enableWeb3();
  const chainid = await Moralis.getChainId();
  //console.log(chainid);
  const chainID = "0x89";
  const chainIdHex = await Moralis.switchNetwork(chainID);
}


async function donate() {
  let options = {
    contractAddress: "0x356d2E7a0d592bAd95E86d19479c37cfdBb68Ab9",
    functionName: "newDonation",
    abi: [
      {
        inputs: [{ internalType: "string", name: "note", type: "string" }],
        name: "newDonation",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
    ],
    params: {
      note: "thanks for your work",
    },
    msgValue: Moralis.Units.ETH(0),
  };
  await Moralis.executeFunction(options);
}

export {login};