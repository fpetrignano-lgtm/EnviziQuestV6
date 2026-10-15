import React, { useState } from "react";
import type { Language, Profile, Screen } from "../types";
import type { CommonProps } from "./types";

export type ScopePhase = "fase1" | "fase2" | "none";

export interface ConnectorBreakdown {
  simple: number;
  medium: number;
  advanced: number;
}

export interface ConnectorConfig {
  fase1: ConnectorBreakdown;
  fase2: ConnectorBreakdown;
}

export interface FunctionalScopeItem {
  id: string;
  num: number;
  title: string;
  titleEn: string;
  shortDesc: string;
  shortDescEn: string;
  clientNeed: string;
  clientNeedEn: string;
  extendedDesc: string;
  extendedDescEn: string;
  examples: string;
  examplesEn: string;
  benefits: string[];
  benefitsEn: string[];
  icon: string;
  defaultPhase: ScopePhase;
}

export const PRIMARY_SCOPE_ITEMS: FunctionalScopeItem[] = [
  {
    id: "base-data-mgmt",
    num: 1,
    title: "Base di gestione dei dati (o Base di misurazione a intervalli)",
    titleEn: "Data Management Foundation (or Interval Metering Base)",
    icon: "🏗️",
    shortDesc: "Amministrazione, SSO, gestione dati, reporting, dashboard e dati meteo giornalieri.",
    shortDescEn: "Administration, SSO, data management, reporting, dashboards and daily weather data.",
    clientNeed: "«Ci serve un'unica piattaforma sicura in cui centralizzare i dati ESG di tutte le sedi, con accessi per ruolo e senza fogli Excel sparsi.» Tipico di gruppi con più sedi o società, dove oggi i dati sono raccolti a mano e difficilmente confrontabili.",
    clientNeedEn: "«We need a single, secure platform to centralise ESG data across all sites, with role-based access and no scattered Excel sheets.» Typical for multi-site groups collecting data manually.",
    extendedDesc: "Piattaforma fondamentale su cui poggiano tutti gli altri moduli. Comprende la gestione di utenti e ruoli, l'accesso SSO con le credenziali aziendali, la struttura gerarchica di organizzazioni e sedi, il caricamento e la validazione dei dati, dashboard e report standard e i dati meteo giornalieri per normalizzare i consumi (gradi giorno di riscaldamento e raffrescamento). È il prerequisito di tutte le altre funzionalità.",
    extendedDescEn: "Core foundational platform for all modules: users/roles, SSO, organizational hierarchy, data ingestion/validation, standard reporting/dashboards and weather normalization (degree-days).",
    examples: "Un gruppo con 40 stabilimenti organizza le sedi per paese e business unit, carica i consumi mensili di energia e gas e consulta una dashboard che confronta i consumi normalizzati in base ai gradi giorno.",
    examplesEn: "A 40-plant group organises sites by country and BU, loads monthly energy/gas data and benchmarks weather-normalised consumption.",
    benefits: [
      "Fonte unica e affidabile dei dati ESG (Single source of truth)",
      "Meno tempo perso a raccogliere e riconciliare fogli Excel (-30% nelle referenze pubbliche)",
      "Dati confrontabili tra sedi e paesi a supporto delle decisioni di decarbonizzazione",
      "Accessi sicuri per diversi utenti e completamente tracciabili per ruolo"
    ],
    benefitsEn: [
      "Single source of truth for all enterprise ESG data",
      "Less time gathering and reconciling spreadsheets (-30% in public benchmarks)",
      "Comparable data across sites and countries supporting decarbonisation choices",
      "Role-based secure access and auditable logs"
    ],
    defaultPhase: "fase1"
  },
  {
    id: "scope-1-2",
    num: 2,
    title: "Gestione delle emissioni - Contabilità e reporting GHG Scope 1&2",
    titleEn: "Emissions Management – Scope 1&2 GHG Accounting & Reporting",
    icon: "☁️",
    shortDesc: "Calcolo e reporting emissioni Scope 1 e 2, inclusi fattori standard e personalizzati.",
    shortDescEn: "Calculation and reporting of Scope 1 and 2 emissions, including standard and custom factors.",
    clientNeed: "«Dobbiamo calcolare e rendicontare le emissioni dirette e quelle da energia acquistata in modo corretto, ripetibile e verificabile dai revisori.» Tipico di aziende soggette a CSRD o con richieste di dati da clienti e banche.",
    clientNeedEn: "«We need to calculate and report direct and purchased energy emissions in an accurate, repeatable and auditor-verifiable manner.»",
    extendedDesc: "Trasforma i dati di attività in emissioni di gas serra. Lo Scope 1 copre le emissioni dirette (combustibili, flotta aziendale, gas refrigeranti), lo Scope 2 quelle indirette da energia elettrica, vapore e calore acquistati, con approcci location-based e market-based. Applica fattori di emissione standard da fonti pubbliche riconosciute oppure fattori personalizzati definiti dal cliente.",
    extendedDescEn: "Converts activity data into GHG emissions. Scope 1 covers direct emissions (fuels, fleet, refrigerants), Scope 2 covers indirect purchased energy with location-based and market-based methods.",
    examples: "Da 120.000 m³ di gas naturale e 2.500 MWh di elettricità acquistata in uno stabilimento, la piattaforma calcola le tonnellate di CO₂e per sede, mese e fonte, pronte per il bilancio di sostenibilità con fattori standard o personalizzati.",
    examplesEn: "Converts 120k m³ natural gas and 2,500 MWh purchased electricity into CO₂e tonnes by site, month and source, ready for disclosure.",
    benefits: [
      "Calcoli corretti, ripetibili e verificabili dai revisori",
      "Riduzione dei tempi di chiusura del bilancio di sostenibilità",
      "Base solida per conformità CSRD e richieste di banche e investitori",
      "Eliminazione di formule rotte, versioni discordanti e fattori obsoleti su Excel"
    ],
    benefitsEn: [
      "Accurate, repeatable and auditable calculations for assurance",
      "Shorter sustainability report closing cycles",
      "Solid foundation for CSRD and investor questionnaires",
      "Elimination of broken formulas and outdated factor tables in spreadsheets"
    ],
    defaultPhase: "fase1"
  },
  {
    id: "scope-3",
    num: 3,
    title: "Gestione delle emissioni – Contabilità e reporting GHG Scope 3",
    titleEn: "Emissions Management – Scope 3 GHG Accounting & Reporting",
    icon: "🌐",
    shortDesc: "Calcolo delle emissioni Scope 3 a monte e a valle con metodi GHG Protocol.",
    shortDescEn: "Upstream and downstream Scope 3 calculation with GHG Protocol standard methodologies.",
    clientNeed: "«La maggior parte del nostro impatto è nella catena del valore e non sappiamo da dove iniziare a misurarlo.» Tipico di aziende che devono rendicontare lo Scope 3 per CSRD o su richiesta della filiera.",
    clientNeedEn: "«Most of our carbon footprint is across the value chain and we need a structured starting point.»",
    extendedDesc: "Misura le emissioni indirette lungo la catena del valore, a monte (beni e servizi acquistati, trasporti, viaggi di lavoro, pendolarismo dei dipendenti) e a valle (uso e fine vita dei prodotti venduti), secondo le 15 categorie del GHG Protocol. Supporta metodi basati sulla spesa (spend-based), sulla distanza o su dati specifici.",
    extendedDescEn: "Measures value chain indirect emissions upstream and downstream across GHG Protocol's 15 categories, supporting spend-based, distance-based and hybrid activity-data methods.",
    examples: "Un'azienda calcola le emissioni dei viaggi di lavoro partendo dai km percorsi in aereo/treno e quelle dei beni acquistati partendo dalla spesa per categoria merceologica, ottenendo un quadro delle categorie su cui intervenire.",
    examplesEn: "Calculates business travel from km travelled and purchased goods from category spend, spotlighting high-impact categories.",
    benefits: [
      "Visione completa dell'impronta lungo l'intera catena del valore",
      "Individuazione guidata delle categorie prioritarie su cui intervenire",
      "Piena conformità metodologica al GHG Protocol Corporate Value Chain Standard",
      "Risposte rapide e documentate alle richieste di clienti e banche"
    ],
    benefitsEn: [
      "Full value-chain carbon footprint visibility across Scope 3 categories",
      "Targeted identification of high-impact categories for decarbonisation",
      "Methodological alignment with GHG Protocol Corporate Value Chain Standard",
      "Faster and documented replies to supply chain and lender inquiries"
    ],
    defaultPhase: "fase1"
  },
  {
    id: "esg-reporting-frameworks",
    num: 4,
    title: "Reporting ESG – Framework di reporting ESG (CSRD, GRI, CDP)",
    titleEn: "ESG Reporting – ESG Frameworks Management (CSRD, GRI, CDP)",
    icon: "📋",
    shortDesc: "Gestione di contenuti qualitativi e quantitativi, collaborazione e workflow di reporting.",
    shortDescEn: "Qualitative and quantitative disclosure management, team collaboration and reporting workflows.",
    clientNeed: "«Ogni anno il bilancio di sostenibilità richiede settimane di raccolta di dati e testi da molte funzioni: vogliamo un processo guidato, tracciato e allineato a CSRD/ESRS.»",
    clientNeedEn: "«Annual sustainability reporting takes weeks of scattered data gathering across teams: we want a structured, auditable workflow aligned with CSRD/ESRS.»",
    extendedDesc: "Supporta la preparazione del report di sostenibilità collegando le informazioni quantitative (calcolate dalla piattaforma) e qualitative (testi, policy, descrizioni) ai requisiti dei principali standard, come CSRD/ESRS, GRI o CDP. Include assegnazione dei contributi, revisione e approvazione tra più persone, con tracciabilità delle modifiche.",
    extendedDescEn: "Prepares sustainability disclosures by linking quantitative platform metrics and qualitative narratives to CSRD/ESRS, GRI and CDP requirements, with sign-off workflows and audit trail.",
    examples: "Finance fornisce i dati economici, HR quelli sul personale e il team ESG i testi narrativi; il responsabile controlla lo stato di avanzamento di ogni capitolo e approva il report finale con traccia di chi ha inserito e validato ogni dato.",
    examplesEn: "Finance contributes economic figures, HR submits workforce metrics and ESG writes narrative disclosures; stakeholders track progress and sign off with complete audit trail.",
    benefits: [
      "Tempi di produzione del bilancio di sostenibilità drasticamente ridotti",
      "Dati e testi allineati nativamente ai requisiti di CSRD/ESRS, GRI e CDP",
      "Collaborazione ordinata e tracciata tra Finance, HR, ESG e funzioni aziendali",
      "Tracciabilità completa di ogni dato e testo a supporto dell'assurance dei revisori"
    ],
    benefitsEn: [
      "Significantly reduced sustainability reporting production timeline",
      "Data and narratives natively mapped to CSRD/ESRS, GRI and CDP requirements",
      "Orderly cross-functional collaboration between Finance, HR, ESG and Operations",
      "Full audit trail for third-party assurance and external verification"
    ],
    defaultPhase: "fase1"
  },
  {
    id: "connector-addon",
    num: 5,
    title: "Componente aggiuntivo Connettore (Data Connector)",
    titleEn: "Connector Add-On (Automated Data Connector)",
    icon: "🔌",
    shortDesc: "Caricamento massivo e automatico di contenuti da fonti dati esterne.",
    shortDescEn: "Automated batch data ingestion from external data sources and utility systems.",
    clientNeed: "«Non vogliamo più caricare a mano file di consumi e dati provenienti da fornitori e sistemi diversi.» Tipico di aziende con molte fonti dati che vogliono ridurre tempi ed errori.",
    clientNeedEn: "«We want to eliminate manual entry of utility bills and ERP extracts across multiple sites and suppliers.»",
    extendedDesc: "Automatizza il caricamento massivo e periodico di dati da fonti esterne (server SFTP, file di utility, estrazioni gestionali ed ERP), evitando l'inserimento manuale. Richiede la definizione del tracciato dei dati e delle regole di validazione.",
    extendedDescEn: "Automates periodic batch data intake from external sources (SFTP, accounting exports, utility feeds), eliminating manual transcription with mapping rules and format validation.",
    examples: "Ogni mese un connettore preleva da un server SFTP i file con i consumi forniti dalle utility e le estrazioni del sistema di contabilità, li carica nella piattaforma e segnala eventuali errori di formato.",
    examplesEn: "Pulls monthly utility consumption files and ERP exports via SFTP, ingests into Envizi and flags formatting errors automatically.",
    benefits: [
      "Caricamenti automatici, puntuali e schedulati",
      "Forte riduzione del tempo dedicato all'inserimento dei dati",
      "Eliminazione degli errori di trascrizione e di formato",
      "Dati sempre aggiornati e pronti per reporting e analisi"
    ],
    benefitsEn: [
      "Automated and scheduled data ingestion batches",
      "Major time savings on manual data entry and formatting",
      "Elimination of transcription errors and missing records",
      "Always up-to-date data foundation ready for reporting and analysis"
    ],
    defaultPhase: "fase1"
  }
];

interface Props extends CommonProps {
  displayCompanyName: string;
  name: string;
  scopePhases: Record<string, ScopePhase>;
  setScopePhases: React.Dispatch<React.SetStateAction<Record<string, ScopePhase>>>;
  connectorConfig?: ConnectorConfig;
  setConnectorConfig?: React.Dispatch<React.SetStateAction<ConnectorConfig>>;
  scopeNotes?: Record<string, string>;
  setScopeNotes?: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  onSave?: (name: string) => void;
  defaultSaveName?: string;
  onContinue?: () => void;
}

export function FunctionalScopeScreen({
  language,
  profile,
  setLanguage,
  setScreen,
  reset,
  goBack,
  renderTrustBar,
  displayCompanyName,
  name,
  scopePhases,
  setScopePhases,
  connectorConfig,
  setConnectorConfig,
  scopeNotes = {},
  setScopeNotes,
  onSave,
  defaultSaveName = "",
  onContinue,
}: Props) {
  const isIt = language === "it";
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Local fallback if connectorConfig not provided from parent
  const [localConnectorConfig, setLocalConnectorConfig] = useState<ConnectorConfig>({
    fase1: { simple: 0, medium: 0, advanced: 0 },
    fase2: { simple: 0, medium: 0, advanced: 0 },
  });

  const connectors = connectorConfig || localConnectorConfig;
  const updateConnectors = setConnectorConfig || setLocalConnectorConfig;

  const handleUpdateConnectorCount = (phase: "fase1" | "fase2", tier: keyof ConnectorBreakdown, delta: number) => {
    updateConnectors((prev) => {
      const current = prev[phase][tier];
      const nextVal = Math.max(0, current + delta);
      return {
        ...prev,
        [phase]: {
          ...prev[phase],
          [tier]: nextVal,
        },
      };
    });
  };

  const phaseCounts = {
    fase1: PRIMARY_SCOPE_ITEMS.filter((item) => (scopePhases[item.id] || item.defaultPhase) === "fase1").length,
    fase2: PRIMARY_SCOPE_ITEMS.filter((item) => (scopePhases[item.id] || item.defaultPhase) === "fase2").length,
    none: PRIMARY_SCOPE_ITEMS.filter((item) => (scopePhases[item.id] || item.defaultPhase) === "none").length,
  };

  const handleSetPhase = (id: string, phase: ScopePhase) => {
    setScopePhases((prev) => ({
      ...prev,
      [id]: phase,
    }));
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleNext = () => {
    if (onContinue) {
      onContinue();
    } else {
      setScreen("advancedScope");
    }
  };

  return (
    <main
      className="functionalScopeScreen"
      style={{
        minHeight: "100vh",
        height: "1080px",
        background: "#07110e",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "#3b82f4", zIndex: 100 }} />

      {/* Top Header */}
      <header className="missionNav">
        <button className="brand brandButton" onClick={reset}>
          <span className="brandMark">e·</span>
          <span>Envizi<br />Impact Quest</span>
        </button>
        <div className="missionProgress" style={{ fontSize: "20px", fontWeight: 800 }}>
          <span className="activeDot" /> {isIt ? "09 · ESIGENZE FUNZIONALI PRIMARIE (CORE SCOPE)" : "09 · PRIMARY FUNCTIONAL SCOPE"}
        </div>
      </header>

      {/* Main Body */}
      <section
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "16px 3.5vw 20px",
          maxWidth: "1620px",
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box",
          zIndex: 2,
          overflow: "hidden",
        }}
      >
        {/* Title & Scope Progress Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "14px",
            flexShrink: 0,
            gap: "20px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "6px 14px",
                background: "rgba(57,239,180,.15)",
                border: "1.5px solid #39efb4",
                borderRadius: "8px",
                marginBottom: "8px",
              }}
            >
              <span style={{ fontSize: "20px" }}>🎯</span>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono,monospace)",
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "#39efb4",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}
              >
                {isIt ? "SCOPING FUNZIONALE & PIANIFICAZIONE FASI" : "FUNCTIONAL SCOPING & PHASE PLANNING"}
              </span>
              <span
                style={{
                  color: "#ffffff",
                  background: "#0c2820",
                  fontSize: "18px",
                  fontWeight: 700,
                  padding: "3px 12px",
                  borderRadius: "12px",
                  border: "1px solid #2e6b54",
                }}
              >
                {displayCompanyName}
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(28px, 2.5vw, 38px)",
                fontWeight: 800,
                color: "#ffffff",
                margin: "0 0 6px",
                letterSpacing: "-.02em",
                lineHeight: 1.2,
              }}
            >
              {isIt ? "Esigenze funzionali Primarie (Core Scope)" : "Primary Functional Requirements (Core Scope)"}
            </h1>
            <p
              style={{
                fontSize: "20px",
                color: "#c9e8dc",
                maxWidth: "1100px",
                margin: 0,
                lineHeight: 1.35,
              }}
            >
              {isIt
                ? "Organizza lo scoping del cliente assegnando ciascun modulo fondamentale a Fase 1 (Avvio), Fase 2 (Evoluzione) o Non in Scope."
                : "Organize client scoping by assigning each core module to Phase 1 (Launch), Phase 2 (Evolution) or Not in Scope."}
            </p>
          </div>

          {/* Scope Phase Summary Counters */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              background: "#0a221b",
              border: "2px solid #244f3f",
              borderRadius: "14px",
              padding: "12px 20px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#39efb4" }} />
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff" }}>
                {isIt ? "Fase 1" : "Phase 1"}: <strong style={{ color: "#39efb4", fontSize: "22px" }}>{phaseCounts.fase1}</strong>
              </span>
            </div>
            <div style={{ width: "2px", height: "24px", background: "#244f3f" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#38bdf8" }} />
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff" }}>
                {isIt ? "Fase 2" : "Phase 2"}: <strong style={{ color: "#38bdf8", fontSize: "22px" }}>{phaseCounts.fase2}</strong>
              </span>
            </div>
            <div style={{ width: "2px", height: "24px", background: "#244f3f" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#94a3b8" }} />
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff" }}>
                {isIt ? "Non in Scope" : "Out of Scope"}: <strong style={{ color: "#94a3b8", fontSize: "22px" }}>{phaseCounts.none}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Checklist Container */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            paddingRight: "8px",
            paddingBottom: "12px",
          }}
        >
          {PRIMARY_SCOPE_ITEMS.map((item) => {
            const currentPhase = scopePhases[item.id] || item.defaultPhase;
            const isExpanded = expandedId === item.id;
            const title = isIt ? item.title : item.titleEn;
            const shortDesc = isIt ? item.shortDesc : item.shortDescEn;
            const clientNeed = isIt ? item.clientNeed : item.clientNeedEn;
            const extendedDesc = isIt ? item.extendedDesc : item.extendedDescEn;
            const examples = isIt ? item.examples : item.examplesEn;
            const benefits = isIt ? item.benefits : item.benefitsEn;

            return (
              <div
                key={item.id}
                style={{
                  background: currentPhase === "fase1" ? "#0c2820" : currentPhase === "fase2" ? "#0a2228" : "#0f1715",
                  border:
                    currentPhase === "fase1"
                      ? "2px solid #3db88f"
                      : currentPhase === "fase2"
                      ? "2px solid #0284c7"
                      : "2px solid #334155",
                  borderRadius: "14px",
                  padding: "16px 22px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all .18s ease",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                }}
              >
                {/* Item Row Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "18px",
                    flexWrap: "nowrap",
                  }}
                >
                  {/* Left: Icon, Number, Title & Short Desc */}
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, minWidth: 0 }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "48px",
                        height: "48px",
                        borderRadius: "10px",
                        background:
                          currentPhase === "fase1"
                            ? "rgba(57,239,180,.15)"
                            : currentPhase === "fase2"
                            ? "rgba(56,189,248,.15)"
                            : "rgba(148,163,184,.12)",
                        border:
                          currentPhase === "fase1"
                            ? "1.5px solid #39efb4"
                            : currentPhase === "fase2"
                            ? "1.5px solid #38bdf8"
                            : "1.5px solid #64748b",
                        fontSize: "24px",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </span>

                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-geist-mono,monospace)",
                            fontSize: "20px",
                            fontWeight: 800,
                            color: currentPhase === "fase1" ? "#39efb4" : currentPhase === "fase2" ? "#38bdf8" : "#94a3b8",
                          }}
                        >
                          [{item.num}]
                        </span>
                        <h3
                          style={{
                            fontSize: "22px",
                            fontWeight: 800,
                            color: "#ffffff",
                            margin: 0,
                            letterSpacing: "-.01em",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {title}
                        </h3>
                      </div>
                      <p
                        style={{
                          fontSize: "20px",
                          color: "#c9e8dc",
                          margin: "4px 0 0",
                          lineHeight: 1.35,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Right: Expand details button + 3-state phase selector */}
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
                    <button
                      onClick={() => toggleExpand(item.id)}
                      style={{
                        background: "rgba(12,40,32,0.8)",
                        border: "1.5px solid #244f3f",
                        color: "#72f7ca",
                        borderRadius: "8px",
                        padding: "8px 18px",
                        fontSize: "20px",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: ".15s",
                      }}
                    >
                      {isExpanded ? "▲ " + (isIt ? "Meno dettagli" : "Less") : "▼ " + (isIt ? "Dettagli & Benefici" : "Details")}
                    </button>

                    {/* Phase Selector or Fixed Prerequisite Badge */}
                    {item.id === "base-data-mgmt" ? (
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "rgba(57,239,180,.18)",
                          border: "2px solid #39efb4",
                          borderRadius: "10px",
                          padding: "8px 22px",
                          color: "#ffffff",
                          fontSize: "20px",
                          fontWeight: 800,
                          boxShadow: "0 0 14px rgba(57,239,180,.3)",
                        }}
                      >
                        <span style={{ color: "#39efb4", fontSize: "20px" }}>●</span>
                        <span>{isIt ? "Fase 1 · Prerequisito Fondamentale" : "Phase 1 · Core Prerequisite"}</span>
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "inline-flex",
                          background: "#061511",
                          border: "2px solid #1a3c30",
                          borderRadius: "10px",
                          padding: "3px",
                          gap: "4px",
                        }}
                      >
                        <button
                          onClick={() => handleSetPhase(item.id, currentPhase === "none" ? "fase1" : "none")}
                          style={{
                            background: currentPhase === "none" ? "#334155" : "transparent",
                            color: currentPhase === "none" ? "#ffffff" : "#94a3b8",
                            border: currentPhase === "none" ? "1.5px solid #64748b" : "1.5px solid transparent",
                            borderRadius: "8px",
                            padding: "8px 20px",
                            fontSize: "20px",
                            fontWeight: currentPhase === "none" ? 800 : 600,
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            transition: ".15s",
                          }}
                        >
                          <span style={{ color: "#94a3b8", fontSize: "20px" }}>✕</span> {isIt ? "Non in Scope" : "Out of Scope"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div
                    style={{
                      marginTop: "16px",
                      paddingTop: "16px",
                      borderTop: "1.5px solid rgba(57,239,180,0.2)",
                      display: "grid",
                      gridTemplateColumns: "1.1fr 1fr",
                      gap: "24px",
                      background: "rgba(0,0,0,0.35)",
                      padding: "20px 22px",
                      borderRadius: "10px",
                    }}
                  >
                    <div>
                      {/* Client Need Quote */}
                      <div
                        style={{
                          background: "rgba(57,239,180,0.1)",
                          borderLeft: "4px solid #39efb4",
                          padding: "12px 16px",
                          borderRadius: "6px",
                          marginBottom: "14px",
                        }}
                      >
                        <span style={{ fontSize: "20px", fontWeight: 800, color: "#39efb4", textTransform: "uppercase" }}>
                          {isIt ? "Esigenza Funzionale Cliente:" : "Client Functional Need:"}
                        </span>
                        <p style={{ fontSize: "20px", color: "#e6f8f1", margin: "8px 0 0", fontStyle: "italic", lineHeight: 1.45 }}>
                          {clientNeed}
                        </p>
                      </div>

                      {/* Extended Description */}
                      <p style={{ fontSize: "20px", color: "#c9e8dc", margin: "0 0 14px", lineHeight: 1.45 }}>
                        <strong style={{ color: "#ffffff" }}>{isIt ? "Descrizione estesa: " : "Full description: "}</strong>
                        {extendedDesc}
                      </p>

                      {/* Example */}
                      <p style={{ fontSize: "20px", color: "#a5d5c5", margin: 0, lineHeight: 1.45 }}>
                        <strong style={{ color: "#72f7ca" }}>{isIt ? "Esempio pratico: " : "Practical example: "}</strong>
                        {examples}
                      </p>
                    </div>

                    {/* Right: Benefits */}
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div>
                        <span style={{ fontSize: "20px", fontWeight: 800, color: "#39efb4", textTransform: "uppercase" }}>
                          {isIt ? "Benefici Tipici Attesi:" : "Expected Business Benefits:"}
                        </span>
                        <ul style={{ margin: "10px 0 0", paddingLeft: "24px", fontSize: "20px", color: "#e6f8f1", lineHeight: 1.5 }}>
                          {benefits.map((b, bIdx) => (
                            <li key={bIdx} style={{ marginBottom: "8px" }}>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Optional Note input */}
                      {setScopeNotes && (
                        <div style={{ marginTop: "16px" }}>
                          <input
                            type="text"
                            placeholder={isIt ? "Aggiungi nota per il cliente / partner..." : "Add client/partner scoping note..."}
                            value={scopeNotes[item.id] || ""}
                            onChange={(e) => {
                              const val = e.target.value;
                              setScopeNotes((prev) => ({ ...prev, [item.id]: val }));
                            }}
                            style={{
                              width: "100%",
                              background: "#0c2820",
                              border: "1.5px solid #2e6b54",
                              borderRadius: "8px",
                              color: "#ffffff",
                              padding: "10px 16px",
                              fontSize: "20px",
                              outline: "none",
                              boxSizing: "border-box",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Connector Breakdown Submenu (Only for Item 5 when in Fase 1 or Fase 2) */}
                {item.id === "connector-addon" && currentPhase !== "none" && (["fase1", "fase2"] as const).map((connPhase) => (
                  <div
                    key={connPhase}
                    style={{
                      marginTop: "14px",
                      padding: "16px 20px",
                      borderRadius: "10px",
                      background: connPhase === "fase1" ? "rgba(24,78,59,0.35)" : "rgba(3,105,161,0.25)",
                      border: connPhase === "fase1" ? "1.5px solid #3db88f" : "1.5px solid #0284c7",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "22px" }}>🔌</span>
                        <span style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff" }}>
                          {isIt
                            ? `Numero Connettori per ${connPhase === "fase1" ? "Fase 1 (Avvio)" : "Fase 2 (Evoluzione)"}:`
                            : `Data Connectors for ${connPhase === "fase1" ? "Phase 1" : "Phase 2"}:`}
                        </span>
                      </div>
                      <span
                        style={{
                          background: "#0c2820",
                          border: connPhase === "fase1" ? "1px solid #39efb4" : "1px solid #38bdf8",
                          borderRadius: "20px",
                          padding: "4px 14px",
                          fontSize: "19px",
                          fontWeight: 800,
                          color: connPhase === "fase1" ? "#39efb4" : "#38bdf8",
                        }}
                      >
                        {isIt ? "Totale connettori: " : "Total connectors: "}
                        {connectors[connPhase].simple + connectors[connPhase].medium + connectors[connPhase].advanced}
                      </span>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
                      {/* Semplici */}
                      <div
                        style={{
                          background: "#071813",
                          border: "1px solid #1a4234",
                          borderRadius: "8px",
                          padding: "10px 14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <div style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff" }}>{isIt ? "Semplici" : "Simple"}</div>
                          <div style={{ fontSize: "16px", color: "#a0ccbc" }}>{isIt ? "CSV / Excel / SFTP standard" : "CSV / Excel / SFTP"}</div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <button
                            onClick={() => handleUpdateConnectorCount(connPhase, "simple", -1)}
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "6px",
                              background: "#0c2820",
                              border: "1.5px solid #2e6b54",
                              color: "#72f7ca",
                              fontSize: "22px",
                              fontWeight: 800,
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            -
                          </button>
                          <span style={{ fontSize: "22px", fontWeight: 800, color: "#ffffff", minWidth: "26px", textAlign: "center" }}>
                            {connectors[connPhase].simple}
                          </span>
                          <button
                            onClick={() => handleUpdateConnectorCount(connPhase, "simple", 1)}
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "6px",
                              background: "#184e3b",
                              border: "1.5px solid #39efb4",
                              color: "#ffffff",
                              fontSize: "22px",
                              fontWeight: 800,
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Medi */}
                      <div
                        style={{
                          background: "#071813",
                          border: "1px solid #1a4234",
                          borderRadius: "8px",
                          padding: "10px 14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <div style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff" }}>{isIt ? "Medi" : "Medium"}</div>
                          <div style={{ fontSize: "16px", color: "#a0ccbc" }}>{isIt ? "Utility & contabilità multi-sito" : "Multi-site utility feeds"}</div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <button
                            onClick={() => handleUpdateConnectorCount(connPhase, "medium", -1)}
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "6px",
                              background: "#0c2820",
                              border: "1.5px solid #2e6b54",
                              color: "#72f7ca",
                              fontSize: "22px",
                              fontWeight: 800,
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            -
                          </button>
                          <span style={{ fontSize: "22px", fontWeight: 800, color: "#ffffff", minWidth: "26px", textAlign: "center" }}>
                            {connectors[connPhase].medium}
                          </span>
                          <button
                            onClick={() => handleUpdateConnectorCount(connPhase, "medium", 1)}
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "6px",
                              background: "#184e3b",
                              border: "1.5px solid #39efb4",
                              color: "#ffffff",
                              fontSize: "22px",
                              fontWeight: 800,
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Avanzati */}
                      <div
                        style={{
                          background: "#071813",
                          border: "1px solid #1a4234",
                          borderRadius: "8px",
                          padding: "10px 14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <div style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff" }}>{isIt ? "Avanzati" : "Advanced"}</div>
                          <div style={{ fontSize: "16px", color: "#a0ccbc" }}>{isIt ? "ERP custom & Webhook API" : "Custom ERP & API feeds"}</div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <button
                            onClick={() => handleUpdateConnectorCount(connPhase, "advanced", -1)}
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "6px",
                              background: "#0c2820",
                              border: "1.5px solid #2e6b54",
                              color: "#72f7ca",
                              fontSize: "22px",
                              fontWeight: 800,
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            -
                          </button>
                          <span style={{ fontSize: "22px", fontWeight: 800, color: "#ffffff", minWidth: "26px", textAlign: "center" }}>
                            {connectors[connPhase].advanced}
                          </span>
                          <button
                            onClick={() => handleUpdateConnectorCount(connPhase, "advanced", 1)}
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "6px",
                              background: "#184e3b",
                              border: "1.5px solid #39efb4",
                              color: "#ffffff",
                              fontSize: "22px",
                              fontWeight: 800,
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Footer Navigation Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "14px",
            paddingTop: "14px",
            borderTop: "1px solid #1a3c30",
            flexShrink: 0,
          }}
        >
          <button
            onClick={goBack}
            style={{
              background: "#0c2820",
              border: "2px solid #3db88f",
              color: "#72f7ca",
              padding: "12px 28px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: 800,
              fontSize: "20px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: ".15s",
            }}
          >
            ← {isIt ? "Indietro (Priorità)" : "Back (Priorities)"}
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            {onSave && (
              <button
                onClick={() => onSave(defaultSaveName || displayCompanyName)}
                style={{
                  background: "transparent",
                  border: "2px solid #2e6b54",
                  color: "#39efb4",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: 800,
                  fontSize: "20px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                💾 {isIt ? "Salva Scoping" : "Save Scoping"}
              </button>
            )}

            <button
              onClick={handleNext}
              style={{
                background: "#184e3b",
                border: "2px solid #39efb4",
                color: "#ffffff",
                padding: "12px 34px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: 800,
                fontSize: "20px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 0 20px rgba(57,239,180,0.35)",
                transition: ".15s",
              }}
            >
              {isIt ? "Avanti (Esigenze di Dati)" : "Next (Data Needs)"} <b>→</b>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
