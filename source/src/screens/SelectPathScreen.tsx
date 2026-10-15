import type { CommonProps } from "./types";

interface Props extends CommonProps {
  setP10SlideIdx: React.Dispatch<React.SetStateAction<number>>;
  userName?: string;
  onOpenAdminGuide?: (category?: string, guideId?: string) => void;
  onOpenBusinessGuide?: (category?: string, guideId?: string) => void;
}

export function SelectPathScreen({
  language,
  setLanguage,
  setScreen,
  reset,
  setP10SlideIdx,
  onOpenAdminGuide,
  onOpenBusinessGuide,
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
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <p className="eyebrow" style={{ letterSpacing: ".18em", marginBottom: "4px" }}>
            {isIt ? "PERCORSO DI NAVIGAZIONE" : "NAVIGATION PATH"}
          </p>
          <h1 style={{
            fontSize: "clamp(26px, 2.5vw, 38px)",
            fontWeight: 800,
            color: "#f2fff9",
            margin: "0 0 6px",
            letterSpacing: "-.02em"
          }}>
            {isIt ? "Seleziona percorso" : "Select Path"}
          </h1>
          <p style={{
            fontSize: "15.5px",
            color: "#c9e8dc",
            maxWidth: "780px",
            margin: "0 auto",
            lineHeight: 1.4
          }}>
            {isIt
              ? "Scegli l'area da esplorare: guide per ruolo, use case specialistici di business o analisi strategica delle esigenze aziendali."
              : "Choose an area to explore: role guides, dedicated business use cases, or strategic company needs analysis."}
          </p>
        </div>

        {/* Introduzione a Envizi ESG Reporting and Performance Management */}
        <div
          onClick={() => { setP10SlideIdx(0); setScreen("blank1"); }}
          className="selectPathCard"
          style={{
            background: "#0c2820",
            border: "2px solid #3b82f4",
            borderRadius: "14px",
            padding: "14px 22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            cursor: "pointer",
            transition: "all .2s ease",
            boxShadow: "0 8px 24px rgba(0,0,0,.4), 0 0 14px rgba(59,130,244,.18)",
            position: "relative",
            overflow: "hidden",
            width: "100%",
            maxWidth: "1420px",
            boxSizing: "border-box",
            marginBottom: "16px"
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "#3b82f4" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ fontSize: "26px" }}>▶</span>
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", margin: 0, lineHeight: 1.25 }}>
                {isIt
                  ? "Introduzione a Envizi ESG Reporting and Performance Management"
                  : "Introduction to Envizi ESG Reporting and Performance Management"}
              </h2>
              <p style={{ fontSize: "13.5px", color: "#c9e8dc", margin: "4px 0 0", lineHeight: 1.4 }}>
                {isIt ? "Presentazione introduttiva della piattaforma Envizi." : "Introductory presentation of the Envizi platform."}
              </p>
            </div>
          </div>
          <span style={{
            color: "#ffffff",
            background: "#1a56db",
            padding: "6px 14px",
            borderRadius: "6px",
            fontSize: "13.5px",
            fontWeight: 800,
            whiteSpace: "nowrap"
          }}>
            {isIt ? "Apri" : "Open"} <b>→</b>
          </span>
        </div>

        {/* 6 Equal Boxes Grid (2 rows x 3 columns) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px 20px",
          width: "100%",
          maxWidth: "1420px"
        }}>
          {/* Box 1: Guida Amministratore */}
          <div
            onClick={() => onOpenAdminGuide ? onOpenAdminGuide("all") : setScreen("adminGuide")}
            style={{
              background: "#0c2820",
              border: "2px solid #3db88f",
              borderRadius: "14px",
              padding: "20px 22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "all .2s ease",
              boxShadow: "0 8px 24px rgba(0,0,0,.4), 0 0 14px rgba(57,239,180,.1)",
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
                gap: "6px",
                padding: "4px 10px",
                background: "rgba(57,239,180,.15)",
                border: "1px solid #39efb4",
                borderRadius: "6px",
                marginBottom: "10px"
              }}>
                <span style={{ fontSize: "14px" }}>⚙️</span>
                <span style={{
                  fontFamily: "var(--font-geist-mono,monospace)",
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#39efb4",
                  letterSpacing: ".08em",
                  textTransform: "uppercase"
                }}>
                  {isIt ? "AMMINISTRATORE" : "ADMINISTRATOR"}
                </span>
              </div>
              <h2 style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.25,
                margin: "0 0 8px",
                letterSpacing: "-.01em"
              }}>
                {isIt ? "Guida Amministratore" : "Administrator Guide"}
              </h2>
              <p style={{
                fontSize: "13.5px",
                color: "#c9e8dc",
                lineHeight: 1.45,
                margin: "0 0 12px"
              }}>
                {isIt
                  ? "Configurazione, gestione connettori dati, governance e amministrazione del sistema ESG."
                  : "Configuration, data connectors management, governance and ESG platform administration."}
              </p>

              {/* Tag / Moduli */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {["Modello Organizzativo", "Configurazione Dati", "Ruoli & Utenti", "Acquisizione Dati"].map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "11px",
                      padding: "3px 7px",
                      borderRadius: "5px",
                      background: "rgba(57,239,180,0.1)",
                      border: "1px solid rgba(57,239,180,0.22)",
                      color: "#b5f2dc",
                      fontWeight: 600
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "16px", paddingTop: "10px", borderTop: "1px solid rgba(57,239,180,0.16)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{
                color: "#72f7ca",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: ".02em",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px"
              }}>
                {isIt ? "Apri guida" : "Open guide"} <b>→</b>
              </span>
              <span style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "rgba(57,239,180,.12)",
                border: "1px solid #39efb4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#39efb4",
                fontSize: "13px",
                fontWeight: 700
              }}>1</span>
            </div>
          </div>

          {/* Box 2: Emissions Management */}
          <div
            onClick={() => onOpenBusinessGuide ? onOpenBusinessGuide("Emissions Management") : setScreen("businessGuide")}
            style={{
              background: "#0c2820",
              border: "2px solid #3db88f",
              borderRadius: "14px",
              padding: "20px 22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "all .2s ease",
              boxShadow: "0 8px 24px rgba(0,0,0,.4), 0 0 14px rgba(57,239,180,.1)",
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
                gap: "6px",
                padding: "4px 10px",
                background: "rgba(57,239,180,.15)",
                border: "1px solid #39efb4",
                borderRadius: "6px",
                marginBottom: "10px"
              }}>
                <span style={{ fontSize: "14px" }}>☁️</span>
                <span style={{
                  fontFamily: "var(--font-geist-mono,monospace)",
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#39efb4",
                  letterSpacing: ".08em",
                  textTransform: "uppercase"
                }}>
                  EMISSIONS MANAGEMENT
                </span>
              </div>
              <h2 style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.25,
                margin: "0 0 8px",
                letterSpacing: "-.01em"
              }}>
                Emissions Management
              </h2>
              <p style={{
                fontSize: "13.5px",
                color: "#c9e8dc",
                lineHeight: 1.45,
                margin: "0 0 12px"
              }}>
                {isIt
                  ? "Calcolo, monitoraggio e reporting delle emissioni GHG e gestione degli obiettivi di riduzione."
                  : "Calculation, tracking and reporting of GHG emissions and reduction target management."}
              </p>

              {/* Tag / Moduli */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {["Scope 1&2", "Scope 3", "Supply Chain Intelligence", "Target Tracking", "Emissions API"].map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "11px",
                      padding: "3px 7px",
                      borderRadius: "5px",
                      background: "rgba(57,239,180,0.1)",
                      border: "1px solid rgba(57,239,180,0.22)",
                      color: "#b5f2dc",
                      fontWeight: 600
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "16px", paddingTop: "10px", borderTop: "1px solid rgba(57,239,180,0.16)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{
                color: "#72f7ca",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: ".02em",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px"
              }}>
                {isIt ? "Apri use case" : "Open use cases"} <b>→</b>
              </span>
              <span style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "rgba(57,239,180,.12)",
                border: "1px solid #39efb4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#39efb4",
                fontSize: "13px",
                fontWeight: 700
              }}>2</span>
            </div>
          </div>

          {/* Box 3: ESG Reporting */}
          <div
            onClick={() => onOpenBusinessGuide ? onOpenBusinessGuide("ESG Reporting") : setScreen("businessGuide")}
            style={{
              background: "#0c2820",
              border: "2px solid #3db88f",
              borderRadius: "14px",
              padding: "20px 22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "all .2s ease",
              boxShadow: "0 8px 24px rgba(0,0,0,.4), 0 0 14px rgba(57,239,180,.1)",
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
                gap: "6px",
                padding: "4px 10px",
                background: "rgba(57,239,180,.15)",
                border: "1px solid #39efb4",
                borderRadius: "6px",
                marginBottom: "10px"
              }}>
                <span style={{ fontSize: "14px" }}>📋</span>
                <span style={{
                  fontFamily: "var(--font-geist-mono,monospace)",
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#39efb4",
                  letterSpacing: ".08em",
                  textTransform: "uppercase"
                }}>
                  ESG REPORTING
                </span>
              </div>
              <h2 style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.25,
                margin: "0 0 8px",
                letterSpacing: "-.01em"
              }}>
                ESG Reporting
              </h2>
              <p style={{
                fontSize: "13.5px",
                color: "#c9e8dc",
                lineHeight: 1.45,
                margin: "0 0 12px"
              }}>
                {isIt
                  ? "Raccolta e gestione delle informazioni ESG e predisposizione delle disclosure secondo i framework di rendicontazione."
                  : "Collection and management of ESG data and disclosure preparation for reporting frameworks."}
              </p>

              {/* Tag / Moduli */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {["ESG Frameworks", "Building Ratings & Benchmarks", "Surveys & Assessments"].map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "11px",
                      padding: "3px 7px",
                      borderRadius: "5px",
                      background: "rgba(57,239,180,0.1)",
                      border: "1px solid rgba(57,239,180,0.22)",
                      color: "#b5f2dc",
                      fontWeight: 600
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "16px", paddingTop: "10px", borderTop: "1px solid rgba(57,239,180,0.16)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{
                color: "#72f7ca",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: ".02em",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px"
              }}>
                {isIt ? "Apri use case" : "Open use cases"} <b>→</b>
              </span>
              <span style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "rgba(57,239,180,.12)",
                border: "1px solid #39efb4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#39efb4",
                fontSize: "13px",
                fontWeight: 700
              }}>3</span>
            </div>
          </div>

          {/* Box 4: Decarbonization */}
          <div
            onClick={() => onOpenBusinessGuide ? onOpenBusinessGuide("Decarbonization & Energy Management") : setScreen("businessGuide")}
            style={{
              background: "#0c2820",
              border: "2px solid #3db88f",
              borderRadius: "14px",
              padding: "20px 22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "all .2s ease",
              boxShadow: "0 8px 24px rgba(0,0,0,.4), 0 0 14px rgba(57,239,180,.1)",
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
                gap: "6px",
                padding: "4px 10px",
                background: "rgba(57,239,180,.15)",
                border: "1px solid #39efb4",
                borderRadius: "6px",
                marginBottom: "10px"
              }}>
                <span style={{ fontSize: "14px" }}>⚡</span>
                <span style={{
                  fontFamily: "var(--font-geist-mono,monospace)",
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#39efb4",
                  letterSpacing: ".08em",
                  textTransform: "uppercase"
                }}>
                  DECARBONIZATION & ENERGY
                </span>
              </div>
              <h2 style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.25,
                margin: "0 0 8px",
                letterSpacing: "-.01em"
              }}>
                Decarbonization & Energy Management
              </h2>
              <p style={{
                fontSize: "13.5px",
                color: "#c9e8dc",
                lineHeight: 1.45,
                margin: "0 0 12px"
              }}>
                {isIt
                  ? "Analisi dei consumi energetici, individuazione delle opportunità di efficientamento e monitoraggio delle iniziative di sostenibilità."
                  : "Analysis of energy consumption, identification of efficiency opportunities and sustainability program tracking."}
              </p>

              {/* Tag / Moduli */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {["Utility Bill Analytics", "Interval Meter Analytics", "Program Tracking"].map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "11px",
                      padding: "3px 7px",
                      borderRadius: "5px",
                      background: "rgba(57,239,180,0.1)",
                      border: "1px solid rgba(57,239,180,0.22)",
                      color: "#b5f2dc",
                      fontWeight: 600
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "16px", paddingTop: "10px", borderTop: "1px solid rgba(57,239,180,0.16)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{
                color: "#72f7ca",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: ".02em",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px"
              }}>
                {isIt ? "Apri use case" : "Open use cases"} <b>→</b>
              </span>
              <span style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "rgba(57,239,180,.12)",
                border: "1px solid #39efb4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#39efb4",
                fontSize: "13px",
                fontWeight: 700
              }}>4</span>
            </div>
          </div>

          {/* Box 5: Accesso servizi di supporto */}
          <div
            onClick={() => onOpenAdminGuide ? onOpenAdminGuide("Supporto & Servizi", "project-post-golive") : setScreen("adminGuide")}
            style={{
              background: "#0c2820",
              border: "2px solid #3db88f",
              borderRadius: "14px",
              padding: "20px 22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "all .2s ease",
              boxShadow: "0 8px 24px rgba(0,0,0,.4), 0 0 14px rgba(57,239,180,.1)",
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
                gap: "6px",
                padding: "4px 10px",
                background: "rgba(57,239,180,.15)",
                border: "1px solid #39efb4",
                borderRadius: "6px",
                marginBottom: "10px"
              }}>
                <span style={{ fontSize: "14px" }}>🛟</span>
                <span style={{
                  fontFamily: "var(--font-geist-mono,monospace)",
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#39efb4",
                  letterSpacing: ".08em",
                  textTransform: "uppercase"
                }}>
                  {isIt ? "SUPPORTO & SERVIZI" : "SUPPORT & SERVICES"}
                </span>
              </div>
              <h2 style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.25,
                margin: "0 0 8px",
                letterSpacing: "-.01em"
              }}>
                {isIt ? "Accesso servizi di supporto" : "Support Services Access"}
              </h2>
              <p style={{
                fontSize: "13.5px",
                color: "#c9e8dc",
                lineHeight: 1.45,
                margin: "0 0 12px"
              }}>
                {isIt
                  ? "Metodologia di progetto, governance operativa, assistenza tecnica e canali di supporto IBM in produzione."
                  : "Project methodology, operational governance, technical assistance and IBM production support channels."}
              </p>

              {/* Tag / Moduli */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {["Metodologia Progetto", "Post Go-Live", "Supporto IBM", "Community & Docs"].map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "11px",
                      padding: "3px 7px",
                      borderRadius: "5px",
                      background: "rgba(57,239,180,0.1)",
                      border: "1px solid rgba(57,239,180,0.22)",
                      color: "#b5f2dc",
                      fontWeight: 600
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "16px", paddingTop: "10px", borderTop: "1px solid rgba(57,239,180,0.16)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{
                color: "#72f7ca",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: ".02em",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px"
              }}>
                {isIt ? "Apri guida" : "Open guide"} <b>→</b>
              </span>
              <span style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "rgba(57,239,180,.12)",
                border: "1px solid #39efb4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#39efb4",
                fontSize: "13px",
                fontWeight: 700
              }}>5</span>
            </div>
          </div>

          {/* Box 6: Analisi Esigenze Azienda */}
          <div
            onClick={() => setScreen("companySetup")}
            style={{
              background: "#0d2e24",
              border: "2px solid #39efb4",
              borderRadius: "14px",
              padding: "20px 22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "all .2s ease",
              boxShadow: "0 8px 24px rgba(0,0,0,.45), 0 0 20px rgba(57,239,180,.22)",
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
                gap: "6px",
                padding: "4px 10px",
                background: "rgba(57,239,180,.25)",
                border: "1px solid #72f7ca",
                borderRadius: "6px",
                marginBottom: "10px"
              }}>
                <span style={{ fontSize: "14px" }}>🎯</span>
                <span style={{
                  fontFamily: "var(--font-geist-mono,monospace)",
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: ".08em",
                  textTransform: "uppercase"
                }}>
                  {isIt ? "ASSESSMENT AZIENDALE" : "COMPANY ASSESSMENT"}
                </span>
              </div>
              <h2 style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.25,
                margin: "0 0 8px",
                letterSpacing: "-.01em"
              }}>
                {isIt ? "Analisi Esigenze Azienda" : "Company Needs Analysis"}
              </h2>
              <p style={{
                fontSize: "13.5px",
                color: "#f2fff9",
                lineHeight: 1.45,
                margin: "0 0 12px"
              }}>
                {isIt
                  ? "Configura la tua azienda, seleziona le priorità ESG, valuta i bisogni sui dati e genera il report strategico."
                  : "Configure company profile, set ESG priorities, assess data requirements and generate customized strategic report."}
              </p>

              {/* Tag / Moduli */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {["Company Profile", "Priorità ESG", "Data Needs Matrix", "Report Strategico PPTX"].map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "11px",
                      padding: "3px 7px",
                      borderRadius: "5px",
                      background: "rgba(57,239,180,0.18)",
                      border: "1px solid rgba(57,239,180,0.4)",
                      color: "#ffffff",
                      fontWeight: 700
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "16px", paddingTop: "10px", borderTop: "1px solid rgba(57,239,180,0.25)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{
                color: "#06110d",
                background: "var(--teal)",
                padding: "6px 14px",
                borderRadius: "6px",
                fontSize: "13.5px",
                fontWeight: 800,
                letterSpacing: ".03em",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                boxShadow: "0 3px 10px rgba(57,239,180,.35)"
              }}>
                {isIt ? "Inizia analisi" : "Start analysis"} <b>→</b>
              </span>
              <span style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "rgba(57,239,180,.25)",
                border: "1.5px solid #72f7ca",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "13px",
                fontWeight: 800
              }}>6</span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", background: "#39efb4", zIndex: 100 }} />
    </main>
  );
}
