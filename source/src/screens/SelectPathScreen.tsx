import type { CommonProps } from "./types";

interface Props extends CommonProps {
  setP10SlideIdx: React.Dispatch<React.SetStateAction<number>>;
  userName?: string;
}

export function SelectPathScreen({
  language,
  setLanguage,
  setScreen,
  reset,
  setP10SlideIdx,
}: Props) {
  const isIt = language === "it";

  return (
    <main className="selectPathScreen" style={{
      minHeight: "100vh",
      height: "1080px",
      background: "#07110e",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "#3b82f4", zIndex: 100 }} />

      {/* Header */}
      <header className="missionNav">
        <button className="brand brandButton" onClick={reset}>
          <span className="brandMark">e·</span>
          <span>Envizi<br />Impact Quest</span>
        </button>
        <div className="missionProgress">
          <span className="activeDot" /> SELEZIONA PERCORSO
        </div>
      </header>

      {/* Body content */}
      <section style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 4vw 40px",
        maxWidth: "1400px",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
        zIndex: 2
      }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <p className="eyebrow" style={{ letterSpacing: ".18em", marginBottom: "8px" }}>
            {isIt ? "PERCORSO DI NAVIGAZIONE" : "NAVIGATION PATH"}
          </p>
          <h1 style={{
            fontSize: "clamp(32px, 3.2vw, 48px)",
            fontWeight: 800,
            color: "#f2fff9",
            margin: "0 0 12px",
            letterSpacing: "-.02em"
          }}>
            {isIt ? "Seleziona percorso" : "Select Path"}
          </h1>
          <p style={{
            fontSize: "18px",
            color: "#c9e8dc",
            maxWidth: "720px",
            margin: "0 auto",
            lineHeight: 1.5
          }}>
            {isIt
              ? "Scegli come esplorare la piattaforma: approfondisci i use case dedicati o procedi con l'analisi delle esigenze della tua azienda."
              : "Choose how to explore the platform: deep-dive into dedicated use cases or proceed with your company's needs analysis."}
          </p>
        </div>

        {/* 3 Box Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          width: "100%",
          maxWidth: "1320px"
        }}>
          {/* Box 1: Guida principali use case utente Amministratore Envizi */}
          <div
            onClick={() => {
              setScreen("adminGuide");
            }}
            style={{
              background: "#0c2820",
              border: "2px solid #3db88f",
              borderRadius: "16px",
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "all .2s ease",
              boxShadow: "0 10px 30px rgba(0,0,0,.4), 0 0 16px rgba(57,239,180,.12)",
              position: "relative",
              overflow: "hidden"
            }}
            className="selectPathCard"
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "#39efb4" }} />
            <div>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 12px",
                background: "rgba(57,239,180,.15)",
                border: "1px solid #39efb4",
                borderRadius: "8px",
                marginBottom: "20px"
              }}>
                <span style={{ fontSize: "16px" }}>⚙️</span>
                <span style={{
                  fontFamily: "var(--font-geist-mono,monospace)",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#39efb4",
                  letterSpacing: ".08em",
                  textTransform: "uppercase"
                }}>
                  {isIt ? "AMMINISTRATORE" : "ADMINISTRATOR"}
                </span>
              </div>
              <h2 style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.35,
                margin: "0 0 16px",
                letterSpacing: "-.01em"
              }}>
                {isIt ? "Guida pricipali use case utente Amministratore Envizi" : "Envizi Administrator Main Use Cases Guide"}
              </h2>
              <p style={{
                fontSize: "15px",
                color: "#c9e8dc",
                lineHeight: 1.55,
                margin: 0
              }}>
                {isIt
                  ? "Configurazione, gestione connettori dati, governance e amministrazione del sistema ESG."
                  : "Configuration, data connectors management, governance and ESG platform administration."}
              </p>
            </div>
            <div style={{ marginTop: "28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{
                color: "#72f7ca",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: ".02em",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}>
                {isIt ? "Apri guida" : "Open guide"} <b>→</b>
              </span>
              <span style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(57,239,180,.12)",
                border: "1px solid #39efb4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#39efb4",
                fontSize: "16px",
                fontWeight: 700
              }}>1</span>
            </div>
          </div>

          {/* Box 2: Guida principali use case utente di business */}
          <div
            onClick={() => {
              setScreen("businessGuide");
            }}
            style={{
              background: "#0c2820",
              border: "2px solid #3db88f",
              borderRadius: "16px",
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "all .2s ease",
              boxShadow: "0 10px 30px rgba(0,0,0,.4), 0 0 16px rgba(57,239,180,.12)",
              position: "relative",
              overflow: "hidden"
            }}
            className="selectPathCard"
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "#39efb4" }} />
            <div>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 12px",
                background: "rgba(57,239,180,.15)",
                border: "1px solid #39efb4",
                borderRadius: "8px",
                marginBottom: "20px"
              }}>
                <span style={{ fontSize: "16px" }}>📊</span>
                <span style={{
                  fontFamily: "var(--font-geist-mono,monospace)",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#39efb4",
                  letterSpacing: ".08em",
                  textTransform: "uppercase"
                }}>
                  {isIt ? "BUSINESS USER" : "BUSINESS USER"}
                </span>
              </div>
              <h2 style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.35,
                margin: "0 0 16px",
                letterSpacing: "-.01em"
              }}>
                {isIt ? "Guida principali use case utente di business" : "Business User Main Use Cases Guide"}
              </h2>
              <p style={{
                fontSize: "15px",
                color: "#c9e8dc",
                lineHeight: 1.55,
                margin: 0
              }}>
                {isIt
                  ? "Monitoraggio KPI, reporting di sostenibilità, analisi emissioni e performance di business."
                  : "KPI monitoring, sustainability reporting, emissions analytics and business line performance."}
              </p>
            </div>
            <div style={{ marginTop: "28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{
                color: "#72f7ca",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: ".02em",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}>
                {isIt ? "Apri guida" : "Open guide"} <b>→</b>
              </span>
              <span style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(57,239,180,.12)",
                border: "1px solid #39efb4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#39efb4",
                fontSize: "16px",
                fontWeight: 700
              }}>2</span>
            </div>
          </div>

          {/* Box 3: Analisi Esigenze Azienda */}
          <div
            onClick={() => {
              setScreen("companySetup");
            }}
            style={{
              background: "#0d2e24",
              border: "2.5px solid #39efb4",
              borderRadius: "16px",
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "all .2s ease",
              boxShadow: "0 10px 30px rgba(0,0,0,.4), 0 0 24px rgba(57,239,180,.25)",
              position: "relative",
              overflow: "hidden"
            }}
            className="selectPathCard selectPathCardPrimary"
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "#72f7ca" }} />
            <div>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 12px",
                background: "rgba(57,239,180,.25)",
                border: "1px solid #72f7ca",
                borderRadius: "8px",
                marginBottom: "20px"
              }}>
                <span style={{ fontSize: "16px" }}>🎯</span>
                <span style={{
                  fontFamily: "var(--font-geist-mono,monospace)",
                  fontSize: "13px",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: ".08em",
                  textTransform: "uppercase"
                }}>
                  {isIt ? "ASSESSMENT AZIENDALE" : "COMPANY ASSESSMENT"}
                </span>
              </div>
              <h2 style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.35,
                margin: "0 0 16px",
                letterSpacing: "-.01em"
              }}>
                {isIt ? "Analisi Esigenze Azienda" : "Company Needs Analysis"}
              </h2>
              <p style={{
                fontSize: "15px",
                color: "#f2fff9",
                lineHeight: 1.55,
                margin: 0
              }}>
                {isIt
                  ? "Configura la tua azienda, seleziona le priorità ESG, valuta i bisogni sui dati e genera il report strategico personalizzato."
                  : "Configure your company, set ESG priorities, assess data requirements and generate your strategic customized report."}
              </p>
            </div>
            <div style={{ marginTop: "28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{
                color: "#06110d",
                background: "var(--teal)",
                padding: "8px 18px",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: 800,
                letterSpacing: ".04em",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "0 4px 14px rgba(57,239,180,.4)"
              }}>
                {isIt ? "Inizia analisi" : "Start analysis"} <b>→</b>
              </span>
              <span style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(57,239,180,.25)",
                border: "1.5px solid #72f7ca",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 800
              }}>3</span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", background: "#39efb4", zIndex: 100 }} />
    </main>
  );
}
