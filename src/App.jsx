import React, { useState, useEffect } from "react";
import Intro from "./components/Intro.jsx";
import DayView from "./components/DayView.jsx";
import WeekNav from "./components/WeekNav.jsx";
import { dayOrder, dayLabels, routine } from "./data/routine.js";

function getTodayKey() {
  const dayMap = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
  return dayMap[new Date().getDay()];
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeDay, setActiveDay] = useState(getTodayKey());

  const handleIntroEnd = () => setShowIntro(false);

  return (
    <>
      {showIntro && <Intro onEnd={handleIntroEnd} />}
      {!showIntro && (
        <div className="app-shell">
          <header className="site-header">
            <div className="header-logo">
              <span className="bolt">⚡</span>
              <span className="header-title">PROTOCOLO <span className="accent">OPERATIVO</span></span>
            </div>
            <div className="header-day-badge">
              <span className="today-label">HOY</span>
              <span className="today-day">{dayLabels[getTodayKey()]}</span>
            </div>
          </header>

          <WeekNav
            activeDay={activeDay}
            todayKey={getTodayKey()}
            onSelect={setActiveDay}
          />

          <main className="main-content">
            <DayView dayKey={activeDay} />
          </main>

          <footer className="site-footer">
            <p>PROTOCOLO OPERATIVO · RUTINA SEMANAL</p>
          </footer>
        </div>
      )}
    </>
  );
}
