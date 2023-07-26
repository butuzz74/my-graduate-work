import React, { useContext, useEffect, useState } from "react";
import Search from "../main/Search";
import CategoriesList from "../main/CategoriesList";
import CardList from "../main/CardList";
import Pagination from "../main/Pagination";
import Cart from "../main/Cart";
import { MainPageContext } from "../../context/context";
import { useDispatch, useSelector } from "react-redux";
import { getProjectorsLoadingStatus, getProjectorsRedux } from "../../store/projectorsSlice";
import { addGood, getCountCart } from "../../store/cartSlice";

const Main = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getProjectorsLoadingStatus());
  const projectors = useSelector(getProjectorsRedux());
  const countCart = useSelector(getCountCart());  
  const { getAccessInCart } =
    useContext(MainPageContext);
  const countItemOnPage = 4;  
  const [cardsCategory, setCardsCategory] = useState();
  const [cardChoice, setCardsChoice] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [value, setValue] = useState("");
 
 
  const handleCategoryItems = (cat) => {
    setCardsCategory(projectors.filter((card) => card.type === cat));
  };
  const handleOnBack = () => {
    setCardsCategory();
  };
  const handleOnSearch = (e) => {
    setValue(e.target.value);
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
  const handleCountCart = (card) => {
    dispatch(addGood(card))
  };
  const countPage = cardsCategory
    ? Math.ceil(cardsCategory.length / countItemOnPage)
    : cardChoice.length !== 0
    ? Math.ceil(cardChoice.length / countItemOnPage)
    : projectors
    ? Math.ceil(projectors.length / countItemOnPage)
    : 0;

  const itemForPage =
    cardChoice.length !== 0 ? [...cardChoice] : projectors && [...projectors];
  const itemForPageCategory = cardsCategory && [...cardsCategory];

  const pagination = (arr, num) => {
    return arr && arr.splice((num - 1) * countItemOnPage, countItemOnPage);
  };
  const itemOnPage = pagination(itemForPage, activePage);
  const itemOnPageCategory = pagination(itemForPageCategory, activePage);

  

  return (
    projectors && (
      <div className="main py-3 px-3">
        <div className="d-flex justify-content-end align-items-baseline ">
          <Search onSearch={handleOnSearch} value={value} />
          <Cart countCart={countCart} getAccessInCart={getAccessInCart} />
        </div>
        <div className="content">
          <CategoriesList
            cardsInfo={projectors}
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
    )
  );
};

export default Main;
