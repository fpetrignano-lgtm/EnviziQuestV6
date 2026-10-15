import React, { useState, useMemo } from "react";
import type { CommonProps } from "./types";
import adminGuidesRaw from "../adminGuidesData.json";

export interface AdminGuideItem {
  id: string;
  num: string;
  title: string;
  titleEn: string;
  filename: string;
  category: string;
  categoryEn: string;
  icon: string;
  description: string;
  descriptionEn: string;
  slideCount: number;
  slides: string[];
  pptxUrl: string;
  coverSlide: string;
}

const adminGuides = adminGuidesRaw as AdminGuideItem[];

interface Props extends CommonProps {
  userName?: string;
  setP10SlideIdx?: React.Dispatch<React.SetStateAction<number>>;
  initialCategory?: string;
  initialGuideId?: string;
}

export function AdminGuideScreen({
  language,
  setLanguage,
  setScreen,
  reset,
  initialCategory = "all",
  initialGuideId,
}: Props) {
  const isIt = language === "it";
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || "all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeGuide, setActiveGuide] = useState<AdminGuideItem | null>(() => {
    if (initialGuideId) {
      return adminGuides.find((g) => g.id === initialGuideId) || null;
    }
    return null;
  });
  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);

  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
    if (initialGuideId) {
      const g = adminGuides.find((item) => item.id === initialGuideId);
      if (g) {
        setActiveGuide(g);
        setActiveSlideIdx(0);
      }
    }
  }, [initialCategory, initialGuideId]);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(adminGuides.map((g) => (isIt ? g.category : g.categoryEn))));
    return ["all", ...cats];
  }, [isIt]);

  // Filter guides
  const filteredGuides = useMemo(() => {
    return adminGuides.filter((g) => {
      const cat = isIt ? g.category : g.categoryEn;
      const matchesCat = selectedCategory === "all" || cat === selectedCategory;
      const title = (isIt ? g.title : g.titleEn).toLowerCase();
      const desc = (isIt ? g.description : g.descriptionEn).toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || title.includes(q) || desc.includes(q) || g.num.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery, isIt]);

  const openSlideshow = (guide: AdminGuideItem, startIdx: number = 0) => {
    setActiveGuide(guide);
    setActiveSlideIdx(startIdx);
  };

  const closeSlideshow = () => {
    setActiveGuide(null);
    setActiveSlideIdx(0);
  };

  // If in slideshow view mode
  if (activeGuide) {
    const currentSlide = activeGuide.slides[activeSlideIdx] || activeGuide.coverSlide;
    return (
      <main
        style={{
          background: "#050d0a",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          height: "100dvh",
          overflow: "hidden",
          position: "relative",
          userSelect: "none",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "#3b82f4", zIndex: 100 }} />

        {/* Slideshow Header */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 24px",
            background: "rgba(7, 24, 19, 0.95)",
            borderBottom: "1px solid #1a382c",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              onClick={closeSlideshow}
              style={{
                background: "#0c2820",
                border: "2px solid #3db88f",
                color: "#72f7ca",
                borderRadius: "8px",
                padding: "6px 14px",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              ← {isIt ? "Torna all'elenco" : "Back to list"}
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "20px" }}>{activeGuide.icon}</span>
              <span style={{
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 700,
                maxWidth: "600px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
                <span style={{ color: "#39efb4", marginRight: "8px" }}>[{activeGuide.num}]</span>
                {isIt ? activeGuide.title : activeGuide.titleEn}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{
              color: "#39efb4",
              fontFamily: "var(--font-geist-mono,monospace)",
              fontSize: "14px",
              fontWeight: 700,
              background: "rgba(57,239,180,.12)",
              padding: "4px 12px",
              borderRadius: "20px",
              border: "1px solid #2e6b54",
            }}>
              {activeSlideIdx + 1} / {activeGuide.slideCount}
            </span>

            <a
              href={activeGuide.pptxUrl}
              download
              style={{
                background: "#184e3b",
                border: "1px solid #39efb4",
                color: "#ffffff",
                borderRadius: "8px",
                padding: "6px 14px",
                fontSize: "13px",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
              }}
            >
              📥 {isIt ? "Scarica PPTX" : "Download PPTX"}
            </a>

          </div>
        </header>

        {/* Slide Viewer */}
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: "#040907",
            minHeight: 0,
            position: "relative",
            padding: "16px",
          }}
        >
          {currentSlide && (
            <img
              src={currentSlide}
              alt={`Slide ${activeSlideIdx + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: "10px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.85)",
              }}
            />
          )}

          {/* Left Arrow */}
          <button
            onClick={() => setActiveSlideIdx((i) => Math.max(0, i - 1))}
            disabled={activeSlideIdx === 0}
            style={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              background: activeSlideIdx === 0 ? "rgba(0,0,0,0.2)" : "rgba(12,40,32,0.85)",
              border: "2px solid #2e6b54",
              color: "#39efb4",
              cursor: activeSlideIdx === 0 ? "not-allowed" : "pointer",
              opacity: activeSlideIdx === 0 ? 0.25 : 1,
              padding: "20px 16px",
              borderRadius: "10px",
              zIndex: 20,
              transition: ".15s",
            }}
          >
            <svg width="24" height="40" viewBox="0 0 36 54">
              <polygon points="34,2 2,27 34,52" fill="currentColor" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => setActiveSlideIdx((i) => Math.min(activeGuide.slideCount - 1, i + 1))}
            disabled={activeSlideIdx === activeGuide.slideCount - 1}
            style={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              background: activeSlideIdx === activeGuide.slideCount - 1 ? "rgba(0,0,0,0.2)" : "rgba(12,40,32,0.85)",
              border: "2px solid #2e6b54",
              color: "#39efb4",
              cursor: activeSlideIdx === activeGuide.slideCount - 1 ? "not-allowed" : "pointer",
              opacity: activeSlideIdx === activeGuide.slideCount - 1 ? 0.25 : 1,
              padding: "20px 16px",
              borderRadius: "10px",
              zIndex: 20,
              transition: ".15s",
            }}
          >
            <svg width="24" height="40" viewBox="0 0 36 54">
              <polygon points="2,2 34,27 2,52" fill="currentColor" />
            </svg>
          </button>
        </section>

        {/* Thumbnail / Dot Footer */}
        <footer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            padding: "10px 20px",
            background: "rgba(7, 24, 19, 0.95)",
            borderTop: "1px solid #1a382c",
            overflowX: "auto",
            maxHeight: "60px",
          }}
        >
          {activeGuide.slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlideIdx(i)}
              title={`Slide ${i + 1}`}
              style={{
                width: i === activeSlideIdx ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === activeSlideIdx ? "#39efb4" : "#1a4234",
                border: "none",
                cursor: "pointer",
                transition: "all .2s ease",
                padding: 0,
              }}
            />
          ))}
        </footer>

        {/* Menu button bottom right in slideshow */}
        <button
          onClick={() => {
            closeSlideshow();
            setScreen("selectPath");
          }}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "24px",
            zIndex: 9999,
            background: "#0c2820",
            border: "2px solid #39efb4",
            color: "#72f7ca",
            borderRadius: "10px",
            padding: "9px 20px",
            cursor: "pointer",
            fontWeight: 800,
            fontSize: "14px",
            letterSpacing: ".04em",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.6), 0 0 16px rgba(57,239,180,0.35)",
            fontFamily: "var(--font-geist-mono, monospace)",
            transition: "all .18s ease",
          }}
        >
          ☰ Menu
        </button>
      </main>
    );
  }

  return (
    <main
      className="adminGuideScreen"
      style={{
        minHeight: "100vh",
        height: "1080px",
        background: "#07110e",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "#3b82f4", zIndex: 100 }} />

      {/* Header */}
      <header className="missionNav">
        <button className="brand brandButton" onClick={reset}>
          <span className="brandMark">e·</span>
          <span>Envizi<br />Impact Quest</span>
        </button>
        <div className="missionProgress">
          <span className="activeDot" /> GUIDA AMMINISTRATORE
        </div>
      </header>

      {/* Main Body */}
      <section
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "18px 3.5vw 24px",
          maxWidth: "1480px",
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box",
          zIndex: 2,
          overflow: "hidden",
        }}
      >
        {/* Top bar with Title & Back */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", flexShrink: 0 }}>
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 12px",
              background: "rgba(57,239,180,.15)",
              border: "1px solid #39efb4",
              borderRadius: "8px",
              marginBottom: "8px",
            }}>
              <span style={{ fontSize: "14px" }}>⚙️</span>
              <span style={{
                fontFamily: "var(--font-geist-mono,monospace)",
                fontSize: "12px",
                fontWeight: 700,
                color: "#39efb4",
                letterSpacing: ".08em",
                textTransform: "uppercase",
              }}>
                {isIt ? "MANUALE & USE CASE AMMINISTRATORE" : "ADMINISTRATOR MANUAL & USE CASES"}
              </span>
              <span style={{
                color: "#ffffff",
                background: "#0c2820",
                fontSize: "11px",
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: "12px",
                border: "1px solid #2e6b54",
              }}>
                {adminGuides.length} {isIt ? "documenti" : "documents"}
              </span>
            </div>
            <h1 style={{
              fontSize: "clamp(24px, 2.4vw, 36px)",
              fontWeight: 800,
              color: "#ffffff",
              margin: "0 0 6px",
              letterSpacing: "-.02em",
            }}>
              {isIt ? "Guida principali use case utente Amministratore Envizi" : "Envizi Administrator Main Use Cases Guide"}
            </h1>
            <p style={{
              fontSize: "15px",
              color: "#c9e8dc",
              maxWidth: "880px",
              margin: 0,
              lineHeight: 1.4,
            }}>
              {isIt
                ? "Seleziona uno dei documenti operativi per visualizzare le slide interattive o scaricare la guida in PowerPoint."
                : "Select an operational document to view interactive slides or download the PowerPoint guide."}
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <button
              onClick={() => setScreen("selectPath")}
              style={{
                background: "#0c2820",
                border: "2px solid #3db88f",
                color: "#72f7ca",
                padding: "8px 18px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "0 0 10px rgba(57,239,180,.12)",
                transition: ".15s",
              }}
            >
              ← {isIt ? "Seleziona percorso" : "Select Path"}
            </button>
          </div>
        </div>

        {/* Filter bar: categories + search */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          marginBottom: "16px",
          flexWrap: "wrap",
          flexShrink: 0,
        }}>
          {/* Category Pills */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const label = cat === "all" ? (isIt ? "Tutti i documenti" : "All documents") : cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    background: isSelected ? "#39efb4" : "#0c2820",
                    color: isSelected ? "#07110e" : "#c9e8dc",
                    border: isSelected ? "1.5px solid #39efb4" : "1.5px solid #244f3f",
                    borderRadius: "20px",
                    padding: "6px 14px",
                    fontSize: "13px",
                    fontWeight: isSelected ? 800 : 600,
                    cursor: "pointer",
                    transition: ".15s",
                    boxShadow: isSelected ? "0 0 12px rgba(57,239,180,.35)" : "none",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Search box */}
          <div style={{ position: "relative", minWidth: "260px" }}>
            <input
              type="text"
              placeholder={isIt ? "Cerca documento..." : "Search document..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: "#0c2820",
                border: "2px solid #2e6b54",
                borderRadius: "8px",
                color: "#ffffff",
                padding: "6px 12px 6px 34px",
                fontSize: "14px",
                fontWeight: 600,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <span style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", opacity: 0.7 }}>
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "#39efb4",
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Guides Grid Container (scrollable) */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px 20px",
            paddingRight: "6px",
            paddingBottom: "16px",
            alignContent: "start",
          }}
        >
          {filteredGuides.map((guide) => {
            const title = isIt ? guide.title : guide.titleEn;
            const category = isIt ? guide.category : guide.categoryEn;
            const description = isIt ? guide.description : guide.descriptionEn;

            return (
              <div
                key={guide.id}
                onClick={() => openSlideshow(guide, 0)}
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
                  overflow: "hidden",
                  minHeight: "230px",
                }}
                className="selectPathCard"
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "#39efb4" }} />
                
                {/* Card Top */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "4px 10px",
                      background: "rgba(57,239,180,.15)",
                      border: "1px solid #39efb4",
                      borderRadius: "6px",
                    }}>
                      <span style={{ fontSize: "14px" }}>{guide.icon}</span>
                      <span style={{
                        fontFamily: "var(--font-geist-mono,monospace)",
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "#39efb4",
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                      }}>
                        {category}
                      </span>
                    </div>

                    <span style={{
                      fontFamily: "var(--font-geist-mono,monospace)",
                      fontSize: "11.5px",
                      color: "#72f7ca",
                      background: "#071a14",
                      padding: "3px 9px",
                      borderRadius: "10px",
                      border: "1px solid #1a4234",
                      fontWeight: 700,
                    }}>
                      {guide.slideCount} {isIt ? "slide" : "slides"}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: "19px",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1.25,
                    margin: "0 0 8px",
                    letterSpacing: "-.01em",
                  }}>
                    {title}
                  </h3>

                  <p style={{
                    fontSize: "13.5px",
                    color: "#c9e8dc",
                    lineHeight: 1.45,
                    margin: "0 0 14px",
                  }}>
                    {description}
                  </p>
                </div>

                {/* Card Actions */}
                <div style={{
                  marginTop: "auto",
                  paddingTop: "14px",
                  borderTop: "1px solid rgba(57,239,180,0.16)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openSlideshow(guide, 0);
                    }}
                    style={{
                      background: "#184e3b",
                      border: "1.5px solid #39efb4",
                      color: "#ffffff",
                      padding: "8px 14px",
                      borderRadius: "8px",
                      fontWeight: 700,
                      fontSize: "13px",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      transition: ".15s",
                    }}
                  >
                    ▶ {isIt ? "Visualizza slide" : "View slides"}
                  </button>

                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <a
                      href={guide.pptxUrl}
                      download
                      onClick={(e) => e.stopPropagation()}
                      title={isIt ? "Scarica file PowerPoint" : "Download PowerPoint file"}
                      style={{
                        background: "#0c2820",
                        border: "1.5px solid #2e6b54",
                        color: "#72f7ca",
                        padding: "7px 11px",
                        borderRadius: "8px",
                        fontWeight: 700,
                        fontSize: "12px",
                        cursor: "pointer",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "4px",
                        transition: ".15s",
                      }}
                    >
                      📥 PPTX
                    </a>

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
                      fontWeight: 700,
                      fontFamily: "var(--font-geist-mono,monospace)",
                      flexShrink: 0,
                    }}>
                      {guide.num}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Menu button bottom right */}
      <button
        onClick={() => setScreen("selectPath")}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "24px",
          zIndex: 9999,
          background: "#0c2820",
          border: "2px solid #39efb4",
          color: "#72f7ca",
          borderRadius: "10px",
          padding: "9px 20px",
          cursor: "pointer",
          fontWeight: 800,
          fontSize: "14px",
          letterSpacing: ".04em",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.6), 0 0 16px rgba(57,239,180,0.35)",
          fontFamily: "var(--font-geist-mono, monospace)",
          transition: "all .18s ease",
        }}
      >
        ☰ Menu
      </button>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", background: "#39efb4", zIndex: 100 }} />
    </main>
  );
}
