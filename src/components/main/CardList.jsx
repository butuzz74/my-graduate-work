import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({ cardsInfo, onCountCart, path, onDelete }) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4 mx-2">
            {cardsInfo.map((card) => (
                <Card
                    key={card._id}
                    card={card}
                    onCountCart={onCountCart}
                    path={path}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};
CardList.propTypes = {
    cardsInfo: PropTypes.array,
    onCountCart: PropTypes.func,
    onDelete: PropTypes.func,
    path: PropTypes.string
};
export default CardList;
