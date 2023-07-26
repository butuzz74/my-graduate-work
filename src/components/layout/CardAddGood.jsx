import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import TextField from "../form/TextField";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import TextAreaField from "../form/TextAreaField";
import SelectField from "../form/SelectField";
import configFile from "../../config/config.json";
import { useDispatch, useSelector } from "react-redux";
import {
  createProjector,
  getProjectorById,
  updatedProjector,
} from "../../store/projectorsSlice";

const CardAddGood = () => {
  const { cardId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const initialState = {
    category: "",
    brand: "",
    brightness: "",
    description: "",
    image: "",
    model: "",
    price: "",
    type: "",
  };
  const [data, setData] = useState(initialState);
  const selectProjector = useSelector(getProjectorById(cardId));
  useEffect(() => {
    setData((prevState) => ({ ...prevState, ...selectProjector }));
  }, []);

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardId) {
      const newGood = { ...data, id: cardId };
      dispatch(updatedProjector(cardId, newGood));
    } else {
      const newGood = { ...data, id: nanoid() };
      dispatch(createProjector(newGood));
    }
    history.push("/cardaddgood");
  };

  return (
    <div className="login">
      <div className="row">
        <div className="col-md-6 offset-md-3 p-4 shadow mt-5 bg-transparent text-white">
          <div className="d-flex justify-content-center">
            {cardId ? <h2>Редактировать товар</h2> : <h2>Добавить товар</h2>}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <SelectField
                label="Выберите категорию"
                name="category"
                value={data.category}
                onChange={handleChange}
                options={configFile.category}
              />
              <TextField
                label={"Brand"}
                type={"text"}
                name={"brand"}
                value={data.brand}
                onChange={handleChange}
                placeholder={"Brand"}
                id={"brand"}
                // error={errors.nick}
              />
              <TextField
                label={"Brightness"}
                type={"text"}
                name={"brightness"}
                value={data.brightness}
                onChange={handleChange}
                placeholder={"Brightness"}
                id={"brightness"}
                // error={errors.email}
              />
              <TextAreaField
                label={"Description"}
                id={"description"}
                name={"description"}
                rows={"3"}
                value={data.description}
                placeholder={"Description"}
                onChange={handleChange}
                // error={errors.content}
              />
              <TextAreaField
                label={"Image"}
                id={"image"}
                name={"image"}
                rows={"2"}
                value={data.image}
                placeholder={"Image"}
                onChange={handleChange}
                // error={errors.content}
              />
              <TextField
                label={"Model"}
                type={"text"}
                name={"model"}
                value={data.model}
                onChange={handleChange}
                placeholder={"Model"}
                id={"model"}
                // error={errors.email}
              />
              <TextField
                label={"Price"}
                type={"text"}
                name={"price"}
                value={data.price}
                onChange={handleChange}
                placeholder={"Price"}
                id={"price"}
                // error={errors.email}
              />
              <TextField
                label={"Type"}
                type={"text"}
                name={"type"}
                value={data.type}
                onChange={handleChange}
                placeholder={"Type"}
                id={"type"}
                // error={errors.email}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mb-3"
              //   disabled={!isValid}
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
  );
};

export default CardAddGood;
