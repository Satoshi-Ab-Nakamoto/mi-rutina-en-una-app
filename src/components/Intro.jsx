import React, { useEffect, useState } from "react";

const INTRO_LINES = [
  { text: "SISTEMA INICIALIZADO", delay: 400 },
  { text: "CARGANDO PROTOCOLO...", delay: 1000 },
  { text: "SEMANA OPERATIVA ACTIVA", delay: 1700 },
];

export default function Intro({ onEnd }) {
  const [phase, setPhase] = useState(0); // 0=scanlines, 1=text, 2=logo, 3=exit
  const [linesDone, setLinesDone] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // phase 0 → phase 1 after 600ms
    const t1 = setTimeout(() => setPhase(1), 600);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (phase !== 1) return;
    INTRO_LINES.forEach((line, i) => {
      setTimeout(() => {
        setLinesDone(i + 1);
      }, line.delay);
    });
    // after last line + 900ms show logo
    const t2 = setTimeout(() => setPhase(2), INTRO_LINES[INTRO_LINES.length - 1].delay + 900);
    return () => clearTimeout(t2);
  }, [phase]);

  useEffect(() => {
    if (phase !== 2) return;
    // after logo display 1600ms, exit
    const t3 = setTimeout(() => {
      setExit(true);
      setTimeout(onEnd, 700);
    }, 1800);
    return () => clearTimeout(t3);
  }, [phase, onEnd]);

  return (
    <div className={`intro-overlay${exit ? " intro-exit" : ""}`}>
      {/* Animated grid bg */}
      <div className="intro-grid" />
      {/* Scanlines */}
      <div className="intro-scanlines" />

      <div className="intro-center">
        {phase >= 1 && (
          <div className="intro-lines">
            {INTRO_LINES.map((line, i) => (
              <p
                key={i}
                className={`intro-line${i < linesDone ? " intro-line-visible" : ""}`}
              >
                <span className="intro-cursor">▶</span> {line.text}
              </p>
            ))}
          </div>
        )}

        {phase >= 2 && (
          <div className={`intro-logo${phase >= 2 ? " intro-logo-visible" : ""}`}>
            <div className="intro-bolt">⚡</div>
            <div className="intro-logo-text">
              <span className="intro-logo-main">PROTOCOLO</span>
              <span className="intro-logo-sub">OPERATIVO</span>
            </div>
            <div className="intro-tagline">Sistema de entrenamiento semanal</div>
            <div className="intro-bar-anim">
              <div className="intro-bar-fill" />
            </div>
          </div>
        )}
      </div>

      <div className="intro-corner intro-corner-tl" />
      <div className="intro-corner intro-corner-tr" />
      <div className="intro-corner intro-corner-bl" />
      <div className="intro-corner intro-corner-br" />
    </div>
  );
}
