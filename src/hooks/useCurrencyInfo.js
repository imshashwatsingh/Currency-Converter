import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); // for contigency plan (what if data doesn't return from api , then at least application won't crash !)

  useEffect(() => {
    const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/"+currency+".json";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);
  return data;
}


export default useCurrencyInfo;