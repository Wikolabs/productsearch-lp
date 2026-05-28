export default function Home() {
  const primary = "#4f46e5";
  const bgLight = "#eef2ff";

  const metrics = [
    { value: "<500ms", label: "par requête" },
    { value: "3072", label: "dimensions vectorielles" },
    { value: "+35%", label: "taux de conversion" },
    { value: "100%", label: "recherche sémantique" },
  ];

  const features = [
    {
      icon: "🔍",
      title: "Recherche textuelle sémantique",
      desc: "Gemini Embeddings comprend l'intention derrière chaque requête. \"Pull blanc en coton\" trouve chemises, t-shirts et hauts adaptés — pas juste des correspondances exactes.",
    },
    {
      icon: "🖼️",
      title: "Recherche par image",
      desc: "Uploadez une photo et obtenez les produits visuellement similaires de votre catalogue. Gemini Flash 2.5 analyse l'image et génère une description sémantique en temps réel.",
    },
    {
      icon: "⚙️",
      title: "Panel d'administration",
      desc: "Ajoutez, modifiez et gérez votre catalogue produits depuis l'interface admin. Base vectorielle PostgreSQL pgvector persistante — vos données survivent aux redémarrages.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Connectez votre catalogue",
      desc: "Ajoutez vos produits via le panneau admin ou l'API REST. Chaque fiche est vectorisée automatiquement par Gemini Embeddings en 3072 dimensions.",
    },
    {
      num: "02",
      title: "Vos clients cherchent, l'IA comprend",
      desc: "La requête texte ou image est convertie en vecteur et comparée à votre catalogue via index HNSW. Résultats sémantiques en moins de 500ms.",
    },
    {
      num: "03",
      title: "Résultats pertinents. Toujours.",
      desc: "Les 5 meilleurs matchs sémantiques s'affichent avec score de similarité. Personnalisez le seuil, le nombre de résultats et l'interface selon votre marque.",
    },
  ];

  return (
    <main style={{ fontFamily: "var(--font-body)" }}>
      {/* NAVBAR */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e0e7ff", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: primary }}>
            Botsika.com
          </span>
          <a
            href="https://calendly.com/wikolabs"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: primary, color: "#fff", padding: "10px 22px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none" }}
          >
            Demander une démo
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${bgLight} 0%, #fff 60%)`, padding: "80px 24px 60px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "#e0e7ff", color: primary, borderRadius: 999, padding: "6px 18px", fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
            Moteur de recherche produit IA
          </span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, color: "#111", marginBottom: 32 }}>
            Trouvez n&apos;importe quel produit.<br />
            <span style={{ color: primary }}>Par texte ou par image.</span>
          </h1>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
            <a
              href="http://187.124.167.18:3032"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: primary, color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none" }}
            >
              Lancer la recherche →
            </a>
            <a
              href="https://calendly.com/wikolabs"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#fff", color: primary, padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none", border: `2px solid ${primary}` }}
            >
              Demander une démo
            </a>
            <a
              href="https://wa.me/261386626100?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20Botsika.com%20avec%20Wikolabs."
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#25d366", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none" }}
            >
              WhatsApp
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
            {metrics.map((m) => (
              <div key={m.label} style={{ background: "#fff", border: "1px solid #e0e7ff", borderRadius: 12, padding: "20px 16px", boxShadow: "0 2px 8px rgba(79,70,229,0.06)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: primary }}>{m.value}</div>
                <div style={{ fontSize: 13, color: "#666", marginTop: 4 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, textAlign: "center", color: "#111", marginBottom: 48 }}>
            Ce que Botsika.com fait pour vous
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {features.map((f) => (
              <div key={f.title} style={{ background: bgLight, border: "1px solid #e0e7ff", borderRadius: 16, padding: "32px 28px" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "#111", marginBottom: 12 }}>{f.title}</h3>
                <p style={{ color: "#555", lineHeight: 1.7, fontSize: 15 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section style={{ background: bgLight, padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, textAlign: "center", color: "#111", marginBottom: 16 }}>
            Essayez maintenant
          </h2>
          <p style={{ textAlign: "center", color: "#666", fontSize: 16, marginBottom: 40 }}>
            Interface live — cherchez, filtrez, explorez votre catalogue produit en temps réel.
          </p>
          <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 48px rgba(79,70,229,0.12)", border: "1px solid #e0e7ff" }}>
            <iframe
              src="http://187.124.167.18:3032"
              style={{ width: "100%", height: 700, border: "none", display: "block" }}
              title="Botsika.com — Recherche produit IA"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, textAlign: "center", color: "#111", marginBottom: 48 }}>
            Comment ça fonctionne
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {steps.map((s) => (
              <div key={s.num} style={{ background: bgLight, border: "1px solid #e0e7ff", borderRadius: 16, padding: "28px 32px", display: "flex", gap: 24, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 900, color: "#a5b4fc", minWidth: 56 }}>{s.num}</span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "#111", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ color: "#555", lineHeight: 1.7, fontSize: 15 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: primary, padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
            Offrez la recherche qu&apos;ils méritent
          </h2>
          <p style={{ color: "#c7d2fe", fontSize: 17, marginBottom: 40 }}>
            Démo gratuite. Intégration en 48h.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="http://187.124.167.18:3032"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#fff", color: primary, padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none" }}
            >
              Lancer la recherche →
            </a>
            <a
              href="https://calendly.com/wikolabs"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "transparent", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none", border: "2px solid rgba(255,255,255,0.6)" }}
            >
              Demander une démo
            </a>
            <a
              href="https://wa.me/261386626100?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20Botsika.com%20avec%20Wikolabs."
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#25d366", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none" }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: primary }}>Botsika.com</span>
          <p style={{ color: "#999", marginTop: 12, fontSize: 14 }}>
            by{" "}
            <a href="https://wikolabs.com" target="_blank" rel="noopener noreferrer" style={{ color: "#ccc", textDecoration: "none" }}>
              Wikolabs
            </a>
            {" "}—{" "}
            <a href="mailto:team@wikolabs.com" style={{ color: "#ccc", textDecoration: "none" }}>
              team@wikolabs.com
            </a>
          </p>
          <p style={{ color: "#555", marginTop: 8, fontSize: 13 }}>© {new Date().getFullYear()} Wikolabs. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
