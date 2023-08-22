import React from "react";

const CategoriesList = ({ cardsInfo, onCategoryItems, onBack }) => {
  const categories = [...new Set(cardsInfo.map((card) => card.type))];

  const amount = categories.map((cat) =>
    cardsInfo.reduce((sum, card) => {
      if (card.type === cat) {
        sum++;
      }
      return sum;
    }, 0)
  );

  return (
    <>
      <ol className="list-group list-group-numbered">
        <div className="mx-auto fw-bold fs-2 text-white">Category list</div>

        {categories.map((cat, index) => (
          <li
            role="button"
            key={cat}
            className="list-group-item d-flex justify-content-between align-items-start"
            onClick={() => onCategoryItems(cat)}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{cat}</div>              
            </div>
            <span className="badge bg-primary rounded-pill">
              {amount[index]}
            </span>
          </li>
        ))}
        <button className="btn btn-success" onClick={onBack}>
          На главную страницу
        </button>
      </ol>
    </>
  );
};

export default CategoriesList;
