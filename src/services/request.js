

const key = '5c236ed45fe53e842afab511776a28e5';



export const request = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&lenguage=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&lenguage=en-US&page=2`,
    requestHorror: ` https://api.themoviedb.org/3/search/movie?api_key=${key}&lenguage=en-US&query=horror&page=1`,
    requestUncoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&lenguage=en-US&page=1`,
}

export default request;