import React, { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, addGood, getCountCart } from "../../store/cartSlice";
import {
    getGoodsById,
    getGoodsById1,
    loadGoodById
} from "../../store/goodsSlice";
import { MainPageContext } from "../../context/context";
import Loader from "../common/Loader";
import Cart from "../main/Cart";
import Button from "../common/Button";

const CardItem = () => {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const { cardId } = params;
    const cardExisting = useSelector(getGoodsById(cardId));
    const countCart = useSelector(getCountCart());
    useEffect(() => {
        if (!cardExisting) {
            dispatch(loadGoodById(cardId));
        }
    }, []);
    const cardNoExisting = useSelector(getGoodsById1());
    const card = cardExisting || cardNoExisting;
    const { getAccessInCart } = useContext(MainPageContext);
    const handleCountCart = (card) => {
        dispatch(addGood(card));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return card
        ? (
            <div className="main">
                <div className="d-flex justify-content-end pt-5 pe-5">
                    <Cart
                        countCart={countCart}
                        getAccessInCart={getAccessInCart}
                        onClearCart={handleClearCart}
                    />
                </div>
                <div className="card-item col d-flex align-items-stretch">
                    <div className="card">
                        <img
                            src={card.image}
                            className="card-img-top"
                            style={{ maxWidth: "40%" }}
                            alt="Ваш товар"
                        />
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title">
                                    Brand: {card.brand}
                                    </h5>
                                    <h5 className="card-title">
                                    Type: {card.type}
                                    </h5>
                                    <h5 className="card-title">
                                    Model: {card.model}
                                    </h5>
                                    <h5 className="card-text">
                                    Price: {card.price}
                                    </h5>
                                    <h5 className="card-text">
                                    Access:{" "}
                                        {card.access === "Доступен"
                                            ? (
                                                <i className="bi bi-patch-check text-success"></i>
                                            )
                                            : (
                                                <i className="bi bi-patch-minus text-danger"></i>
                                            )}
                                    </h5>
                                </div>
                                <div className="col-9">
                                    <p>{card.description}</p>
                                </div>
                            </div>
                            <Button
                                className={"btn btn-success"}
                                onClick={() => history.goBack()}
                            >
                            Назад
                            </Button>
                            <Button
                                className={"btn btn-success mt-2"}
                                onClick={() => handleCountCart(card)}
                            >
                            Добавить в корзину
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
        : (
            <Loader />
        );
};

export default CardItem;
