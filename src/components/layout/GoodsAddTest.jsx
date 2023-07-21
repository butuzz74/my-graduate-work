import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import TextField from "../form/TextField";
import { useParams } from "react-router-dom";
import goodsService from "../../service/goods.service";
import { nanoid } from "nanoid";
import SelectField from "../form/SelectField";
import configFile from "../../config/config.json"
// import { MainPageContext } from "../../context/context";

const GoodsAddTest = () => {
  const { cardId } = useParams();

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
//   const { createNewGood } = useContext(MainPageContext);
//   const getProjectors = async (id) => {
//     try {
//       const content = await projectorService.get(id);
//       setData(content);
//     } catch (error) {
//       console.log(error);
//     }
//   };
const getGoods = async (category, data) => {
    try {
      const content = await goodsService.fetchAll();
      console.log(content)    
    } catch (error) {
      console.log(error);
    }
  };
  const createNewGood = async (category, data) => {
    try {
      const content = await goodsService.create(category + "/", data);
      console.log(content)
    //   history.push("/cardaddgood");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGoods()
  }, []);

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newGood = { ...data, id: nanoid() };
    try {
      await createNewGood(data.category, newGood);
    } catch (error) {
      console.log(error);
    }
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
              {/* <TextField
                label={"Category"}
                type={"text"}
                name={"category"}
                value={data.category}
                onChange={handleChange}
                placeholder={"Category"}
                id={"category"}
                // error={errors.nick}
              /> */}
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
              <TextField
                label={"Description"}
                type={"text"}
                name={"description"}
                value={data.description}
                onChange={handleChange}
                placeholder={"Description"}
                id={"description"}
                // error={errors.email}
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
                to="/maintest"
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

export default GoodsAddTest;
