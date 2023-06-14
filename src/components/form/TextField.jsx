import React, { useState } from "react";

const TextField = ({label, type, name, value, onChange, error, placeholder, id}) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => {
    setShowPassword(prevState => !prevState)
    
  }
  return (
    <>
      <label htmlFor={id} className="col-form-label">
        {label}
      </label>
      <div className="input-group has-validation">
        <input
          type={showPassword? "text" : type}
          name={name}
          value={value}
          onChange={onChange}
          className={error ? "form-control is-invalid" : "form-control"}
          id={id}
          placeholder={placeholder}          
        />
        {type === "password" && (
                    <button
                        className="btn btn-outline-light"
                        type="button"
                        onClick={handleShowPassword}
                    >
                        <i
                            className={
                                showPassword ? "bi bi-eye-slash" : "bi bi-eye"
                            }
                        />
                    </button>
                )}
      </div>{" "}
    </>
  );
};

export default TextField;
