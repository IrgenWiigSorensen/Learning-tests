import("node-fetch/src/index.js")
  .then((module) => {
    // Use the imported module here
  })
  .catch((error) => {
    // Handle any errors during the import
  });

const getPeoplePromise = (fetch) => {
  return fetch("http://swapi.py4e.com/api/people")
    .then((response) => response.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

const getPeople = async (fetch) => {
  const getRequest = await fetch("http://swapi.py4e.com/api/people");
  const data = await getRequest.json();

  return {
    count: data.count,
    results: data.results,
  };
};

module.exports = {
  getPeople,
  getPeoplePromise,
};
