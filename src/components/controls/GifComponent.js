import React from 'react';
import Animationgif from "../../../src/Animationgif.gif"

const GifComponent = () => {
  return (
    <div style={styles.container}>
      <img src={Animationgif} alt="Loading..." style={styles.gif} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',  // Optional: background color
  },
  gif: {
    width: '300px',  // Adjust width and height as needed
    height: '300px',
  },
};

export default GifComponent;
