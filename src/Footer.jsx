import React from "react";

const Footer = () => {
  const styles = {
    footer: { padding: "10px 0px", backgroundColor: "#333" },
    columnContainer: {
      display: "flex",
      justifyContent: "space-between",
      color: "white",
      padding: "0 50px",
    },
    column: {
      flex: "1",
    },
    section: {
      textAlign: "center",
      justifyContent: "center",
      padding: "10px",
      color: "white",
      display: "flex",
      gap: "50px",
      margin: "5px 0",
    },
    link: {
      textDecoration: "none",
      color: "white",
    },
    linkList: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    socials: {
      display: "flex",
      gap: "10px",
    },
    heading: {
      margin: "20px 0",
    },
  };

  return (
    <div style={styles.footer}>
      <div style={styles.columnContainer}>
        <div style={styles.column}>
          <h3 style={styles.heading}>Explore</h3>
          <div style={styles.linkList}>
            <a style={styles.link} href="#">
              Home
            </a>
            <a style={styles.link} href="#">
              Questions
            </a>
            <a style={styles.link} href="#">
              Articles
            </a>
            <a style={styles.link} href="#">
              Tutorials
            </a>
          </div>
        </div>
        <div style={styles.column}>
          <h3 style={styles.heading}>Support</h3>
          <div style={styles.linkList}>
            <a style={styles.link} href="#">
              FAQs
            </a>
            <a style={styles.link} href="#">
              Help
            </a>
            <a style={styles.link} href="#">
              Contact Us
            </a>
          </div>
        </div>
        <div style={styles.column}>
          <h3 style={styles.heading}>Stay connected</h3>
          <div style={styles.socials}>
            <img src="https://picsum.photos/50" />
            <img src="https://picsum.photos/50" />
            <img src="https://picsum.photos/50" />
          </div>
        </div>
      </div>
      <h3 style={styles.section}>DEV@Deakin 2024</h3>
      <div style={styles.section}>
        <a style={styles.link} href="#">
          Privacy Policy
        </a>
        <a style={styles.link} href="#">
          Terms
        </a>
        <a style={styles.link} href="#">
          Code of Conduct
        </a>
      </div>
    </div>
  );
};

export default Footer;
