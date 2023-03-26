import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick} type="button">
      Load More
    </StyledButton>
  );
};

StyledButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
