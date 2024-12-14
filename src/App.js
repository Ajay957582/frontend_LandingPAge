import "./App.css";
import React, { useState, useEffect } from "react";
// import Young from "../public/images/youngCuppole.svg";

// function App() { }

// const App = () => {
//   const headerStyle = {
//     backgroundColor: "white",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//     padding: "1rem 1.5rem",
//   };

//   const containerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     maxWidth: "1200px",
//     margin: "0 auto",
//   };

//   const logoStyle = {
//     display: "flex",
//     alignItems: "center",
//   };

//   const logoTextStyle = {
//     marginLeft: "0.5rem",
//     fontSize: "1.25rem",
//     fontWeight: "600",
//     color: "#2d3748",
//   };

//   const navStyle = {
//     display: "flex",
//     gap: "1.5rem",
//   };

//   const linkStyle = {
//     color: "#4a5568",
//     textDecoration: "none",
//     transition: "color 0.2s",
//   };

//   const linkHoverStyle = {
//     color: "#2d3748",
//   };

//   const contactButtonStyle = {
//     backgroundColor: "#f97316",
//     color: "white",
//     padding: "0.5rem 1rem",
//     borderRadius: "0.25rem",
//     textDecoration: "none",
//     transition: "background-color 0.2s",
//   };

//   const contactButtonHoverStyle = {
//     backgroundColor: "#ea580c",
//   };

//   return (
//     <header style={headerStyle}>
//       <div style={containerStyle}>
//         <div style={logoStyle}>
//           <img
//             src="https://storage.googleapis.com/a1aa/image/aoPF3fFfTKkysEPIGew2NS5ttkhN2Uhs4XvMTm4QgnHaII0nA.jpg"
//             alt="Logo of a house with the text 'Real Trust'"
//             style={{ height: "2.5rem", width: "2.5rem" }}
//             width="50"
//             height="50"
//           />
//           <span style={logoTextStyle}>Real Trust</span>
//         </div>
//         <nav style={navStyle}>
//           <a
//             href="#"
//             style={linkStyle}
//             onMouseOver={(e) =>
//               (e.currentTarget.style.color = linkHoverStyle.color)
//             }
//             onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             style={linkStyle}
//             onMouseOver={(e) =>
//               (e.currentTarget.style.color = linkHoverStyle.color)
//             }
//             onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
//           >
//             Services
//           </a>
//           <a
//             href="#"
//             style={linkStyle}
//             onMouseOver={(e) =>
//               (e.currentTarget.style.color = linkHoverStyle.color)
//             }
//             onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
//           >
//             About Projects
//           </a>
//           <a
//             href="#"
//             style={linkStyle}
//             onMouseOver={(e) =>
//               (e.currentTarget.style.color = linkHoverStyle.color)
//             }
//             onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
//           >
//             Testimonials
//           </a>
//           <a
//             href="#"
//             style={contactButtonStyle}
//             onMouseOver={(e) =>
//               (e.currentTarget.style.backgroundColor =
//                 contactButtonHoverStyle.backgroundColor)
//             }
//             onMouseOut={(e) =>
//               (e.currentTarget.style.backgroundColor =
//                 contactButtonStyle.backgroundColor)
//             }
//           >
//             Contact
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// };

const styles = {
  container: {
    textAlign: "center",
    padding: "50px 20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    margin: 0,
  },
  heading: {
    color: "#007bff",
    fontSize: "2em",
    marginBottom: "40px",
  },
  cardsContainer: {
    display: "flex",
    overflowX: "auto",
    gap: "10px",
    padding: "10px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    margin: "10px",
    minWidth: "200px",
    flexShrink: 0,
  },
  image: {
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    objectFit: "cover",
  },
  description: {
    fontSize: "0.9em",
    color: "#666",
    margin: "10px 0",
  },
  name: {
    fontSize: "1em",
    color: "#007bff",
    margin: "10px 0 5px",
  },
  title: {
    fontSize: "0.8em",
    color: "#999",
  },
};

const App = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <Navbar />
      <Banner>
        <BannerForm />
      </Banner>
      {/* <RealtorComponent /> */}
      <Banner2 />
      <WhyChooseUs />
      <ImageAlignment />
      <AboutUs />
      <OurProjects />
      <HappyClients />
      <Stylus />
      <NavbarBottom />
      <Footer />
    </div>
  );
};

const Logo = () => {
  const logoStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoTextStyle = {
    marginLeft: "0.5rem",
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#2d3748",
  };

  return (
    <div style={logoStyle}>
      <img
        src="https://storage.googleapis.com/a1aa/image/aoPF3fFfTKkysEPIGew2NS5ttkhN2Uhs4XvMTm4QgnHaII0nA.jpg"
        alt="Logo of a house with the text 'Real Trust'"
        style={{ height: "2.5rem", width: "2.5rem" }}
        width="50"
        height="50"
      />
      <span style={logoTextStyle}>Real Trust</span>
    </div>
  );
};

const NavLink = ({ href, children }) => {
  const linkStyle = {
    color: "#4a5568",
    textDecoration: "none",
    transition: "color 0.2s",
  };

  const linkHoverStyle = {
    color: "#2d3748",
  };

  return (
    <a
      href={href}
      style={linkStyle}
      onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
      onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
    >
      {children}
    </a>
  );
};
const Navbar = () => {
  const headerStyle = {
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "20px 130px 20px 130px",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const navStyle = {
    display: "flex",
    gap: "1.5rem",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Logo />
        <nav style={navStyle}>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Services</NavLink>
          <NavLink href="#">About Projects</NavLink>
          <NavLink href="#">Testimonials</NavLink>
          <ContactButton href="#">Contact</ContactButton>
        </nav>
      </div>
    </header>
  );
};
const ContactButton = ({ href, children }) => {
  const buttonStyle = {
    backgroundColor: "#f97316",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    textDecoration: "none",
    transition: "background-color 0.2s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#ea580c",
  };

  return (
    <a
      href={href}
      style={buttonStyle}
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor =
          buttonHoverStyle.backgroundColor)
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
      }
    >
      {children}
    </a>
  );
};

// nav bar end here ................

const Banner = ({ children }) => {
  const bannerStyle = {
    width: "100%",
    height: "500px",
    // backgroundColor: "red",
    backgroundImage: "url(/images/youngCuppole.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    // border: "5px solid black",
    // maxWidth: "1200px",
    // gap: "2rem",
  };

  return (
    <>
      <div style={bannerStyle}>
        <div style={{ margin: "50px" }}>
          <h1 style={{ color: "white", fontSize: "315%" }}>
            Consultation , {"  "}Design & Marketing
          </h1>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            margin: "50px",
          }}
        >
          <div>{children}</div>;
        </div>
      </div>
      ;
    </>
  );
};
function BannerForm() {
  // const containerStyle = {
  //   background- color:"rgba(74, 90, 138, 0.8)",
  //     backdrop-filter: blur(10px); /* Blur effect */
  //   // backgroundColor: "#4a5a8a",
  //   // padding: "2rem",
  //   borderRadius: "0.5rem",
  //   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  //   width: "350px",
  //   maxWidth: "100%",
  //   // margin: "auto",
  //   overflow: "hidden",
  //   height: "100%",
  // };
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //   e.preventDefault();
  //   console.log(formData);
  //   try {
  //     console.log("entered try");
  //     const response = await fetch("http://localhost:5000/api/contacts", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     console.log("res recived", response);

  //     if (response.status === 201) {
  //       // Contact created successfully
  //       const data = await response.json();
  //       alert(data.message); // "Contact saved successfully"
  //       setFormData({ fullName: "", email: "", mobile: "", city: "" }); // Reset form
  //     } else if (response.status === 409) {
  //       // Contact already exists
  //       const data = await response.json();
  //       alert(data.message); // "Contact with this email already exists."
  //     } else {
  //       alert("Error submitting the form.");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert("Something went wrong!");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(
        "https://backend-landingpage.onrender.com/api/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 201) {
        // Contact created successfully
        const data = await response.json();
        alert(data.message); // "Contact saved successfully"
        setFormData({ fullName: "", email: "", mobile: "", city: "" }); // Reset form
      } else if (response.status === 409) {
        // Contact already exists
        const data = await response.json();
        alert(data.message); // "Contact with this email already exists."
      } else {
        alert("Error submitting the form.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  const containerStyle = {
    backgroundColor: "rgba(74, 90, 138, 0.8)", // Corrected camelCase
    backdropFilter: "blur(10px)", // Removed invalid syntax
    // backgroundColor: "#4a5a8a", // Example alternate color
    // padding: "2rem", // Uncomment if needed
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "350px",
    maxWidth: "100%",
    // margin: "auto", // Uncomment if needed
    overflow: "hidden",
    height: "100%",
  };

  const titleStyle = {
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1.5rem",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    // gap: "1rem",
  };

  const inputStyle = {
    margin: "10px",
    width: "84%",
    padding: "0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.25rem",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#f97316",
    color: "white",
    fontWeight: "bold",
    borderRadius: "0.25rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#ea580c",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Get a Free Consultation</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            style={inputStyle}
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            style={inputStyle}
            value={formData.mobile}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="Area, City"
            style={inputStyle}
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            // border: "3px solid green",
            // padding: "10px",
            width: "85%",
            padding: "20px 22px 41px 23px",
          }}
        >
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = buttonStyle.backgroundColor)
            }
          >
            Get Quick Quote
          </button>
        </div>
      </form>
    </div>
  );
}

const ConsultationForm = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          backgroundColor: "#4a5a8a",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            fontSize: "24px",
            marginBottom: "20px",
          }}
        >
          Get a Free Consultation
        </h1>
        <input
          type="text"
          placeholder="Full Name"
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ffffff",
            borderRadius: "5px",
            boxSizing: "border-box",
            backgroundColor: "#4a5a8a",
            color: "#ffffff",
          }}
        />
        <input
          type="email"
          placeholder="Enter Email Address"
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ffffff",
            borderRadius: "5px",
            boxSizing: "border-box",
            backgroundColor: "#4a5a8a",
            color: "#ffffff",
          }}
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ffffff",
            borderRadius: "5px",
            boxSizing: "border-box",
            backgroundColor: "#4a5a8a",
            color: "#ffffff",
          }}
        />
        <input
          type="text"
          placeholder="Area, City"
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ffffff",
            borderRadius: "5px",
            boxSizing: "border-box",
            backgroundColor: "#4a5a8a",
            color: "#ffffff",
          }}
        />
        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#f97330",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Get Quick Quote
        </button>
      </div>
    </div>
  );
};

// const BannerTrail = () => {
//   // const bannerStyle = {
//   //   width: "100%",
//   //   height: "500px",
//   //   backgroundImage: "url(/images/youngCuppole.svg)",
//   //   backgroundSize: "cover",
//   //   backgroundPosition: "center",
//   // };

//   return (
//     <>
//       {" "}
//       <div
//         class="relative flex items-center justify-center min-h-screen bg-cover bg-center"
//         style="background-image: url('https://storage.googleapis.com/a1aa/image/ZqdD0mMW4ZrJIBZuVcGuzSydFQvUfni5RNiuzvRSHDkDrC9JA.jpg');"
//       >
//         <div class="absolute inset-0 bg-black opacity-50"></div>
//         <div class="relative z-10 text-center text-white p-4">
//           <h1 class="text-4xl md:text-6xl font-bold">
//             Consultation, Design, & Marketing
//           </h1>
//         </div>
//         <div class="relative z-10 w-full md:w-1/3 p-8">
//           <div class="bg-white bg-opacity-50 backdrop-blur-lg p-8 rounded-lg shadow-lg">
//             <h2 class="text-2xl font-bold mb-6 text-gray-900">
//               Get a Free Consultation
//             </h2>
//             <form>
//               <div class="mb-4">
//                 <label
//                   class="block text-sm font-medium mb-2 text-gray-900"
//                   for="full-name"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   class="w-full p-3 rounded-lg border border-gray-300 text-gray-900"
//                   id="full-name"
//                   placeholder="Enter your full name"
//                   type="text"
//                 />
//               </div>
//               <div class="mb-4">
//                 <label
//                   class="block text-sm font-medium mb-2 text-gray-900"
//                   for="email"
//                 >
//                   Enter Email Address
//                 </label>
//                 <input
//                   class="w-full p-3 rounded-lg border border-gray-300 text-gray-900"
//                   id="email"
//                   placeholder="Enter your email address"
//                   type="email"
//                 />
//               </div>
//               <div class="mb-4">
//                 <label
//                   class="block text-sm font-medium mb-2 text-gray-900"
//                   for="phone"
//                 >
//                   Mobile Number
//                 </label>
//                 <input
//                   class="w-full p-3 rounded-lg border border-gray-300 text-gray-900"
//                   id="phone"
//                   placeholder="Enter your mobile number"
//                   type="tel"
//                 />
//               </div>
//               <div class="mb-6">
//                 <label
//                   class="block text-sm font-medium mb-2 text-gray-900"
//                   for="city"
//                 >
//                   Area/City
//                 </label>
//                 <input
//                   class="w-full p-3 rounded-lg border border-gray-300 text-gray-900"
//                   id="city"
//                   placeholder="Enter your area or city"
//                   type="text"
//                 />
//               </div>
//               <button
//                 class="w-full bg-orange-500 text-white p-3 rounded-lg font-bold"
//                 type="submit"
//               >
//                 Get Quick Quote
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const Banner2 = () => {
//   const bannerStyle = {
//     width: "100%",
//     height: "500px",
//     backgroundImage: "url(https://placehold.co/1200x500)",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   };

//   return <div style={bannerStyle}></div>;
// };

const RealtorComponent = () => {
  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f7fa",
      margin: "0",
      padding: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      maxWidth: "1200px",
      padding: "0px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
    },
    textSection: {
      flex: 1,
      padding: "20px",
    },
    heading: {
      color: "#2b6cb0",
      fontSize: "36px",
      marginBottom: "20px",
    },
    paragraph: {
      color: "#4a5568",
      fontSize: "18px",
      lineHeight: "1.6",
    },
    imageSection: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      borderRadius: "50%",
      margin: "10px",
      width: "200px",
      height: "200px",
      objectFit: "cover",
      border: "5px solid #e2e8f0",
    },
    circleBlue: {
      position: "absolute",
      borderRadius: "50%",
      width: "20px",
      height: "20px",
      backgroundColor: "#4299e1",
      top: "20%",
      left: "60%",
    },
    circleOrange: {
      position: "absolute",
      borderRadius: "50%",
      width: "20px",
      height: "20px",
      backgroundColor: "#ed8936",
      top: "50%",
      left: "70%",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Text Section */}
        <div style={styles.textSection}>
          <h1 style={styles.heading}>Not Your Average Realtor</h1>
          <p style={styles.paragraph}>
            Real realtors are experts in selling a property, advising on
            remodeling design, and effectively marketing to get the maximum
            value possible on the market.
          </p>
        </div>

        {/* Image Section */}
        <div style={styles.imageSection}>
          <img
            src="https://storage.googleapis.com/a1aa/image/8FAMwHx93c61GtfKW63ywUZhr4LkLGGD0Jlcv8W6qQp1DH9JA.jpg"
            alt="Realtor holding a small house model"
            style={styles.image}
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/5Jqb5JKCaZ65L55z3fk89lDEwes81Sn7niiQjX6DiOeaPc0nA.jpg"
            alt="Couple receiving keys from a realtor"
            style={styles.image}
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/uNxVX9nLFzZXHVJ0yuLJ3A5O7kzOUgU7TVHBEGb3BWH7hjeJA.jpg"
            alt="Realtor holding a house cutout"
            style={styles.image}
          />
        </div>
      </div>

      {/* Circles */}
      <div style={styles.circleBlue}></div>
      <div style={styles.circleOrange}></div>
    </div>
  );
};
// Banner 2

const Banner2 = () => {
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "4rem 1rem",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "2rem",
      height: "300px",
    },
    textSection: {
      flex: "1",
      textAlign: "left",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#2563EB",
      marginBottom: "1rem",
    },
    paragraph: {
      color: "#4B5563",
      fontSize: "1rem",
    },
    imageSection: {
      flex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    circleImage: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "4px solid #E5E7EB",
      position: "absolute",
      top: "10%",
      left: "30%",
    },
    smallCircleImage1: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "4px solid #E5E7EB",
      position: "absolute",
      top: "50%",
      left: "10%",
    },
    smallCircleImage2: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "4px solid #E5E7EB",
      position: "absolute",
      top: "50%",
      left: "60%",
    },
    smallImageRow: {
      display: "flex",
      gap: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.textSection}>
        <h1 style={styles.heading}>Not Your Average Realtor</h1>
        <p style={styles.paragraph}>
          Proin iaculis libero nec lorem sagittis, eget gravida arcu dictum.
          Aliquam erat volutpat. Suspendisse potenti. Donec facilisis, urna nec
          tincidunt pretium, sapien ligula ullamcorper lacus, a euismod ligula
          urna in dolor.
        </p>
      </div>
      <div style={styles.imageSection}>
        <div style={styles.circleImage}>
          <img
            src="https://storage.googleapis.com/a1aa/image/LZ1lWWzhEHLYAtYzVHQVkDFeIx9Iqbs6nRpdJnsIDXsqVV9JA.jpg"
            alt="Realtor holding a small house model"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={styles.smallCircleImage1}>
          <img
            src="https://storage.googleapis.com/a1aa/image/n9CspERbBk6XOBienn4VZI94MQtqU8Q4rENgjd53b7SqVV9JA.jpg"
            alt="Couple discussing with a realtor"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={styles.smallCircleImage2}>
          <img
            src="https://storage.googleapis.com/a1aa/image/HFgXeyScYM38CSZ6hE8zrbcZuqJcKhvQULqw9Lm9aDrpVV9JA.jpg"
            alt="Realtor holding a key"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

// some extras ...App.

const FeatureCard = ({ imageSrc, altText, title, description }) => {
  const cardStyle = {
    flex: 1,
    maxWidth: "300px",
    margin: "20px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "50px",
    height: "50px",
    marginBottom: "20px",
  };

  const titleStyle = {
    color: "#007bff",
    fontSize: "1.2em",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    fontSize: "0.9em",
    color: "#666666",
  };

  return (
    <div style={cardStyle}>
      <img src={imageSrc} alt={altText} style={imageStyle} />
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};
const WhyChooseUs = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "50px 20px",
  };

  const headingStyle = {
    color: "#007bff",
    fontSize: "2em",
    marginBottom: "10px",
  };

  const headingAfterStyle = {
    content: "''",
    display: "block",
    width: "50px",
    height: "3px",
    backgroundColor: "#007bff",
    margin: "10px auto",
  };

  const featuresStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: "30px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Why Choose Us?</h1>
      <div style={headingAfterStyle}></div>
      <div style={featuresStyle}>
        <FeatureCard
          imageSrc="https://storage.googleapis.com/a1aa/image/rQrRUpBem2wsSqV6fAXl8bqKiww3PbOA8J8RuEqafOX65Y0nA.jpg"
          altText="Icon representing Potential ROI"
          title="Potential ROI"
          description="Whether you are looking to buy a new property or renovate your current home for resale, we will lead you through potential returns for projects."
        />
        <FeatureCard
          imageSrc="https://storage.googleapis.com/a1aa/image/exBDogEqvNwJF6ZhWnE4F2YdePqhLqdqBBetatic2lB85Y0nA.jpg"
          altText="Icon representing Design"
          title="Design"
          description="Our in-house, world-class design team will guide you through your design options and assist during construction to complete the home of your dreams."
        />
        <FeatureCard
          imageSrc="https://storage.googleapis.com/a1aa/image/eRIKiiZpI2w2VarBk7TQ3iAbSaUdUeENvduiWskgoeLezxoPB.jpg"
          altText="Icon representing Marketing"
          title="Marketing"
          description="Creating branding, content and promotions to supplement digital marketing plans accompanying every home to match today's buyers."
        />
      </div>
    </div>
  );
};

const ImageAlignment = () => {
  const bodyStyle = {
    fontFamily: "Arial, sans-serif",

    backgroundImage: "url(/images/Group1.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "500px",
    // backgroundColor: "yellow",
  };

  const containerStyle = {
    position: "relative",
    width: "80%",
    height: "80%",
  };

  const imageBaseStyle = {
    position: "absolute",
  };

  const image1Style = {
    ...imageBaseStyle,
    top: "2%",
    left: "10%",
    width: "18%",
  };

  const image2Style = {
    ...imageBaseStyle,
    top: "37%",
    left: "38%",
    width: "28%",
  };

  const image3Style = {
    ...imageBaseStyle,
    top: "56%",
    left: "75%",
    width: "20%",
  };

  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        <img
          style={image1Style}
          src="https://storage.googleapis.com/a1aa/image/qZo01LdDX5JeJKtYIfZOJZsyQ2VeL6wBsogUbntocdqZZW1nA.jpg"
          alt="Two people shaking hands in front of a building"
        />
        <img
          style={image2Style}
          src="https://storage.googleapis.com/a1aa/image/TCSc8Sg3zP72BtQ7fHAtkJ5NSOGvyhcdWctjp8JUOxSXmV9JA.jpg"
          alt="A group of people having a discussion in an office"
        />
        <img
          style={image3Style}
          src="https://storage.googleapis.com/a1aa/image/yTemOBaxuYUgB6Au4dCdfimTaGxsopsEzufyPcQuA0PaZW1nA.jpg"
          alt="A couple talking to a real estate agent"
        />
      </div>
    </div>
  );
};

const AboutUs = () => {
  const bodyStyle = {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "500px",
    backgroundColor: "#ffffff",
    // backgroundColor: "tomato",
  };

  const containerStyle = {
    textAlign: "center",
    maxWidth: "600px",
    padding: "20px",
  };

  const headingStyle = {
    color: "#007bff",
    fontSize: "2em",
    marginBottom: "10px",
  };

  const underlineStyle = {
    width: "50px",
    height: "4px",
    backgroundColor: "#007bff",
    margin: "0 auto 20px auto",
  };

  const paragraphStyle = {
    color: "#666666",
    fontSize: "1em",
    lineHeight: "1.5",
    marginBottom: "20px",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "10px 20px",
    color: "#007bff",
    border: "1px solid #007bff",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s, color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#007bff",
    color: "#ffffff",
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, buttonHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, buttonStyle);
  };

  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <div style={underlineStyle}></div>
        <p style={paragraphStyle}>
          Fifteen years of expertise in real estate, excellent customer service
          and a commitment to work hard, listen and follow through. We provide
          quality service to build relationships with clients and, more
          importantly, maintain those relationships by communicating
          effectively.
        </p>
        <a
          href="#"
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

// const Card = ({ imageSrc, altText, title, details, link }) => {
//   const cardStyle = {
//     backgroundColor: "#fff",
//     borderRadius: "8px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//     margin: "10px",
//     flex: "1 1 calc(20% - 20px)",
//     maxWidth: "calc(20% - 20px)",
//     overflow: "hidden",
//     textAlign: "left",
//   };

//   const imageStyle = {
//     width: "100%",
//     height: "auto",
//   };

//   const contentStyle = {
//     padding: "20px",
//   };

//   const titleStyle = {
//     color: "#007bff",
//     fontSize: "1.2em",
//     margin: "0 0 10px",
//   };

//   const detailsStyle = {
//     color: "#666",
//     fontSize: "0.9em",
//     margin: "0 0 20px",
//   };

//   const btnStyle = {
//     display: "inline-block",
//     padding: "10px 20px",
//     backgroundColor: "#ff6600",
//     color: "#fff",
//     textDecoration: "none",
//     borderRadius: "4px",
//     fontSize: "0.9em",
//   };

//   return (
//     <div style={cardStyle}>
//       <img src={imageSrc} alt={altText} style={imageStyle} />
//       <div style={contentStyle}>
//         <h3 style={titleStyle}>{title}</h3>
//         <p style={detailsStyle}>{details}</p>
//         <a href={link} style={btnStyle}>
//           READ MORE
//         </a>
//       </div>
//     </div>
//   );
// };

// const OurProjects = () => {
//   const containerStyle = {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: "20px",
//     textAlign: "center",
//   };

//   const headerStyle = {
//     marginBottom: "40px",
//   };

//   const headerTextStyle = {
//     color: "#007bff",
//     fontSize: "2.5em",
//     margin: "0",
//   };

//   const headerParaStyle = {
//     color: "#666",
//     fontSize: "1.1em",
//     margin: "10px 0 0",
//   };

//   const projectsStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   };

//   // const cards = [
//   //   {
//   //     imageSrc:
//   //       "https://storage.googleapis.com/a1aa/image/aZoPQ0D84u7yKpevFxAOe970M6QWeURaX1CcHBfNE3FmvzoPB.jpg",
//   //     altText: "Two people shaking hands in front of a house",
//   //     title: "Consultation",
//   //     details: "Project details | location",
//   //     link: "#",
//   //   },
//   //   {
//   //     imageSrc:
//   //       "https://storage.googleapis.com/a1aa/image/pUvMeUIFkZzSGCT36kGVWgJQtJDUyfSeR7SeNyVsaf9qeOjeJA.jpg",
//   //     altText: "A modern house with a garage",
//   //     title: "Design",
//   //     details: "Project details | location",
//   //     link: "#",
//   //   },
//   //   {
//   //     imageSrc:
//   //       "https://storage.googleapis.com/a1aa/image/SmY2TzOISgY9BBvPDphV9JIbpqJcpjDLPHdy3kamQRx9OjeJA.jpg",
//   //     altText: "A yellow house with a porch",
//   //     title: "Marketing & Design",
//   //     details: "Project details | location",
//   //     link: "#",
//   //   },
//   //   {
//   //     imageSrc:
//   //       "https://storage.googleapis.com/a1aa/image/eImobtv50wwDEaSogPcyK9rcjhvetyyNZ9pzOe0DKdBp3Z0nA.jpg",
//   //     altText: "A person holding a 'SOLD' sign in front of a house",
//   //     title: "Consultation & Marketing",
//   //     details: "Project details | location",
//   //     link: "#",
//   //   },
//   //   {
//   //     imageSrc:
//   //       "https://storage.googleapis.com/a1aa/image/yeaWA2nSnOyyRKtUfzRkhltSEtK8Ibp9b1FkONn4gVV67M6TA.jpg",
//   //     altText: "A group of people having a discussion",
//   //     title: "Consultation",
//   //     details: "Project details | location",
//   //     link: "#",
//   //   },
//   // ];

//   return (
//     <div style={containerStyle}>
//       <div style={headerStyle}>
//         <h1 style={headerTextStyle}>Our Projects</h1>
//         <p style={headerParaStyle}>
//           We know what buyers are looking for and suggest projects that will
//           bring clients top dollar for the sale of their homes.
//         </p>
//       </div>
//       <div style={projectsStyle}>
//         {cards.map((card, index) => (
//           <Card key={index} {...card} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Card = ({ imageSrc, altText, title, details, link }) => {
//   const cardStyle = {
//     backgroundColor: "#fff",
//     borderRadius: "8px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//     margin: "10px",
//     flex: "1 1 calc(20% - 20px)",
//     maxWidth: "calc(20% - 20px)",
//     overflow: "hidden",
//     textAlign: "left",
//   };

//   const imageStyle = {
//     width: "100%",
//     height: "auto",
//   };

//   const contentStyle = {
//     padding: "20px",
//   };

//   const titleStyle = {
//     color: "#007bff",
//     fontSize: "1.2em",
//     margin: "0 0 10px",
//   };

//   const detailsStyle = {
//     color: "#666",
//     fontSize: "0.9em",
//     margin: "0 0 20px",
//   };

//   const btnStyle = {
//     display: "inline-block",
//     padding: "10px 20px",
//     backgroundColor: "#ff6600",
//     color: "#fff",
//     textDecoration: "none",
//     borderRadius: "4px",
//     fontSize: "0.9em",
//   };

//   return (
//     <div style={cardStyle}>
//       <img src={imageSrc} alt={altText} style={imageStyle} />
//       <div style={contentStyle}>
//         <h3 style={titleStyle}>{title}</h3>
//         <p style={detailsStyle}>{details}</p>
//         <a href={link} style={btnStyle}>
//           READ MORE
//         </a>
//       </div>
//     </div>
//   );
// };

// const Card = ({ imageSrc, altText, title, details, link }) => {
//   const cardStyle = {
//     backgroundColor: "#fff",
//     borderRadius: "8px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//     margin: "10px",
//     flex: "1 1 calc(20% - 20px)",
//     maxWidth: "calc(20% - 20px)",
//     overflow: "hidden",
//     textAlign: "left",
//     display: "flex",
//     flexDirection: "column",
//     height: "300px", // Fixed height for consistency
//   };

//   const imageContainerStyle = {
//     width: "100%",
//     height: "150px", // Fixed height for the image area
//     overflow: "hidden",
//   };

//   const imageStyle = {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover", // Ensures the image fills the area proportionally
//   };

//   const contentStyle = {
//     padding: "20px",
//     flex: "1", // Allows content to stretch within the remaining space
//   };

//   const titleStyle = {
//     color: "#007bff",
//     fontSize: "1.2em",
//     margin: "0 0 10px",
//   };

//   const detailsStyle = {
//     color: "#666",
//     fontSize: "0.9em",
//     margin: "0 0 20px",
//     overflow: "hidden", // Prevents text overflow
//     textOverflow: "ellipsis",
//     display: "-webkit-box",
//     WebkitLineClamp: 3, // Limits to 3 lines of text
//     WebkitBoxOrient: "vertical",
//   };

//   const btnStyle = {
//     display: "inline-block",
//     padding: "10px 20px",
//     backgroundColor: "#ff6600",
//     color: "#fff",
//     textDecoration: "none",
//     borderRadius: "4px",
//     fontSize: "0.9em",
//   };

//   return (
//     <div style={cardStyle}>
//       <div style={imageContainerStyle}>
//         <img src={imageSrc} alt={altText} style={imageStyle} />
//       </div>
//       <div style={contentStyle}>
//         <h3 style={titleStyle}>{title}</h3>
//         <p style={detailsStyle}>{details}</p>
//         <a href={link} style={btnStyle}>
//           READ MORE
//         </a>
//       </div>
//     </div>
//   );
// };

const Card = ({ imageSrc, altText, title, details, link }) => {
  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transform: "perspective(1000px) translateZ(0)",
    transition: "transform 0.3s, box-shadow 0.3s",
    margin: "10px",
    flex: "1 1 calc(20% - 20px)",
    maxWidth: "calc(20% - 20px)",
    overflow: "hidden",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    height: "300px", // Fixed height for consistency
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "perspective(1000px) translateZ(20px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
  };

  const imageContainerStyle = {
    width: "100%",
    height: "150px", // Fixed height for the image area
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensures the image fills the area proportionally
  };

  const contentStyle = {
    padding: "20px",
    flex: "1", // Allows content to stretch within the remaining space
  };

  const titleStyle = {
    color: "#007bff",
    fontSize: "1.2em",
    margin: "0 0 10px",
  };

  const detailsStyle = {
    color: "#666",
    fontSize: "0.9em",
    margin: "0 0 20px",
    overflow: "hidden", // Prevents text overflow
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3, // Limits to 3 lines of text
    WebkitBoxOrient: "vertical",
  };

  const btnStyle = {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#ff6600",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
    fontSize: "0.9em",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = cardHoverStyle.transform;
        e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = cardStyle.transform;
        e.currentTarget.style.boxShadow = cardStyle.boxShadow;
      }}
    >
      <div style={imageContainerStyle}>
        <img src={imageSrc} alt={altText} style={imageStyle} />
      </div>
      <div style={contentStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={detailsStyle}>{details}</p>
        <a href={link} style={btnStyle}>
          READ MORE
        </a>
      </div>
    </div>
  );
};

const OurProjects = () => {
  const [projects, setProjects] = useState([]); // State to store projects
  const [loading, setLoading] = useState(true); // State to show loading

  useEffect(() => {
    // Fetch projects when component mounts
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://backend-landingpage.onrender.com/api/projects"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data); // Update state with projects
        setLoading(false); // Stop loading
      } catch (err) {
        console.error("Error fetching projects:", err.message);
        setLoading(false); // Stop loading even on error
      }
    };

    fetchProjects();
  }, []);

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  };

  const headerStyle = {
    marginBottom: "40px",
  };

  const headerTextStyle = {
    color: "#007bff",
    fontSize: "2.5em",
    margin: "0",
  };

  const headerParaStyle = {
    color: "#666",
    fontSize: "1.1em",
    margin: "10px 0 0",
  };

  const projectsStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  if (loading) {
    return <div>Loading projects...</div>;
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={headerTextStyle}>Our Projects</h1>
        <p style={headerParaStyle}>
          We know what buyers are looking for and suggest projects that will
          bring clients top dollar for the sale of their homes.
        </p>
      </div>
      <div style={projectsStyle}>
        {projects.map((project, index) => (
          <Card
            key={index}
            imageSrc={project.image}
            altText={project.title || "Project image"}
            title={project.name}
            details={project.description}
            link={project.link || "#"}
          />
        ))}
      </div>
    </div>
  );
};

// const Card2 = ({ imgSrc, name, title, description }) => {
//   return (
//     <div style={styles.card}>
//       <img
//         src={imgSrc}
//         alt={`Profile picture of ${name}`}
//         style={styles.image}
//       />
//       <p style={styles.description}>{description}</p>
//       <h3 style={styles.name}>{name}</h3>
//       <span style={styles.title}>{title}</span>
//     </div>
//   );
// };

// const HappyClients = () => {
//   // const clients = [
//   //   {
//   //     imgSrc:
//   //       "https://storage.googleapis.com/a1aa/image/PVm9ZLBWEeW5EyHMq36saWXgmgPcp5HU8JdpKQuoWdwOiG9JA.jpg",
//   //     name: "Rawman Smith",
//   //     title: "CEO, Some Company",
//   //     description:
//   //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//   //   },
//   //   {
//   //     imgSrc:
//   //       "https://storage.googleapis.com/a1aa/image/PIQq4l9mLxpIHtQm6ooVfqLlubKk7ow5rDthRDuY2F1NiG9JA.jpg",
//   //     name: "Shipra Kayak",
//   //     title: "CTO, Some Company",
//   //     description:
//   //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//   //   },
//   //   {
//   //     imgSrc:
//   //       "https://storage.googleapis.com/a1aa/image/W7VXK8sD9ArlFhpqSiJyfEO8J1PVNueREd2cDeyjb7W0Ia0nA.jpg",
//   //     name: "John Lopez",
//   //     title: "COO, Some Company",
//   //     description:
//   //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//   //   },
//   //   {
//   //     imgSrc:
//   //       "https://storage.googleapis.com/a1aa/image/QdEwZwYN0NKiPhlK5Ar5fqJedQIfc7ogW1LcZ2M0Cw58Ia0nA.jpg",
//   //     name: "Marry Freeman",
//   //     title: "Marketing Manager, Some Company",
//   //     description:
//   //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//   //   },
//   //   {
//   //     imgSrc:
//   //       "https://storage.googleapis.com/a1aa/image/CghHDroAOwZBNJRdEnktGd53HAfEpLNfDcqc8kH6FgKZEN6TA.jpg",
//   //     name: "Lucy",
//   //     title: "Marketing Specialist, Some Company",
//   //     description:
//   //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
//   //   },
//   // ];

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Happy Clients</h2>
//       <div style={styles.cardsContainer}>
//         {clients.map((client, index) => (
//           <Card2
//             key={index}
//             imgSrc={client.imgSrc}
//             name={client.name}
//             title={client.title}
//             description={client.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Card2 = ({ imgSrc, name, title, description }) => {
//   return (
//     <div style={styles.card}>
//       <img
//         src={imgSrc}
//         alt={`Profile picture of ${name}`}
//         style={styles.image}
//       />
//       <p style={styles.description}>{description}</p>
//       <h3 style={styles.name}>{name}</h3>
//       <span style={styles.title}>{title}</span>
//     </div>
//   );
// };

const Card2 = ({ imgSrc, name, title, description }) => {
  const styles = {
    card: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transform: "perspective(1000px) translateZ(0)",
      transition: "transform 0.3s, box-shadow 0.3s",
      padding: "20px",
      textAlign: "center",
      cursor: "pointer",
    },
    cardHover: {
      transform: "perspective(1000px) translateZ(20px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
    },
    image: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      marginBottom: "10px",
    },
    description: {
      fontSize: "0.9em",
      color: "#666",
      marginBottom: "10px",
    },
    name: {
      fontSize: "1.2em",
      fontWeight: "bold",
      marginBottom: "5px",
      color: "#007bff",
    },
    title: {
      fontSize: "1em",
      color: "black",
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.cardHover.transform;
        e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = styles.card.transform;
        e.currentTarget.style.boxShadow = styles.card.boxShadow;
      }}
    >
      <img
        src={imgSrc}
        alt={`Profile picture of ${name}`}
        style={styles.image}
      />
      <p style={styles.description}>{description}</p>
      <h3 style={styles.name}>{name}</h3>
      <span style={styles.title}>{title}</span>
    </div>
  );
};

const HappyClients = () => {
  const [clients, setClients] = useState([]); // State to store fetched clients
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch data from the server
    fetch("https://backend-landingpage.onrender.com/api/clients") // Replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch clients data");
        }
        return response.json();
      })
      .then((data) => {
        setClients(data); // Set fetched data
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message); // Handle errors
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs only once when the component mounts

  if (loading) {
    return <p>Loading clients...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Happy Clients</h2>
      <div style={styles.cardsContainer}>
        {clients.map((client, index) => (
          <Card2
            key={index}
            imgSrc={client.image}
            name={client.name}
            title={client.designation}
            description={client.description}
          />
        ))}
      </div>
    </div>
  );
};

const LearnMoreButton = () => {
  const styles = {
    body: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "6vh", // Use full viewport height to center the button properly
      backgroundColor: "#f0f0f0",
    },
    button: {
      height: "50px", // Explicit height
      width: "200px", // Explicit width
      backgroundColor: "#ffffff",
      border: "1px solid #dcdcdc",
      borderRadius: "5px",
      padding: "0", // Ensure padding doesn't affect height
      fontFamily: "Arial, sans-serif",
      fontSize: "16px",
      color: "#1a73e8",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-flex", // Ensure proper alignment of text inside the button
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.body}>
      <a href="#" style={styles.button}>
        LEARN MORE
      </a>
    </div>
  );
};

// const Stylus = () => {
//   const containerStyle = {
//     height: "300px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column", // Correct spelling
//     backgroundColor: "grey",
//     backgroundImage: "url(/images/Rectangle.svg)",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     gap: "20px", // Adds space between inner containers
//     padding: "10px", // Adds padding inside the container
//   };

//   const innerFirst = {
//     height: "30%",
//     width: "72%",
//     // backgroundColor: "yellow",
//     padding: "10px", // Adds padding inside the first container
//   };

//   const innerSecond = {
//     // backgroundColor: "green",
//     height: "18%",
//     width: "74%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   return (
//     <>
//       <div style={containerStyle}>
//         <div style={innerFirst}>
//           <h1 style={{ fontSize: "27px", color: "white" }}>
//             {" "}
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </h1>
//         </div>
//         <div style={innerSecond}>
//           <LearnMoreButton />
//         </div>
//       </div>
//     </>
//   );
// };
// const NavbarBottom = () => {
//   const [email, setEmail] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value); // Update state when email input changes
//   };

//   const handleSubscribe = async (e) => {
//     e.preventDefault(); // Prevent default form submission
//     if (!email) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/subscribers", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }), // Send email to the server
//       });

//       if (response.ok) {
//         alert("Subscribed successfully!");
//         setEmail(""); // Reset the input field
//       } else {
//         const data = await response.json();
//         alert(data.message || "Subscription failed.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("An error occurred while subscribing.");
//     }
//   };

//   const styles = {
//     navbar: {
//       backgroundColor: "#007bff",
//       overflow: "hidden",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       padding: "10px 300px",
//     },
//     link: {
//       color: "white",
//       textAlign: "center",
//       padding: "14px 16px",
//       textDecoration: "none",
//       fontSize: "17px",
//     },
//     linkHover: {
//       backgroundColor: "#0056b3",
//       color: "white",
//     },
//     subscribeSection: {
//       display: "flex",
//       alignItems: "center",
//     },
//     inputText: {
//       padding: "6px",
//       marginRight: "10px",
//       border: "none",
//       borderRadius: "4px",
//     },
//     inputSubmit: {
//       padding: "6px 12px",
//       backgroundColor: "white",
//       color: "#007bff",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//     },
//     inputSubmitHover: {
//       backgroundColor: "#e0e0e0",
//     },
//   };

//   return (
//     <div style={styles.navbar}>
//       <div className="nav-links">
//         {["Home", "Services", "Projects", "Testimonials", "Contact"].map(
//           (item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               style={styles.link}
//               onMouseOver={(e) =>
//                 (e.target.style.backgroundColor =
//                   styles.linkHover.backgroundColor)
//               }
//               onMouseOut={(e) => (e.target.style.backgroundColor = "")}
//             >
//               {item}
//             </a>
//           )
//         )}
//       </div>
//       <div style={styles.subscribeSection}>
//         <a href="#subscribe" style={styles.link}>
//           Subscribe to
//         </a>
//         <input
//           type="text"
//           placeholder="Enter Email Address"
//           value={email}
//           onChange={handleEmailChange}
//           style={styles.inputText}
//         />
//         <input
//           type="submit"
//           style={styles.inputSubmit}
//           onMouseOver={(e) =>
//             (e.target.style.backgroundColor =
//               styles.inputSubmitHover.backgroundColor)
//           }
//           onMouseOut={(e) =>
//             (e.target.style.backgroundColor =
//               styles.inputSubmit.backgroundColor)
//           }
//         />
//       </div>
//     </div>
//   );
// };

const Stylus = () => {
  const containerStyle = {
    position: "relative", // Allows positioning of the overlay
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundImage: "url(/images/Rectangle.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    gap: "20px",
    padding: "10px",
    overflow: "hidden", // Ensures no overflow
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds blackish opacity
    zIndex: 1, // Sits below text and button
  };

  const innerFirst = {
    position: "relative",
    zIndex: 2, // Ensures it sits above the overlay
    height: "30%",
    width: "72%",
    padding: "10px",
  };

  const innerSecond = {
    position: "relative",
    zIndex: 2, // Ensures it sits above the overlay
    height: "18%",
    width: "74%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      {/* Overlay Layer */}
      <div style={overlayStyle}></div>
      {/* Content Layers */}
      <div style={innerFirst}>
        <h1 style={{ fontSize: "27px", color: "white", zIndex: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h1>
      </div>
      <div style={innerSecond}>
        <LearnMoreButton />
      </div>
    </div>
  );
};

const NavbarBottom = () => {
  const [email, setEmail] = useState(""); // State to hold email input

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update state when email input changes
  };

  const handleSubscribe = async (e) => {
    e.preventDefault(); // Prevent default form submission
    // console.log(email);
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(
        "https://backend-landingpage.onrender.com/api/subscribers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }), // Send email to the server
        }
      );

      if (response.ok) {
        alert("Subscribed successfully!");
        setEmail(""); // Reset the input field
      } else {
        const data = await response.json();
        alert(data.message || "Subscription failed.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while subscribing.");
    }
  };

  const styles = {
    navbar: {
      backgroundColor: "#007bff",
      overflow: "hidden",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "13px 173px",
    },
    link: {
      color: "white",
      textAlign: "center",
      padding: "14px 16px",
      textDecoration: "none",
      fontSize: "17px",
    },
    linkHover: {
      backgroundColor: "#0056b3",
      color: "white",
    },
    subscribeSection: {
      display: "flex",
      alignItems: "center",
    },
    inputText: {
      padding: "6px",
      marginRight: "10px",
      border: "none",
      borderRadius: "4px",
    },
    inputSubmit: {
      padding: "6px 12px",
      backgroundColor: "white",
      color: "#007bff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    inputSubmitHover: {
      backgroundColor: "#e0e0e0",
    },
  };

  return (
    <div style={styles.navbar}>
      <div className="nav-links">
        {["Home", "Services", "Projects", "Testimonials", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={styles.link}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor =
                  styles.linkHover.backgroundColor)
              }
              onMouseOut={(e) => (e.target.style.backgroundColor = "")}
            >
              {item}
            </a>
          )
        )}
      </div>
      <div style={styles.subscribeSection}>
        <a href="#subscribe" style={styles.link}>
          Subscribe to
        </a>
        <form onSubmit={handleSubscribe} style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Enter Email Address"
            value={email}
            onChange={handleEmailChange}
            style={styles.inputText}
          />
          <button
            type="submit"
            style={styles.inputSubmit}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                styles.inputSubmitHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor =
                styles.inputSubmit.backgroundColor)
            }
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#1a1a2e",
      color: "#ffffff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 104px",
    },
    left: {
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
    },
    center: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      height: "20px",
      marginRight: "5px",
    },
    centerText: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    right: {
      display: "flex",
      alignItems: "center",
    },
    link: {
      color: "#ffffff",
      marginLeft: "10px",
      fontSize: "18px",
      textDecoration: "none",
    },
    icon: {
      fontSize: "18px",
    },
  };

  return (
    <div style={styles.footer}>
      {/* Left Section */}
      <div style={styles.left}>All Rights Reserved 2023</div>

      {/* Center Section */}
      <div style={styles.center}>
        <img
          src="https://storage.googleapis.com/a1aa/image/79406x1WqvpEAhzsfz5Kh2H43ehNNXz9arnNDiae7JDpFc0nA.jpg"
          alt="Logo"
          style={styles.logo}
        />
        <span style={styles.centerText}>Real</span> rust
      </div>

      {/* Right Section */}
      <div style={styles.right}>
        <a href="#" style={styles.link}>
          <img
            alt="Twitter icon"
            class="h-6 w-6"
            height="24"
            src="https://storage.googleapis.com/a1aa/image/zdgZjUTthe1tGC875qcGJc4RFGydbHHAS4E55JscVe4afX1nA.jpg"
            width="24"
          />
        </a>
        <a href="#" style={styles.link}>
          <img
            alt="YouTube icon"
            class="h-6 w-6"
            height="24"
            src="https://storage.googleapis.com/a1aa/image/ffbEeL9fmbnSxT8O9ijtO1mpI1lJzOkni0ceW5keGb642fV9JA.jpg"
            width="24"
          />
        </a>
        <a href="#" style={styles.link}>
          <img
            alt="Facebook icon"
            class="h-6 w-6"
            height="24"
            src="https://storage.googleapis.com/a1aa/image/mhPH9XqI23a8AZZDPj1dP0UcO0rOfbu2BOX58iBFVxSufr6TA.jpg"
            width="24"
          />
        </a>
        <a href="#" style={styles.link}>
          <img
            alt="LinkedIn icon"
            class="h-6 w-6"
            height="24"
            src="https://storage.googleapis.com/a1aa/image/j2ksQnbTs2IYB9H0X3mtAbzYtkbsaO5D9zQnWf0Ayvtufr6TA.jpg"
            width="24"
          />
        </a>
      </div>
    </div>
  );
};

export default App;
