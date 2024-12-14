import React, { useState } from "react";

const AddProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          resolve(reader.result);
        };
      } catch (error) {
        reject(error);
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (e) => {
    // console.log(e.target.files[0]);
    const file = e.target.files[0];
    console.log(file);
    const base64Image = await fileToBase64(file);
    console.log(base64Image);

    setFormData({ ...formData, image: base64Image });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // const data = new FormData();
  //   // data.append("name", formData.name);
  //   // data.append("description", formData.description);
  //   // data.append("image", formData.image);

  //   try {
  //     // console.log("inside try");
  //     const response = await fetch("http://localhost:5000/api/projects", {
  //       method: "POST",
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       alert("Project added successfully!");
  //       setFormData({ name: "", description: "", image: "" });
  //     } else {
  //       alert("Error adding project.");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Log formData to verify its structure
      console.log("Submitting form data:", formData);

      const response = await fetch(
        "https://backend-landingpage.onrender.com/api/projects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Ensure JSON payload
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("response came ", response);
      if (response.ok) {
        const result = await response.json();
        alert(result.message); // Display the success message from the backend
        setFormData({ name: "", description: "", image: "" }); // Reset form
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (err) {
      console.error("Error submitting project:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Roboto, sans-serif",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
    },
    heading: {
      fontSize: "26px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    label: {
      fontSize: "15px",
      fontWeight: "600",
      color: "#444",
      marginBottom: "5px",
      display: "block",
    },
    input: {
      width: "100%",
      padding: "12px 14px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "15px",
      color: "#333",
      outline: "none",
      transition: "border-color 0.3s",
    },
    inputHover: {
      borderColor: "#007bff",
    },
    fileInput: {
      display: "block",
      width: "100%",
      padding: "10px 14px",
      border: "2px dashed #ccc",
      borderRadius: "6px",
      fontSize: "14px",
      color: "#555",
      cursor: "pointer",
      backgroundColor: "#fafafa",
      outline: "none",
      transition: "border-color 0.3s",
    },
    fileInputHover: {
      borderColor: "#007bff",
    },
    button: {
      padding: "12px 20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add Project</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label htmlFor="name" style={styles.label}>
            Project Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter the project name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
            onFocus={(e) =>
              (e.target.style.borderColor = styles.inputHover.borderColor)
            }
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
        </div>
        <div>
          <label htmlFor="description" style={styles.label}>
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Enter a brief description"
            value={formData.description}
            onChange={handleChange}
            required
            style={styles.input}
            onFocus={(e) =>
              (e.target.style.borderColor = styles.inputHover.borderColor)
            }
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
        </div>
        <div>
          <label htmlFor="image" style={styles.label}>
            Project Image
          </label>
          <input
            type="file"
            accept="image/*"
            name="image"
            id="image"
            onChange={handleFileChange}
            required
            style={styles.fileInput}
            onMouseOver={(e) =>
              (e.target.style.borderColor = styles.fileInputHover.borderColor)
            }
            onMouseOut={(e) => (e.target.style.borderColor = "#ccc")}
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
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
