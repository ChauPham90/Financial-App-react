import React from "react";
const Score = pros => {
  if (pros.number <= 5) {
    return (
      <div className="rt-container">
        <div className="radialProgressBar progress-0">
          <div className="overlay">{pros.number}</div>
        </div>
      </div>
    );
  }
  if (pros.number <= 15) {
    return (
      <div className="rt-container">
        <div className="radialProgressBar progress-10">
          <div className="overlay">{pros.number}</div>
        </div>
      </div>
    );
  }
  if (pros.number <= 25) {
    return (
      <div className="rt-container">
        <div className="radialProgressBar progress-20">
          <div className="overlay">{pros.number}</div>
        </div>
      </div>
    );
  }
  if (pros.number <= 35) {
    return (
      <div className="rt-container">
        <div className="radialProgressBar progress-30">
          <div className="overlay">{pros.number}</div>
        </div>
      </div>
    );
  }
  if (pros.number <= 45) {
    return (
      <div className="rt-container">
        <div className="radialProgressBar progress-40">
          <div className="overlay">{pros.number}</div>
        </div>
      </div>
    );
  }
  if (pros.number <= 55) {
    return (
      <div className="rt-container">
        <div className="radialProgressBar progress-50">
          <div className="overlay">{pros.number}</div>
        </div>
      </div>
    );
  }
  if (pros.number <= 65) {
    return (
      <div className="rt-container">
        <div className="radialProgressBar progress-60">
          <div className="overlay">{pros.number}</div>
        </div>
      </div>
    );
  }
  if (pros.number <= 75) {
    return (
      <div className="rt-container">
        <div className="radialProgressBar progress-70">
          <div className="overlay">{pros.number}</div>
        </div>
      </div>
    );
  }
  if (pros.number <= 85) {
    return (
      <div className="rt-container">
        <div className="radialProgressBar progress-80">
          <div className="overlay">{pros.number}</div>
        </div>
      </div>
    );
  }
  if (pros.number <= 95) {
    return (
      <div className="rt-container">
        <div className="radialProgressBar progress-90">
          <div className="overlay">{pros.number}</div>
        </div>
      </div>
    );
  }
  if (pros.number > 95 && pros.number < 1000) {
    return (
      <div className="rt-container">
        <div className="radialProgressBar progress-100">
          <div className="overlay">{pros.number}</div>
        </div>
      </div>
    );
  }
};
export default Score;
