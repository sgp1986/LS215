/*
write a function named processReleaseData
takes

process movide data in an object
return an array of objects that contain only the id and title k/v pairs

-- problem
take an array of objects containing movie data, select the id and title key/value pairs from each one and return them as objects in a new array

--rules
assume that when existing
  id is an integer greater than 0
  title is a non empty string
keep only releases that have both id and title properly present
keep only the id and title data for each release

--ds
input - array of objects with multiple keys
output - array of selected objects with only id and title keys

--alg
select objects with both an id and title property present
  filter array based on obj.id && obj.title
select only the id and title properties from each object
  transform new array to only include id and title
return the array of these objects
*/

const processReleaseData = (data) => {
  return data.filter(movie => movie.id && movie.title)
             .map(movie => ({ id: movie.id, title: movie.title, }));
}

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

console.log(processReleaseData(newReleases));

// should return:
[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];