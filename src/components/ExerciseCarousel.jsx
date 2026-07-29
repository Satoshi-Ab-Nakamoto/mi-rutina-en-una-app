import React, { useState, useRef } from "react";

const STEP_EMOJIS = ["🟣", "🔵", "🟢", "🟡", "🔴"];

function PlaceholderSlide({ label, index, accent }) {
  // Pick an instructional icon based on the label content
  const icon =
    label.includes("Arriba") || label.includes("Explosi") || label.includes("Salta") ? "⬆️" :
    label.includes("Baja") || label.includes("Fondo") || label.includes("Abajo") ? "⬇️" :
    label.includes("Agarra") || label.includes("Toma") || label.includes("Setup") || label.includes("Inicio") ? "✋" :
    label.includes("Tensión") || label.includes("Aprieta") || label.includes("MÁXIMA") ? "💥" :
    label.includes("Rotaci") || label.includes("Círculos") || label.includes("hula") ? "🔄" :
    label.includes("jalón") || label.includes("Jalón") || label.includes("Jala") ? "💪" :
    "🏋️";

  return (
    <div className="carousel-placeholder" style={{ "--ph-accent": accent }}>
      <div className="placeholder-num">{String(index + 1).padStart(2, "0")}</div>
      <div className="placeholder-icon">{icon}</div>
      <div className="placeholder-step">PASO {index + 1}</div>
      <div className="placeholder-label">{label}</div>
    </div>
  );
}

function ImageCard({ src, label, index, accent }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <PlaceholderSlide label={label} index={index} accent={accent} />;
  
  // Resolver la ruta de la imagen usando el BASE_URL de Vite para GitHub Pages
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  const resolvedSrc = import.meta.env.BASE_URL + cleanSrc;

  return (
    <img
      src={resolvedSrc}
      alt={label}
      className="carousel-img"
      draggable={false}
      onError={() => setFailed(true)}
    />
  );
}

export default function ExerciseCarousel({ steps, accent }) {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offset, setOffset] = useState(0);
  const trackRef = useRef(null);
  const total = steps.length;

  const go = (idx) => {
    setCurrent((idx + total) % total);
    setOffset(0);
  };

  // Drag / swipe handlers
  const onPointerDown = (e) => {
    setDragging(true);
    setStartX(e.clientX ?? e.touches?.[0]?.clientX ?? 0);
  };
  const onPointerMove = (e) => {
    if (!dragging) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    setOffset(x - startX);
  };
  const onPointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (offset < -50) go(current + 1);
    else if (offset > 50) go(current - 1);
    else setOffset(0);
  };

  if (!steps || steps.length === 0) return null;

  return (
    <div className="carousel-root" style={{ "--carousel-accent": accent }}>
      {/* 3D stage */}
      <div
        className={`carousel-stage${dragging ? " dragging" : ""}`}
        ref={trackRef}
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={onPointerUp}
        onMouseLeave={onPointerUp}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={onPointerUp}
      >
        {steps.map((step, i) => {
          const delta = i - current;
          const absD = Math.abs(delta);
          const isActive = delta === 0;
          const isAdjacent = absD === 1;

          const translateX = delta * 62 + (isActive ? offset * 0.15 : 0);
          const translateZ = isActive ? 0 : -120 - absD * 60;
          const rotateY = delta * 18;
          const scale = isActive ? 1 : Math.max(0.6, 1 - absD * 0.18);
          const zIndex = 10 - absD;
          const opacity = absD > 2 ? 0 : isActive ? 1 : 0.55;

          return (
            <div
              key={i}
              className={`carousel-card${isActive ? " carousel-card-active" : ""}`}
              style={{
                transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex,
                opacity,
                pointerEvents: isActive ? "auto" : "none",
                transition: dragging && isActive ? "none" : "all 0.45s cubic-bezier(0.25,0.46,0.45,0.94)",
              }}
              onClick={() => !isActive && go(i)}
            >
              {step.img
                ? <ImageCard src={step.img} label={step.label} index={i} accent={accent} />
                : <PlaceholderSlide label={step.label} index={i} accent={accent} />
              }
            </div>
          );
        })}
      </div>

      {/* Step label */}
      <div className="carousel-caption" key={current}>
        <span className="carousel-step-badge" style={{ background: accent }}>
          PASO {current + 1} / {total}
        </span>
        <p className="carousel-step-label">{steps[current]?.label}</p>
      </div>

      {/* Dot nav */}
      <div className="carousel-dots">
        {steps.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? " active" : ""}`}
            style={i === current ? { background: accent, boxShadow: `0 0 8px ${accent}` } : {}}
            onClick={() => go(i)}
            aria-label={`Paso ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button className="carousel-arrow carousel-arrow-left" onClick={() => go(current - 1)}>‹</button>
      <button className="carousel-arrow carousel-arrow-right" onClick={() => go(current + 1)}>›</button>
    </div>
  );
}
