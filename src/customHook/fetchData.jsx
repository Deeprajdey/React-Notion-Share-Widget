import React, { useEffect, useState } from "react";
/**
 *This is async  function which fetches Data return  it;
 * @typedef {function} fetchData
 * @returns {Promise | Array} promisify data
 */
const fetchData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
};

/**
 *This is react custom hook which uses fetchData function and returns an array [data,error];
 * @typedef {function} usefetchData
 * @returns {Array}  [data,error]
 */

export const usefetchData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch((e) => setError(e));
  }, []);
  return [data, error];
};
