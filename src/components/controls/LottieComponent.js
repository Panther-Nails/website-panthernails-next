import React from "react";
import Lottie from "react-lottie";
import Animation from "../../../src/Animation.json";

const LottieComponent = () => {
  const options = {
    animationData: Animation,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={styles.container}>
      <Lottie options={options} height={200} width={200} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#FFFFFF",
  },
};

export default LottieComponent;
