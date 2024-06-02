/* A simple iframe wrapper that makes 16:9 responsive embed */
import React from "react";

export default ({ url, background = "black", className = "video" }) => {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        background: background,
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        width="560"
        title="video"
        height="315"
        src={`https://www.youtube.com/embed/${url}?&showinfo=0&controls=0&autohide=1&rel=0`}
      ></iframe>
    </div>
  );
};
