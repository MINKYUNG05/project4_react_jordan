import React from "react";
import Logotest from "../logotest.js";

const Logo = () => {
    return (
        <>
            <svg width="66px" height="62px" viewBox="0 0 66 62">
            <g id="logo" fill="#FFFFFF">
            <path d={Logotest[0]}/>
            </g>
            </svg>
        </>
    );
}

export default Logo;