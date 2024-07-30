import React from "react";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "white",
    },
    title: {
      fontSize: "24px",
    },
    search: {
      padding: "5px",
      borderRadius: "5px",
      border: "none",
    },
    links: {
      marginLeft: "20px",
      color: "white",
      textDecoration: "none",
    },
    linkHover: {
      textDecoration: "underline",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.title}>DEV@Deakin</div>
      <div>
        <input type="text" placeholder="Search..." style={styles.search} />
      </div>
      <div>
        <a href="#post" style={styles.links}>
          Post
        </a>
        <a href="#login" style={styles.links}>
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
