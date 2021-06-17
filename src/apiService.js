import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "21282104-2eb447408a79d7cba0630cd2c";

const apiService = {
  fetchImages: async (query, page) =>{
    return axios
      .get(
        `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`
      )
  }
}

export default apiService



   
