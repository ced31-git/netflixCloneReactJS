const key = "387a1e4b934ba1dab48a999dd9500723";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=fr-FR&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=fr-FR&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=fr-FR&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=fr-FR&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=fr-FR&page=1`,
};

export default requests;