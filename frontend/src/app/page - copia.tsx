"use client";
import React from "react";
import "./style_index.css";
import Carrusel from "./script_index"; // ✅ importamos el componente Carrusel

const Index: React.FC = () => {
  const cards = [
    <div>
      <h3>Datos importantes</h3>
      <p>
        7 de cada 10 personas en Chile declaran haber tenido alguna
        enfermedad o problema psicológico.
      </p>
    </div>,
    <div>
      <h3>Datos importantes</h3>
      <p>
        El 47% de las personas que necesitó ver a un profesional del área
        no lo hizo por falta de financiamiento.
      </p>
    </div>,
    <div>
      <h3>Datos importantes</h3>
      <p>
        El 17.5% de las mujeres ha sufrido algún trastorno de ansiedad en
        su vida, frente al 9.5% de los hombres.
      </p>
    </div>,
    <div>
      <h3>Datos importantes</h3>
      <p>
        Un 75% de las personas entre 22 y 35 años reporta haber tenido
        alguna enfermedad o problema psicológico.
      </p>
    </div>,
    <div>
      <h3>Datos importantes</h3>
      <p>
        El 58.3% de los trabajadores chilenos percibió algún tipo de
        estrés laboral.
      </p>
    </div>,
    <div>
      <h3>Datos importantes</h3>
      <p>
        El 26.6% del rango de edad de 30 a 39 años percibe una mayor
        soledad.
      </p>
    </div>,
    <div>
      <h3>Datos importantes</h3>
      <p>
        El 53.8% de las personas con problemas de insomnio evidenció
        síntomas moderados o severos de depresión.
      </p>
    </div>,
  ];

  return (
    <div className="contenedor-principal-adaptado">
      <div className="tarjeta-contenido-principal">
        <div className="seccion-logo">
          <img src="logo.png" alt="Logo Mentana" />
        </div>
        <h2>
          Descubre tu
          <br />
          Perfil Emocional Preliminar
        </h2>

        {/* ✅ Carrusel integrado */}
        <Carrusel cards={cards} intervalo={5000} />
      </div>

      <p>
        Estamos construyendo el futuro del bienestar emocional.
        <br />
        <strong>Únete al viaje.</strong>
      </p>

      <div className="botones-accion">
        <a href="/registro" className="btn btn-primary">
          Regístrate
        </a>
        <a href="/auth" className="btn btn-secondary">
          Inicia Sesión
        </a>
      </div>

      <footer>
        <strong>&copy; 2025 Mentana 🧠</strong>
      </footer>
    </div>
	
  );
};

export default Index;
