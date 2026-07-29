import React, { useState, useEffect } from "react";

export default function Lightbox({ steps, initialIndex, onClose }) {
  const [current, setCurrent] = useState(initialIndex || 0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current]);

  if (!steps || steps.length === 0) return null;

  const total = steps.length;
  const step = steps[current];

  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);

  // Pre-process image URL for GitHub Pages
  let resolvedSrc = null;
  if (step?.img) {
    const cleanSrc = step.img.startsWith('/') ? step.img.slice(1) : step.img;
    resolvedSrc = import.meta.env.BASE_URL + cleanSrc;
  }

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>×</button>
        
        <button className="lightbox-arrow lightbox-arrow-left" onClick={prev}>‹</button>
        
        <div className="lightbox-image-container">
          {resolvedSrc ? (
            <img src={resolvedSrc} alt={step?.label} className="lightbox-image" />
          ) : (
            <div className="lightbox-placeholder">
              <div className="lightbox-ph-icon">📷</div>
              <div>Imagen no disponible</div>
            </div>
          )}
        </div>
        
        <button className="lightbox-arrow lightbox-arrow-right" onClick={next}>›</button>

        <div className="lightbox-caption">
          <span className="lightbox-counter">{current + 1} / {total}</span>
        </div>
      </div>
    </div>
  );
}
