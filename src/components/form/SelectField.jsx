import React from "react";

const SelectField = ({
    label,
    value,
    onChange,
    defaultOptions,
    options,
    error,
    name
}) => {
    // const optionsArr =
    //     !Array.isArray(options) && typeof options === "object"
    //         ? Object.values(options)
    //         : options;
    // const handleChange = ({ target }) => {
    //     onChange({ name: target.name, value: target.value });
    // };
    const getInvalidClasses = () => {
        return `form-control + ${error ? "is-invalid" : ""}`;
    };
    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                className={getInvalidClasses()}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            >
                <option disabled value={defaultOptions ? "" : value}>
                    {defaultOptions || value}
                </option>
                {options &&
                    options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}{" "}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default SelectField;
