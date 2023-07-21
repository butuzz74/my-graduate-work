import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { validator } from "../../utils/validator";
import { validatorConfig } from "../../config/config";
import TextField from "../form/TextField";
import { useAuth } from "../../hooks/useAuth";

const SignIn = () => {
  const {signIn, currentUser} = useAuth();
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate()
    if(!isValid) return;    
    try {
      await signIn(data);
      history.push("/");
    } catch (error) {     
      setErrors(error)
    }
  }  

  useEffect(() => {
    validate();
  }, [data]);  
  return (
    <>
      <div className="login">
        <div className="row">
          <div className="col-md-6 offset-md-3 p-4 shadow mt-5 bg-transparent text-white">
            <div className="d-flex justify-content-center">
              <h2>Login</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <TextField
                  label={"Email address"}
                  type={"email"}
                  name={"email"}
                  value={data.email}
                  onChange={handleChange}
                  placeholder={"name@example.com"}
                  id={"email"}
                  error={errors.email}
                />
                <div className="row">
                  <TextField
                    label={"Password"}
                    type={"password"}
                    name={"password"}
                    value={data.password}
                    onChange={handleChange}
                    placeholder={""}
                    id={"password"}
                    error={errors.password}
                  />
                  <span>Must be 8-20 characters long.</span>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-3"
                disabled={!isValid}
              >
                Отправить
              </button>
            </form>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-primary">
                <NavLink
                  to="/signup"
                  className="nav-link text-decoration-underline d-flex justify-content-center text-white"
                >
                  {" "}
                  Sign up
                </NavLink>
              </button>
              <button type="button" className="btn btn-primary">
                <NavLink
                  to="/"
                  className="nav-link text-decoration-underline d-flex justify-content-center"
                >
                  {" "}
                  <i className="bi bi-arrow-left" /> Back to main page
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
