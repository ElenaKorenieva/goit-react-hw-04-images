import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, StyledModal, Image } from './Modal.styled';

export class Modal extends Component {
  onModalCLose = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  handleEscClose = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscClose);
  }
  render() {
    const { largeImg } = this.props;
    console.log(largeImg);
    return (
      <Overlay onClick={this.onModalCLose}>
        <StyledModal>
          <Image src={largeImg} alt="img" />
        </StyledModal>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
