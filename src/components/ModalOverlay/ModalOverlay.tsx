// #region Import Modules
import PropTypes from "prop-types";

// #endregion
// #region Styles
import style from "./ModalOverlay.module.css";

// #endregion

type TModalOverlayProps = {
  handleCloseClick: () => void;
};

const ModalOverlay = ({ handleCloseClick }: TModalOverlayProps): JSX.Element => {
  return (
    <div
      className={`${style.modaloverlay}`}
      onClick={() => handleCloseClick()}
    ></div>
  );
};

export default ModalOverlay;