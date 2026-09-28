"use client";

import { useEffect, useState } from "react";

// End of day, Pakistan Standard Time
const DEADLINE = new Date("2026-11-25T23:59:59+05:00").getTime();

function remaining() {
  const diff = Math.max(0, DEADLINE - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    closed: diff === 0,
  };
}

export default function Countdown() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(remaining());
    const id = setInterval(() => setTime(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  if (time?.closed) {
    return <p className="countdown-closed">Submissions are now closed. Winners will be announced in January 2027.</p>;
  }

  const units = [
    ["Days", time?.days],
    ["Hours", time?.hours],
    ["Mins", time?.minutes],
    ["Secs", time?.seconds],
  ];

  return (
    <div className="countdown" aria-label="Time left to submit">
      {units.map(([label, value]) => (
        <div className="countdown-unit" key={label}>
          <span className="countdown-value">{value == null ? "--" : String(value).padStart(2, "0")}</span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  );
}
