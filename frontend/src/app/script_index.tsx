// script_index.tsx (Carrusel)
"use client";
import React, { useState } from "react";

interface Card {
  title: string;
  text: string;
}

interface CarruselProps {
  cards: Card[];
}

const Carrusel: React.FC<CarruselProps> = ({ cards }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="carousel-cards">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${index === current ? "active" : ""}`}
        >
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </div>
      ))}
      <div className="controls">
        <button
          onClick={() => setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1))}
        >
          ◀
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1))}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Carrusel;
