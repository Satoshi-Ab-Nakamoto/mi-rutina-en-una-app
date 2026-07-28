import React from "react";
import { dayOrder, dayLabels } from "../data/routine.js";

const dayEmojis = {
  lunes: "💪",
  martes: "🦵",
  miercoles: "🧘",
  jueves: "🎯",
  viernes: "⚡",
  sabado: "🚀",
  domingo: "🌙",
};

export default function WeekNav({ activeDay, todayKey, onSelect }) {
  return (
    <nav className="week-nav">
      <div className="week-nav-track">
        {dayOrder.map((day) => (
          <button
            key={day}
            onClick={() => onSelect(day)}
            className={`day-btn${activeDay === day ? " day-btn-active" : ""}${todayKey === day ? " day-btn-today" : ""}`}
            title={dayLabels[day]}
          >
            <span className="day-btn-emoji">{dayEmojis[day]}</span>
            <span className="day-btn-label">{dayLabels[day].slice(0, 3).toUpperCase()}</span>
            {todayKey === day && <span className="day-btn-dot" />}
          </button>
        ))}
      </div>
    </nav>
  );
}
