import { useEffect, useRef } from 'react';

const HackerBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const getFontSize = () => {
      return window.innerWidth < 768 ? 10 : 15;
    };

    const getColumnWidth = () => {
      return window.innerWidth < 768 ? 12 : 20;
    };

    const columns = Math.floor(canvas.width / getColumnWidth());
    const drops = Array(columns).fill(1);

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${getFontSize()}px monospace`;

      const columnWidth = getColumnWidth();

      drops.forEach((drop, i) => {
        const text = String.fromCharCode(Math.random() * 128);
        ctx.fillText(text, i * columnWidth, drop * columnWidth);

        if (drop * columnWidth > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const intervalId = setInterval(drawMatrix, 50);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="hacker-background">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      {[...Array(10)].map((_, i) => (
        <span key={i} style={{ left: `${i * 10}%` }}></span>
      ))}
    </div>
  );
};

export default HackerBackground;
