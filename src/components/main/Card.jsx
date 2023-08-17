import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../common/Button";

const Card = ({ card, onCountCart, path, onDelete }) => {
  return (
    card && (
      <div className="col d-flex flex-column justify-content-between align-items-stretch">
        <div className="card h-100 d-flex flex-column justify-content-between align-items-stretch ">
          <div className="card-image">
            <img src={card.image} className="card-img-top" alt="Projector" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Brand: {card.brand}</h5>
            <h5 className="card-title">Type: {card.type}</h5>
            <h5 className="card-title">Model: {card.model}</h5>
            <p className="card-text">Price: {card.price}</p>

            {path !== "/cardaddgood" ? (
              <>
                <Button className={"btn btn-success"}>
                  <NavLink
                    to={`/${card.id}`}
                    className="nav-link text-decoration-underline"
                    activeClassName="selected"
                    style={{ color: "white" }}
                  >
                    Посмотреть
                  </NavLink>
                </Button>
                <Button
                  className={"btn btn-success mt-2"}
                  onClick={() => onCountCart(card)}
                >
                  Добавить в корзину
                </Button>
              </>
            ) : (
              <>
                <Button className={"btn btn-success"}>
                  <NavLink
                    to={`/cardeditgood/${card.id}`}
                    className="nav-link text-decoration-underline"
                    activeClassName="selected"
                    style={{ color: "white" }}
                  >
                    Редактировать
                  </NavLink>
                </Button>
                <Button
                  className={"btn btn-success mt-2"}
                  onClick={() => onDelete(card.category, card.id)}
                >
                  Удалить
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Card;
