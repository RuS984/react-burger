// #region Import Modules
import PropTypes from "prop-types";

// #endregion
// #region Styles
import style from "./ModalOverlay.module.css";

// #endregion

const ModalOverlay = ({ handleCloseClick }) => {
  return (
    <div
      className={`${style.modaloverlay}`}
      onClick={() => handleCloseClick()}
    ></div>
  );
};

ModalOverlay.propTypes = {
  handleCloseClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
