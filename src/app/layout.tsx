import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Despachos / Imprevistos · PoC",
  description:
    "Gestión de imprevistos en despachos en curso (Camino delgado · Equipo 4).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
