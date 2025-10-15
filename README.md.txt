# Gallinero Temporada 2025-2026

## Instalación paso a paso

1. **Instala Node.js**  
   Descarga desde [nodejs.org](https://nodejs.org/) (recomendado v18 o superior).

2. **Abre una terminal**  
   (En Windows: “Símbolo del sistema” o “PowerShell”)

3. **Instala dependencias**  
   ```bash
   npm install
   ```

4. **Configura variables de entorno**  
   Copia `.env.example` a `.env` y pon tu código de admin:
   ```bash
   cp .env.example .env
   ```
   Edita `.env` y cambia `ADMIN_ACCESS_CODE` por el que quieras.

5. **Crea y pobla la base de datos**  
   ```bash
   npx prisma migrate dev
   npm run seed
   ```

6. **Arranca el servidor**  
   ```bash
   npm run dev
   ```
   y accede en tu navegador a [http://localhost:3000](http://localhost:3000)