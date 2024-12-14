import React, { useEffect, useState } from "react";
import EmailRow from "./EmailRow";

const ViewSubscribers = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch(
          "https://backend-landingpage.onrender.com/api/subscribers"
        );
        const data = await response.json();
        setEmails(data.map((subscriber) => subscriber.email));
      } catch (err) {
        console.error("Error fetching emails:", err);
      }
    };

    fetchEmails();
  }, []);

  const styles = {
    container: {
      maxWidth: "600px",
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
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Subscriber Emails</h2>
      <div style={styles.table}>
        {emails.map((email, index) => (
          <EmailRow key={index} email={email} />
        ))}
      </div>
    </div>
  );
};

export default ViewSubscribers;
