import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // Fuerza la raíz al directorio actual (frontend)
  },
};

export default nextConfig;