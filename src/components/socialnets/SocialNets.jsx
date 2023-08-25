import React from "react";
import { Tooltip } from "react-tooltip";

const SocialNets = () => {
  return (
    <div className="d-flex justify-content-between">
      <i
        className="bi bi-facebook mx-3"
        data-tooltip-id="facebook"
        data-tooltip-content="Go to our Facebook!"
        role="button"
      ></i>
      <i
        className="bi bi-twitter mx-3"
        data-tooltip-id="twitter"
        data-tooltip-content="Go to our Twitter!"
        role="button"
      ></i>
      <i
        className="bi bi-instagram mx-3"
        data-tooltip-id="instagram"
        data-tooltip-content="Go to our Instagram!"
        role="button"
      ></i>
      <Tooltip id="facebook" style={{backgroundColor:"#6610f2"}}/>
      <Tooltip id="twitter" style={{backgroundColor:"#6610f2"}}/>
      <Tooltip id="instagram" style={{backgroundColor:"#6610f2"}}/>
    </div>
  );
};

export default SocialNets;
