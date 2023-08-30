import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import configFile from "../../config/config.json";
import localStorageService from "../../service/localStorage.service";
import { clearCart, getSelectedGood } from "../../store/cartSlice";
import { sendOrder } from "../../store/orderSlice";
import TableHeader from "../table/TableHeader";
import TableBodyForBasketList from "../table/TableBodyForBasketList";
import Button from "../common/Button";

const BasketList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const selectedGood = useSelector(getSelectedGood());

    const totalPriceOrder = selectedGood.reduce((sum, item) => {
        return sum + +item.amount * +item.price.split(" ").join("");
    }, 0);

    const handleSendOrder = async() => {
        const goodInfo = selectedGood.map((e) => ({
            amount: e.amount,
            _id: e._id
        }));
        const orderInfo = {
            userId: localStorageService.getCurrentUserId(),
            content: goodInfo,
            totalPriceOrder
        };

        dispatch(sendOrder(orderInfo));
        dispatch(clearCart());
        history.push("/");
    };
    return (
        <>
            <div className="login d-flex justify-content-center align-items-center">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto md-3 p-4 shadow mt-5 bg-white mb-5 rounded-4">
                        <div className="d-flex justify-content-center">
                            <div className="d-flex  flex-column mx-auto justify-content-center align-items-center mt-2">
                                <div className="mb-2">
                                    <h2>Корзина</h2>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-middle">
                                        <TableHeader
                                            date={
                                                configFile.columsForBasketItem
                                            }
                                        />
                                        <TableBodyForBasketList
                                            data={selectedGood}
                                        />
                                    </table>
                                </div>
                                <h2>Общая сумма заказа : {totalPriceOrder}</h2>
                                <div
                                    className="d-flex justify-content-between mt-4"
                                    style={{ width: "500px" }}
                                >
                                    <Button
                                        className={"btn btn-primary"}
                                        onClick={handleSendOrder}
                                    >
                                        Отправить заказ
                                    </Button>
                                    <NavLink to="/" className="btn btn-primary">
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
