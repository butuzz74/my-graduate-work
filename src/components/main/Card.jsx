import React from "react";
import { NavLink } from "react-router-dom";


const Card = ({card, onCountCart, path, onDelete}) => {  
  return (
    card && (
      <div className="col d-flex align-items-stretch direction-column">      
        <div className="card">
          <div className="card-image">
            <img src={card.image} className="card-img-top" alt="Projector" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Brand: {card.brand}</h5>
            <h5 className="card-title">Type: {card.type}</h5>
            <h5 className="card-title">Model: {card.model}</h5>
            <p className="card-text">Price: {card.price}</p>
            {path !== "/cardaddgood" ? (<><button type="button" className="btn btn-success">
              <NavLink
                to={`/${card.id}`}
                className="nav-link text-decoration-underline"
                activeClassName="selected"
                style={{ color: "white" }}
              >
                Посмотреть
              </NavLink>
            </button>
            <button type="button" className="btn btn-success mt-2" onClick={()=>onCountCart(card)} >Добавить в корзину</button></>) : (<><button type="button" className="btn btn-success">
              <NavLink
                to={`/cardeditgood/${card.id}`}
                className="nav-link text-decoration-underline"
                activeClassName="selected"
                style={{ color: "white" }}
              >
                Редактировать
              </NavLink>
            </button>
            <button type="button" className="btn btn-success mt-2" onClick={()=>onDelete(card.id)}>Удалить</button></>)}
          </div>
        </div>
      </div>
    )
  );
};

export default Card;
