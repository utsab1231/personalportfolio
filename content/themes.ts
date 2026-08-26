export type ThemeKey =
  | "light"
  | "dark"
  | "lime-volt"
  | "fire-alarm"
  | "velvet-dusk"
  | "jungle-leaf"
  | "gold-rush"
  | "ember-coral";

export interface ThemeDef {
  key: ThemeKey;
  label: string;
  bg: string;
  fg: string;
}

// Single source of truth for the theme switcher UI (swatches + labels).
// Colors themselves are defined per-theme in app/globals.css — kept in sync manually.
export const themes: ThemeDef[] = [
  { key: "light", label: "Light", bg: "#fbfbfb", fg: "#09090b" },
  { key: "dark", label: "Dark", bg: "#09090b", fg: "#fafafa" },
  { key: "lime-volt", label: "Lime Volt", bg: "#0038E0", fg: "#ECFF56" },
  { key: "fire-alarm", label: "Fire Alarm", bg: "#AB0000", fg: "#FFFF4C" },
  { key: "velvet-dusk", label: "Velvet Dusk", bg: "#3B163A", fg: "#F0C986" },
  { key: "jungle-leaf", label: "Jungle Leaf", bg: "#203D43", fg: "#CDFF9B" },
  { key: "gold-rush", label: "Gold Rush", bg: "#04123F", fg: "#FEC408" },
  { key: "ember-coral", label: "Ember Coral", bg: "#4A0000", fg: "#FF8E5F" },
];
