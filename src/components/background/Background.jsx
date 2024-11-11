import React, { useEffect } from 'react';
import './Background.css';
import $ from 'jquery';

const Background = () => {
  useEffect(() => {
    const canvas = $('#bg').children('canvas');
    const background = canvas[0];
    const foreground1 = canvas[1];
    const foreground2 = canvas[2];

    const config = {
      circle: {
        amount: 18,
        layer: 3,
        color: [157, 97, 207],
        alpha: 0.3,
      },
      line: {
        amount: 12,
        layer: 3,
        color: [255, 255, 255],
        alpha: 0.3,
      },
      speed: 0.5,
      angle: 20,
    };

    if (background.getContext) {
      const bctx = background.getContext('2d');
      const fctx1 = foreground1.getContext('2d');
      const fctx2 = foreground2.getContext('2d');
      const M = window.Math;
      const degree = (config.angle / 360) * M.PI * 2;
      let circles = [];
      let lines = [];
      let wWidth, wHeight, timer;

      const setCanvasHeight = () => {
        wWidth = $(window).width();
        wHeight = $(window).height();

        canvas.each(function () {
          this.width = wWidth;
          this.height = wHeight;
        });
      };

      const rgba = (color, alpha) => `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;

      const drawCircle = (x, y, radius, color, alpha) => {
        const gradient = fctx1.createRadialGradient(x, y, radius, x, y, 0);
        gradient.addColorStop(0, rgba(color, alpha));
        gradient.addColorStop(1, rgba(color, alpha - 0.1));

        fctx1.beginPath();
        fctx1.arc(x, y, radius, 0, M.PI * 2, true);
        fctx1.fillStyle = gradient;
        fctx1.fill();
      };

      const drawLine = (x, y, width, color, alpha) => {
        const endX = x + M.sin(degree) * width;
        const endY = y - M.cos(degree) * width;
        const gradient = fctx2.createLinearGradient(x, y, endX, endY);
        gradient.addColorStop(0, rgba(color, alpha));
        gradient.addColorStop(1, rgba(color, alpha - 0.1));

        fctx2.beginPath();
        fctx2.moveTo(x, y);
        fctx2.lineTo(endX, endY);
        fctx2.lineWidth = 3;
        fctx2.lineCap = 'round';
        fctx2.strokeStyle = gradient;
        fctx2.stroke();
      };

      const drawBack = () => {
        bctx.clearRect(0, 0, wWidth, wHeight);

        const gradient = bctx.createRadialGradient(wWidth * 0.3, wHeight * 0.1, 0, wWidth * 0.3, wHeight * 0.1, wWidth * 0.9);
        gradient.addColorStop(0, 'rgb(0, 26, 77)');
        gradient.addColorStop(1, 'transparent');

        bctx.beginPath();
        bctx.fillStyle = gradient;
        bctx.fillRect(0, 0, wWidth, wHeight);
      };

      const animate = () => {
        const sin = M.sin(degree);
        const cos = M.cos(degree);

        fctx1.clearRect(0, 0, wWidth, wHeight);
        fctx2.clearRect(0, 0, wWidth, wHeight);

        circles.forEach((item) => {
          let { x, y, radius, speed, color, alpha } = item;

          x = (x + sin * speed + wWidth) % wWidth;
          y = (y - cos * speed + wHeight) % wHeight;

          item.x = x;
          item.y = y;
          drawCircle(x, y, radius, color, alpha);
        });

        lines.forEach((item) => {
          let { x, y, width, speed, color, alpha } = item;

          x = (x + sin * speed + wWidth) % wWidth;
          y = (y - cos * speed + wHeight) % wHeight;

          item.x = x;
          item.y = y;
          drawLine(x, y, width, color, alpha);
        });

        timer = requestAnimationFrame(animate);
      };

      const createItems = () => {
        circles = Array.from({ length: config.circle.amount }, () => ({
          x: M.random() * wWidth,
          y: M.random() * wHeight,
          radius: M.random() * 40 + 20,
          color: config.circle.color,
          alpha: config.circle.alpha,
          speed: M.random() * 1 + 0.5,
        }));

        lines = Array.from({ length: config.line.amount }, () => ({
          x: M.random() * wWidth,
          y: M.random() * wHeight,
          width: M.random() * 80 + 20,
          color: config.line.color,
          alpha: config.line.alpha,
          speed: M.random() * 1 + 0.5,
        }));
      };

      setCanvasHeight();
      createItems();
      drawBack();
      animate();

      $(window).resize(() => {
        setCanvasHeight();
        createItems();
      });

      return () => cancelAnimationFrame(timer);
    }
  }, []);

  return (
    <div id="bg">
      <canvas></canvas>
      <canvas></canvas>
      <canvas></canvas>
    </div>
  );
};

export default Background;
