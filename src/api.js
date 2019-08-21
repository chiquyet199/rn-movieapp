import axios from 'axios';

const apiKey = 'd1e7279cd18c6488f54153fcff9956eb';
const baseUrl = 'https://api.themoviedb.org/3/';

const buidUrl = ({category, type, page, ...options}) => {
  const queryParams = Object.keys(options).reduce((str, i) => {
    str = str + `&${i}=${options[i]}`;
    return str;
  }, '');
  const urlByCategoryMapping = {
    movie: `${baseUrl}movie/${type}?api_key=${apiKey}&page=${page}${queryParams}`,
    search: `${baseUrl}search/movie?api_key=${apiKey}&page=${page}${queryParams}`,
  };
  return urlByCategoryMapping[category];
};

export const get = ({category, type, page, ...options}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = buidUrl({category, type, page, ...options});
      const res = await axios.get(url);
      resolve(res.data);
    } catch (e) {
      reject(e);
    }
  });
};
