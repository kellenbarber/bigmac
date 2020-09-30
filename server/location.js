import axios from "axios";

const getLocationData = async (ip) => {
    const response = axios.get(`https://ipvigilante.com/json/${ip}`);
    const data = (await response).data;
    const country = data.data.country_name;
    return country;
}

export default getLocationData;