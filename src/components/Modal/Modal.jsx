import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";
import "./Modal.css";

const modalRoot = document.getElementById("modals");

const Modal = ({ title, children, handleClickClose }) => {
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        handleClickClose();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <ModalOverlay handleCloseClick={handleClickClose} />
      <div className="modal pt-10 pr-10 pb-15 pl-10">
        <div className="wrapper m-10">
          <p className="title text text_type_main-large">{title}</p>
          <button
            className="closeButton"
            type="button"
            onClick={handleClickClose}
          >
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  handleClickClose: PropTypes.func.isRequired,
};

export default Modal;
