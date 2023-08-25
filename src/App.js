import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Main from "./components/layout/Main";
import NotFound from "./components/layout/NotFound";
import SignUp from "./components/layout/SignUp";
import SignIn from "./components/layout/SignIn";
import CardItem from "./components/layout/CardItem";
import AboutUs from "./components/layout/AboutUs";
import ContactInfo from "./components/layout/ContactInfo";
import PaymentAndDelivery from "./components/layout/PaymentAndDelivery";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import BasketList from "./components/layout/BasketList";
import { MainPageContextProvider } from "./context/context";
import AuthProvider from "./hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import ProfileCard from "./components/layout/ProfileCard";
import EditProfile from "./components/layout/EditProfile";
import OrdersList from "./components/layout/OrdersList";
import OrderCard from "./components/order/OrderCard";
import EditGoodsList from "./components/layout/EditGoodsList";
import { getCurrentUser, getIsLoggedIn } from "./store/usersSlice";
import localStorageService from "./service/localStorage.service";
import OrderItem from "./components/layout/OrderItem";
import "react-toastify/dist/ReactToastify.css";
import { loadGoods } from "./store/goodsSlice";
import GoodAddAndUpdate from "./components/layout/GoodAddAndUpdate";
import ProtectedRoute from "./components/layout/ProtectedRoute";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(getIsLoggedIn());  
  useEffect(() => {
    dispatch(loadGoods());
    toast("Загрузка произошла успешно!");
    if (localStorageService.getAccessToken()) {
      dispatch(getCurrentUser());
    }
  }, []);
  return (
    <div className="maincontainer">
      <AuthProvider>
        <NavBar />
        <div className="innercontent">
          <MainPageContextProvider>
            <Switch>
              <Route path="/" exact component={Main} />
              <ProtectedRoute path="/order/:orderId" component={OrderItem} />
              <ProtectedRoute
                admin={currentUser ? currentUser.admin : null}
                path="/cardaddgood"
                component={EditGoodsList}
              />
              <ProtectedRoute
                admin={currentUser ? currentUser.admin : null}
                path="/goodsaddtest"
                component={GoodAddAndUpdate}
              />
              <ProtectedRoute
                admin={currentUser ? currentUser.admin : null}
                path="/cardeditgood/:cardId?"
                component={GoodAddAndUpdate}
              />
              <ProtectedRoute path="/ordercard" component={OrderCard} />
              <ProtectedRoute path="/orderslist" component={OrdersList} />
              <ProtectedRoute path="/basket" component={BasketList} />
              <ProtectedRoute path="/profile" component={ProfileCard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/edit" component={EditProfile} />
              <Route
                path="/paymentAndDelivery"
                component={PaymentAndDelivery}
              />
              <Route path="/contactInfo" component={ContactInfo} />
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/signin" component={SignIn} />
              <Route path="/:cardId" component={CardItem} />
              <Route component={NotFound} />
            </Switch>
          </MainPageContextProvider>
        </div>
        <Footer />
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
