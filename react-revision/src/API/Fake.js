import React, { useEffect, useState } from "react";

const Fake = () => {
  const [data, setdata] = useState([]);

  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     // console.log(json)
    //     setdata(json);
    //   });

    getList();
  }, []);

  const getList = () => {
    fetch("http://localhost:3200/Lists")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json)
        setdata(json);
      });
  };

  const deleteUser = (id) => {
    // alert(id);
    fetch(`http://localhost:3200/Lists/${id}`, {
      method: "DELETE",
    })
      .then((result) => {
        result.json();
      })
      .then((resp) => {
        console.log(resp);
        getList();
      });
  };

  console.log(data);
  return (
    <>
      <h1>Get API Call</h1>
      <table border="1">
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Price</td>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>
              <button
                onClick={() => {
                  deleteUser(item.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Fake;
