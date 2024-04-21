// #region Import Modules
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ModalOverlay from "../ModalOverlay/ModalOverlay";
// #endregion
// #region Styles
import style from "./Modal.module.css";
import { TModalProps } from "../../utils/Types/componentTypes";

// #endregion

const modalRoot = document.getElementById("modals") as Element;



const Modal = ({ title, children, handleClickClose }: TModalProps): JSX.Element => {
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
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
    <>
      <ModalOverlay handleCloseClick={handleClickClose} />
      <div className={`${style.modal} pt-10 pr-10 pb-15 pl-10`}>
        <div className={`${style.wrapper} m-10`}>
          <p className={`${style.title} text text_type_main-large`}>{title}</p>
          <button
            className={`${style.closeButton}`}
            type="button"
            onClick={handleClickClose}
          >
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
    </>,
    modalRoot,
  );
};

export default Modal;
