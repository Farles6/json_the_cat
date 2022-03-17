const request = require('request');
const argv = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${argv[0]}`, (error, response, body) => {
console.log('Error: Breed not found, try another.', error);
const data = JSON.parse(body);
console.log(data);  
console.log(typeof data);
});
g