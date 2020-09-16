import axios from "axios";
// axios makes things easy

const instance = axios.create({
    baseURL: '...'    //the API url (cloud function)
});

export default instance;