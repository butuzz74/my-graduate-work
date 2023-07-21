import React, { useEffect, useState } from "react";
import OrderItem from "../order/orderItem";
import { useAuth } from "../../hooks/useAuth";
import localStorageService from "../../service/localStorage.service";
import { NavLink, useHistory } from "react-router-dom";
import TableHeader from "../table/TableHeader";
import TableBody from "../table/TableBody";

const OrdersList = () => {
  const { getOrderById } = useAuth();
  const [order, setOrder] = useState();
  const history = useHistory();

  const handleGetOrder = async () => {
    try {
      const data = await getOrderById(localStorageService.getCurrentUserId());
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoToOrderCard = () => {
    history.push("/ordercard");
  };
  useEffect(() => {
    handleGetOrder();
  }, []);
  console.log(order);
  return (
    <>
      <div className="login">
        <div className="row">
          <div className="col-md-6 offset-md-3 p-4 shadow mt-5 bg-white mb-5">
            <div className="d-flex justify-content-center">
              <div className="d-flex  flex-column mx-auto justify-content-center align-items-center mt-2">
                {order ? (
                  <>
                    <div className="mb-2">
                      <h2>Список заказов</h2>
                    </div>
                    <div class="table-responsive">
                      <table className="table align-middle">
                        <TableHeader />
                        <TableBody data={order} />
                      </table>
                    </div>
                    {/* <ol>
                      {Object.keys(order).map((el, index) => (
                        <OrderItem
                          key={el}
                          time={order[el].info.time}
                          positions={order[el].content.length}
                          sum={order[el].info.totalPriceOrder}
                          order={el}
                          goToOrderCard={handleGoToOrderCard}
                        />
                      ))}
                    </ol> */}
                    <NavLink to="/" className="btn btn-primary">
                      На главную страницу
                    </NavLink>
                  </>
                ) : (
                  <h2>У Вас не было еще заказов!</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersList;
