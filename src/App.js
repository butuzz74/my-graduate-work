import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./components/layout/Main";
import NotFound from "./components/common/NotFound";
import Login from "./components/layout/Login";
import SignIn from "./components/layout/SignIn";
import CardItem from "./components/layout/CardItem";
import AboutUs from "./components/layout/AboutUs";
import ContactInfo from "./components/layout/ContactInfo";
import PaymentAndDelivery from "./components/layout/PaymentAndDelivery";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import BasketList from "./components/layout/BasketList";
import { MainPageContextProvider } from "./context/context";

function App() {
  return (
    <div className="maincontainer">
      <NavBar />
      <div className="innercontent">
        <MainPageContextProvider>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/basket" component={BasketList} />
            <Route path="/login" component={Login} />
            <Route path="/paymentAndDelivery" component={PaymentAndDelivery} />
            <Route path="/contactInfo" component={ContactInfo} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/signin" component={SignIn} />
            <Route path="/:cardId" component={CardItem} />
            <Route component={NotFound} />
          </Switch>
        </MainPageContextProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
