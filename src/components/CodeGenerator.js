import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moralis from 'moralis/dist/moralis.min.js';
import { login } from '../functions/login'

const serverUrl="https://drww6jthgc1z.usemoralis.com:2053/server";
const appId="TF33IR2fFIdZclNmTe4Xi0myM01dJiXqjSPvStI1";
Moralis.start({ serverUrl, appId });


class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      codeEncrypted: "",
      codeDecrypted: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }


    async login() {
    
        let user = Moralis.User.current();
        if(!user) {
            try {
                user = await Moralis.authenticate({ signingMessage: "Authenticate"});
                await Moralis.enableWeb3();
                console.log(user);
                console.log(user.get('ethAddress'));
    
            }catch (error) {
            console.log(error);}
        }
    
        const chainId = 137;
        const chainName = "Polygon Mainnet";
        const currencyName = "MATIC";
        const currencySymbol = "MATIC";
        const rpcUrl = "https://rpc-mainnet.maticvigil.com/";
        const blockExplorerUrl = "https://polygonscan.com/";
        await Moralis.enableWeb3();
    
        await Moralis.addNetwork(
        chainId,
        chainName,
        currencyName,
        currencySymbol,
        rpcUrl,
        blockExplorerUrl
        );
    
        
        const chainid = await Moralis.getChainId();
        //console.log(chainid); 
        const chainID = "0x89"; 
        const chainIdHex = await Moralis.switchNetwork(chainID); 
    }

    async handleSubmit(){
      await login();
      this.setState({codeEncrypted: "Yhdse=="})
    this.setState({codeDecrypted: "Bf2a"})
    }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldTitleRight">
              Code Generator
            </label>
            <label className="formFieldTitleRightSubtitle">
              Note that it may take a few seconds to load...
            </label>
            <label className="formFieldLabel">
              Code Encrypted
            </label>
            <input
              type="name-input"
              id="email"
              className="formFieldInput"
              placeholder="Here will be displayed your encrypted code"
              name="email"
              value={this.state.codeEncrypted}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel">
              Code Decrypted
            </label>
            <input
              type="name-input"
              id="password"
              className="formFieldInput"
              placeholder="Here will be displayed your decrypted code"
              name="password"
              value={this.state.codeDecrypted}
            />
          </div>

          <div className="formField">
            <button style={{cursor:"pointer"}} onClick={login} className="formFieldButton">Get Code</button>{" "}
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
