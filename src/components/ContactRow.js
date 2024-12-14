import React from "react";

const ContactRow = ({ contact }) => {
  const styles = {
    row: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 15px",
      borderBottom: "1px solid #ddd",
      fontSize: "14px",
    },
    cell: {
      flex: "1",
      textAlign: "left",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  };

  return (
    <div style={styles.row}>
      <div style={styles.cell}>{contact.fullName}</div>
      <div style={styles.cell}>{contact.email}</div>
      <div style={styles.cell}>{contact.mobile}</div>
      <div style={styles.cell}>{contact.city}</div>
    </div>
  );
};

export default ContactRow;
