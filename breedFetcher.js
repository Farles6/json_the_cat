const request = require("request");
const fetchBreedDetails = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
        return;
      }
      const data = JSON.parse(body);
      if (!data[0]) {
        callback(error, null);
        return;
      }
      callback(null, data[0].description);
    }
  );
};

module.exports = { fetchBreedDetails };
