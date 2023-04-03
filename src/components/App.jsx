import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Api } from './Api';
import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal';
import { Searchbar } from './Searchbar';
import { Section, Wrapper } from './App.styled';

export const App = () => {
  const [currentSearch, setCurrentSearch] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [largeImg, setLargeImg] = useState('');

  useEffect(() => {
    if (currentSearch === '') {
      return;
    }
    setIsLoading(true);
    const fetchData = async () => {
      const images = await Api(currentSearch, pageNum);
      const { totalHits, hits } = images;
      setImages(prevImages => {
        return [...prevImages, ...hits];
      });
      if (!totalHits) {
        toast.error('Did not find anything!');
      } else if (pageNum === 1) {
        toast.success(`Hooray! We found ${totalHits} images!`);
      }

      setTotalHits(totalHits);
      setIsLoading(false);
    };
    fetchData();
  }, [pageNum, currentSearch]);

  const onFormSubmit = query => {
    if (query === currentSearch) {
      return;
    }
    setCurrentSearch(query);
    setPageNum(1);
    setImages([]);
  };

  const onButtonClick = () => {
    setPageNum(prevPage => prevPage + 1);
    setIsLoading(true);
  };

  const toggleModal = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const showLargeImg = largeImg => {
    setLargeImg(largeImg);
  };

  return (
    <Section>
      <Searchbar onSubmit={onFormSubmit} />
      <ImageGallery
        images={images}
        onClickImg={showLargeImg}
        toggleModal={toggleModal}
      />
      {isOpen && <Modal onModalClose={toggleModal} largeImg={largeImg} />}
      {images.length < totalHits ? (
        <Wrapper>
          <Button onClick={onButtonClick} />
        </Wrapper>
      ) : null}
      {isLoading && <Loader />}
      <ToastContainer autoClose={3000} />
    </Section>
  );
};
