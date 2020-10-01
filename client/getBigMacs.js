// getBigMacs.js

const getBigMacs = async () => {
    const url = "http://localhost:5000/bigmacs";
    const response = await fetch(url);
    const data = await response.text();
    return data;
};

export default getBigMacs;