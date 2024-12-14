import React, { useState } from "react";

// const AdminLogin = () => {
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Hardcoded admin credentials
//     const ADMIN_USERNAME = "admin";
//     const ADMIN_PASSWORD = "password123";

//     if (
//       credentials.username === ADMIN_USERNAME &&
//       credentials.password === ADMIN_PASSWORD
//     ) {
//       // Save admin login state
//       localStorage.setItem("isAdmin", "true");
//       alert("Login successful!");
//       window.location.href = "/admin/dashboard"; // Navigate to admin dashboard
//     } else {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={credentials.username}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={credentials.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ADMIN_USERNAME = "admin";
    const ADMIN_PASSWORD = "password123";

    if (
      formData.username === ADMIN_USERNAME &&
      formData.password === ADMIN_PASSWORD
    ) {
      localStorage.setItem("isAdmin", "true");
      alert("Login successful!");
      window.location.href = "/admin/dashboard";
    } else {
      setErrorMessage("Invalid credentials");
    }
  };

  const styles = {
    container: {
      backgroundColor: "#ffffff",
      padding: "32px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      margin: "0 auto",
      fontFamily: "Roboto, sans-serif",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "24px",
      textAlign: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    label: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#4a4a4a",
    },
    input: {
      marginTop: "8px",
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "14px",
      outline: "none",
      transition: "border-color 0.2s",
    },
    inputFocus: {
      borderColor: "#4f46e5",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#4f46e5",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#3730a3",
    },
    errorMessage: {
      marginTop: "16px",
      color: "#e11d48",
      fontSize: "12px",
      textAlign: "center",
    },
    body: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f3f4f6",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Admin Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div>
            <label htmlFor="username" style={styles.label}>
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              style={styles.input}
              onFocus={(e) =>
                (e.target.style.borderColor = styles.inputFocus.borderColor)
              }
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>
          <div>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
              onFocus={(e) =>
                (e.target.style.borderColor = styles.inputFocus.borderColor)
              }
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = styles.button.backgroundColor)
            }
          >
            Login
          </button>
        </form>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default AdminLogin;
