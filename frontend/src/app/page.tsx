"use client";
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import "./style_index.css";
import Carrusel from "./script_index"; // ✅ Componente Carrusel

const Index: React.FC = () => {
  const cards = [
    {
      title: "Datos importantes",
      text: "7 de cada 10 personas en Chile declaran haber tenido alguna enfermedad o problema psicológico.",
    },
    {
      title: "Datos importantes",
      text: "El 47% de las personas que necesitó ver a un profesional del área no lo hizo por falta de financiamiento.",
    },
    {
      title: "Datos importantes",
      text: "El 17.5% de las mujeres ha sufrido algún trastorno de ansiedad en su vida, frente al 9.5% de los hombres.",
    },
    {
      title: "Datos importantes",
      text: "Un 75% de las personas entre 22 y 35 años reporta haber tenido alguna enfermedad o problema psicológico.",
    },
    {
      title: "Datos importantes",
      text: "El 58.3% de los trabajadores chilenos percibió algún tipo de estrés laboral.",
    },
    {
      title: "Datos importantes",
      text: "El 26.6% del rango de edad de 30 a 39 años percibe una mayor soledad.",
    },
    {
      title: "Datos importantes",
      text: "El 53.8% de las personas con problemas de insomnio evidenció síntomas moderados o severos de depresión.",
    },
  ];

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mentana - La entrada a tu mente sana.</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

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

          {/* Carrusel */}
          <div className="carousel-container">
            <Carrusel cards={cards} />
          </div>
          <div className="carousel-indicators" id="indicators-principal"></div>
        </div>

        <p>
          Estamos construyendo el futuro del bienestar emocional.
          <br />
          <strong>Únete al viaje.</strong>
        </p>

        <div className="botones-accion">
          <a href="registro" className="btn btn-primary">
            Regístrate
          </a>
          <a href="auth" className="btn btn-secondary">
            Inicia Sesión
          </a>
        </div>
      </div>

      <footer>
        <strong>&copy; 2025 Mentana 🧠</strong>
      </footer>
    </>
  );
};

export default Index;
