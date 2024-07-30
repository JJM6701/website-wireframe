import React from "react";
import PropTypes from "prop-types";
import StarIcon from "@mui/icons-material/Star";

const CardCollection = ({ collectionName, permalink, cards = [] }) => {
  const styles = {
    cardCollection: {
      padding: "30px 10px",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
    },
    cardGrid: {
      display: "flex",
      justifyContent: "space-between",
    },
    card: {
      padding: "15px",
      width: "27%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    cardImage: {
      width: "100%",
      height: "auto",
      borderRadius: "2px",
    },
    cardContent: {
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    cardDetails: {
      display: "flex",
      justifyContent: "space-between",
      fontWeight: "bold",
    },
    rating: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    viewMoreButton: {
      display: "block",
      textAlign: "center",
      width: "fit-content",
      margin: "10px auto",
      padding: "10px 20px",
      backgroundColor: "#b3b1b1",
      color: "black",
      textDecoration: "none",
      borderRadius: "10px",
    },
  };

  return (
    <div style={styles.cardCollection}>
      <h2 style={styles.header}>Featured {collectionName}</h2>
      <div style={styles.cardGrid}>
        {cards.slice(0, 3).map((card, index) => (
          <div style={styles.card} key={index}>
            <img src={card.image} alt={card.title} style={styles.cardImage} />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p>{card.description}</p>
              <div style={styles.cardDetails}>
                <p style={styles.rating}>
                  <StarIcon />
                  {card.rating}
                </p>
                <p>{card.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href={permalink} style={styles.viewMoreButton}>
        See all {collectionName}
      </a>
    </div>
  );
};

export default CardCollection;
