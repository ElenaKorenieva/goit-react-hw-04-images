import PropTypes from 'prop-types';
import { StyledGalleryItem, StyledGalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onClickImg, toggleModal }) => {
  const handle = e => {
    toggleModal();
    onClickImg(e.currentTarget.dataset.large);
  };
  return (
    <>
      {images.map(({ id, largeImageURL, webformatURL, name }) => {
        return (
          <StyledGalleryItem
            key={id}
            onClick={handle}
            data-large={largeImageURL}
          >
            <StyledGalleryImg src={webformatURL} alt={name} />
          </StyledGalleryItem>
        );
      })}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  omClickImg: PropTypes.func,
  toggleModal: PropTypes.func,
};
