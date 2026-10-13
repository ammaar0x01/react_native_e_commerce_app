/*
themes0.ts 
==========
*/

/*
Prompt for a chatbot
--------------------

(copy the code below to use as reference)
*/

// === GLOBAL =======================================
const globalStyles = {
  outerContainer: {
    flex: 1,
    backgroundColor: "#FFE8B6",
    // padding: 16,
    padding: 40,
  },
  scrollContent: {
    paddingBottom: 40,
  },
};

// --- styles that are used in a view tag/element --- 
const ViewStyles = {
  flex: 1,
  flexDirection: "row",
  width: "100%",
  height: "100%",
  backgroundColor: "#E59400",
};

export const Colors = {
  background: "#121212",
  surface: "#FFFFFF",
  primary: "#E59400",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
};

export const Spacing = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

// newer
// export const Colors = {
//   primary: '#E59400',
//   primaryLight: '#FEF3C7',
//   primaryBorder: '#FDE68A',
//   textMain: '#111827',
//   textMuted: '#6B7280',
//   white: '#FFFFFF',
//   background: '#FFFFFF',
//   cardBg: '#F9FAFB',
//   border: '#E5E7EB',
// };

export const Shadows = {
  card: {
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
};

// === THEME 1 =======================================
const colorInfoForTheme1 = {
  backgroundColor: "#ffffff",
  textColor: "#000000",
  color1: "#E59400",
  color2: "#D97706",
  color3: "#3500e5",

  backgroundColorBottomNav: "#000000",
  textColorBottomNav: "#ffffff",

  backgroundColorTopAndSideNav: "#000000",
  textColorTopAndSideNav: "#ffffff",
};

// === THEME 2 =======================================
