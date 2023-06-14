import { createContext, useState } from "react";

export const MainPageContext = createContext();

export const MainPageContextProvider = ({ children }) => {
  const [selectedGood, setSelectedGood] = useState([]);
  const [countCart, setCountCart] = useState(0);

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
        deleteItem
      }}
    >
      {children}
    </MainPageContext.Provider>
  );
};
