import React, { useState, useEffect } from 'react';
import './gravitation.css';

function GravityExperiment() {
  const [startFall, setStartFall] = useState(false);
  const [mass, setMass] = useState(1);
  const [gravity, setGravity] = useState(9.8);
  const [drag, setDrag] = useState(0.1);
  const [velocity, setVelocity] = useState(0);
  const [position, setPosition] = useState(0);

  const boxHeight = 300; // Height of the falling area container
  const objectHeight = 50; // Height of the ball

  useEffect(() => {
    if (!startFall) return;

    const interval = setInterval(() => {
      setVelocity((v) => v + (gravity - drag * v) * 0.05);
      setPosition((p) => {
        const newPosition = p + velocity * 0.05;
        return newPosition < boxHeight - objectHeight ? newPosition : boxHeight - objectHeight;
      });
    }, 50);

    // Stop interval when the ball reaches the bottom
    if (position >= boxHeight - objectHeight) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [startFall, velocity, gravity, drag, position]);

  const handleStartExperiment = () => {
    setStartFall(true);
  };

  const handleResetExperiment = () => {
    setStartFall(false);
    setPosition(0);
    setVelocity(0);
  };

  return (
    <div className="experiment-container">
      <h1>Advanced Gravity Experiment</h1>
      <div className="experiment-content">
        <div className="controls">
          <div>
            <label>Mass (kg):</label>
            <input
              type="range"
              min="1"
              max="10"
              value={mass}
              onChange={(e) => setMass(Number(e.target.value))}
            />
            <span>{mass} kg</span>
          </div>

          <div>
            <label>Gravity (m/s²):</label>
            <input
              type="range"
              min="1"
              max="20"
              value={gravity}
              onChange={(e) => setGravity(Number(e.target.value))}
            />
            <span>{gravity} m/s²</span>
          </div>

          <div>
            <label>Drag Coefficient:</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={drag}
              onChange={(e) => setDrag(Number(e.target.value))}
            />
            <span>{drag}</span>
          </div>

          <button onClick={handleStartExperiment}>Start Experiment</button>
          <button onClick={handleResetExperiment}>Reset</button>
        </div>

        <div className="falling-area">
          <div
            className="object"
            style={{
              transform: `translateY(${position}px)`,
              transition: startFall ? 'none' : 'transform 0.5s ease',
            }}
          ></div>
        </div>
      </div>

      {startFall && (
        <div className="metrics-box">
          <p>Velocity: {velocity.toFixed(2)} m/s</p>
          <p>Position: {position.toFixed(2)} m</p>
        </div>
      )}
    </div>
  );
}

export default GravityExperiment;
