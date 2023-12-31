import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({
    label,
    type,
    name,
    value,
    onChange,
    error,
    placeholder,
    id
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <>
            <label htmlFor={id} className="col-form-label">
                {label}
            </label>
            <div className="input-group has-validation">
                <input
                    type={showPassword ? "text" : type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={
                        error ? "form-control is-invalid" : "form-control"
                    }
                    id={id}
                    autoComplete={id}
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
                {error ? <div className="invalid-feedback">{error}</div> : null}
            </div>{" "}
        </>
    );
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string
};
export default TextField;
