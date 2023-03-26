import { StyledImageGallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ images, toggleModal, onClickImg }) => {
  return (
    <StyledImageGallery>
      <ImageGalleryItem
        images={images}
        onClickImg={onClickImg}
        toggleModal={toggleModal}
      />
    </StyledImageGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired,
  onClickImg: PropTypes.func.isRequired,
};
