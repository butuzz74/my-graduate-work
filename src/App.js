import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadProjectors } from "./store/projectorsSlice";

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
import { ToastContainer } from "react-toastify";
import ProfileCard from "./components/layout/ProfileCard";
import EditProfile from "./components/layout/EditProfile";
import OrdersList from "./components/layout/OrdersList";
import OrderCard from "./components/order/OrderCard";
import CardAddGood from "./components/layout/CardAddGood";
import EditGoodsList from "./components/layout/EditGoodsList";
import GoodsAddTest from "./components/layout/GoodsAddTest";
import MainTest from "./components/layout/MainTest";
import { getCurrentUser } from "./store/usersSlice";
import localStorageService from "./service/localStorage.service";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProjectors());
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
              <Route path="/maintest" component={MainTest} />
              <Route path="/cardaddgood" component={EditGoodsList} />
              <Route path="/goodsaddtest" component={GoodsAddTest} />
              <Route path="/cardeditgood/:cardId?" component={CardAddGood} />
              <Route path="/ordercard" component={OrderCard} />
              <Route path="/orderslist" component={OrdersList} />
              <Route path="/basket" component={BasketList} />
              <Route path="/signup" component={SignUp} />
              <Route path="/profile" component={ProfileCard} />
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
