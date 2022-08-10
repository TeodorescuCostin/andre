import React, { Component } from "react";
import { Link } from "react-router-dom";
import NeyaLogo from '../images/NeyaLogo.svg'

class Presentation extends Component {

    render() {
        return (
            <div className="sideElements">
                <div className="sideLogo">
                    <img className="sideLogoIcon" src={NeyaLogo} />
                </div>
                <div className="sidePresentation">
                    <span className="sidePresentationTitle">
                        Welcome Back!
                    </span>
                    <span className="sidePresentationText">
                        To keep your account safe we suggest our 2-factor authenticator.
                    </span>
                </div>
            </div>
        );
    }
}

export default Presentation;
