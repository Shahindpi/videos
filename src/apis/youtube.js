import axios from 'axios';

const KEY = 'AIzaSyBq_gZ08NLQ5j3sBglWWKCPBHJKY2FSG_s';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResutls : 25,
        key : KEY
    }
});