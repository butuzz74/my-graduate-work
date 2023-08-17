import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import TextField from "../form/TextField";
import TextAreaField from "../form/TextAreaField";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import SelectField from "../form/SelectField";
import configFile from "../../config/config.json";
import { useDispatch, useSelector } from "react-redux";
import { createGood, getGoodsById, updatedGoods } from "../../store/goodsSlice";

const GoodAddAndUpdate = () => {
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
  const selectGood = useSelector(getGoodsById(cardId));
  useEffect(() => {
    setData((prevState) => ({ ...prevState, ...selectGood }));
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
      dispatch(updatedGoods(newGood.category, cardId, newGood));
    } else {
      const newGood = { ...data, id: nanoid() };
      dispatch(createGood(newGood.category + "/", newGood));
    }
    history.push("/cardaddgood");
  };
  useEffect(() => {
    if (cardId) {
      setData(selectGood);
    }
  }, [cardId]);
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
                placeholder={"Brand test"}
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
              <TextField
                label={"Image"}
                type={"text"}
                name={"image"}
                value={data.image}
                onChange={handleChange}
                placeholder={"Image"}
                id={"image"}
                // error={errors.email}
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
                to="/cardaddgood"
                className="nav-link text-decoration-underline d-flex justify-content-center"
              >
                {" "}
                <i className="bi bi-arrow-left" /> Назад
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodAddAndUpdate;
