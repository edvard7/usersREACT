import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loaging, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .finally(() => setLoading(false))
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((error) => setError(error.toString()));
  }, []);

  return (
    <div className="App">
      {loaging ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        users.map((user) => (
          <>
            <h5>{user.name}</h5>
            <p>{user.email}</p>
          </>
        ))
      )}
    </div>
  );
}
export default App;
