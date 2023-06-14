import React, { useContext, useEffect, useState } from "react";
import Search from "../main/Search";
import CategoriesList from "../main/CategoriesList";
import CardList from "../main/CardList";
import Pagination from "../main/Pagination";
import Cart from "../main/Cart";
import { MainPageContext } from "../../context/context";
import projectorService from "../../service/projector.service";

const Main = () => {
  const { getSelectedGoods, getCountCart, countCart } = useContext(MainPageContext);
  const countItemOnPage = 4;  
  const [projectors, setProjectors] = useState();
  const [cardsCategory, setCardsCategory] = useState();
  const [cardChoice, setCardsChoice] = useState([]);
  const [activePage, setActivePage] = useState(1);
    
const getProjectors = async() => {
  try {
    const content = await projectorService.fetchAll()     
    const newContent = Object.keys(content).map(elem => content[elem])     
    setProjectors(newContent)
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
getProjectors()
},[])
  const handleCategoryItems = (cat) => {
    setCardsCategory(projectors.filter((card) => card.type === cat));
  };
  const handleOnBack = () => {
    setCardsCategory();
  };
  const handleOnSearch = (value) => {
    setCardsChoice(
      projectors.filter((card) => card.model === value || card.type === value)
    );
  };
  const handleActivePage = (page) => {
    setActivePage(page);
  };
  const handleCountCart = (card) => {
    getCountCart(card)
    getSelectedGoods(card);
  };
  const countPage = cardsCategory
    ? Math.ceil(cardsCategory.length / countItemOnPage)
    : projectors
    ? Math.ceil(projectors.length / countItemOnPage)
    : 0;

  const itemForPage = projectors && [...projectors];
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
          <Search onSearch={handleOnSearch} />
          <Cart countCart={countCart} />
        </div>
        <div className="content">
          <CategoriesList
            cardsInfo={projectors}
            onCategoryItems={handleCategoryItems}
            onBack={handleOnBack}
          />
          <CardList
            cardsInfo={
              cardChoice.length !== 0
                ? cardChoice
                : itemOnPageCategory
                ? itemOnPageCategory
                : itemOnPage
            }
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
