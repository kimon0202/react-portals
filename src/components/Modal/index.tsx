import './styles.css';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  show: boolean;
  children?: React.ReactElement | Element | string | null;
  onBackdropClick?(): void;
}

const Modal: React.FC<ModalProps> = ({ show, children, onBackdropClick }) => {
  const modalRoot = document.getElementById('modal-root');
  const parentElement = document.createElement('div');

  useEffect(() => {
    modalRoot?.appendChild(parentElement);

    return () => {
      modalRoot?.removeChild(parentElement);
    };
  }, [modalRoot, parentElement]);

  if (!show) {
    return null;
  }

  return createPortal(
    <div className="modal-wrapper">
      <div className="modal-backdrop" onClick={onBackdropClick}/>
      <div className="modal-container">
        {children}
      </div>
    </div>,
    parentElement,
  );
}

export default Modal;
