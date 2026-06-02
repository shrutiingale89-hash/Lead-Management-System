const axios = require("axios");

const getRandomUser =
async()=>{

    const response =
    await axios.get(
        "https://randomuser.me/api/"
    );

    return response.data;
};

module.exports = {
    getRandomUser
};