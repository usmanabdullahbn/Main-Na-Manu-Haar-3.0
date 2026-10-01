"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mnmh-popup-dismissed";
const DELAY_MS = 1500;

export default function EntryPopup({ formUrl }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {}
    const id = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(id);
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }

  return (
    <div className={`popup${visible ? " is-visible" : ""}`} role="dialog" aria-label="Submissions are open">
      <button type="button" className="popup__close" aria-label="Close" onClick={dismiss}>
        &times;
      </button>
      <div className="popup__head">
        <span className="popup__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
            <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <strong>Submissions Are Open</strong>
      </div>
      <p className="popup__msg">
        Share your story of resilience through art or writing. Entries close on <strong>25 November 2026</strong>.
      </p>
      <a className="popup__btn" href={formUrl} target="_blank" rel="noopener noreferrer" onClick={dismiss}>
        Submit Your Entry
      </a>
    </div>
  );
}
