import React, { Component } from 'react';
import { Api } from './Api';
import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal';
import { Searchbar } from './Searchbar';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    currentSearch: '',
    pageNum: 1,
    modalOpen: false,
    largeImg: '',
    isOpen: false,
    totalHits: null,
    error: false,
  };

  async componentDidUpdate(_, prevState) {
    const { currentSearch, pageNum } = this.state;

    try {
      if (
        currentSearch !== prevState.currentSearch ||
        pageNum !== prevState.pageNum
      ) {
        this.setState({ isLoading: true });
        const images = await Api(currentSearch, pageNum);
        this.setState(prevState => {
          const { hits, totalHits } = images;
          return {
            images: [...prevState.images, ...hits],
            isLoading: false,
            totalHits: totalHits,
          };
        });
      }
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  onSubmitForm = currentSearch => {
    this.setState(prevState => {
      if (currentSearch === this.state.currentSearch) {
        return prevState;
      }
      return { currentSearch, pageNum: 1, images: [] };
    });
  };

  onButtonClick = () => {
    this.setState(prevState => {
      return { pageNum: prevState.pageNum + 1, isLoading: true };
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  showLargeImg = largeImg => {
    this.setState({ largeImg });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmitForm} />
        <ImageGallery
          images={this.state.images}
          onClickImg={this.showLargeImg}
          toggleModal={this.toggleModal}
        />
        {this.state.isOpen && (
          <Modal closeModal={this.toggleModal} largeImg={this.state.largeImg} />
        )}
        {this.state.images.length < this.state.totalHits ? (
          <Button onClick={this.onButtonClick} />
        ) : null}
        {this.state.isLoading && <Loader />}
      </div>
    );
  }
}
