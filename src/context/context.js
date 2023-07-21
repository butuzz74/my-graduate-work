import { createContext, useState } from "react";
import { getAccessToken } from "../service/localStorage.service";
import { useHistory } from "react-router-dom";
import projectorService from "../service/projector.service";

export const MainPageContext = createContext();

export const MainPageContextProvider = ({ children }) => {
  const [selectedGood, setSelectedGood] = useState([]);
  const [countCart, setCountCart] = useState(0);
  const history = useHistory();
  
  const createNewGood = async (data) => {
    try {
      const content = await projectorService.create(data);
      console.log(content)
      history.push("/cardaddgood");
    } catch (error) {
      console.log(error);
    }
  };
  
  const getCountCart = (goods) => {
    const containsGood = selectedGood.find((elem) => elem.id === goods.id);
    if (!containsGood) {
      setCountCart((prevState) => prevState + 1);
    }
  };
  const getSelectedGoods = (goods) => {
    const containsGood = selectedGood.find((elem) => elem.id === goods.id);
    if (containsGood) {
      return selectedGood;
    }
    setSelectedGood((prevState) => [...prevState, { ...goods, amount: 1 }]);
  };
  const incrementCountItem = (id) => {
    const changedGoods = selectedGood.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });
    setSelectedGood(changedGoods);
  };
  const dicrementCountItem = (id) => {
    const changedGoods = selectedGood.map((item) => {
      if (item.id === id && item.amount > 0) {
        return { ...item, amount: item.amount - 1 };
      } else {
        return item;
      }
    });
    setSelectedGood(changedGoods);
  };
  const deleteItem = (id) => {
    const filteredGoods = selectedGood.filter((item) => item.id !== id);
    setSelectedGood(filteredGoods);
    setCountCart(filteredGoods.length);
  };
  const getAccessInCart = () => {
    const access = getAccessToken();
    if (access) {
      history.push("./basket");
    } else {
      history.push("./signin");
    }
  };
  const clearCart = () => {
    setSelectedGood([]);
    setCountCart(0);
  };

  return (
    <MainPageContext.Provider
      value={{
        selectedGood,
        getSelectedGoods,
        getCountCart,
        countCart,
        incrementCountItem,
        dicrementCountItem,
        deleteItem,
        getAccessInCart,
        clearCart,           
        createNewGood,
      }}
    >
      {children}
    </MainPageContext.Provider>
  );
};
