const axios = require("axios");
const regeneratorRuntime = require("regenerator-runtime");

const fetchAPI = async (data) => {
  const res = await axios(
    `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&${data.format}=${data.input}&model=general&lang=en`
  );
  try {
    return res.data;
  } catch (e) {
    console.log("Error", e);
  }
};

module.exports = fetchAPI;
