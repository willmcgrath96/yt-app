import axios from 'axios';

const KEY = 'AIzaSyDpE-bjigqUdhqykExLcW0_59Xx286w49Y';

export default axios.create({
    baseURL:  'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});