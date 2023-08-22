import React, { useContext, useEffect, useState } from "react";
import Search from "../main/Search";
import CategoriesList from "../main/CategoriesList";
import CardList from "../main/CardList";
import Pagination from "../main/Pagination";
import Cart from "../main/Cart";
import { MainPageContext } from "../../context/context";
import { useDispatch, useSelector } from "react-redux";
import { getProjectorsLoadingStatus } from "../../store/projectorsSlice";
import { addGood, clearCart, getCountCart } from "../../store/cartSlice";
import { getGoodsRedux } from "../../store/goodsSlice";
import Loader from "../common/Loader";

const Main = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getProjectorsLoadingStatus());
  const goods = useSelector(getGoodsRedux());
  const countCart = useSelector(getCountCart());
  const { getAccessInCart } = useContext(MainPageContext);
  const countItemOnPage = 4;
  const [cardsCategory, setCardsCategory] = useState();
  const [cardChoice, setCardsChoice] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [value, setValue] = useState("");

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
  const handleCountCart = (card) => {
    dispatch(addGood(card));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const countPage = cardsCategory
    ? Math.ceil(cardsCategory.length / countItemOnPage)
    : cardChoice.length !== 0
    ? Math.ceil(cardChoice.length / countItemOnPage)
    : goods
    ? Math.ceil(goods.length / countItemOnPage)
    : 0;

  const itemForPage =
    cardChoice.length !== 0 ? [...cardChoice] : goods && [...goods];
  const itemForPageCategory =
    cardChoice.length !== 0
      ? [...cardChoice]
      : cardsCategory && [...cardsCategory];

  const pagination = (arr, num) => {
    return arr && arr.splice((num - 1) * countItemOnPage, countItemOnPage);
  };
  const itemOnPage = pagination(itemForPage, activePage);
  const itemOnPageCategory = pagination(itemForPageCategory, activePage);
  return (
    goods ? (
      <div className="main py-3 px-3">
        <div className="d-flex justify-content-end align-items-baseline ">
          <Search onSearch={handleOnSearch} value={value} />
          <Cart
            countCart={countCart}
            getAccessInCart={getAccessInCart}
            onClearCart={handleClearCart}
          />
        </div>
        <div className="content">
          <CategoriesList
            cardsInfo={goods}
            onCategoryItems={handleCategoryItems}
            onBack={handleOnBack}
          />
          <CardList
            cardsInfo={itemOnPageCategory ? itemOnPageCategory : itemOnPage}
            onCountCart={handleCountCart}
          />
        </div>
        <Pagination
          countPage={countPage}
          activePage={activePage}
          onActivePage={handleActivePage}
        />
      </div>
    ) : <Loader/>
  );
};

export default Main;
