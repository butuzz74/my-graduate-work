import React from "react";
import { NavLink } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-center text-center mt-4"
      style={{ width: "80%" }}
    >
      <h1>Контакты</h1>
      <div className="d-flex my-4">
        <div className="d-flex flex-column justify-content-start text-center mx-2" style={{width:"23%"}}>
          <p>Адрес</p>
          <div style={{width: "100%", height: "2px", backgroundColor: "#919191"}}/>
          <p>220076, г.Минск, ул. Ф.Скорины, 14, офис 228</p>
        </div>
        <div className="d-flex flex-column justify-content-start text-centermx-2"style={{width:"23%"}} >
          <p>Teлефоны</p>
          <div style={{width: "100%", height: "2px", backgroundColor: "#919191"}}/>
          <p>+375(29)188-00-60</p>
          <p>+375(17)276-60-20</p>
          <p>+375(17)276-71-41</p>
        </div>
        <div className="d-flex flex-column justify-content-start text-center mx-2" style={{width:"23%"}}>
          <p>Email</p>
          <div style={{width: "100%", height: "2px", backgroundColor: "#919191"}}/>
          <p>info@soi.by</p>
        </div>        
        <div className="d-flex flex-column justify-content-start text-center mx-2" style={{width:"23%"}}>
          <p>Сайт</p>
          <div style={{width: "100%", height: "2px", backgroundColor: "#919191"}}/>
          <p>www.soi.by</p>
        </div>
      </div>
      <h1>Сервисный центр</h1>
      <div className="d-flex my-4">
        <div className="d-flex flex-column justify-content-start text-center mx-2" style={{width:"23%"}}>
          <p>Адрес</p>
          <div style={{width: "100%", height: "2px", backgroundColor: "#919191"}}/>
          <p>220076, г.Минск, ул. Ф.Скорины, 14, офис 228</p>
        </div>
        <div className="d-flex flex-column justify-content-start text-centermx-2 "style={{width:"23%"}} >
          <p>Teлефоны</p>
          <div style={{width: "100%", height: "2px", backgroundColor: "#919191"}}/>
          <p>+375(29)188-00-60</p>
          <p>+375(17)276-60-20</p>
          <p>+375(17)276-71-41</p>
        </div>
        <div className="d-flex flex-column justify-content-start text-center mx-2" style={{width:"23%"}}>
          <p>Email</p>
          <div style={{width: "100%", height: "2px", backgroundColor: "#919191"}}/>
          <p>info@soi.by</p>
        </div>        
        <div className="d-flex flex-column justify-content-start text-center mx-2" style={{width:"23%"}}>
          <p>Сайт</p>
          <div style={{width: "100%", height: "2px", backgroundColor: "#919191"}}/>
          <p>www.soi.by</p>
        </div>
      </div>
      <h1>Местоположения компании</h1>
      <div className="mb-3">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.4866845493607!2d27.665727982645812!3d53.92309697056149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbce95b8e5922f%3A0xd6b337a300fdad2a!2svulica%20Francyska%20Skaryny%2014%2C%20Minsk!5e0!3m2!1sen!2sby!4v1688987760395!5m2!1sen!2sby" style={{border:"0", width:"100%", height: "400px"}}></iframe>
      </div>
      <button type="button" className="btn btn-success mb-4">
        <NavLink
          to="/"
          className="nav-link text-decoration-underline"
          activeClassName="selected"
          style={{ color: "white" }}
        >
          На главную страницу
        </NavLink>
      </button>
    </div>
  );
};

export default ContactInfo;
