// fetch data function
let storedData = null;
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    storedData = data;
    return data;
  } catch (error) {
    console.log("Error fetching data: ", error);
  }
  // console.log(storedData);
};
const clearData = () => {
  storedData = null;
  // console.log(storedData);
};
export default fetchData;
export { clearData };
