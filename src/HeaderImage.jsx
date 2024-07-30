import React from "react";

const HeaderImage = () => {
  const styles = {
    imageContainer: {
      width: "100%",
    },
    image: {
      width: "100%",
      height: "auto",
    },
  };

  return (
    <div style={styles.imageContainer}>
      <img
        src="https://picsum.photos/1920/600"
        alt="Header"
        style={styles.image}
      />
    </div>
  );
};

export default HeaderImage;
