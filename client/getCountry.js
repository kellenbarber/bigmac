// getCountry.js

const getCountry = async () => {
    const url = "http://localhost:5000/country";
    const response = await fetch(url);
    const data = await response.text();
    return data;
};

export default getCountry;