const KEY = '?client_id=rXxgygkf6eMJJ6ZpAFyOpW65n_hnd5WfopTjeXOYGr4';
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async (page) => {
  const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
  const data = await response.json();
  if (response.data >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchImageStats = async (id) => {
  const response = await fetch(`${URL}/${id}/statistics${KEY}`);
  const data = await response.json();
  if (response.data >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchImages, fetchImageStats };
