import React from 'react';

const Footer = () => {
    return (    
      <div className="footer py-2">
      © {new Date().getFullYear()} Copyright Text
      <a className="repo" href="#!" style={{color:"white"}}>Repo</a>
      </div>
    )
  
}
 
export default Footer;
