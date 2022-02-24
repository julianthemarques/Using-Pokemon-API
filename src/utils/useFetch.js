import axios from "axios";
import { useEffect, useState } from "react";
// CLEAN CODE
// SOLID

export const useFetch = (urlPrincipal, effectsFuncArr) => {
  const [defaultUrl, setDefaultUrl] = useState(urlPrincipal);
  // object with count, next, previus, result
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setFetching] = useState(true);
  const [dataMoreInfo, setDataMoreInfo] = useState([]);

  // data.result: [{name: 'poke', url: 'pokeurl'}, {name: 'poke', url: 'pokeurl'}]
  // dataMoreInfo: [{id, name, skills}]

  function fetchApi(url, func) {
    setFetching(true);
    return axios.get(url).then((res) => {
      if (func) {
        func(res.data);
      }
      return res.data;
    });
  }

  function fetchAndReFatch() {
    fetchApi(defaultUrl, setData)
      .then((result) => setDefaultUrl(result.next))
      .catch((err) => setError(err))
      .finally(() => setFetching(false));
  }

  useEffect(() => {
    fetchAndReFatch();
  }, []);
  useEffect(() => {
    effectsFuncArr.forEach((objFunc) => {
      objFunc.func(data, fetchApi, setDataMoreInfo);
    });

    console.log(data);
  }, [data]);
  function readMore() {
    fetchAndReFatch();
  }

  return { dataMoreInfo, isFetching, readMore, error };
};
