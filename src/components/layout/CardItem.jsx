import React, { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import Loader from "../common/Loader";
import Cart from "../main/Cart";
import { useDispatch, useSelector } from "react-redux";
import { addGood, getCountCart } from "../../store/cartSlice";
import { getProjectorById } from "../../store/projectorsSlice";
import { MainPageContext } from "../../context/context";

const CardItem = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { cardId } = params; 
  const countCart = useSelector(getCountCart());
  const card = useSelector(getProjectorById(cardId));
  const {getAccessInCart} = useContext(MainPageContext)  

  const handleCountCart = (card) => {
    dispatch(addGood(card))
  }; 

  if (card) {
    return (
      card && (
        <div className="main">
          <Cart countCart={countCart} getAccessInCart={getAccessInCart}/>
          <div className="card-item col d-flex align-items-stretch">
            <div className="card">
              <img
                src={card.image}
                className="card-img-top"
                style={{ maxWidth: "40%" }}
                alt="Projector"
              />
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h5 className="card-title">Brand: {card.brand}</h5>
                    <h5 className="card-title">Type: {card.type}</h5>
                    <h5 className="card-title">Model: {card.model}</h5>
                    <p className="card-text">Price: {card.price}</p>
                  </div>
                  <div className="col-9">
                    <p>{card.description}</p>
                  </div>
                </div>
                <button type="button" className="btn btn-success">
                  <NavLink
                    to="/"
                    className="nav-link text-decoration-underline"
                    activeClassName="selected"
                    style={{ color: "white" }}
                  >
                    Назад
                  </NavLink>
                </button>
                <button
                  type="button"
                  className="btn btn-success mt-2"
                  onClick={() => handleCountCart(card)}
                >
                  Добавить в корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    );
  } else {
    return (
      <>
        <Loader />
      </>
    );
  }
  
};

export default CardItem;
