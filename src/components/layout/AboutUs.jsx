import React from "react";
import {NavLink} from "react-router-dom"
// import { v4 as uuidv4 } from 'uuid'
import projectorService from "../../service/projector.service";

const AboutUs = () => {
  const a = {"2b594a9b-518c-4551-ba45-933576e60044": {id: "uuuuuii"}}
// console.log(projectorService.create(a))
// console.log(uuidv4())
  return (
    <>
      <h1>O нас</h1>
      <p>
        Компания ООО "Системы Отображения Информации" - официальный эксклюзивный
        дистрибьютор ( импортер ) корпораций SHARP / NEC, Optoma ( Coretronic
        Corp ) и компаний Projecta, Digis, Lumien, Wize в Беларуси.{" "}
      </p>
      <button type="button" className="btn btn-success">
                <NavLink
                  to="/"
                  className="nav-link text-decoration-underline"
                  activeClassName="selected"
                  style={{ color: "white" }}
                >
                  На главную страницу
                </NavLink>
              </button>
    </>
  );
};

export default AboutUs;
