import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MainPageContext } from "../../context/context";
import BasketItem from "../BasketItem";

const BasketList = () => {
  const { selectedGood } = useContext(MainPageContext);
  const totalPriceOrder = selectedGood.reduce((sum, item) => {
    return sum + +item.amount * +item.price;
  }, 0);

  const handleSendOrder = () => {
    const totalOrder = [...selectedGood, { totalPriceOrder }];
    console.log(totalOrder);
  };

  return (
    <>
      <div className="login">
        <div className="row">
          <div className="col-md-6 offset-md-3 p-4 shadow mt-5 bg-white">
            <div className="d-flex justify-content-center">
              <div className="d-flex  flex-column mx-auto justify-content-center align-items-center mt-2">
                <div className="mb-2">
                  <h2>Корзина</h2>
                </div>
                <ol>
                  {selectedGood.length !== 0 ? (
                    selectedGood.map((item) => (
                      <BasketItem key={item.id} {...item} />
                    ))
                  ) : (
                    <h3>Корзина пуста</h3>
                  )}
                </ol>
                <h2>Общая сумма заказа : {totalPriceOrder}</h2>
                <div
                  className="d-flex justify-content-between mt-4"
                  style={{ width: "500px" }}
                >
                  <button
                    className="btn btn-primary"
                    onClick={handleSendOrder}
                  >
                    Отправить заказ
                  </button>
                  <NavLink
                    to="/"
                    className="btn btn-primary"
                  >
                    На главную страницу
                  </NavLink>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketList;
