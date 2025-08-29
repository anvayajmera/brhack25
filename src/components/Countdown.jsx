import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function useTimer(deadline, interval = SECOND) {
  const [timespan, setTimespan] = useState(new Date(deadline) - Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimespan((_timespan) => _timespan - interval);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  return {
    days: Math.max(Math.floor(timespan / DAY), 0),
    hours: Math.max(Math.floor((timespan / HOUR) % 24), 0),
    minutes: Math.max(Math.floor((timespan / MINUTE) % 60), 0),
    seconds: Math.max(Math.floor((timespan / SECOND) % 60), 0)
  };
}

export default function Information() {
  // ...existing code...
  return null;
}
