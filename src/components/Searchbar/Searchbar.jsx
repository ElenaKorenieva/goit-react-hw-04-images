import { useState } from 'react';
import {
  StyledButtonLabel,
  StyledInput,
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchFormButton,
} from './Searchbar.styled.js';

export const Searchbar = ({ onSubmit }) => {
  const [currentSearch, setCurrentSearch] = useState('');

  const onInputChange = e => {
    setCurrentSearch(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(e.target.input.value);
    resetForm();
  };

  const resetForm = () => {
    setCurrentSearch('');
  };

  return (
    <StyledSearchbar>
      <StyledSearchForm onSubmit={onSubmitForm}>
        <StyledSearchFormButton type="submit">
          <StyledButtonLabel>Search</StyledButtonLabel>
        </StyledSearchFormButton>

        <StyledInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onInputChange}
          value={currentSearch}
          name="input"
        />
      </StyledSearchForm>
    </StyledSearchbar>
  );
};
