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

// export default function HomeScreen() {
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


// newer
// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// export default function HomeScreen() {
//   return (
//     <View className="flex-1 bg-[#3B66FF] justify-center items-center px-6">
//       <View className="w-full max-w-sm space-y-4 items-center">
//         {/* Search Products Input */}
//         <View className="w-full bg-transparent border border-white/60 rounded-full px-5 py-3 flex-row justify-between items-center">
//           <TextInput
//             placeholder="Search Products"
//             placeholderTextColor="#E0E7FF"
//             className="text-white flex-1 text-sm mr-2"
//           />
//           <Ionicons name="search-outline" size={18} color="white" />
//         </View>

//         {/* Select a Store Input */}
//         <View className="w-full bg-transparent border border-white/60 rounded-full px-5 py-3 flex-row justify-between items-center">
//           <TextInput
//             placeholder="Select a Store"
//             placeholderTextColor="#E0E7FF"
//             className="text-white flex-1 text-sm mr-2"
//           />
//           <Ionicons name="search-outline" size={18} color="white" />
//         </View>

//         {/* Search Action Button */}
//         <TouchableOpacity className="w-full bg-white rounded-full py-3.5 items-center mt-2 shadow-md">
//           <Text className="text-[#3B66FF] font-bold text-base">Search</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }


// newer3
// import React from 'react';
// import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.cardWrapper}>
//         {/* Search Products Input */}
//         <View style={styles.inputPill}>
//           <TextInput
//             placeholder="Search Products"
//             placeholderTextColor="#E0E7FF"
//             style={styles.textInput}
//           />
//           <Ionicons name="search-outline" size={18} color="white" />
//         </View>

//         {/* Select a Store Input */}
//         <View style={styles.inputPill}>
//           <TextInput
//             placeholder="Select a Store"
//             placeholderTextColor="#E0E7FF"
//             style={styles.textInput}
//           />
//           <Ionicons name="search-outline" size={18} color="white" />
//         </View>

//         {/* Search Action Button */}
//         <TouchableOpacity activeOpacity={0.85} style={styles.searchButton}>
//           <Text style={styles.searchButtonText}>Search</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }



// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     flexDirection: 'row',
// //   },
// //   safeArea: {
// //     flex: 1,
// //     paddingHorizontal: Spacing.four,
// //     alignItems: 'center',
// //     gap: Spacing.three,
// //     paddingBottom: BottomTabInset + Spacing.three,
// //     maxWidth: MaxContentWidth,
// //   },
// //   heroSection: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     flex: 1,
// //     paddingHorizontal: Spacing.four,
// //     gap: Spacing.four,
// //   },
// //   title: {
// //     textAlign: 'center',
// //   },
// //   code: {
// //     textTransform: 'uppercase',
// //   },
// //   stepContainer: {
// //     gap: Spacing.three,
// //     alignSelf: 'stretch',
// //     paddingHorizontal: Spacing.three,
// //     paddingVertical: Spacing.four,
// //     borderRadius: Spacing.four,
// //   },
// // });


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#3B66FF',

//     backgroundColor: '#E59400',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 24,
//   },
//   cardWrapper: {
//     width: '100%',
//     maxWidth: 360,
//     alignItems: 'center',
//     gap: 16,
//   },
//   inputPill: {
//     width: '100%',
//     backgroundColor: 'transparent',
//     borderWidth: 1.5,
//     borderColor: 'rgba(255, 255, 255, 0.6)',
//     borderRadius: 9999,
//     paddingHorizontal: 20,
//     paddingVertical: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   textInput: {
//     color: '#FFFFFF',
//     flex: 1,
//     fontSize: 14,
//     marginRight: 8,
//     outlineStyle: 'none' as any,
//   },
//   searchButton: {
//     width: '100%',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 9999,
//     paddingVertical: 14,
//     alignItems: 'center',
//     marginTop: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   searchButtonText: {
//     color: '#3B66FF',
//     fontWeight: '700',
//     fontSize: 16,
//   },
// });



// newer4
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import img1 from '../images/products/product1.jpeg';
// import img1 from '@/src/images/products/product1.jpeg';


const FEATURED_PRODUCTS = [
  { id: '1', name: 'Acer Aspire Gaming Laptop', price: 'R 6,499', image: img1},
  { id: '2', name: 'Sony WH-1000XM4 Headphones', price: 'R 2,999', image: img1 },
  { id: '3', name: 'Logitech Mechanical Keyboard', price: 'R 1,299' },
  { id: '4', name: 'Instant Vortex Air Fryer', price: 'R 1,899' },
  { id: '5', name: 'PlayStation 5 DualSense Controller', price: 'R 1,199' },
  { id: '6', name: 'Dell 27" 4K Monitor', price: 'R 4,500' },
  { id: '7', name: 'DeLonghi Espresso Machine', price: 'R 3,299' },
  { id: '8', name: 'Apple iPad Air (5th Gen)', price: 'R 8,999' },
];

const CATEGORIES = ['Computers', 'Gaming', 'Electronics', 'Kitchen', 'Audio', 'Home Office'];

export default function HomeView() {
  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.topHeaderTitle}>The Pawn Shop</Text>

        <View style={styles.whiteCardContainer}>
          
          {/* Header Title */}
          {/* <Text style={styles.topHeaderTitle}>The Pawn Shop</Text> */}

          {/* Featured Products Section (6-8 items grid/scroll) */}
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            {/* <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity> */}

               <TouchableOpacity 
                                      onPress={() => router.push('/product/products' as any)}
                        >
                          <Text style={styles.seeAllText}>See all</Text>
                        </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {FEATURED_PRODUCTS.map((item) => (
              <View key={item.id} style={styles.productCard}>
                <View style={styles.productImagePlaceholder}>
                  {/* <Ionicons name="cube-outline" size={36} color="#E59400" /> */}
                  <Image source={img1} style={styles.productImage} />

                </View>
                <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Categories Section (Matching Image References) */}
          <View style={[styles.sectionHeaderRow, { marginTop: 32 }]}>
            <Text style={styles.sectionTitle}>Shop by Category</Text>
            {/* <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity> */}

               <TouchableOpacity 
                                      onPress={() => router.push('/product/products' as any)}
                        >
                          <Text style={styles.seeAllText}>See all</Text>
                        </TouchableOpacity>
          </View>

          <View style={styles.categoryGrid}>
            {CATEGORIES.map((cat, index) => (
              <TouchableOpacity key={index} style={styles.categoryChip}>
                <Text style={styles.categoryText}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
   productImage: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  
  outerContainer: {
    flex: 1,
    backgroundColor: '#E59400',
    padding: 16,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  whiteCardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  topHeaderTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },

  // topHeaderTitle: {
  //   fontSize: 16,
  //   fontWeight: '600',
  //   color: '#333',
  //   marginBottom: 20,
  //   textAlign: 'center',
  // },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  seeAllText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  horizontalScroll: {
    marginBottom: 10,
  },
  productCard: {
    width: 150,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 12,
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  productImagePlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  productName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E59400',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  categoryChip: {
    backgroundColor: '#E59400',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    width: '31%',
    alignItems: 'center',
    marginBottom: 4,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
});

