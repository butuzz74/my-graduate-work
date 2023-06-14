import React, { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";
import Cart from "../main/Cart";
import { MainPageContext } from "../../context/context";
import projectorService from "../../service/projector.service";

const CardItem = () => {
  const params = useParams();
  const { cardId } = params;
  const { getCountCart, getSelectedGoods, countCart } =
    useContext(MainPageContext);

  const [card, setCard] = useState();

  const handleCountCart = (card) => {
    getCountCart(card);
    getSelectedGoods(card);
  };

  const getProjector = async (id) => {
    try {
      const content = await projectorService.get(id);
      setCard(content);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProjector(cardId);
  }, [cardId]);

  if (card) {
    return (
      card && (
        <div className="main">
          <Cart countCart={countCart} />
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
