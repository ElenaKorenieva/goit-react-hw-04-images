import { Component } from 'react';
import {
  StyledButtonLabel,
  StyledInput,
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchFormButton,
} from './Searchbar.styled.js';

export class Searchbar extends Component {
  state = {
    currentSearch: '',
  };
  onInputChange = e => {
    this.setState({ currentSearch: e.target.value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(e.target.input.value);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ currentSearch: '' });
  };

  render() {
    return (
      <StyledSearchbar>
        <StyledSearchForm onSubmit={this.onSubmitForm}>
          <StyledSearchFormButton type="submit">
            <StyledButtonLabel>Search</StyledButtonLabel>
          </StyledSearchFormButton>

          <StyledInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputChange}
            value={this.state.currentSearch}
            name="input"
          />
        </StyledSearchForm>
      </StyledSearchbar>
    );
  }
}
