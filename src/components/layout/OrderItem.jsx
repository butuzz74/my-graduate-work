import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getOrderItemById, orderListCurrentUser } from "../../store/orderSlice";
import configFile from "../../config/config.json";
import TableHeader from "../table/TableHeader";
import TableBodyForOrderItem from "../table/TableBodyForOrderItem";
import Button from "../common/Button";
import localStorageService from "../../service/localStorage.service";

const OrderItem = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { orderId } = useParams();
    const orderItemExisting = useSelector(getOrderItemById(orderId));
    useEffect(() => {
        if (!orderItemExisting) {
            const userId = localStorageService.getCurrentUserId();
            dispatch(orderListCurrentUser(userId));
        }
    }, []);
    const orderItemUpdate = useSelector(getOrderItemById(orderId));
    const orderItem = orderItemExisting || orderItemUpdate;

    return (
        orderItem && <>
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
                                            <TableHeader
                                                date={
                                                    configFile.columsForOrderItem
                                                }
                                            />
                                            <TableBodyForOrderItem
                                                data={orderItem}
                                                number={orderId}
                                            />
                                        </table>
                                        <div className="d-flex justify-content-between">
                                            <Button
                                                className={"btn btn-primary"}
                                                onClick={() =>
                                                    history.push("/")
                                                }
                                            >
                                                На главную страницу
                                            </Button>
                                            <Button
                                                className={"btn btn-primary"}
                                                onClick={() => history.goBack()}
                                            >
                                                Назад
                                            </Button>
                                        </div>
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
