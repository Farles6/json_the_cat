const request = require("request");
const argv = process.argv.slice(2);

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${argv[0]}`,
  (error, response, body) => {
    if (error) {
      console.log("Error: URL might be wrong", error);
      return;
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      console.log(`Breed not found: ${argv[0]}`);
      return;
    }
    console.log(data[0].description);
  }
);
