import "./styles/Default.css"


import { useState } from "react";

// ─── D2 COLOUR TOKENS ────────────────────────────────────────────────────────
// Used inline where Tailwind's Stone palette doesn't cover the brand accent.
const C = {
  accent:    "#C4A882",
  accentL:   "#E8D9C4",
  accentD:   "#8B7355",
  stone900:  "#1C1917",
  stone800:  "#292524",
  stone600:  "#57534E",
  stone400:  "#A8A29E",
  stone300:  "#D6D3D1",
  stone200:  "#E7E5E4",
  stone100:  "#F5F5F4",
  stone50:   "#FAFAF9",
  dark:      "#0F172A",
  dark2:     "#1E293B",
  dark3:     "#111827",
};

function LabSchematic() {
  return (
    <svg
      width="100%"
      viewBox="0 0 460 380"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="schematic-title schematic-desc"
      style={{ display: "block" }}
    >
      <title id="schematic-title">
        Spirea Development Laboratory — schematic floor plan abstraction
      </title>
      <desc id="schematic-desc">
        Abstract D2-system schematic representing the intended laboratory layout under
        establishment. No photography. No proprietary equipment or process shown.
        Geometry communicates intent and programme structure.
      </desc>

      <defs>
        <pattern
          id="dot-grid"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="10" r="0.8" fill="rgba(196,168,130,0.18)" />
        </pattern>
      </defs>

      {/* Dot field */}
      <rect width="460" height="380" fill="url(#dot-grid)" />

      {/* Outer lab boundary */}
      <rect
        x="32" y="28" width="396" height="324"
        fill="none"
        stroke="rgba(196,168,130,0.25)"
        strokeWidth="0.8"
      />

      {/* Corner registration marks */}
      <g stroke="rgba(196,168,130,0.5)" strokeWidth="0.8" fill="none">
        <path d="M32 44 L32 28 L48 28" />
        <path d="M412 28 L428 28 L428 44" />
        <path d="M428 336 L428 352 L412 352" />
        <path d="M48 352 L32 352 L32 336" />
      </g>

      {/* Interior zone dividers */}
      <g stroke="rgba(196,168,130,0.12)" strokeWidth="0.5" strokeDasharray="4,4">
        <line x1="32" y1="160" x2="428" y2="160" />
        <line x1="32" y1="252" x2="428" y2="252" />
        <line x1="230" y1="28" x2="230" y2="352" />
      </g>

      {/* Zone A: Additive Manufacturing */}
      <rect
        x="44" y="40" width="174" height="108"
        fill="rgba(196,168,130,0.04)"
        stroke="rgba(196,168,130,0.3)"
        strokeWidth="0.5"
      />
      <text x="52" y="56" fill="rgba(196,168,130,0.35)" fontFamily="monospace" fontSize="7.5" letterSpacing="0.12em">ZONE A</text>
      <text x="52" y="68" fill="rgba(196,168,130,0.55)" fontFamily="monospace" fontSize="8" letterSpacing="0.08em">ADDITIVE MFG</text>
      <rect
        x="80" y="80" width="80" height="56"
        fill="rgba(196,168,130,0.06)"
        stroke="rgba(196,168,130,0.25)"
        strokeWidth="0.5"
        strokeDasharray="3,2"
      />
      <line x1="80" y1="108" x2="160" y2="108" stroke="rgba(196,168,130,0.2)" strokeWidth="0.5" />
      <line x1="120" y1="80" x2="120" y2="136" stroke="rgba(196,168,130,0.2)" strokeWidth="0.5" />
      <circle cx="120" cy="108" r="3" fill="none" stroke="rgba(196,168,130,0.4)" strokeWidth="0.5" />
      <text x="88" y="152" fill="rgba(196,168,130,0.28)" fontFamily="monospace" fontSize="7" letterSpacing="0.08em">GL SPIDER — PENDING</text>

      {/* Zone B: Material Testing */}
      <rect
        x="242" y="40" width="174" height="108"
        fill="rgba(196,168,130,0.04)"
        stroke="rgba(196,168,130,0.3)"
        strokeWidth="0.5"
      />
      <text x="250" y="56" fill="rgba(196,168,130,0.35)" fontFamily="monospace" fontSize="7.5" letterSpacing="0.12em">ZONE B</text>
      <text x="250" y="68" fill="rgba(196,168,130,0.55)" fontFamily="monospace" fontSize="8" letterSpacing="0.08em">MATERIAL TESTING</text>
      <rect
        x="254" y="78" width="150" height="28"
        fill="rgba(196,168,130,0.08)"
        stroke="rgba(196,168,130,0.22)"
        strokeWidth="0.5"
      />
      <text x="280" y="96" fill="rgba(196,168,130,0.35)" fontFamily="monospace" fontSize="7" letterSpacing="0.08em">SPECIMEN BENCH</text>
      <rect x="258" y="114" width="18" height="18" fill="rgba(196,168,130,0.2)" stroke="rgba(196,168,130,0.4)" strokeWidth="0.5" />
      <rect x="280" y="114" width="18" height="18" fill="rgba(196,168,130,0.2)" stroke="rgba(196,168,130,0.4)" strokeWidth="0.5" />
      <rect x="302" y="114" width="18" height="18" fill="rgba(196,168,130,0.2)" stroke="rgba(196,168,130,0.4)" strokeWidth="0.5" />
      <text x="258" y="148" fill="rgba(196,168,130,0.25)" fontFamily="monospace" fontSize="7" letterSpacing="0.08em">SPECIMEN STATIONS</text>

      {/* Zone C: Assembly & Review */}
      <rect
        x="44" y="172" width="174" height="68"
        fill="rgba(196,168,130,0.04)"
        stroke="rgba(196,168,130,0.2)"
        strokeWidth="0.5"
      />
      <text x="52" y="187" fill="rgba(196,168,130,0.32)" fontFamily="monospace" fontSize="7.5" letterSpacing="0.12em">ZONE C</text>
      <text x="52" y="198" fill="rgba(196,168,130,0.45)" fontFamily="monospace" fontSize="8" letterSpacing="0.08em">ASSEMBLY & REVIEW</text>
      <rect
        x="52" y="206" width="154" height="22"
        fill="rgba(196,168,130,0.06)"
        stroke="rgba(196,168,130,0.18)"
        strokeWidth="0.5"
        strokeDasharray="3,2"
      />
      <text x="86" y="221" fill="rgba(196,168,130,0.22)" fontFamily="monospace" fontSize="7" letterSpacing="0.08em">WORK SURFACE — TBD</text>

      {/* Zone D: Data & Documentation */}
      <rect
        x="242" y="172" width="174" height="68"
        fill="rgba(196,168,130,0.04)"
        stroke="rgba(196,168,130,0.2)"
        strokeWidth="0.5"
      />
      <text x="250" y="187" fill="rgba(196,168,130,0.32)" fontFamily="monospace" fontSize="7.5" letterSpacing="0.12em">ZONE D</text>
      <text x="250" y="198" fill="rgba(196,168,130,0.45)" fontFamily="monospace" fontSize="8" letterSpacing="0.08em">DATA & DOCUMENTATION</text>
      <rect
        x="250" y="206" width="154" height="22"
        fill="rgba(196,168,130,0.06)"
        stroke="rgba(196,168,130,0.18)"
        strokeWidth="0.5"
        strokeDasharray="3,2"
      />
      <text x="278" y="221" fill="rgba(196,168,130,0.22)" fontFamily="monospace" fontSize="7" letterSpacing="0.08em">STATIONS — TBD</text>

      {/* Zone E: Storage & Logistics */}
      <rect
        x="44" y="264" width="372" height="76"
        fill="rgba(196,168,130,0.03)"
        stroke="rgba(196,168,130,0.15)"
        strokeWidth="0.5"
      />
      <text x="52" y="279" fill="rgba(196,168,130,0.28)" fontFamily="monospace" fontSize="7.5" letterSpacing="0.12em">ZONE E</text>
      <text x="52" y="290" fill="rgba(196,168,130,0.38)" fontFamily="monospace" fontSize="8" letterSpacing="0.08em">MATERIALS STORAGE & LOGISTICS</text>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={52 + i * 64}
          y="298"
          width="56"
          height="30"
          fill="rgba(196,168,130,0.06)"
          stroke="rgba(196,168,130,0.18)"
          strokeWidth="0.5"
        />
      ))}

      {/* Dimension annotation */}
      <line x1="32" y1="360" x2="428" y2="360" stroke="rgba(196,168,130,0.22)" strokeWidth="0.5" />
      <line x1="32" y1="357" x2="32" y2="363" stroke="rgba(196,168,130,0.22)" strokeWidth="0.5" />
      <line x1="428" y1="357" x2="428" y2="363" stroke="rgba(196,168,130,0.22)" strokeWidth="0.5" />
      <text
        x="230" y="373"
        fill="rgba(196,168,130,0.3)"
        fontFamily="monospace"
        fontSize="7.5"
        textAnchor="middle"
        letterSpacing="0.1em"
      >
        FLOOR PLAN — SCHEMATIC · NOT TO SCALE
      </text>

      {/* D2 mark */}
      <text x="394" y="20" fill="rgba(196,168,130,0.35)" fontFamily="monospace" fontSize="8" letterSpacing="0.15em">
        D2 · SPIREA
      </text>
    </svg>
  );
}

// ─── PULSING STATUS DOT ───────────────────────────────────────────────────────
function PulseDot({ color = C.accent }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: color,
        flexShrink: 0,
        animation: "spirea-pulse 2.2s ease-in-out infinite",
      }}
      aria-hidden="true"
    />
  );
}

// ─── LABORATORY FUNCTION CARDS ────────────────────────────────────────────────
const LAB_FUNCTIONS = [
  {
    number: "01",
    title: "Additive manufacturing development",
    body: "Operating and developing the Guan Li Spider printing system for construction-scale material deposition. Process parameters, material behaviour, and print protocols are established and documented under laboratory conditions.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="16" height="20" stroke="#A8A29E" strokeWidth="0.8" />
        <line x1="8" y1="12" x2="24" y2="12" stroke="#A8A29E" strokeWidth="0.5" />
        <circle cx="16" cy="20" r="4" stroke="#C4A882" strokeWidth="0.8" />
        <line x1="16" y1="16" x2="16" y2="12" stroke="#C4A882" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Material testing and characterisation",
    body: "Systematic testing of material candidates for Prototype V1. Specimens are prepared, conditioned, and evaluated against defined performance criteria. Records are maintained as part of the formal validation programme.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="10" width="10" height="14" stroke="#A8A29E" strokeWidth="0.8" />
        <rect x="18" y="14" width="8" height="10" stroke="#A8A29E" strokeWidth="0.8" />
        <line x1="4" y1="24" x2="28" y2="24" stroke="#C4A882" strokeWidth="0.8" />
        <line x1="4" y1="26" x2="28" y2="26" stroke="#A8A29E" strokeWidth="0.4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Prototype V1 fabrication",
    body: "The laboratory produces the physical components of Prototype V1. Fabrication is conducted under controlled conditions to ensure that test results reflect system performance, not environmental variation.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <polygon points="16,6 24,11 24,21 16,26 8,21 8,11" stroke="#A8A29E" strokeWidth="0.8" />
        <circle cx="16" cy="16" r="3" stroke="#C4A882" strokeWidth="0.8" />
        <line x1="16" y1="9" x2="16" y2="13" stroke="#A8A29E" strokeWidth="0.5" />
        <line x1="16" y1="19" x2="16" y2="23" stroke="#A8A29E" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Data collection and programme documentation",
    body: "All laboratory activities generate documented records. Data from material tests, fabrication runs, and iterative adjustments forms the evidentiary foundation for future engineering validation and regulatory review.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="20" height="16" stroke="#A8A29E" strokeWidth="0.8" />
        <line x1="6" y1="14" x2="26" y2="14" stroke="#A8A29E" strokeWidth="0.5" />
        <line x1="14" y1="8" x2="14" y2="24" stroke="#A8A29E" strokeWidth="0.5" />
        <circle cx="10" cy="11" r="1.5" fill="#C4A882" />
        <circle cx="20" cy="11" r="1.5" fill="rgba(168,162,158,0.5)" />
      </svg>
    ),
  },
];

// ─── EQUIPMENT DATA ───────────────────────────────────────────────────────────
const EQUIPMENT = [
  {
    tag: "Additive manufacturing",
    name: "Guan Li Spider",
    desc: "Construction-scale 3D printing system selected for compatibility with Prototype V1 material and process requirements.",
    status: "Procurement underway",
    dotColor: "#FCD34D",
    dotPulse: false,
  },
  {
    tag: "Material testing",
    name: "Testing infrastructure",
    desc: "Specimen preparation, conditioning, and evaluation equipment to support systematic material characterisation and validation.",
    status: "Specification in progress",
    dotColor: "#FCD34D",
    dotPulse: false,
  },
  {
    tag: "Documentation",
    name: "Programme systems",
    desc: "Data capture, record management, and technical documentation infrastructure aligned to future engineering and regulatory review.",
    status: "Preparation underway",
    dotColor: "#FCD34D",
    dotPulse: false,
  },
];

// ─── PROGRAMME SCHEDULE ───────────────────────────────────────────────────────
const SCHEDULE = [
  {
    phase: "Phase 01",
    badge: "Active",
    badgeStyle: { background: "#ECFDF5", color: "#065F46", border: "1px solid #6EE7B7" },
    dotColor: "#86EFAC",
    pulse: true,
    title: "Facility identification and preparation",
    detail:
      "Identifying and preparing the dedicated laboratory space. Establishing utilities, access, and baseline environmental conditions required for equipment installation and material testing.",
    active: true,
  },
  {
    phase: "Phase 02",
    badge: "Underway",
    badgeStyle: { background: "#FFFBEB", color: "#92400E", border: "1px solid #FCD34D" },
    dotColor: "#FCD34D",
    pulse: false,
    title: "Equipment procurement and installation",
    detail:
      "Procurement of the Guan Li Spider printing system and supporting material testing infrastructure. Installation sequenced to allow early commissioning of testing capability.",
  },
  {
    phase: "Phase 03",
    badge: "Planned",
    badgeStyle: { background: "#F5F5F4", color: "#57534E", border: `1px solid #E7E5E4` },
    dotColor: "rgba(255,255,255,0.2)",
    pulse: false,
    title: "Commissioning and baseline validation",
    detail:
      "Equipment commissioning, process calibration, and establishment of baseline performance parameters. Initial material trials to confirm laboratory capability before Prototype V1 fabrication begins.",
  },
  {
    phase: "Phase 04",
    badge: "Planned",
    badgeStyle: { background: "#F5F5F4", color: "#57534E", border: `1px solid #E7E5E4` },
    dotColor: "rgba(255,255,255,0.2)",
    pulse: false,
    title: "Prototype V1 programme",
    detail:
      "Full laboratory operations supporting Prototype V1 fabrication, iterative testing, and preparation of formal validation documentation for future engineering and regulatory review.",
  },
];

// ─── MAIN PAGE COMPONENT ──────────────────────────────────────────────────────
export const StrategicApplications = () => {
  return (
    <>
      {/* Global pulse animation */}
      <style>{`
        @keyframes spirea-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        body {
          font-family: 'Inter', sans-serif;
          background: ${C.stone50};
          color: ${C.stone900};
          margin: 0;
        }
      `}</style>

      <a
        href="#main"
        className="sr-only focus:not-sr-only"
        style={{
          position: "absolute",
          top: 8,
          left: 8,
          background: C.stone900,
          color: C.stone50,
          padding: "8px 16px",
          fontSize: 12,
          zIndex: 999,
        }}
      >
        Skip to main content
      </a>

      <main id="main">

        {/* ── HERO ── */}
        <section
          style={{ background: C.stone900, padding: "80px 48px 72px" }}
          aria-labelledby="hero-heading"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <div>
              {/* Eyebrow */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: C.accentD,
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                <span
                  style={{ display: "block", width: 24, height: 1, background: C.accentD }}
                  aria-hidden="true"
                />
                Development Infrastructure
              </div>

              {/* Heading */}
              <h1
                id="hero-heading"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 300,
                  lineHeight: 1.08,
                  color: C.stone100,
                  letterSpacing: "-0.025em",
                  margin: "0 0 28px",
                }}
              >
                Development
                <strong style={{ fontWeight: 700, display: "block" }}>
                  Laboratory
                </strong>
              </h1>

              {/* Body */}
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  maxWidth: 420,
                  margin: "0 0 36px",
                }}
              >
                The Spirea Development Laboratory is being established as the physical foundation of the Prototype V1 programme. It is a lean, purposeful environment designed for material testing, additive manufacturing development, and iterative validation — not for demonstration.
              </p>

              {/* Status badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(196,168,130,0.1)",
                  border: `1px solid rgba(196,168,130,0.3)`,
                  padding: "8px 16px",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: C.accent,
                  fontWeight: 600,
                }}
                role="status"
                aria-live="polite"
              >
                <PulseDot color={C.accent} />
                Establishment in progress
              </div>
            </div>

            {/* Schematic art */}
            <div aria-hidden="true">
              <LabSchematic />
            </div>
          </div>
        </section>

        {/* ── INTENT STATEMENT ── */}
        <section
          style={{
            background: C.stone100,
            padding: "64px 48px",
            borderBottom: `1px solid ${C.stone200}`,
          }}
          aria-labelledby="intent-heading"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 64,
              alignItems: "start",
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.stone400,
                fontWeight: 600,
                paddingTop: 4,
              }}
              aria-hidden="true"
            >
              Philosophy
            </div>
            <div>
              <blockquote
                id="intent-heading"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  fontWeight: 300,
                  lineHeight: 1.45,
                  color: C.stone900,
                  letterSpacing: "-0.01em",
                  margin: "0 0 20px",
                  fontStyle: "normal",
                }}
              >
                "A laboratory does not need to be large. It needs to be purposeful."
              </blockquote>
              <p
                style={{
                  fontSize: 13,
                  color: C.stone600,
                  lineHeight: 1.8,
                  maxWidth: 580,
                  margin: 0,
                }}
              >
                Spirea is establishing a lean development laboratory sized to the needs of the current validation programme — not to project scale or ambition. The facility will house additive manufacturing equipment, material testing infrastructure, and a working environment for systematic iteration. Every element is chosen for function. The laboratory will be photographed when it has something worth showing.
              </p>
            </div>
          </div>
        </section>

        {/* ── FOUR FUNCTIONS ── */}
        <section
          style={{ background: C.stone50 }}
          aria-labelledby="functions-heading"
        >
          <div style={{ padding: "56px 48px 0", maxWidth: 1200, margin: "0 auto" }}>
            <h2
              id="functions-heading"
              style={{
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.stone400,
                fontWeight: 600,
                marginBottom: 40,
              }}
            >
              Laboratory functions
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              borderTop: `1px solid ${C.stone200}`,
              borderLeft: `1px solid ${C.stone200}`,
              maxWidth: 1200,
              margin: "0 auto",
            }}
            role="list"
          >
            {LAB_FUNCTIONS.map((fn) => (
              <article
                key={fn.number}
                role="listitem"
                style={{
                  borderRight: `1px solid ${C.stone200}`,
                  borderBottom: `1px solid ${C.stone200}`,
                  padding: "32px 28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: C.stone300,
                    marginBottom: 12,
                  }}
                  aria-hidden="true"
                >
                  {fn.number}
                </div>
                <div style={{ marginBottom: 20 }}>{fn.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 15,
                    fontWeight: 600,
                    color: C.stone900,
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {fn.title}
                </h3>
                <p
                  style={{
                    fontSize: 12,
                    color: C.stone600,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {fn.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ── EQUIPMENT ── */}
        <section
          style={{
            background: C.stone900,
            padding: "64px 48px",
            borderTop: `1px solid rgba(255,255,255,0.06)`,
          }}
          aria-labelledby="equipment-heading"
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 48,
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <h2
                id="equipment-heading"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  fontWeight: 600,
                }}
              >
                Primary equipment
              </h2>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  maxWidth: 360,
                  lineHeight: 1.6,
                  textAlign: "right",
                  margin: 0,
                }}
              >
                Equipment is selected for the validation programme, not for scale.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 1,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              role="list"
            >
              {EQUIPMENT.map((eq) => (
                <article
                  key={eq.name}
                  role="listitem"
                  style={{ background: C.stone900, padding: "28px 24px" }}
                >
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.28)",
                      fontWeight: 700,
                      marginBottom: 8,
                    }}
                  >
                    {eq.tag}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 15,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.82)",
                      marginBottom: 6,
                    }}
                  >
                    {eq.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.38)",
                      lineHeight: 1.6,
                      marginBottom: 12,
                    }}
                  >
                    {eq.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 9,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)",
                    }}
                    role="status"
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: eq.dotColor,
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                    {eq.status}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROGRAMME SCHEDULE ── */}
        <section
          style={{ background: C.stone50, padding: "64px 48px" }}
          aria-labelledby="schedule-heading"
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2
              id="schedule-heading"
              style={{
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.stone400,
                fontWeight: 600,
                marginBottom: 40,
              }}
            >
              Establishment programme
            </h2>

            <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {SCHEDULE.map((item, i) => (
                <li
                  key={item.phase}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "160px 1fr",
                    gap: 0,
                  }}
                >
                  {/* Phase label */}
                  <div
                    style={{
                      padding: "18px 24px 18px 0",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontWeight: item.active ? 700 : 600,
                      color: item.active ? C.stone900 : C.stone400,
                      borderRight: `1px solid ${C.stone200}`,
                      textAlign: "right",
                      lineHeight: 1.4,
                    }}
                    aria-hidden="true"
                  >
                    {item.phase}
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      padding: "18px 0 18px 24px",
                      borderBottom:
                        i < SCHEDULE.length - 1
                          ? `1px solid ${C.stone200}`
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        fontSize: 9,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        padding: "3px 9px",
                        marginBottom: 8,
                        ...item.badgeStyle,
                      }}
                      role="status"
                    >
                      {item.pulse ? (
                        <PulseDot color={item.dotColor} />
                      ) : (
                        <span
                          style={{
                            display: "inline-block",
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: item.dotColor,
                          }}
                          aria-hidden="true"
                        />
                      )}
                      {item.badge}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        color: C.stone900,
                        marginBottom: 6,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 12,
                        color: C.stone600,
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── EDITORIAL CLOSER ── */}
        <section
          style={{ background: C.dark3, padding: "80px 48px" }}
          aria-label="Laboratory philosophy"
        >
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div
              style={{
                width: 40,
                height: 1,
                background: C.accent,
                marginBottom: 28,
              }}
              aria-hidden="true"
            />
            <blockquote
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
                margin: "0 0 32px",
                fontStyle: "normal",
              }}
            >
              "The laboratory will be photographed when it has{" "}
              <em style={{ fontStyle: "italic", color: C.accent }}>
                something worth showing.
              </em>"
            </blockquote>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.85,
                maxWidth: 520,
                margin: 0,
              }}
            >
              Spirea is not building a demonstration space. The Development Laboratory exists for one purpose: to produce Prototype V1 under conditions rigorous enough to generate data that can be independently validated. When that work is complete — and when the results support it — the laboratory will be documented and shared through appropriate channels. Until then, the programme speaks for itself.
            </p>
          </div>
        </section>

        {/* ── CTA STRIP ── */}
        <div
          style={{
            background: C.stone900,
            padding: "48px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 20,
                fontWeight: 400,
                color: "rgba(255,255,255,0.88)",
                marginBottom: 6,
              }}
            >
              Follow the development programme
            </h2>
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.33)",
                maxWidth: 380,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Qualified partners, researchers, and institutional collaborators may request a briefing on the laboratory programme and Spirea's validation roadmap.
            </p>
          </div>
          <a
            href="/contact"
            style={{
              background: C.accent,
              color: C.stone900,
              padding: "13px 32px",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
              display: "inline-block",
            }}
          >
            Request a briefing
          </a>
        </div>

      </main>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: C.stone900,
          borderTop: "1px solid rgba(255,255,255,0.04)",
          padding: "24px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
        role="contentinfo"
      >
        <span
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.18)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          © 2025 Spirea Platform · Development Laboratory · All rights reserved
        </span>
        <span
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
          aria-hidden="true"
        >
          <span
            style={{
              display: "block",
              width: 14,
              height: 1,
              background: "rgba(255,255,255,0.1)",
            }}
          />
          D2 Platform · Establishment programme
        </span>
      </footer>
    </>
  );
}
