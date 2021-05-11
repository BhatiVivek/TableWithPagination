import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://gorest.co.in/public-api/users?page=${page}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  useEffect(() => {
    fetch(`https://gorest.co.in/public-api/users?page=${page}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, [page]);

  let handleOnClick = (event) => {
    event.preventDefault();
    const { id } = event.target;
    console.log("page", page);
    let newId = id === "previous" ? page - 1 : page + 1;
    setPage(newId);
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <input
        id="previous"
        type="button"
        value="<<"
        onClick={handleOnClick}
        disabled={page === 1}
      />
      <input id="next" type="button" value=">>" onClick={handleOnClick} />
    </div>
  );
}
