/*
themes1.ts 
==========
*/

/*
Prompt for a chatbot
--------------------

(copy the code below to use as reference)
*/

// ================================================
// Structure
// ---------
// theme: {
//
//
// }
// ================================================


// === THEME 1 ========================================================
const theme1 = {
  // --font-display:
  //   Spline Sans, Inter, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji,
  //   Segoe UI Symbol, Noto Color Emoji;
  // --font-mono:
  //   ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  // --font-rounded: 'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif;
  // --font-serif: Georgia, 'Times New Roman', serif;
};



// === THEME 2 ========================================================
// from _layout.tsx

// const colorInfoForTheme2 = {
const colorPalleteForTheme2 = {
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

const theme2 = {

  // --------------------------------

  mobileTopBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#E59400",
    paddingHorizontal: 20,
    paddingBottom: 12,
    zIndex: 100,
    // older ---
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // ---
    elevation: 4,

    // ✅ Modern cross-platform boxShadow property
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    // elevation: 5, // Keep elevation for native Android if desired
  },
  topBarDefaultContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brandSub: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FFFFFF",
    lineHeight: 14,
  },
  brandMain: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  topBarIconsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
  searchBarActiveContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#111827",
  },
  cancelText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#D97706",
  },
};
