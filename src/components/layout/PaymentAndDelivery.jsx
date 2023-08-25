import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../common/Button";

const PaymentAndDelivery = () => {
    return (
        <div
            className="container d-flex flex-column justify-content-center text-center mt-3"
            style={{ width: "80%" }}
        >
            <h1 className="my-3">Условия доставки и оплаты</h1>
            <p
                style={{
                    fontSize: "2rem",
                    color: "#919191",
                    fontWeight: "bold"
                }}
            >
                Способы доставки
            </p>
            <div className="mt-4">
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p className="m">Доставка почтой</p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Доставка курьером</p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Самовывоз</p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Доставка транспортной компанией</p>
                </div>
            </div>
            <p
                style={{
                    fontSize: "2rem",
                    color: "#919191",
                    fontWeight: "bold"
                }}
            >
                Способы оплаты
            </p>
            <div className="mt-4">
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Безналичный расчет</p>
                </div>
            </div>
            <p
                style={{
                    fontSize: "2rem",
                    color: "#919191",
                    fontWeight: "bold"
                }}
            >
                Регионы доставки
            </p>
            <div className="mt-4">
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Минск</p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Минская область</p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Минская область</p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Брестская область</p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Гомельская область</p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Витебская область</p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Гродненская область</p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Могилевская область</p>
                </div>
            </div>
            <Button className={"btn btn-success mb-4"}>
                <NavLink
                    to="/"
                    className="nav-link text-decoration-underline"
                    activeClassName="selected"
                    style={{ color: "white" }}
                >
                    На главную страницу
                </NavLink>
            </Button>
        </div>
    );
};

export default PaymentAndDelivery;
