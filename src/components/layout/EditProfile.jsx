import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TextField from "../form/TextField";
import { useAuth } from "../../hooks/useAuth";
import { validator } from "../../utils/validator";
import { validatorConfig } from "../../config/config";
import { getCurrentUserId } from "../../service/localStorage.service";

const EditProfile = () => {
  const { currentUser, updateUser } = useAuth();  
  const [data, setData] = useState({
    nick: "",
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
    const isValid = validate();
    if (!isValid) return;    
    try {
      await updateUser(getCurrentUserId(), data);
    } catch (error) {
      setErrors(error);
    }
  };  

  useEffect(() => {
    if (currentUser) {
      setData((prevState) => ({
        ...prevState,
        nick: currentUser.nick,
        email: currentUser.email,
        password: currentUser.password,
      }));
    }
  }, [currentUser]);
  useEffect(() => {
    validate();
  }, [data]);
  return (
    <>
      <div className="login">
        <div className="row">
          <div className="col-md-6 offset-md-3 p-4 shadow mt-5 bg-transparent text-white">
            <div className="d-flex justify-content-center">
              <h2>Редактировать данные</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <TextField
                  label={"Изменить nickname"}
                  type={"text"}
                  name={"nick"}
                  value={data.nick}
                  onChange={handleChange}
                  placeholder={"Nickname"}
                  id={"nick"}
                  error={errors.nick}
                />
                <TextField
                  label={"Изменить email address"}
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
                    label={"Изменить password"}
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

export default EditProfile;
