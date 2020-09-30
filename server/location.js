import axios from "axios";

import {IPVIGILANTE_ERROR} from "./constants";

const getLocationData = async () => {
    try {
        const response = axios.get(`https://ipvigilante.com/json`);
        const data = (await response).data;
        const country = data.data.country_name;
        return country;
    } catch (error) {
        return IPVIGILANTE_ERROR;
    }
}

export default getLocationData;