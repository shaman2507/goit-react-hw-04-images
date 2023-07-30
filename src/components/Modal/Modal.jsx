import { createPortal } from 'react-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from "./Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, children }) {
const [listner, setListner] = useState(true)
if (listner) {
      window.addEventListener('keydown', handleKeydown);
}

  function handleKeydown(e)  {
    if (e.code === 'Escape') {
      window.removeEventListener('keydown', handleKeydown);
      onClose();
      setListner(false);
    }
  };



  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      window.removeEventListener('keydown', handleKeydown);
      onClose();
      setListner(false);
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};