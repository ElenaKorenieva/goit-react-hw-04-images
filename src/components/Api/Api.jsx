import axios from 'axios';
import PropTypes from 'prop-types';

export const Api = async (searchValue, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=30860486-2bc10cd6f698c5db7e18c3090&q=${searchValue}&safesearch=true&orientation=horizontal&per_page=20&page=${page}`
  );

  return response.data;
};

Api.propTypes = {
  searchValue: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
