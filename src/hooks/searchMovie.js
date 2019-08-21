import {useState, useEffect} from 'react';
import {get} from '../api';

const useMovie = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const search = async () => {
      try {
        const res = await get({
          category: 'search',
          page,
          query: encodeURIComponent(searchTerm),
        });
        const toMovie = ({id, title}) => ({id: id + '', title});
        const newMovies = [...result, ...res.results.map(toMovie)];
        setResults(newMovies);
      } catch (e) {
        console.error(e);
      }
    };
    searchTerm && search();
  }, [searchTerm, page]);

  const searchMovie = str => {
    setSearchTerm(str);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return [searchTerm, result, searchMovie, loadMore];
};

export default useMovie;
