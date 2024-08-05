import { useDebugValue, useState, useEffect } from "react";

function useFetchData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    }, 1000);
  }, [url]);

  useDebugValue(data, (data) => `Fetched Data: ${data}`);

  return data;
}

function Debug() {
  const data = useFetchData("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <h1>Displaying Fetched Data</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Debug;
