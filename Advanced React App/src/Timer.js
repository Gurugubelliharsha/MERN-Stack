import React, { useState, useEffect } from "react";

function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Current Time:</h3>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default Timer;
