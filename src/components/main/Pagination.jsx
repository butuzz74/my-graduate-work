import React from "react";
import PropTypes from "prop-types";
const Pagination = ({ countPage, activePage, onActivePage }) => {
    const a = [];
    if (countPage !== 0) {
        for (let i = 1; i <= countPage; i++) {
            a.push(i);
        }
    }
    return (
        <div className="pagination">
            <nav
                aria-label="Page navigation example"
                className="pagnav m-auto mt-4"
            >
                <ul className="pagination">
                    {a.map((item) => (
                        <li
                            key={item}
                            className={
                                activePage === item
                                    ? "page-item active"
                                    : "page-item"
                            }
                            onClick={() => onActivePage(item)}
                        >
                            <a className="page-link" href="#!">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
Pagination.propTypes = {
    countPage: PropTypes.number,
    activePage: PropTypes.number,
    onActivePage: PropTypes.func
};
export default Pagination;
