/*
themes.ts 
=========
*/

import { TextStyle } from "react-native";

 

/*
Prompt for a chatbot
--------------------

(copy the code below to use as reference)
*/


// import { StyleSheet } from "react-native";

// export const stylesLayout = StyleSheet.create({})
// ======================================================


export const Spacing = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};


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
export const ColorsTheme1 = {
  background: "#121212",
  surface: "#FFFFFF",
  primary: "#E59400",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
};


// === THEME 2 =======================================
export const ColorsTheme2 = {
  primary: '#E59400',
  primaryLight: '#FEF3C7',
  primaryBorder: '#FDE68A',
  textMain: '#111827',
  textMuted: '#6B7280',
  white: '#FFFFFF',
  background: '#FFFFFF',
  cardBg: '#F9FAFB',
  border: '#E5E7EB',
};


// === THEME 3 =======================================
export const ColorsTheme3 = {
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


// === THEME 4 =======================================
export const ColorsTheme4 = {
        backgroundColor: '#ffffff',
        textColor: '#000000',
        pageHeading: '#000000',
        pageSubheading: '#6B7280',

        color1: '#E59400',
        color2: '#D97706',
        color3: '#E59400',

    }



// === GLOBAL =======================================
export const GlobalStyles = {
  // === PAGE LAYOUT ===
  mainContainer: {
    flex: 1,
    backgroundColor: ColorsTheme4.backgroundColor,
    // backgroundColor: '#ffffff',
    padding: 40,
  },

  scrollContent: {
    paddingBottom: 40,
  },
  contentWrapper: {
    width: '100%',

    // maxWidth: 1400, // Expanded to use the entire width of wide screens
  //   maxWidth: 700,

    alignSelf: 'center',
  },
  contentWrapperDesktop: {
    maxWidth: 700,
  },


  // === HEADER === 
   pageTitle: {
    fontSize: 44,
    // fontWeight: '800',
    fontWeight: '800' as TextStyle['fontWeight'],

    // color: '#111827',
    color: ColorsTheme4.pageHeading,
    marginBottom: 20,
  },
    pageSubtitle: {
    fontSize: 13,
    // color: '#6B7280',
    color: ColorsTheme4.pageSubheading,
    marginTop: 4,
  } as const,
};
// === GLOBAL; END =======================================

