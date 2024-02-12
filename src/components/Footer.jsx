import React from "react";

function Footer(){

    const currentyear = new Date().getFullYear();
    return (<footer>
        <p>
            Copy right ©{currentyear}
        </p>
    </footer>);
        
        
    
}
export default Footer;