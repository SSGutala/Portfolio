/** Solid glass look without backdrop-filter (avoids full-bleed blur smears). */
export const glassCardStyle = {
  background:
    "linear-gradient(160deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 45%, rgba(0,209,255,0.08) 100%)",
  border: "1px solid rgba(255,255,255,0.14)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(255,255,255,0.06), 0 18px 40px rgba(0,0,0,0.35)",
} as const;

export const ACCENT = "#00D1FF";
