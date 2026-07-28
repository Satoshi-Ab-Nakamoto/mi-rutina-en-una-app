import React, { useState } from "react";
import { routine, dayLabels } from "../data/routine.js";
import { exerciseImages } from "../data/images.js";
import ExerciseCarousel from "./ExerciseCarousel.jsx";

const DAY_COLORS = {
  lunes:     { accent: "#c084fc", glow: "rgba(192,132,252,0.25)", badge: "TREN SUPERIOR" },
  martes:    { accent: "#f472b6", glow: "rgba(244,114,182,0.25)", badge: "PIERNAS" },
  miercoles: { accent: "#34d399", glow: "rgba(52,211,153,0.25)",  badge: "RECUPERACIÓN" },
  jueves:    { accent: "#60a5fa", glow: "rgba(96,165,250,0.25)",  badge: "HOMBROS & BRAZOS" },
  viernes:   { accent: "#fbbf24", glow: "rgba(251,191,36,0.25)",  badge: "POSTERIOR & ABS" },
  sabado:    { accent: "#f87171", glow: "rgba(248,113,113,0.25)", badge: "POTENCIA & HIIT" },
  domingo:   { accent: "#818cf8", glow: "rgba(129,140,248,0.25)", badge: "DESCANSO TOTAL" },
};

const PHASE_ICONS = ["🔥", "⚡", "💪", "🧊"];

// Bold-label detail keys
const BOLD_KEYS = new Set(["Series", "Repeticiones", "Tiempo de ejecución", "Descanso"]);

function DetailRow({ label, value }) {
  const isBold = BOLD_KEYS.has(label);
  const isSecret = label.startsWith("El Secreto") || label.startsWith("¿Por qué");
  return (
    <div className={`detail-row${isSecret ? " detail-secret" : ""}`}>
      <span className={`detail-label${isBold ? " detail-label-bold" : ""}${isSecret ? " detail-label-secret" : ""}`}>
        {isSecret ? "🔑 " : ""}{label}
      </span>
      <span className={`detail-value${isBold ? " detail-value-bold" : ""}`}>{value}</span>
    </div>
  );
}

function ExerciseCard({ exercise, index, accent }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="exercise-card" style={{ "--accent": accent }}>
      <button className="exercise-header" onClick={() => setOpen(!open)}>
        <span className="exercise-num" style={{ color: accent }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="exercise-name">{exercise.name}</span>
        <span className={`exercise-chevron${open ? " open" : ""}`}>›</span>
      </button>
      {open && (
        <div className="exercise-body">
          {/* 3D Image Carousel */}
          {exerciseImages[exercise.name]?.steps?.length > 0 && (
            <ExerciseCarousel
              steps={exerciseImages[exercise.name].steps}
              accent={accent}
            />
          )}
          {/* Detail rows */}
          <div className="exercise-details">
            {exercise.details.map(([label, value], i) => (
              <DetailRow key={i} label={label} value={value} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PhaseBlock({ phase, phaseIndex, accent }) {
  return (
    <section className="phase-block">
      <div className="phase-header">
        <span className="phase-icon">{PHASE_ICONS[phaseIndex % PHASE_ICONS.length]}</span>
        <span className="phase-name" style={{ color: accent }}>{phase.name}</span>
        <div className="phase-divider" style={{ background: accent }} />
      </div>
      <div className="exercises-list">
        {phase.exercises.map((ex, i) => (
          <ExerciseCard key={i} exercise={ex} index={i} accent={accent} />
        ))}
      </div>
    </section>
  );
}

export default function DayView({ dayKey }) {
  const day = routine[dayKey];
  const config = DAY_COLORS[dayKey];
  const totalExercises = day.phases.reduce((t, p) => t + p.exercises.length, 0);

  return (
    <div className="day-view" style={{ "--day-accent": config.accent, "--day-glow": config.glow }}>
      {/* Hero banner */}
      <div className="day-hero" style={{ boxShadow: `0 0 60px ${config.glow}` }}>
        <div className="day-hero-top">
          <span className="day-hero-bolt">⚡</span>
          <span className="day-hero-badge" style={{ background: config.accent }}>{config.badge}</span>
        </div>
        <h1 className="day-hero-day">{dayLabels[dayKey].toUpperCase()}</h1>
        <p className="day-hero-title">{day.title}</p>
        <p className="day-hero-focus">{day.focus}</p>
        <div className="day-hero-stats">
          <div className="stat-pill">
            <span className="stat-num" style={{ color: config.accent }}>{day.phases.length}</span>
            <span className="stat-label">FASES</span>
          </div>
          <div className="stat-sep" />
          <div className="stat-pill">
            <span className="stat-num" style={{ color: config.accent }}>{totalExercises}</span>
            <span className="stat-label">EJERCICIOS</span>
          </div>
        </div>
      </div>

      {/* Phases */}
      <div className="phases-container">
        {day.phases.map((phase, i) => (
          <PhaseBlock key={i} phase={phase} phaseIndex={i} accent={config.accent} />
        ))}
      </div>
    </div>
  );
}
