import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TextField from "../form/TextField";
import TextAreaField from "../form/TextAreaField";
import { useParams } from "react-router-dom";
import SelectField from "../form/SelectField";
import configFile from "../../config/config.json";
import { useDispatch, useSelector } from "react-redux";
import { createGood, getGoodsById, updatedGoods } from "../../store/goodsSlice";
import Button from "../common/Button";
import { validator } from "../../utils/validator";
import { validatorConfig } from "../../config/config";

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
    access: "",
  };
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({})
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
  const validate = () => {
    const errors = validator(data, validatorConfig);    
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return; 
    if (cardId) {
      // const newGood = { ...data, id: cardId };
      // dispatch(updatedGoods(newGood.category, cardId, newGood));
      const newGood = { ...data };
      dispatch(updatedGoods(cardId, newGood));
    } else {
      // const newGood = { ...data, id: nanoid() };
      // dispatch(createGood(newGood.category + "/", newGood));
      const newGood = { ...data };
      dispatch(createGood(newGood));
    }
    history.push("/cardaddgood");
  };
  useEffect(() => {
    if (cardId) {
      setData(selectGood);
    }
  }, [cardId]);
  useEffect(() => {
    validate();
  }, [data]);  
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
                error={errors.category}
              />
              <TextField
                label={"Brand"}
                type={"text"}
                name={"brand"}
                value={data.brand}
                onChange={handleChange}
                placeholder={"Brand"}
                id={"brand"}
                error={errors.brand}
              />
              <TextField
                label={"Brightness"}
                type={"text"}
                name={"brightness"}
                value={data.brightness}
                onChange={handleChange}
                placeholder={"Brightness"}
                id={"brightness"}                
              />
              <TextAreaField
                label={"Description"}
                id={"description"}
                name={"description"}
                rows={"3"}
                value={data.description}
                placeholder={"Description"}
                onChange={handleChange}                
              />
              <TextField
                label={"Image"}
                type={"text"}
                name={"image"}
                value={data.image}
                onChange={handleChange}
                placeholder={"Image"}
                id={"image"}                
              />
              <TextField
                label={"Model"}
                type={"text"}
                name={"model"}
                value={data.model}
                onChange={handleChange}
                placeholder={"Model"}
                id={"model"}
                error={errors.model}
              />
              <TextField
                label={"Price"}
                type={"text"}
                name={"price"}
                value={data.price}
                onChange={handleChange}
                placeholder={"Price"}
                id={"price"}
                error={errors.price}
              />
              <TextField
                label={"Type"}
                type={"text"}
                name={"type"}
                value={data.type}
                onChange={handleChange}
                placeholder={"Type"}
                id={"type"}
                error={errors.type}
              />
              <SelectField
                label="Доступность"
                name="access"
                value={data.access}
                onChange={handleChange}
                options={["Доступен", "Не доступен"]}
                error={errors.access}
              />
            </div>
            <div className="d-flex justify-content-between">
              <button
                type="submit"
                className="btn btn-primary mb-3"
                  disabled={!isValid}
              >
                Отправить
              </button>
              <Button
                className={"btn btn-primary mb-3"}
                onClick={() => history.push("/cardaddgood")}
              >
                <i className="bi bi-arrow-left" /> Назад
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GoodAddAndUpdate;
