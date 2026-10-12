// import * as Device from 'expo-device';
// import { Platform, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import { AnimatedIcon } from '@/components/animated-icon';
// import { HintRow } from '@/components/hint-row';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { WebBadge } from '@/components/web-badge';
// import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

// function getDevMenuHint() {
//   if (Platform.OS === 'web') {
//     return <ThemedText type="small">use browser devtools</ThemedText>;
//   }
//   if (Device.isDevice) {
//     return (
//       <ThemedText type="small">
//         shake device or press <ThemedText type="code">m</ThemedText> in terminal
//       </ThemedText>
//     );
//   }
//   const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
//   return (
//     <ThemedText type="small">
//       press <ThemedText type="code">{shortcut}</ThemedText>
//     </ThemedText>
//   );
// }

// export default function StoresView() {
//   return (
//     <ThemedView style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
//         <ThemedView style={styles.heroSection}>
//           <AnimatedIcon />
//           <ThemedText type="title" style={styles.title}>
//             Welcome to&nbsp;Expo
//           </ThemedText>
//         </ThemedView>

//         <ThemedText type="code" style={styles.code}>
//           get started
//         </ThemedText>

//         <ThemedView type="backgroundElement" style={styles.stepContainer}>
//           <HintRow
//             title="Try editing"
//             hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
//           />
//           <HintRow title="Dev tools" hint={getDevMenuHint()} />
//           <HintRow
//             title="Fresh start"
//             hint={<ThemedText type="code">npm run reset-project</ThemedText>}
//           />
//         </ThemedView>

//         {Platform.OS === 'web' && <WebBadge />}
//       </SafeAreaView>
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   safeArea: {
//     flex: 1,
//     paddingHorizontal: Spacing.four,
//     alignItems: 'center',
//     gap: Spacing.three,
//     paddingBottom: BottomTabInset + Spacing.three,
//     maxWidth: MaxContentWidth,
//   },
//   heroSection: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     paddingHorizontal: Spacing.four,
//     gap: Spacing.four,
//   },
//   title: {
//     textAlign: 'center',
//   },
//   code: {
//     textTransform: 'uppercase',
//   },
//   stepContainer: {
//     gap: Spacing.three,
//     alignSelf: 'stretch',
//     paddingHorizontal: Spacing.three,
//     paddingVertical: Spacing.four,
//     borderRadius: Spacing.four,
//   },
// });



// newer1
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface StoreLocation {
  id: string;
  name: string;
  street: string;
  suburb: string;
  city: string;
  code: string;
  hasImage?: boolean;
}

const STORES_DATA: StoreLocation[] = [
  {
    id: '1',
    name: 'Adderley',
    street: '108 Adderley Street',
    suburb: 'Cape Town City Centre',
    city: 'Cape Town',
    code: '8000',
  },
  {
    id: '2',
    name: 'Adderley',
    street: '108 Adderley Street',
    suburb: 'Cape Town City Centre',
    city: 'Cape Town',
    code: '8000',
  },
  {
    id: '3',
    name: 'Adderley',
    street: '108 Adderley Street',
    suburb: 'Cape Town City Centre',
    city: 'Cape Town',
    code: '8000',
    hasImage: true,
  },
  {
    id: '4',
    name: 'Claremont',
    street: 'Main Road',
    suburb: 'Claremont',
    city: 'Cape Town',
    code: '7700',
  },
];

export default function storesView() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState('');

  const isDesktop = Platform.OS === 'web' && width >= 768;

  const filteredStores = STORES_DATA.filter((store) =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.suburb.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          
          {/* Header Title */}
          <Text style={styles.pageTitle}>Locations</Text>

          {/* Search Location Input Bar */}
          <View style={styles.searchBarContainer}>
            <Ionicons name="search-outline" size={20} color="#6B7280" style={styles.searchIcon} />
            <TextInput
              placeholder="Search locations"
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={[
                styles.searchInput,
                ...Platform.select({
                  web: [{ outlineStyle: 'none' as any }],
                  default: [],
                }),
              ]}
            />
          </View>

          {/* Show Result Near Me Button */}
          <TouchableOpacity style={styles.nearMeButton} activeOpacity={0.85}>
            <Text style={styles.nearMeButtonText}>Show result near to me</Text>
          </TouchableOpacity>

          {/* Results Count Header */}
          <Text style={styles.resultsCountText}>
            Number of results: {filteredStores.length}
          </Text>

          {/* Store Cards Grid / List */}
          <View style={[styles.storesGrid, isDesktop && styles.storesGridDesktop]}>
            {filteredStores.map((store, index) => (
              <View key={`${store.id}-${index}`} style={[styles.storeCard, isDesktop && styles.storeCardDesktop]}>
                
                {/* Left side details */}
                <View style={styles.storeDetailsContainer}>
                  <View style={styles.storeHeaderRow}>
                    <Text style={styles.storeName}>{store.name}</Text>
                    {!store.hasImage && (
                      <TouchableOpacity style={styles.directionsButtonTop}>
                        <Text style={styles.directionsButtonTopText}>Directions</Text>
                      </TouchableOpacity>
                    )}
                  </View>

                  <Text style={styles.storeAddressLine}>{store.street}</Text>
                  <Text style={styles.storeAddressLine}>{store.suburb}</Text>
                  <Text style={styles.storeAddressLine}>{store.city}</Text>
                  <Text style={styles.storeAddressLine}>{store.code}</Text>

                  <TouchableOpacity style={styles.viewStoreDetailsButton}>
                    <Text style={styles.viewStoreDetailsText}>View store details</Text>
                  </TouchableOpacity>
                </View>

                {/* Right side image placeholder (matching bottom card reference) */}
                {store.hasImage && (
                  <View style={styles.storeImageSection}>
                    <View style={styles.imagePlaceholderBox} />
                    <TouchableOpacity style={styles.directionsButtonBottom}>
                      <Text style={styles.directionsButtonBottomText}>Directions</Text>
                    </TouchableOpacity>
                  </View>
                )}

              </View>
            ))}
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  pageTitle: {
    // fontSize: 32,
    fontSize: 40,

    fontWeight: '800',
    color: '#111827',
    marginBottom: 20,

    fontFamily: 'serif', 
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
