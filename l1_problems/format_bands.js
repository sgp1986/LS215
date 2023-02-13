/*
write a function named processBands
takes one argument
  array of objects containing band info
process the band data
return array of objects containing corrected band data

--rules
all band countries changed to 'Canada'
band name all words capitalized
remove any periods from band name

--algo
iterate through bands
for each band
  change country to 'Canada'
  transform band name
    capitalize each word
    remove . if present
*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(bands) {
  return bands.map(band => {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
    return band;
  });
}

function updateCountry(band) {
  band.country = 'Canada';
}

function capitalizeBandName(band) {
  band.name = band.name
                  .split(' ')
                  .map(word => capitalizeString(word))
                  .join(' ');
}

function capitalizeString(string) {
  let initial = string[0].toUpperCase();
  let rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInBandName(band) {
  band.name = band.name.replace(/\./g, '');
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]