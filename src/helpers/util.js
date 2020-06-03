export const getReleaseDate = date => {
  return date.split("-")[0];
};


export const sliceArray = (array, to) => {
  return array.slice(0, to); 
}