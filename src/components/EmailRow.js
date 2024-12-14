import React from "react";

// Component for a single email record
const EmailRow = ({ email }) => {
  const styles = {
    row: {
      padding: "10px 15px",
      borderBottom: "1px solid #ddd",
      fontSize: "14px",
      color: "#333",
      textAlign: "left",
    },
  };

  return <div style={styles.row}>{email}</div>;
};

export default EmailRow;
