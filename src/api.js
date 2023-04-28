import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
           Authorization: 'Client-ID 5K4T-fbau_x9ZssGkGrwOIkSi8aU1YdFTE8dfo3kYYw'
        },
        params: {
           query: 'oceans'
        }
    });

    console.log(response);

    return response;
};

export default searchImages;