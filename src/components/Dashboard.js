import React, { useState } from "react";
import AddProject from "./AddProject";
import AddClient from "./AddClient";
import ViewContacts from "./ViewContacts";
import ViewSubscribers from "./ViewSubscribers";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("projects");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "projects":
//         return <AddProject />;
//       case "clients":
//         return <AddClient />;
//       case "contacts":
//         return <ViewContacts />;
//       case "subscribers":
//         return <ViewSubscribers />;
//       default:
//         return <AddProject />;
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <nav>
//         <button onClick={() => setActiveTab("projects")}>Add Project</button>
//         <button onClick={() => setActiveTab("clients")}>Add Client</button>
//         <button onClick={() => setActiveTab("contacts")}>View Contacts</button>
//         <button onClick={() => setActiveTab("subscribers")}>
//           View Subscribers
//         </button>
//       </nav>
//       <div>{renderContent()}</div>
//     </div>
//   );
// };
// import React, { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const styles = {
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Roboto, sans-serif",
    },
    heading: {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "20px",
      color: "#333",
    },
    nav: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "20px",
    },
    button: {
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      fontWeight: "500",
      fontSize: "1rem",
      transition: "background-color 0.3s ease",
    },
    activeButton: {
      backgroundColor: "#007bff",
      color: "white",
    },
    inactiveButton: {
      backgroundColor: "#f0f0f0",
      color: "#333",
    },
    card: {
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "white",
    },
    cardHeading: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    cardText: {
      fontSize: "1rem",
      color: "#666",
    },
  };

  //   const AddProject = () => (
  //     <div style={styles.card}>
  //       <h2 style={styles.cardHeading}>Add Project</h2>
  //       <p style={styles.cardText}>Form to add a new project.</p>
  //     </div>
  //   );

  //   const AddClient = () => (
  //     <div style={styles.card}>
  //       <h2 style={styles.cardHeading}>Add Client</h2>
  //       <p style={styles.cardText}>Form to add a new client.</p>
  //     </div>
  //   );

  //   const ViewContacts = () => (
  //     <div style={styles.card}>
  //       <h2 style={styles.cardHeading}>View Contacts</h2>
  //       <p style={styles.cardText}>List of contacts.</p>
  //     </div>
  //   );

  //   const ViewSubscribers = () => (
  //     <div style={styles.card}>
  //       <h2 style={styles.cardHeading}>View Subscribers</h2>
  //       <p style={styles.cardText}>List of subscribers.</p>
  //     </div>
  //   );

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return <AddProject />;
      case "clients":
        return <AddClient />;
      case "contacts":
        return <ViewContacts />;
      case "subscribers":
        return <ViewSubscribers />;
      default:
        return <AddProject />;
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Dashboard</h1>
      <nav style={styles.nav}>
        <button
          style={{
            ...styles.button,
            ...(activeTab === "projects"
              ? styles.activeButton
              : styles.inactiveButton),
          }}
          onClick={() => setActiveTab("projects")}
        >
          Add Project
        </button>
        <button
          style={{
            ...styles.button,
            ...(activeTab === "clients"
              ? styles.activeButton
              : styles.inactiveButton),
          }}
          onClick={() => setActiveTab("clients")}
        >
          Add Client
        </button>
        <button
          style={{
            ...styles.button,
            ...(activeTab === "contacts"
              ? styles.activeButton
              : styles.inactiveButton),
          }}
          onClick={() => setActiveTab("contacts")}
        >
          View Contacts
        </button>
        <button
          style={{
            ...styles.button,
            ...(activeTab === "subscribers"
              ? styles.activeButton
              : styles.inactiveButton),
          }}
          onClick={() => setActiveTab("subscribers")}
        >
          View Subscribers
        </button>
      </nav>
      <div>{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
