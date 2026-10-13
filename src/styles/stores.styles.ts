import { StyleSheet } from "react-native";


export const stylesStores = StyleSheet.create({
  outerContainer: {
    flex: 1,
    // backgroundColor: '#FFE8B6', // Warm cream background matching image
    backgroundColor: '#ffffff', 

    padding: 40,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  contentWrapper: {
    width: '100%',
    // maxWidth: 900,
    // maxWidth: 1300,
    // maxWidth: '90%',


    alignSelf: 'center',
  },

  // headerTitle: {
  //   fontSize: 26,
  //   fontWeight: '800',
  //   color: '#111827',
  //   letterSpacing: -0.5,
  // },
  pageTitle: {
    // fontSize: 32,
    fontSize: 44,

    // fontWeight: '800',
    fontWeight: '900',

    color: '#111827',
    marginBottom: 20,

    // fontFamily: 'serif', 
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
  },

  nearMeButton: {
    backgroundColor: '#E59400',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  
    width: 200, 
  },
  nearMeButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  resultsCountText: {
    fontSize: 16,

    // fontWeight: '700',
    fontWeight: '600',

    // color: '#111827',
    color: '#737373',

    marginStart: 10, 
    marginBottom: 16,
  },


  storesGrid: {
    gap: 16,
  },
  storesGridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  storeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  storeCardDesktop: {
    width: '48%',
  },
  storeDetailsContainer: {
    flex: 1,
  },
  storeHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  storeName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  directionsButtonTop: {
    backgroundColor: '#2563EB',
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  directionsButtonTopText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  storeAddressLine: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  viewStoreDetailsButton: {
    backgroundColor: '#E59400',
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  viewStoreDetailsText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  storeImageSection: {
    marginLeft: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imagePlaceholderBox: {
    width: 100,
    height: 100,
    backgroundColor: '#E5E7EB',
    borderRadius: 16,
    marginBottom: 12,
  },
  directionsButtonBottom: {
    backgroundColor: '#E59400',
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
  },
  directionsButtonBottomText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
});
