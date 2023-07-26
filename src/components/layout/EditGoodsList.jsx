import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CardList from "../main/CardList";
import Pagination from "../main/Pagination";
import Search from "../main/Search";
import CategoriesList from "../main/CategoriesList";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProjector,
  getProjectorsRedux,
} from "../../store/projectorsSlice";

const EditGoodsList = () => {
  const dispatch = useDispatch();
  const { location } = useHistory();
  const history = useHistory();
  const path = location.pathname;
  const countItemOnPage = 4;
  const projectorsRedux = useSelector(getProjectorsRedux());  
  const [projectors, setProjectors] = useState([]);
  const [cardsCategory, setCardsCategory] = useState();
  const [cardChoice, setCardsChoice] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [value, setValue] = useState("");

  useEffect(()=>{
    setProjectors(projectorsRedux);
  }, [projectorsRedux])
  const handleCategoryItems = (cat) => {
    setCardsCategory(projectors.filter((card) => card.type === cat));
  };
  const handleOnBack = () => {
    setCardsCategory();
  };
  const handleOnSearch = (e) => {
    setValue(e.target.value);
  };

  const handleDeleteGood = (id) => {
    dispatch(deleteProjector(id));
  };

  useEffect(() => {
    projectors &&
      setCardsChoice(
        projectors.filter(
          (elem) =>
            elem.type
              .split(" ")
              .join("")
              .toLowerCase()
              .includes(value.split(" ").join("").toLowerCase()) ||
            elem.model
              .split(" ")
              .join("")
              .toLowerCase()
              .includes(value.split(" ").join("").toLowerCase())
        )
      );
  }, [value]);
  const handleActivePage = (page) => {
    setActivePage(page);
  };

  const countPage = cardsCategory
    ? Math.ceil(cardsCategory.length / countItemOnPage)
    : cardChoice.length !== 0
    ? Math.ceil(cardChoice.length / countItemOnPage)
    : projectors
    ? Math.ceil(projectors.length / countItemOnPage)
    : 0;
  const itemForPage =
    cardChoice.length !== 0 && projectors.length !== 0
      ? [...cardChoice]
      : [...projectors];
  const itemForPageCategory = cardsCategory && [...cardsCategory];

  const pagination = (arr, num) => {    
    if (arr && arr.length !== 0) {
      const arrPage = arr.splice((num - 1) * countItemOnPage, countItemOnPage);
      if (arr && arrPage.length === 0) {
        setActivePage((prevState) => prevState - 1);
      }
      return arrPage;
    }
  };

  const itemOnPage = pagination(itemForPage, activePage);
  const itemOnPageCategory = pagination(itemForPageCategory, activePage);

  return (
    projectors && projectors.length !== 0 &&
    (itemOnPage || itemOnPageCategory) && (
      <div className="main py-3 px-3">
        <div className="d-flex justify-content-end align-items-baseline ">
          <Search onSearch={handleOnSearch} value={value} />
          <button
            type="button"
            className="btn btn-success mt-2"
            onClick={() => history.push("/cardeditgood")}
          >
            Добавить товар
          </button>
          <button
            type="button"
            className="btn btn-success mt-2"
            onClick={() => history.push("/goodsaddtest")}
          >
            Добавить товар тест
          </button>
        </div>
        <div className="content">
          <CategoriesList            
            cardsInfo={projectors}
            onCategoryItems={handleCategoryItems}
            onBack={handleOnBack}
          />
          <CardList
            cardsInfo={itemOnPageCategory ? itemOnPageCategory : itemOnPage}            
            path={path}
            onDelete={handleDeleteGood}
          />
        </div>
        <Pagination
          countPage={countPage}
          activePage={activePage}
          onActivePage={handleActivePage}
        />
      </div>
    )
  );
};

export default EditGoodsList;
