import React from "react";
import PropTypes from "prop-types";

const TextAreaField = ({
    name,
    id,
    rows,
    value,
    onChange,
    label,
    error,
    placeholder
}) => {
    return (
        <>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <textarea
                className={error ? "form-control is-invalid" : "form-control"}
                id={id}
                name={name}
                rows={rows}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            ></textarea>
            {error && <div className="invalid-feedback">{error}</div>}
        </>
    );
};
TextAreaField.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    rows: PropTypes.number,
    value: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    error: PropTypes.string,
    placeholder: PropTypes.string
};
export default TextAreaField;
