import React, { useEffect, useState } from "react";
import ContactRow from "./ContactRow";

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "https://backend-landingpage.onrender.com/api/contacts"
        );
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchContacts();
  }, []);

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "20px auto",
      fontFamily: "Roboto, sans-serif",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px",
    },
    table: {
      border: "1px solid #ddd",
      borderRadius: "6px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    headerRow: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 15px",
      backgroundColor: "#007bff",
      color: "white",
      fontSize: "14px",
      fontWeight: "bold",
    },
    cell: {
      flex: "1",
      textAlign: "left",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Form Submissions</h2>
      <div style={styles.table}>
        <div style={styles.headerRow}>
          <div style={styles.cell}>Full Name</div>
          <div style={styles.cell}>Email</div>
          <div style={styles.cell}>Mobile</div>
          <div style={styles.cell}>City</div>
        </div>
        {contacts.map((contact) => (
          <ContactRow key={contact._id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default ViewContacts;
