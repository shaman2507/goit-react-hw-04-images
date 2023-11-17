import axios from 'axios';

const API_KEY = '36805938-0e5858f236185e483726e7849';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const axiosAPI = async (searchName, per_page = 12, page = 1) => {
  return await axios({
    params: {
      key: API_KEY,
      page: page,
      per_page: per_page,
      q: searchName,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
};