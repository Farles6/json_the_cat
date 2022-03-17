const { fetchBreedDescription } = require("./breedFetcher");
const breedName = process.argv.slice(2);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details", error);
    return;
  } else if (!desc) {
    console.log(`Breed not found: ${breedName[0]}`);
    return;
  }
  console.log(desc);
});
