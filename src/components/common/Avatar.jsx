import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Avatar = ({ avatarName, logOut }) => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const toggleShow = () => {
    setShow((prevState) => !prevState);
  };
  const handleGoToProfile = () => {
    history.push("/profile");
    setShow(false);
  }

  return (
    <div className="btn-group dropstart">
      <button
        type="button"
        className={"btn btn-secondary dropdown-toggle" + (show ? "show" : "")}
        data-bs-toggle="dropdown"
        aria-expanded="true"
        onClick={toggleShow}
      >
        {avatarName}
      </button>
      <ul
        className={"dropdown-menu " + (show ? "show" : "")}
        style={{ position: "absolute", translate: ("-400px", "-180px") }}
      >
        <li className="dropdown-item" role="button" onClick={handleGoToProfile}>Профиль</li>
        <li className="dropdown-item" role="button" onClick={logOut}>Выход</li>
      </ul>
    </div>
    // <div
    //   classNameNameName="avatar d-flex justify-content-center align-items-center text-white fw-bold fs-2 rounded-circle shadow-1-strong me-3 border border-2"
    //   style={{ width: "45px", height: "45px" }}
    // >
    //   {avatarName}
    // </div>
  );
};

export default Avatar;
