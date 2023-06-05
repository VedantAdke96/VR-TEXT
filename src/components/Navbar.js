import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
            {/* <li className="nav-item">
              <a className="nav-a" href="/about">
                {props.aboutText}
              </a>
            </li> */}
          </ul>
          <div className="form-check form-switch">
            {props.mode==='light'?<img className="img-fluid mx-3" id="darkModeImg" src={props.darkModeImg} alt="dark-mode-img" onClick={props.toggleMode}/>
            :<img className="img-fluid mx-3" id="darkModeImg" src={props.lightModeImg} alt="dark-mode-img" onClick={props.toggleMode}/>}
            <label
              className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.btnText}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
