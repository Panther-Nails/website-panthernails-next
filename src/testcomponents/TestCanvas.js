import { useEffect, useRef } from "react";
import tw from "twin.macro";

export default () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let frame = 0;

    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      frame += 0.01; // Controls speed of both color and wave motion

      // 🎨 Generate colors based on frame (for smooth transitions)
      const baseHue = (Math.sin(frame * 0.3) * 180 + 180) % 360;
      const altHue = (Math.sin(frame * 0.5) * 180 + 180) % 360;

      // 🌈 Create a gradient background
      const backgroundGradient = ctx.createLinearGradient(0, 0, width, height);
      backgroundGradient.addColorStop(0, `hsl(${baseHue}, 100%, 50%)`);
      backgroundGradient.addColorStop(1, `hsl(${altHue}, 100%, 50%)`);

      ctx.fillStyle = backgroundGradient;
      ctx.fillRect(0, 0, width, height);

      // 🌊 Draw multiple waves with colors matching the background
      drawWave(ctx, width, height, frame, 30, 3, waveGradient(ctx, width, height, baseHue, altHue, 1), 1, 1);
      drawWave(ctx, width, height, -frame, 20, 4, waveGradient(ctx, width, height, baseHue, altHue, 2), 1.5, -1);
      drawWave(ctx, width, height, frame * 1.2, 15, 5, waveGradient(ctx, width, height, baseHue, altHue, 3), 2, 1);
      drawWave(ctx, width, height, -frame * 0.8, 10, 6, waveGradient(ctx, width, height, baseHue, altHue, 4), 2.5, -1);

      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  // 🌀 Function to draw waves moving in different directions
  const drawWave = (ctx, width, height, frame, waveHeight, lineWidth, gradient, speed, direction) => {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = gradient;
    ctx.lineJoin = "round";

    for (let x = 0; x < width; x++) {
      const y =
        Math.sin((x / width) * Math.PI * 4 + frame * speed * direction) * waveHeight +
        height / 2;
      ctx.lineTo(x, y);
    }

    ctx.stroke();
  };

  // 🎨 Function to generate a gradient for each wave that matches the background
  const waveGradient = (ctx, width, height, baseHue, altHue, waveIndex) => {
    const gradient = ctx.createLinearGradient(0, height / 2 - 50, width, height / 2 + 50);
    const hue1 = (baseHue + waveIndex * 20) % 360; // Shifted hue to match background
    const hue2 = (altHue + waveIndex * 20) % 360;
    
    gradient.addColorStop(0, `hsl(${hue1}, 100%, 60%)`);
    gradient.addColorStop(1, `hsl(${hue2}, 100%, 60%)`);
    
    return gradient;
  };

  return (
    <canvas
      ref={canvasRef}
      width={510}
      height={600}
      css={tw`w-[510px] h-[600px] block rounded-lg shadow-lg`}
      className="Gradient__canvas isLoaded"
    />
  );
};
