import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CardList from "../main/CardList";
import Pagination from "../main/Pagination";
import Search from "../main/Search";
import CategoriesList from "../main/CategoriesList";
import projectorService from "../../service/projector.service";

const EditGoodsList = () => {
  const { location } = useHistory();
  const history = useHistory();
  const path = location.pathname;
  const countItemOnPage = 4;
  const [projectors, setProjectors] = useState();
  const [cardsCategory, setCardsCategory] = useState();
  const [cardChoice, setCardsChoice] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [value, setValue] = useState("");  

  const getProjectors = async () => {
    try {
      const content = await projectorService.fetchAll();
      
      const newContent = Object.keys(content).map((elem) => content[elem]);
      setProjectors([...newContent]);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProjectors = async (id) => {
    try {
      const content = await projectorService.delete(id);
      if (content === null && cardsCategory) {
        setProjectors((prevState) => prevState.filter((el) => el.id !== id));
        setCardsCategory((prevState) => prevState.filter((el) => el.id !== id));
      } else  if ( content === null) {
        setProjectors((prevState) => prevState.filter((el) => el.id !== id));

      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProjectors();
  }, []);
  
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
    deleteProjectors(id);
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
    cardChoice.length !== 0 ? [...cardChoice] : projectors && [...projectors];
  const itemForPageCategory = cardsCategory && [...cardsCategory];
  
  const pagination = (arr, num) => {    
    const arrPage = arr ? arr.splice((num - 1) * countItemOnPage, countItemOnPage) : null;
    if(arr && arrPage.length === 0){
      setActivePage(prevState => prevState-1)
    }
    return arrPage;
  };
  const itemOnPage = pagination(itemForPage, activePage);
  const itemOnPageCategory = pagination(itemForPageCategory, activePage);

  return (
    projectors && (
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
