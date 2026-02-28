import React, { useState } from "react";
import Dashboard from "./Dashboard";

function Login() {
  const [employeeId, setEmployeeId] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ employeeId })
    });

    const data = await response.json();

    if (data.success) {
      setIsLoggedIn(true);
    } else {
      setMessage(data.message);
    }

  } catch (error) {
    setMessage("Server error");
  }
};

  if (isLoggedIn) {
  return <Dashboard />;
}

return (
  <div style={{ textAlign: "center", marginTop: "100px" }}>
    <h2>Employee Login</h2>

    <input
      type="text"
      placeholder="Enter Employee ID"
      value={employeeId}
      onChange={(e) => setEmployeeId(e.target.value)}
      style={{ padding: "8px", width: "200px" }}
    />

    <br /><br />

    <button onClick={handleLogin} style={{ padding: "8px 20px" }}>
      Login
    </button>

    <p>{message}</p>
  </div>
);
}

export default Login;