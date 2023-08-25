import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getIsLoggedIn } from "../../store/usersSlice";
// import { useAuth } from "../../hooks/useAuth";
// import localStorageService from "../../service/localStorage.service";

const ProfileCard = () => {
    const history = useHistory();
    const currentUser = useSelector(getIsLoggedIn());
    // const {getOrderById} = useAuth();
    // const handleGetOrder = async () => {
    //   try {
    //     await getOrderById(localStorageService.getCurrentUserId())
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    return (
        <>
            <div className="login d-flex justify-content-center align-items-center">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto md-3 p-4 shadow mt-5 bg-white mb-5 rounded-4">
                        <div className="d-flex justify-content-center">
                            <div className="d-flex  flex-column mx-auto justify-content-center align-items-center mt-2">
                                <div className="mb-2">
                                    <h2>Ваш профиль</h2>
                                </div>
                                <div
                                    className="btn btn-primary mb-2"
                                    style={{ width: "100%" }}
                                    role="button"
                                    onClick={() => {
                                        history.push("/edit");
                                    }}
                                >
                                    Изменить данные
                                </div>
                                <div
                                    className="btn btn-primary mb-2"
                                    style={{ width: "100%" }}
                                    role="button"
                                    // onClick={handleGetOrder}
                                    onClick={() => {
                                        history.push("/orderslist");
                                    }}
                                >
                                    Посмотреть список заказов
                                </div>
                                {currentUser.admin && (
                                    <div
                                        className="btn btn-primary mb-2"
                                        style={{ width: "100%" }}
                                        role="button"
                                        onClick={() => {
                                            history.push("/cardaddgood");
                                        }}
                                    >
                                        Войти в панель администратора
                                    </div>
                                )}

                                <div
                                    className="d-flex justify-content-end mt-4"
                                    style={{ width: "500px" }}
                                >
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

export default ProfileCard;
