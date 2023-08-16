import React from "react";
import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getOrderItemById } from "../../store/orderSlice";
import TableHeader from "../table/TableHeader";
import configFile from "../../config/config.json";
import TableBodyForOrderItem from "../table/TableBodyForOrderItem";

const OrderItem = () => {
  const { orderId } = useParams();
  const orderItem = useSelector(getOrderItemById(orderId));

  return (
    <>
      <div className="login d-flex justify-content-center align-items-center">
        <div className="row justify-content-md-center">
          <div className="col-md-auto md-3 p-4 shadow mt-5 bg-white mb-5 rounded-4">
            <div className="d-flex justify-content-center">
              <div className="d-flex  flex-column mx-auto justify-content-center align-items-center mt-2">      
                <>
                  <div className="mb-2">
                    <h2>Заказ #{orderId}</h2>
                  </div>
                  <div className="table-responsive">
                    <table className="table align-middle">
                      <TableHeader date={configFile.columsForOrderItem} />
                      <TableBodyForOrderItem
                        data={orderItem}
                        number={orderId}
                      />
                    </table>
                    <NavLink to="/" className="btn btn-primary">
                      На главную страницу
                    </NavLink>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
