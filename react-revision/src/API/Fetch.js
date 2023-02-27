import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetching = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/comments");
    let res = await result.json();
    setData(res);
  };

  useEffect(() => {
    fetching();
  }, []);
  return (
    <>
      <input
        type="text"
        placeholder="search name"
        onChange={(e) => setSearch(e.target.value)}
      />
      {data
        .filter((cur) => {
          if (cur.name.toLowerCase().includes(search.toLowerCase())) return cur;
        })
        .map((cur) => {
          return <p key="id">{cur.name}</p>;
        })}
    </>
  );
};

export default Fetch;
