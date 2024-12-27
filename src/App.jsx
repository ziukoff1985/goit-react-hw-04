import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';

function App() {
  const [images, setImages] = useState([]);

  const handleFetch = async query => {
    try {
      const response = await axios.get(
        'https://api.unsplash.com/search/photos',
        {
          params: { query, per_page: 12 },
          headers: {
            Authorization:
              'Client-ID WEdozSbeL3sXHgKKf2QSFIABrvu5qfELDXJLSJNUh8Q',
          },
        }
      );
      setImages(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleFetch = query => {
  //   console.log('Search query:', query);
  // };

  return (
    <>
      <SearchBar onSubmit={handleFetch} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
