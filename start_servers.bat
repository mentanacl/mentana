@echo off
title Iniciando servidores Django y Next.js

REM --- Abrir servidor Django ---
start cmd /k "cd C:\Users\jaime\OneDrive\Escritorio\mentana\backend && C:\Users\jaime\OneDrive\Escritorio\mentana\venv\Scripts\activate && python manage.py runserver"

REM --- Abrir servidor Next.js ---
start cmd /k "cd C:\Users\jaime\OneDrive\Escritorio\mentana\frontend && npm run dev"

echo Servidores iniciados. Esta ventana se cierra en 5 segundos...
timeout /t 5 /nobreak >nul
exit
