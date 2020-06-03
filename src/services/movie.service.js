// const apiUrl = 'https://api.themoviedb.org/3';

// export const movieService = {
//     getAll,
//     getById,
//     searchMovies,
// };

// function getAll({ filter = 'popular', page = 1 }) {

//     const requestOptions = {
//         method: "GET",
//         // api_key: "bf42acf712bba686cfff9820897f4edb",
//         // language: "en-US",
//         // page: page
//     };

//     return fetch(`${apiUrl}/movie/${filter}?api_key=bf42acf712bba686cfff9820897f4edb&language=en-US&page=${page}`, requestOptions).then(handleResponse);
// }

// function getById(id) {
   
//     const requestOptions = {
//         method: "GET",
//         // api_key: "bf42acf712bba686cfff9820897f4edb",
//         // language: "en-US",
//         // page: page
//     };
//     return fetch(`${apiUrl}/movie/${id}?api_key=bf42acf712bba686cfff9820897f4edb&language=en-US`, requestOptions).then(handleResponseSingle);
// }

// function searchMovies(query, page) {
    
//     const requestOptions = {
//         method: "GET",
//     };
//     return fetch(`${apiUrl}/search/movie?api_key=bf42acf712bba686cfff9820897f4edb&language=en-US&query=${query}&page=${page}`, requestOptions).then(handleResponse);
//   };

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);

//         return data.results.slice(0,16);
//     });
// }
// function handleResponseSingle(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);

//         return data;
//     });
// }

import { axiosMovies as axios } from "../helpers/axios";

/**
 * get all movies
 * @param {*} requestData
 */
export const _getMovies = requestData => {
  const filter = requestData.filter || "popular";

  return axios.get(`/movie/${filter}?page=${requestData.page}`, {
    params: { page: requestData.page }
  });
};

/**
 * get trending movies
 * @param {*} requestData
 */
export const _getTrending = () => {
  return axios.get(`/trending/movie/day`);
};

/**
 * search movies
 * @param {*} requestData
 */
export const _searchMovies = requestData => {
  // {
  //   params: { query: requestData.query, page: requestData.page }
  // }
  console.log(requestData);
  return axios.get(
    `/search/movie?query=${requestData.query}&page=${requestData.page}`
  );
};

/**
 * get all genres for the movies
 */
export const _getGenres = () => {
  return axios.get("/genre/movie/list");
};

/**
 * get movie detail
 * @param {*} id
 */
export const _getMovie = id => {
  // let detail = axios.get(`/movie/${id}`);
  // let actor = axios.get(`/movie/${id}/credits`);
  // let recommendations = axios.get(`/movie/${id}/recommendations`, {
  //   params: {
  //     language: "null",
  //     page: 1
  //   }
  // });
  // let images = axios.get(`/movie/${id}/images`, {
  //   params: { language: "null" }
  // });

  // return axios.all([detail, actor, recommendations, images]);
  return axios.get(`/movie/${id}`);
};

/**
 * get actors for a particlura movie
 * @param {*} id
 */
export const _getActors = id => {
  return axios.get(`/movie/${id}/credits`);
};

/**
 * get movie images for a given movie
 * @param {*} id
 */
export const _getMovieImages = id => {
  return axios.get(`/movie/${id}/images`, { params: { language: "null" } });
};

/**
 * get recommendations for a particular movie
 * @param {*} id
 */
export const _getRecommendations = id => {
  return axios.get(`/movie/${id}/recommendations`, {
    params: {
      language: "null",
      page: 1
    }
  });
};
