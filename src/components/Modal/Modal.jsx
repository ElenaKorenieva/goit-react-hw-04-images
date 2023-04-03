import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, StyledModal, Image } from './Modal.styled';

export const Modal = ({ largeImg, onModalClose }) => {
  const onBackdropClickClose = e => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };

  const handleEscClose = e => {
    if (e.code === 'Escape') {
      onModalClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscClose);
    return () => {
      window.removeEventListener('keydown', handleEscClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Overlay onClick={onBackdropClickClose}>
      <StyledModal>
        <Image src={largeImg} alt="img" />
      </StyledModal>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
