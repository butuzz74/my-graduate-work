import React from "react";


const TextAreaField = ({ name, id, rows, value, onChange, label, error, placeholder }) => {
    
    
    return (<>
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
    </>);
};


export default TextAreaField;