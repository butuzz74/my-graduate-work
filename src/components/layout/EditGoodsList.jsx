import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CardList from "../main/CardList";
import Pagination from "../main/Pagination";
import Search from "../main/Search";
import CategoriesList from "../main/CategoriesList";
import { useDispatch, useSelector } from "react-redux";
import { deleteGoods, getGoodsRedux } from "../../store/goodsSlice";

const EditGoodsList = () => {
  const dispatch = useDispatch();
  const { location } = useHistory();
  const history = useHistory();
  const path = location.pathname;
  const countItemOnPage = 4;
  const goodsRedux = useSelector(getGoodsRedux());
  const [goods, setGoods] = useState([]);
  const [cardsCategory, setCardsCategory] = useState();
  const [cardChoice, setCardsChoice] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [value, setValue] = useState("");

  useEffect(() => {
    setGoods(goodsRedux);
  }, [goodsRedux]);
  const handleCategoryItems = (cat) => {
    setCardsCategory(goods.filter((card) => card.type === cat));    
    setActivePage(1);
  };
  const handleOnBack = () => {
    setCardsCategory();
  };
  const handleOnSearch = (e) => {
    setValue(e.target.value);
  };

  const handleDeleteGood = (path, id) => {
    dispatch(deleteGoods(path, id));
  };

  useEffect(() => {
    goods &&
      setCardsChoice(
        goods.filter(
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
    : goods
    ? Math.ceil(goods.length / countItemOnPage)
    : 0;
  const itemForPage =
    cardChoice.length !== 0 && goods.length !== 0
      ? [...cardChoice]
      : [...goods];
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
    goods &&
    goods.length !== 0 &&
    (itemOnPage || itemOnPageCategory) && (
      <div className="main py-3 px-3">
        <div className="d-flex justify-content-end align-items-baseline ">
          <Search onSearch={handleOnSearch} value={value} />
          <button
            type="button"
            className="btn btn-success mt-2"
            onClick={() => history.push("/goodsaddtest")}
          >
            Добавить
          </button>
        </div>
        <div className="content">
          <CategoriesList
            cardsInfo={goods}
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
