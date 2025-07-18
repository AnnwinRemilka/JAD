import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [searchUserId, setSearchUserId] = React.useState("");

  const fecthData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/user/${searchUserId}`
      );
      console.log(response);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData({});
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="lookup-box">
        <h2>User Lookup</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter user ID"
            value={searchUserId}
            onChange={(e) => setSearchUserId(e.target.value)}
          />
          <button onClick={fecthData}>Get User</button>
        </div>

        <div className="user-container">
          {loading && <p>Loading...</p>}
          {error && <p id="error">User not found</p>}
          {Object.keys(data).length > 0 && (
            <div className="user-details">
              <p id="user-name">{data.name}</p>
              <p>
                <strong>ID:</strong> {data.id}
              </p>

              <p>
                <strong>Zmail:</strong> {data.email}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
