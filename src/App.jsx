import './App.css';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { fetchImages } from './services/api';
import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchImagesData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const results = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...results]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      fetchImagesData();
    }
  }, [query, page]);

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  // Функція для відкриття модального вікна
  const handleImageClick = imageUrl => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      <Toaster position="top-right" reverseOrder={false} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        image={modalImage}
      />
    </>
  );
}

export default App;
