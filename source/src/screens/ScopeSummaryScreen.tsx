import React from "react";
import type { CommonProps } from "./types";
import type { ScopePhase, ConnectorConfig } from "./FunctionalScopeScreen";
import { PRIMARY_SCOPE_ITEMS } from "./FunctionalScopeScreen";
import { ADVANCED_SCOPE_ITEMS } from "./AdvancedScopeScreen";

export interface ScopeAccountsConfig {
  perSite: number;
  corporateSocial: number;
  corporateScope3: number;
}

interface Props extends CommonProps {
  displayCompanyName: string;
  name: string;
  totalSites: number;
  scopePhases: Record<string, ScopePhase>;
  advancedScopePhases: Record<string, ScopePhase>;
  connectorConfig: ConnectorConfig;
  accounts: ScopeAccountsConfig;
  setAccounts: React.Dispatch<React.SetStateAction<ScopeAccountsConfig>>;
  onContinue?: () => void;
}

const boxStyle: React.CSSProperties = {
  background: "#0a221b",
  border: "2px solid #244f3f",
  borderRadius: "14px",
  padding: "18px 24px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
  padding: "10px 0",
  borderBottom: "1px solid #1a3c30",
  fontSize: "20px",
  color: "#c9e8dc",
};

const inputStyle: React.CSSProperties = {
  width: "120px",
  background: "#07110e",
  border: "2px solid #2e6b54",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: 800,
  padding: "6px 10px",
  textAlign: "right",
  outline: "none",
  boxSizing: "border-box",
};

const valueStyle: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 800,
  color: "#ffffff",
  minWidth: "120px",
  textAlign: "right",
};

export function ScopeSummaryScreen({
  language,
  setScreen,
  reset,
  goBack,
  displayCompanyName,
  totalSites,
  scopePhases,
  advancedScopePhases,
  connectorConfig,
  accounts,
  setAccounts,
  onContinue,
}: Props) {
  const isIt = language === "it";

  const allItems = [
    ...PRIMARY_SCOPE_ITEMS.map((item) => ({ item, phase: scopePhases[item.id] || item.defaultPhase })),
    ...ADVANCED_SCOPE_ITEMS.map((item) => ({ item, phase: advancedScopePhases[item.id] || item.defaultPhase })),
  ];
  const phase1Items = allItems.filter((x) => x.phase === "fase1").map((x) => x.item);
  const phase2Items = allItems.filter((x) => x.phase === "fase2").map((x) => x.item);

  const connectorsFor = (phase: "fase1" | "fase2") => {
    const c = connectorConfig[phase];
    return { simple: c.simple, medium: c.medium, advanced: c.advanced, total: c.simple + c.medium + c.advanced };
  };

  const renderConnectors = (phase: "fase1" | "fase2", color: string) => {
    const c = connectorsFor(phase);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginTop: "14px",
          padding: "10px 14px",
          background: "#0c2820",
          border: `1.5px solid ${color}`,
          borderRadius: "10px",
          fontSize: "20px",
          color: "#c9e8dc",
        }}
      >
        <span>
          🔌 {isIt ? "Numero connettori selezionati" : "Selected connectors"}{" "}
          <strong style={{ color }}>{phase === "fase1" ? (isIt ? "Fase 1" : "Phase 1") : (isIt ? "Fase 2" : "Phase 2")}</strong>
        </span>
        <span style={{ fontSize: "18px" }}>
          {isIt ? "Semplici" : "Simple"} <strong style={{ color: "#fff" }}>{c.simple}</strong>
          {" · "}
          {isIt ? "Medi" : "Medium"} <strong style={{ color: "#fff" }}>{c.medium}</strong>
          {" · "}
          {isIt ? "Avanzati" : "Advanced"} <strong style={{ color: "#fff" }}>{c.advanced}</strong>
        </span>
        <span style={{ fontSize: "26px", fontWeight: 800, color }}>{c.total}</span>
      </div>
    );
  };

  const sitesAccounts = totalSites * accounts.perSite;
  const totalAccounts = sitesAccounts + accounts.corporateSocial + accounts.corporateScope3;

  const setField = (key: keyof ScopeAccountsConfig, raw: string) => {
    const n = parseInt(raw, 10);
    setAccounts((prev) => ({ ...prev, [key]: isNaN(n) ? 0 : Math.max(0, n) }));
  };

  const renderChips = (items: { id: string; icon: string; title: string; titleEn: string }[], color: string) => {
    if (items.length === 0) {
      return (
        <div style={{ fontSize: "18px", color: "#94a3b8" }}>
          {isIt ? "Nessuna componente selezionata." : "No components selected."}
        </div>
      );
    }
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#ffffff",
              background: "#0c2820",
              border: `1.5px solid ${color}`,
              borderRadius: "8px",
              padding: "6px 12px",
            }}
          >
            <span>{item.icon}</span>
            <span>{isIt ? item.title : item.titleEn}</span>
          </div>
        ))}
      </div>
    );
  };

  const numInput = (key: keyof ScopeAccountsConfig) => (
    <input
      type="number"
      min={0}
      value={accounts[key]}
      onChange={(e) => setField(key, e.target.value)}
      style={inputStyle}
    />
  );

  return (
    <main
      className="scopeSummaryScreen"
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

      <header className="missionNav">
        <button className="brand brandButton" onClick={reset}>
          <span className="brandMark">e·</span>
          <span>Envizi<br />Impact Quest</span>
        </button>
        <div className="missionProgress" style={{ fontSize: "20px", fontWeight: 800 }}>
          <span className="activeDot" /> {isIt ? "11 · SINTESI ESIGENZE RILEVATE" : "11 · SUMMARY OF IDENTIFIED NEEDS"}
        </div>
      </header>

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
        <div style={{ marginBottom: "14px", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
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
            {isIt ? "Sintesi Esigenze Rilevate" : "Summary of Identified Needs"}
          </h1>
        </div>

        <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "16px", paddingRight: "8px" }}>
          {/* Fase 1 */}
          <div style={boxStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#39efb4" }} />
              <span style={{ fontSize: "22px", fontWeight: 800, color: "#39efb4", letterSpacing: ".06em", textTransform: "uppercase" }}>
                {isIt ? "Componenti di Fase 1" : "Phase 1 components"}
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "start" }}>
              <div>{renderChips(phase1Items, "#39efb4")}</div>
              <div>
                <div style={rowStyle}>
                  <span>{isIt ? "Totale sedi" : "Total locations"}</span>
                  <span style={valueStyle}>{totalSites}</span>
                </div>
                <div style={rowStyle}>
                  <span>{isIt ? "Numero conti ESG per sede" : "ESG accounts per location"}</span>
                  {numInput("perSite")}
                </div>
                <div style={rowStyle}>
                  <span>{isIt ? "Totale conti per le sedi" : "Total accounts for locations"}</span>
                  <span style={valueStyle}>{sitesAccounts}</span>
                </div>
                <div style={rowStyle}>
                  <span>{isIt ? "Numero conti corporate social" : "Corporate social accounts"}</span>
                  {numInput("corporateSocial")}
                </div>
                <div style={rowStyle}>
                  <span>{isIt ? "Numero conti corporate scope 3" : "Corporate scope 3 accounts"}</span>
                  {numInput("corporateScope3")}
                </div>
                <div style={{ ...rowStyle, borderBottom: "none", color: "#39efb4", fontWeight: 800 }}>
                  <span>{isIt ? "Numero totale dei conti" : "Total number of accounts"}</span>
                  <span style={{ ...valueStyle, color: "#39efb4", fontSize: "28px" }}>{totalAccounts}</span>
                </div>
              </div>
            </div>
            {renderConnectors("fase1", "#39efb4")}
          </div>

          {/* Fase 2 */}
          <div style={boxStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#38bdf8" }} />
              <span style={{ fontSize: "22px", fontWeight: 800, color: "#38bdf8", letterSpacing: ".06em", textTransform: "uppercase" }}>
                {isIt ? "Componenti selezionate per Fase 2" : "Components selected for Phase 2"}
              </span>
            </div>
            {renderChips(phase2Items, "#38bdf8")}
            {renderConnectors("fase2", "#38bdf8")}
          </div>
        </div>

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
            }}
          >
            ← {isIt ? "Indietro (Scope Avanzato)" : "Back (Advanced Scope)"}
          </button>
          <button
            onClick={() => (onContinue ? onContinue() : setScreen("priorityData"))}
            style={{
              background: "#184e3b",
              border: "2px solid #39efb4",
              color: "#ffffff",
              padding: "12px 34px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: 800,
              fontSize: "20px",
              boxShadow: "0 0 20px rgba(57,239,180,0.35)",
            }}
          >
            {isIt ? "Avanti (Esigenze di Dati)" : "Next (Data Needs)"} <b>→</b>
          </button>
        </div>
      </section>
    </main>
  );
}
