import {useState, useEffect} from 'react';
import {get} from '../api';

const useMovie = ({type}) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await get({category: 'movie', type, page});
        const toMovie = ({id, title}) => ({id: id + '', title});
        const newMovies = [...movies, ...res.results.map(toMovie)];
        setMovies(newMovies);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [page]);

  const seeMore = () => {
    setPage(page + 1);
  };

  return [movies, seeMore];
};

export default useMovie;
