import React from "react";
// import PropTypes from "prop-types";

const Icon = ({ reference, tooltip,className, role, databstitle }) => {
    return (
    <i
      ref={reference}
      data-bs-toggle={tooltip}
      data-bs-custom-class="custom-tooltip"
      data-bs-title={databstitle}
      className={className}
      role={role}
    ></i>
  );
};
// Icon.propTypes = {
//     reference: PropTypes.object,
//     getTooltip: PropTypes.func,
//     className: PropTypes.string,
//     role: PropTypes.string,
//     databstitle: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
//     
//     
// };
export default Icon;
