import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "ProductSearch — Moteur de recherche produit IA",
  description: "Recherchez vos produits par texte ou par image. Gemini Embeddings 3072-dim, résultats sémantiques en moins de 500ms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-body)", background: "#eef2ff" }}>{children}</body>
    </html>
  );
}
