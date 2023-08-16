import React, { useEffect, useState } from "react";
import OrderItem from "../order/orderItem";
import localStorageService from "../../service/localStorage.service";
import { NavLink, useHistory } from "react-router-dom";
import TableHeader from "../table/TableHeader";
import TableBody from "../table/TableBody";
import { useDispatch, useSelector } from "react-redux";
import { getOrderListCurrentUser, orderListCurrentUser } from "../../store/orderSlice";
import configFile from "../../config/config.json"

const OrdersList = () => {
  const dispatch = useDispatch();
  const orderRedux = useSelector(getOrderListCurrentUser());  
  const [order, setOrder] = useState();
  
  useEffect(() => {
    dispatch(orderListCurrentUser(localStorageService.getCurrentUserId()))
  }, []);
  useEffect(() => {
    setOrder(orderRedux)
  }, [orderRedux]);
 
  return (
    <>
      <div className="login d-flex justify-content-center align-items-center">
        <div className="row justify-content-md-center">
          <div className="col-md-auto md-3 p-4 shadow mt-5 bg-white mb-5 rounded-4">
            <div className="d-flex justify-content-center">
              <div className="d-flex  flex-column mx-auto justify-content-center align-items-center mt-2">
                {order ? (
                  <>
                    <div className="mb-2">
                      <h2>Список заказов</h2>
                    </div>
                    <div className="table-responsive">
                      <table className="table align-middle">
                        <TableHeader date={configFile.columsForOrderList}/>
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
