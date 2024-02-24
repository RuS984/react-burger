import PropTypes from "prop-types";

import "./ModalOverlay.css";

const ModalOverlay = ({ handleCloseClick }) => {
  return <div className="modaloverlay" onClick={handleCloseClick}></div>;
};

ModalOverlay.propTypes = {
  handleCloseClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
