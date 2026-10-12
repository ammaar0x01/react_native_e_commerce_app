// // // // // import * as Device from 'expo-device';
// // // // // import { Platform, StyleSheet } from 'react-native';
// // // // // import { SafeAreaView } from 'react-native-safe-area-context';

// // // // // import { AnimatedIcon } from '@/components/animated-icon';
// // // // // import { HintRow } from '@/components/hint-row';
// // // // // import { ThemedText } from '@/components/themed-text';
// // // // // import { ThemedView } from '@/components/themed-view';
// // // // // import { WebBadge } from '@/components/web-badge';
// // // // // import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

// // // // // function getDevMenuHint() {
// // // // //   if (Platform.OS === 'web') {
// // // // //     return <ThemedText type="small">use browser devtools</ThemedText>;
// // // // //   }
// // // // //   if (Device.isDevice) {
// // // // //     return (
// // // // //       <ThemedText type="small">
// // // // //         shake device or press <ThemedText type="code">m</ThemedText> in terminal
// // // // //       </ThemedText>
// // // // //     );
// // // // //   }
// // // // //   const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
// // // // //   return (
// // // // //     <ThemedText type="small">
// // // // //       press <ThemedText type="code">{shortcut}</ThemedText>
// // // // //     </ThemedText>
// // // // //   );
// // // // // }

// // // // // export default function HomeScreen() {
// // // // //   return (
// // // // //     <ThemedView style={styles.container}>
// // // // //       <SafeAreaView style={styles.safeArea}>
// // // // //         <ThemedView style={styles.heroSection}>
// // // // //           <AnimatedIcon />
// // // // //           <ThemedText type="title" style={styles.title}>
// // // // //             Welcome to&nbsp;Expo
// // // // //           </ThemedText>
// // // // //         </ThemedView>

// // // // //         <ThemedText type="code" style={styles.code}>
// // // // //           get started
// // // // //         </ThemedText>

// // // // //         <ThemedView type="backgroundElement" style={styles.stepContainer}>
// // // // //           <HintRow
// // // // //             title="Try editing"
// // // // //             hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
// // // // //           />
// // // // //           <HintRow title="Dev tools" hint={getDevMenuHint()} />
// // // // //           <HintRow
// // // // //             title="Fresh start"
// // // // //             hint={<ThemedText type="code">npm run reset-project</ThemedText>}
// // // // //           />
// // // // //         </ThemedView>

// // // // //         {Platform.OS === 'web' && <WebBadge />}
// // // // //       </SafeAreaView>
// // // // //     </ThemedView>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     justifyContent: 'center',
// // // // //     flexDirection: 'row',
// // // // //   },
// // // // //   safeArea: {
// // // // //     flex: 1,
// // // // //     paddingHorizontal: Spacing.four,
// // // // //     alignItems: 'center',
// // // // //     gap: Spacing.three,
// // // // //     paddingBottom: BottomTabInset + Spacing.three,
// // // // //     maxWidth: MaxContentWidth,
// // // // //   },
// // // // //   heroSection: {
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'center',
// // // // //     flex: 1,
// // // // //     paddingHorizontal: Spacing.four,
// // // // //     gap: Spacing.four,
// // // // //   },
// // // // //   title: {
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   code: {
// // // // //     textTransform: 'uppercase',
// // // // //   },
// // // // //   stepContainer: {
// // // // //     gap: Spacing.three,
// // // // //     alignSelf: 'stretch',
// // // // //     paddingHorizontal: Spacing.three,
// // // // //     paddingVertical: Spacing.four,
// // // // //     borderRadius: Spacing.four,
// // // // //   },
// // // // // });


// // // // // newer
// // // // // import React from 'react';
// // // // // import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// // // // // import { Ionicons } from '@expo/vector-icons';

// // // // // export default function HomeScreen() {
// // // // //   return (
// // // // //     <View className="flex-1 bg-[#3B66FF] justify-center items-center px-6">
// // // // //       <View className="w-full max-w-sm space-y-4 items-center">
// // // // //         {/* Search Products Input */}
// // // // //         <View className="w-full bg-transparent border border-white/60 rounded-full px-5 py-3 flex-row justify-between items-center">
// // // // //           <TextInput
// // // // //             placeholder="Search Products"
// // // // //             placeholderTextColor="#E0E7FF"
// // // // //             className="text-white flex-1 text-sm mr-2"
// // // // //           />
// // // // //           <Ionicons name="search-outline" size={18} color="white" />
// // // // //         </View>

// // // // //         {/* Select a Store Input */}
// // // // //         <View className="w-full bg-transparent border border-white/60 rounded-full px-5 py-3 flex-row justify-between items-center">
// // // // //           <TextInput
// // // // //             placeholder="Select a Store"
// // // // //             placeholderTextColor="#E0E7FF"
// // // // //             className="text-white flex-1 text-sm mr-2"
// // // // //           />
// // // // //           <Ionicons name="search-outline" size={18} color="white" />
// // // // //         </View>

// // // // //         {/* Search Action Button */}
// // // // //         <TouchableOpacity className="w-full bg-white rounded-full py-3.5 items-center mt-2 shadow-md">
// // // // //           <Text className="text-[#3B66FF] font-bold text-base">Search</Text>
// // // // //         </TouchableOpacity>
// // // // //       </View>
// // // // //     </View>
// // // // //   );
// // // // // }


// // // // // newer3
// // // // // import React from 'react';
// // // // // import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
// // // // // import { Ionicons } from '@expo/vector-icons';

// // // // // export default function HomeScreen() {
// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <View style={styles.cardWrapper}>
// // // // //         {/* Search Products Input */}
// // // // //         <View style={styles.inputPill}>
// // // // //           <TextInput
// // // // //             placeholder="Search Products"
// // // // //             placeholderTextColor="#E0E7FF"
// // // // //             style={styles.textInput}
// // // // //           />
// // // // //           <Ionicons name="search-outline" size={18} color="white" />
// // // // //         </View>

// // // // //         {/* Select a Store Input */}
// // // // //         <View style={styles.inputPill}>
// // // // //           <TextInput
// // // // //             placeholder="Select a Store"
// // // // //             placeholderTextColor="#E0E7FF"
// // // // //             style={styles.textInput}
// // // // //           />
// // // // //           <Ionicons name="search-outline" size={18} color="white" />
// // // // //         </View>

// // // // //         {/* Search Action Button */}
// // // // //         <TouchableOpacity activeOpacity={0.85} style={styles.searchButton}>
// // // // //           <Text style={styles.searchButtonText}>Search</Text>
// // // // //         </TouchableOpacity>
// // // // //       </View>
// // // // //     </View>
// // // // //   );
// // // // // }



// // // // // // const styles = StyleSheet.create({
// // // // // //   container: {
// // // // // //     flex: 1,
// // // // // //     justifyContent: 'center',
// // // // // //     flexDirection: 'row',
// // // // // //   },
// // // // // //   safeArea: {
// // // // // //     flex: 1,
// // // // // //     paddingHorizontal: Spacing.four,
// // // // // //     alignItems: 'center',
// // // // // //     gap: Spacing.three,
// // // // // //     paddingBottom: BottomTabInset + Spacing.three,
// // // // // //     maxWidth: MaxContentWidth,
// // // // // //   },
// // // // // //   heroSection: {
// // // // // //     alignItems: 'center',
// // // // // //     justifyContent: 'center',
// // // // // //     flex: 1,
// // // // // //     paddingHorizontal: Spacing.four,
// // // // // //     gap: Spacing.four,
// // // // // //   },
// // // // // //   title: {
// // // // // //     textAlign: 'center',
// // // // // //   },
// // // // // //   code: {
// // // // // //     textTransform: 'uppercase',
// // // // // //   },
// // // // // //   stepContainer: {
// // // // // //     gap: Spacing.three,
// // // // // //     alignSelf: 'stretch',
// // // // // //     paddingHorizontal: Spacing.three,
// // // // // //     paddingVertical: Spacing.four,
// // // // // //     borderRadius: Spacing.four,
// // // // // //   },
// // // // // // });


// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     // backgroundColor: '#3B66FF',

// // // // //     backgroundColor: '#E59400',
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //     paddingHorizontal: 24,
// // // // //   },
// // // // //   cardWrapper: {
// // // // //     width: '100%',
// // // // //     maxWidth: 360,
// // // // //     alignItems: 'center',
// // // // //     gap: 16,
// // // // //   },
// // // // //   inputPill: {
// // // // //     width: '100%',
// // // // //     backgroundColor: 'transparent',
// // // // //     borderWidth: 1.5,
// // // // //     borderColor: 'rgba(255, 255, 255, 0.6)',
// // // // //     borderRadius: 9999,
// // // // //     paddingHorizontal: 20,
// // // // //     paddingVertical: 12,
// // // // //     flexDirection: 'row',
// // // // //     justifyContent: 'space-between',
// // // // //     alignItems: 'center',
// // // // //   },
// // // // //   textInput: {
// // // // //     color: '#FFFFFF',
// // // // //     flex: 1,
// // // // //     fontSize: 14,
// // // // //     marginRight: 8,
// // // // //     outlineStyle: 'none' as any,
// // // // //   },
// // // // //   searchButton: {
// // // // //     width: '100%',
// // // // //     backgroundColor: '#FFFFFF',
// // // // //     borderRadius: 9999,
// // // // //     paddingVertical: 14,
// // // // //     alignItems: 'center',
// // // // //     marginTop: 8,
// // // // //     shadowColor: '#000',
// // // // //     shadowOffset: { width: 0, height: 4 },
// // // // //     shadowOpacity: 0.1,
// // // // //     shadowRadius: 8,
// // // // //     elevation: 4,
// // // // //   },
// // // // //   searchButtonText: {
// // // // //     color: '#3B66FF',
// // // // //     fontWeight: '700',
// // // // //     fontSize: 16,
// // // // //   },
// // // // // });



// // // // // newer4
// // // // import React from 'react';
// // // // import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
// // // // import { Ionicons } from '@expo/vector-icons';
// // // // import { router } from 'expo-router';

// // // // import img1 from '../images/products/product1.jpeg';
// // // // // import img1 from '@/src/images/products/product1.jpeg';


// // // // const FEATURED_PRODUCTS = [
// // // //   { id: '1', name: 'Acer Aspire Gaming Laptop', price: 'R 6,499', image: img1},
// // // //   { id: '2', name: 'Sony WH-1000XM4 Headphones', price: 'R 2,999', image: img1 },
// // // //   { id: '3', name: 'Logitech Mechanical Keyboard', price: 'R 1,299' },
// // // //   { id: '4', name: 'Instant Vortex Air Fryer', price: 'R 1,899' },
// // // //   { id: '5', name: 'PlayStation 5 DualSense Controller', price: 'R 1,199' },
// // // //   { id: '6', name: 'Dell 27" 4K Monitor', price: 'R 4,500' },
// // // //   { id: '7', name: 'DeLonghi Espresso Machine', price: 'R 3,299' },
// // // //   { id: '8', name: 'Apple iPad Air (5th Gen)', price: 'R 8,999' },
// // // // ];

// // // // const CATEGORIES = ['Computers', 'Gaming', 'Electronics', 'Kitchen', 'Audio', 'Home Office'];

// // // // export default function HomeView() {
// // // //   return (
// // // //     <View style={styles.outerContainer}>
// // // //       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
// // // //           <Text style={styles.topHeaderTitle}>The Pawn Shop</Text>

// // // //         <View style={styles.whiteCardContainer}>
          
// // // //           {/* Header Title */}
// // // //           {/* <Text style={styles.topHeaderTitle}>The Pawn Shop</Text> */}

// // // //           {/* Featured Products Section (6-8 items grid/scroll) */}
// // // //           <View style={styles.sectionHeaderRow}>
// // // //             <Text style={styles.sectionTitle}>Featured Products</Text>
// // // //             {/* <TouchableOpacity>
// // // //               <Text style={styles.seeAllText}>See all</Text>
// // // //             </TouchableOpacity> */}

// // // //                <TouchableOpacity 
// // // //                                       onPress={() => router.push('/product/products' as any)}
// // // //                         >
// // // //                           <Text style={styles.seeAllText}>See all</Text>
// // // //                         </TouchableOpacity>
// // // //           </View>

// // // //           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
// // // //             {FEATURED_PRODUCTS.map((item) => (
// // // //               <View key={item.id} style={styles.productCard}>
// // // //                 <View style={styles.productImagePlaceholder}>
// // // //                   {/* <Ionicons name="cube-outline" size={36} color="#E59400" /> */}
// // // //                   <Image source={img1} style={styles.productImage} />

// // // //                 </View>
// // // //                 <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
// // // //                 <Text style={styles.productPrice}>{item.price}</Text>
// // // //               </View>
// // // //             ))}
// // // //           </ScrollView>

// // // //           {/* Categories Section (Matching Image References) */}
// // // //           <View style={[styles.sectionHeaderRow, { marginTop: 32 }]}>
// // // //             <Text style={styles.sectionTitle}>Shop by Category</Text>
// // // //             {/* <TouchableOpacity>
// // // //               <Text style={styles.seeAllText}>See all</Text>
// // // //             </TouchableOpacity> */}

// // // //                <TouchableOpacity 
// // // //                                       onPress={() => router.push('/product/products' as any)}
// // // //                         >
// // // //                           <Text style={styles.seeAllText}>See all</Text>
// // // //                         </TouchableOpacity>
// // // //           </View>

// // // //           <View style={styles.categoryGrid}>
// // // //             {CATEGORIES.map((cat, index) => (
// // // //               <TouchableOpacity key={index} style={styles.categoryChip}>
// // // //                 <Text style={styles.categoryText}>{cat}</Text>
// // // //               </TouchableOpacity>
// // // //             ))}
// // // //           </View>

// // // //         </View>
// // // //       </ScrollView>
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //    productImage: {
// // // //     width: '100%',
// // // //     height: 100,
// // // //     borderRadius: 12,
// // // //     resizeMode: 'cover',
// // // //   },
  
// // // //   outerContainer: {
// // // //     flex: 1,
// // // //     backgroundColor: '#E59400',
// // // //     padding: 16,
// // // //   },
// // // //   scrollContent: {
// // // //     paddingBottom: 40,
// // // //   },
// // // //   whiteCardContainer: {
// // // //     backgroundColor: '#FFFFFF',
// // // //     borderRadius: 32,
// // // //     padding: 24,
// // // //     shadowColor: '#000',
// // // //     shadowOffset: { width: 0, height: 4 },
// // // //     shadowOpacity: 0.1,
// // // //     shadowRadius: 12,
// // // //     elevation: 5,
// // // //   },
// // // //   topHeaderTitle: {
// // // //     fontSize: 30,
// // // //     fontWeight: '600',
// // // //     color: '#333',
// // // //     marginBottom: 20,
// // // //     textAlign: 'center',
// // // //   },

// // // //   // topHeaderTitle: {
// // // //   //   fontSize: 16,
// // // //   //   fontWeight: '600',
// // // //   //   color: '#333',
// // // //   //   marginBottom: 20,
// // // //   //   textAlign: 'center',
// // // //   // },
// // // //   sectionHeaderRow: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     marginBottom: 14,
// // // //   },
// // // //   sectionTitle: {
// // // //     fontSize: 20,
// // // //     fontWeight: '700',
// // // //     color: '#111827',
// // // //   },
// // // //   seeAllText: {
// // // //     fontSize: 14,
// // // //     color: '#6B7280',
// // // //     fontWeight: '500',
// // // //   },
// // // //   horizontalScroll: {
// // // //     marginBottom: 10,
// // // //   },
// // // //   productCard: {
// // // //     width: 150,
// // // //     backgroundColor: '#F9FAFB',
// // // //     borderRadius: 16,
// // // //     padding: 12,
// // // //     marginRight: 14,
// // // //     borderWidth: 1,
// // // //     borderColor: '#E5E7EB',
// // // //   },
// // // //   productImagePlaceholder: {
// // // //     width: '100%',
// // // //     height: 100,
// // // //     backgroundColor: '#FEF3C7',
// // // //     borderRadius: 12,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     marginBottom: 10,
// // // //   },
// // // //   productName: {
// // // //     fontSize: 13,
// // // //     fontWeight: '600',
// // // //     color: '#1F2937',
// // // //     marginBottom: 4,
// // // //   },
// // // //   productPrice: {
// // // //     fontSize: 14,
// // // //     fontWeight: '700',
// // // //     color: '#E59400',
// // // //   },
// // // //   categoryGrid: {
// // // //     flexDirection: 'row',
// // // //     flexWrap: 'wrap',
// // // //     gap: 12,
// // // //     justifyContent: 'space-between',
// // // //   },
// // // //   categoryChip: {
// // // //     backgroundColor: '#E59400',
// // // //     borderRadius: 14,
// // // //     paddingVertical: 14,
// // // //     paddingHorizontal: 16,
// // // //     width: '31%',
// // // //     alignItems: 'center',
// // // //     marginBottom: 4,
// // // //   },
// // // //   categoryText: {
// // // //     color: '#FFFFFF',
// // // //     fontSize: 13,
// // // //     fontWeight: '600',
// // // //   },
// // // // });



// // // // // newer5
// // // // // import React, { useState } from 'react';
// // // // // import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
// // // // // import { Ionicons } from '@expo/vector-icons';
// // // // // import { router } from 'expo-router';
// // // // // import "../global.css"

// // // // // import img1 from '../images/products/product1.jpeg';

// // // // // const FEATURED_PRODUCTS = [
// // // // //   { id: '1', name: 'Acer Aspire Gaming Laptop', price: 'R 6,499', image: img1 },
// // // // //   { id: '2', name: 'Sony WH-1000XM4 Headphones', price: 'R 2,999', image: img1 },
// // // // //   { id: '3', name: 'Logitech Mechanical Keyboard', price: 'R 1,299' },
// // // // //   { id: '4', name: 'Instant Vortex Air Fryer', price: 'R 1,899' },
// // // // //   { id: '5', name: 'PlayStation 5 DualSense Controller', price: 'R 1,199' },
// // // // //   { id: '6', name: 'Dell 27" 4K Monitor', price: 'R 4,500' },
// // // // //   { id: '7', name: 'DeLonghi Espresso Machine', price: 'R 3,299' },
// // // // //   { id: '8', name: 'Apple iPad Air (5th Gen)', price: 'R 8,999' },
// // // // // ];

// // // // // const CATEGORIES_DEFAULT = ['Computers', 'Gaming', 'Electronics', 'Kitchen', 'Audio', 'Home Office'];
// // // // // const CATEGORIES_EXPANDED = [
// // // // //   'Computers', 'Gaming', 'Electronics',
// // // // //   'Kitchen', 'Kitchen', 'Kitchen',
// // // // //   'Computers', 'Gaming', 'Electronics',
// // // // //   'Kitchen', 'Kitchen', 'Kitchen',
// // // // //   'Computers', 'Gaming', 'Electronics',
// // // // //   'Kitchen', 'Kitchen', 'Kitchen',
// // // // // ];

// // // // // export default function HomeView() {
// // // // //   const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(false);

// // // // //   const displayedCategories = isCategoriesExpanded ? CATEGORIES_EXPANDED : CATEGORIES_DEFAULT;

// // // // //   return (
// // // // //     <View className="flex-1 bg-[#FFE8B6] px-4 pt-2">
// // // // //       <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        
// // // // //         {/* Shop by Category Card Widget */}
// // // // //         <View className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm mb-6">
// // // // //           <View className="flex-row justify-between items-center mb-4">
// // // // //             <Text className="text-lg font-bold text-gray-900">Shop by Category</Text>
// // // // //             <TouchableOpacity onPress={() => setIsCategoriesExpanded(!isCategoriesExpanded)}>
// // // // //               <Text className="text-sm font-medium text-gray-500">
// // // // //                 {isCategoriesExpanded ? 'See less' : 'See all'}
// // // // //               </Text>
// // // // //             </TouchableOpacity>
// // // // //           </View>

// // // // //           <View className="flex-row flex-wrap gap-3 justify-between">
// // // // //             {displayedCategories.map((cat, index) => (
// // // // //               <TouchableOpacity
// // // // //                 key={index}
// // // // //                 className="bg-[#E59400] rounded-2xl py-3.5 px-2 w-[31%] items-center mb-1 shadow-sm"
// // // // //               >
// // // // //                 <Text className="text-white text-xs font-semibold text-center" numberOfLines={1}>
// // // // //                   {cat}
// // // // //                 </Text>
// // // // //               </TouchableOpacity>
// // // // //             ))}
// // // // //           </View>
// // // // //         </View>

// // // // //         {/* Section Heading & Results */}
// // // // //         <View className="items-center my-3">
// // // // //           <Text className="text-3xl font-extrabold text-gray-900 mb-1">Computers</Text>
// // // // //           <Text className="text-sm font-semibold text-gray-700">Number of results: 34</Text>
// // // // //         </View>

// // // // //         {/* Featured Products Section Header */}
// // // // //         <View className="flex-row justify-between items-center mb-3 mt-4">
// // // // //           <Text className="text-xl font-bold text-gray-900">Featured Products</Text>
// // // // //           <TouchableOpacity onPress={() => router.push('/product/products' as any)}>
// // // // //             <Text className="text-sm font-medium text-gray-500">See all</Text>
// // // // //           </TouchableOpacity>
// // // // //         </View>

// // // // //         {/* Featured Products Horizontal Scroll */}
// // // // //         <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
// // // // //           {FEATURED_PRODUCTS.map((item) => (
// // // // //             <View key={item.id} className="bg-gray-50 rounded-2xl p-3 mr-3.5 border border-gray-200 w-[150px]">
// // // // //               <View className="w-full h-24 bg-amber-100 rounded-xl justify-center items-center mb-2.5 overflow-hidden">
// // // // //                 {item.image ? (
// // // // //                   <Image source={item.image} className="w-full h-full rounded-xl" resizeMode="cover" />
// // // // //                 ) : (
// // // // //                   <Ionicons name="cube-outline" size={32} color="#E59400" />
// // // // //                 )}
// // // // //               </View>
// // // // //               <Text numberOfLines={1} className="text-xs font-semibold text-gray-800 mb-1">{item.name}</Text>
// // // // //               <Text className="text-sm font-bold text-[#E59400]">{item.price}</Text>
// // // // //             </View>
// // // // //           ))}
// // // // //         </ScrollView>

// // // // //       </ScrollView>
// // // // //     </View>
// // // // //   );
// // // // // }



// // // // newer6 works. 

// // // import React, { useState } from 'react';
// // // import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
// // // import { Ionicons } from '@expo/vector-icons';
// // // import { router } from 'expo-router';

// // // import img1 from '../images/products/product1.jpeg';

// // // const FEATURED_PRODUCTS = [
// // //   { id: '1', name: 'Acer Aspire Gaming Laptop', price: 'R 6,499', image: img1 },
// // //   { id: '2', name: 'Sony WH-1000XM4 Headphones', price: 'R 2,999', image: img1 },
// // //   { id: '3', name: 'Logitech Mechanical Keyboard', price: 'R 1,299' },
// // //   { id: '4', name: 'Instant Vortex Air Fryer', price: 'R 1,899' },
// // //   { id: '5', name: 'PlayStation 5 DualSense Controller', price: 'R 1,199' },
// // //   { id: '6', name: 'Dell 27" 4K Monitor', price: 'R 4,500' },
// // //   { id: '7', name: 'DeLonghi Espresso Machine', price: 'R 3,299' },
// // //   { id: '8', name: 'Apple iPad Air (5th Gen)', price: 'R 8,999' },
// // // ];

// // // const CATEGORIES_DEFAULT = ['Computers', 'Gaming', 'Electronics', 'Kitchen', 'Audio', 'Home Office'];
// // // const CATEGORIES_EXPANDED = [
// // //   'New', 'Used', 'Promotions',

// // //   'Computers', 'Gaming', 'Electronics',
// // //   'Kitchen', 'Phones', 'TVs',
// // //   'Audio', 'Tools', 'Fitness',
// // //   // 'Computers', 'Gaming', 'Electronics',
// // //   // 'Kitchen', 'Kitchen', 'Kitchen',
// // // ];

// // // export default function HomeView() {
// // //   const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(false);
// // //   const displayedCategories = isCategoriesExpanded ? CATEGORIES_EXPANDED : CATEGORIES_DEFAULT;

// // //   return (
// // //     <View style={styles.outerContainer}>
// // //       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
// // //         {/* Shop by Category Card Widget */}
// // //         <View style={styles.categoryCard}>
// // //           <View style={styles.sectionHeaderRow}>
// // //             <Text style={styles.sectionTitle}>Shop by Category</Text>
// // //             <TouchableOpacity onPress={() => setIsCategoriesExpanded(!isCategoriesExpanded)}>
// // //               <Text style={styles.seeAllText}>
// // //                 {isCategoriesExpanded ? 'See less' : 'See all'}
// // //               </Text>
// // //             </TouchableOpacity>
// // //           </View>

// // //           <View style={styles.categoryGrid}>
// // //             {displayedCategories.map((cat, index) => (
// // //               <TouchableOpacity key={index} style={styles.categoryChip}>
// // //                 <Text style={styles.categoryText} numberOfLines={1}>{cat}</Text>
// // //               </TouchableOpacity>
// // //             ))}
// // //           </View>
// // //         </View>

// // //         {/* Section Heading & Results */}
// // //         {/* <View style={styles.resultsHeader}>
// // //           <Text style={styles.resultsTitle}>Computers</Text>
// // //           <Text style={styles.resultsCount}>Number of results: 34</Text>
// // //         </View> */}

// // //         {/* Featured Products Section Header */}
// // //         <View style={styles.sectionHeaderRow}>
// // //           <Text style={styles.sectionTitle}>Featured Products</Text>
// // //           <TouchableOpacity onPress={() => router.push('/product/products' as any)}>
// // //             <Text style={styles.seeAllText}>See all</Text>
// // //           </TouchableOpacity>
// // //         </View>

// // //         {/* Featured Products Horizontal Scroll */}
// // //         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
// // //           {FEATURED_PRODUCTS.map((item) => (
// // //             <View key={item.id} style={styles.productCard}>
// // //               <View style={styles.productImagePlaceholder}>
// // //                 {item.image ? (
// // //                   <Image source={img1} style={styles.productImage} resizeMode="cover" />
// // //                   // <Image source={item.image} style={styles.productImage} resizeMode="cover" />

// // //                 ) : (
// // //                   // <Ionicons name="cube-outline" size={32} color="#E59400" />
// // //                   <Image source={img1} style={styles.productImage} resizeMode="cover" />
               
// // //                )}
// // //               </View>
// // //               <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
// // //               <Text style={styles.productPrice}>{item.price}</Text>
// // //             </View>
// // //           ))}
// // //         </ScrollView>

// // //       </ScrollView>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   outerContainer: {
// // //     flex: 1,

// // //     // backgroundColor: '#FFE8B6',
// // //     // backgroundColor: '#ffc400',
// // //     backgroundColor: '#ffffff',

// // //     // padding: 16,
// // //     padding: 40,
// // //     paddingStart: 60, 
// // //     paddingEnd: 60, 


// // //   },
// // //   scrollContent: {
// // //     paddingBottom: 40,
// // //   },
// // //   categoryCard: {
// // //     backgroundColor: '#FFFFFF',
// // //     borderRadius: 24,
// // //     padding: 20,
// // //     boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
// // //     elevation: 3,
// // //     marginBottom: 24,
// // //     borderWidth: 1,
// // //     borderColor: '#F3F4F6',
// // //   },
// // //   sectionHeaderRow: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     marginBottom: 14,
// // //   },
// // //   sectionTitle: {
// // //     fontSize: 18,
// // //     fontWeight: '700',
// // //     color: '#111827',
// // //   },
// // //   seeAllText: {
// // //     fontSize: 14,
// // //     fontWeight: '500',
// // //     color: '#6B7280',
// // //   },
// // //   categoryGrid: {
// // //     flexDirection: 'row',
// // //     flexWrap: 'wrap',
// // //     justifyContent: 'space-between',
// // //     gap: 10,
// // //   },
// // //   categoryChip: {
// // //     backgroundColor: '#E59400',
// // //     borderRadius: 16,
// // //     paddingVertical: 14,
// // //     paddingHorizontal: 8,

// // //     // width: '31%',
// // //     // width: '18%',
// // //     width: '23%',

// // //     // height: '40%', 
// // //     // height: '60px', 

// // //     alignItems: 'center',
// // //   },
// // //   categoryText: {
// // //     color: '#FFFFFF',
// // //     fontSize: 12,
// // //     fontWeight: '700',
// // //     textAlign: 'center',
// // //   },
// // //   resultsHeader: {
// // //     alignItems: 'center',
// // //     marginBottom: 20,
// // //   },
// // //   resultsTitle: {
// // //     fontSize: 28,
// // //     fontWeight: '800',
// // //     color: '#111827',
// // //     marginBottom: 4,
// // //   },
// // //   resultsCount: {
// // //     fontSize: 14,
// // //     fontWeight: '600',
// // //     color: '#4B5563',
// // //   },
// // //   horizontalScroll: {
// // //     marginBottom: 16,
// // //   },
// // //   productCard: {
// // //     width: 150,
// // //     backgroundColor: '#F9FAFB',
// // //     borderRadius: 16,
// // //     padding: 12,
// // //     marginRight: 14,
// // //     borderWidth: 1,
// // //     borderColor: '#E5E7EB',
// // //   },
// // //   productImagePlaceholder: {
// // //     width: '100%',
// // //     height: 96,
// // //     backgroundColor: '#FEF3C7',
// // //     borderRadius: 12,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginBottom: 10,
// // //     overflow: 'hidden',
// // //   },
// // //   productImage: {
// // //     width: '100%',
// // //     height: '100%',
// // //     borderRadius: 12,
// // //   },
// // //   productName: {
// // //     fontSize: 12,
// // //     fontWeight: '600',
// // //     color: '#1F2937',
// // //     marginBottom: 4,
// // //   },
// // //   productPrice: {
// // //     fontSize: 14,
// // //     fontWeight: '800',
// // //     color: '#E59400',
// // //   },
// // // });



// // // // newer 7
// // // // import React from 'react';
// // // // import { Platform } from 'react-native';
// // // // import HomeView from './home'; // Your mobile home view component
// // // // import WebLandingView from '@/components/web-landing-view';

// // // // export default function IndexRoute() {
// // // //   if (Platform.OS === 'web') {
// // // //     return <WebLandingView />;
// // // //   }

// // // //   return <HomeView />;
// // // // }



// // // // newer 8
// // // // import React from 'react';
// // // // import HomeView from './home';

// // // // export default function IndexRoute() {
// // // //   return <HomeView />;
// // // // }


// // // newer 9 
// // import React, { useState } from 'react';
// // import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image, StyleSheet, Dimensions } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';
// // import { router } from 'expo-router';

// // import img1 from '../images/products/product1.jpeg';

// // const SCREEN_HEIGHT = Dimensions.get('window').height;

// // const ALL_CATEGORIES = [
// //   { 
// //     id: 'computers', 
// //     name: 'Computers', 
// //     count: '34 items', 
// //     image: { uri: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80' } 
// //   },
// //   { 
// //     id: 'gaming', 
// //     name: 'Gaming', 
// //     count: '42 items', 
// //     image: { uri: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80' } 
// //   },
// //   { 
// //     id: 'electronics', 
// //     name: 'Electronics', 
// //     count: '56 items', 
// //     image: { uri: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80' } 
// //   },
// //   { 
// //     id: 'kitchen', 
// //     name: 'Kitchen', 
// //     count: '28 items', 
// //     image: { uri: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80' } 
// //   },
// //   { 
// //     id: 'audio', 
// //     name: 'Audio', 
// //     count: '19 items', 
// //     image: { uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80' } 
// //   },
// //   { 
// //     id: 'home-office', 
// //     name: 'Home Office', 
// //     count: '22 items', 
// //     image: { uri: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80' } 
// //   },
// //   { 
// //     id: 'new', 
// //     name: 'New Arrivals', 
// //     count: '15 items', 
// //     image: { uri: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80' } 
// //   },
// //   { 
// //     id: 'used', 
// //     name: 'Certified Used', 
// //     count: '31 items', 
// //     image: { uri: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80' } 
// //   },
// //   { 
// //     id: 'promotions', 
// //     name: 'Promotions', 
// //     count: '48 items', 
// //     image: { uri: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=80' } 
// //   },
// //   { 
// //     id: 'phones', 
// //     name: 'Phones & Tablets', 
// //     count: '39 items', 
// //     image: { uri: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80' } 
// //   },
// //   { 
// //     id: 'tvs', 
// //     name: 'TVs & Displays', 
// //     count: '18 items', 
// //     image: { uri: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80' } 
// //   },
// //   { 
// //     id: 'tools', 
// //     name: 'Tools & DIY', 
// //     count: '25 items', 
// //     image: { uri: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' } 
// //   },
// // ];

// // const FEATURED_PRODUCTS = [
// //   { id: '1', name: 'Acer Aspire Gaming Laptop', price: 'R 6,499', image: img1 },
// //   { id: '2', name: 'Sony WH-1000XM4 Headphones', price: 'R 2,999', image: img1 },
// //   { id: '3', name: 'Logitech Mechanical Keyboard', price: 'R 1,299', image: img1 },
// //   { id: '4', name: 'Instant Vortex Air Fryer', price: 'R 1,899', image: img1 },
// //   { id: '5', name: 'PlayStation 5 DualSense Controller', price: 'R 1,199', image: img1 },
// //   { id: '6', name: 'Dell 27" 4K Monitor', price: 'R 4,500', image: img1 },
// // ];

// // export default function HomeView() {
// //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// //   const handleCategoryPress = (category: typeof ALL_CATEGORIES[0]) => {
// //     setSelectedCategory(category.name);
// //     router.push({
// //       pathname: '/product/products',
// //       params: { category: category.name },
// //     } as any);
// //   };

// //   return (
// //     <View style={styles.outerContainer}>
// //       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
// //         {/* Header & Subtitle */}
// //         <View style={styles.headerContainer}>
// //           <View>
// //             <Text style={styles.headerTitle}>Explore Categories</Text>
// //             <Text style={styles.headerSubtitle}>Select a category to discover curated products and promotions.</Text>
// //           </View>
// //           <View style={styles.badgeContainer}>
// //             <Ionicons name="layers-outline" size={14} color="#E59400" />
// //             <Text style={styles.badgeText}>{ALL_CATEGORIES.length} Categories</Text>
// //           </View>
// //         </View>

// //         {/* Immersive Full-Height / Full-Screen Categories Grid */}
// //         <View style={styles.categoryContainer}>
// //           <View style={styles.categoryGrid}>
// //             {ALL_CATEGORIES.map((cat) => {
// //               const isSelected = selectedCategory === cat.name;
// //               return (
// //                 <TouchableOpacity
// //                   key={cat.id}
// //                   style={[styles.categoryCard, isSelected && styles.selectedCategoryCard]}
// //                   activeOpacity={0.85}
// //                   onPress={() => handleCategoryPress(cat)}
// //                 >
// //                   <ImageBackground 
// //                     source={cat.image} 
// //                     style={styles.categoryBgImage} 
// //                     imageStyle={styles.categoryImageStyle}
// //                   >
// //                     <View style={styles.categoryOverlay}>
// //                       {/* Item Count Badge */}
// //                       <View style={styles.countBadge}>
// //                         <Text style={styles.countText}>{cat.count}</Text>
// //                       </View>

// //                       {/* Category Details */}
// //                       <View style={styles.categoryInfo}>
// //                         <Text style={styles.categoryText} numberOfLines={1}>{cat.name}</Text>
// //                         <View style={styles.browseRow}>
// //                           <Text style={styles.browseText}>Browse items</Text>
// //                           <Ionicons name="chevron-forward" size={12} color="#FDE68A" style={{ marginLeft: 4 }} />
// //                         </View>
// //                       </View>
// //                     </View>
// //                   </ImageBackground>
// //                 </TouchableOpacity>
// //               );
// //             })}
// //           </View>
// //         </View>

// //         {/* Featured Products Section Header */}
// //         <View style={styles.sectionHeaderRow}>
// //           <Text style={styles.sectionTitle}>Featured Products</Text>
// //           <TouchableOpacity onPress={() => router.push('/product/products' as any)}>
// //             <Text style={styles.seeAllText}>
// //               See all <Ionicons name="arrow-forward" size={12} color="#6B7280" />
// //             </Text>
// //           </TouchableOpacity>
// //         </View>

// //         {/* Featured Products Horizontal Scroll */}
// //         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
// //           {FEATURED_PRODUCTS.map((item) => (
// //             <View key={item.id} style={styles.productCard}>
// //               <View style={styles.productImagePlaceholder}>
// //                 <Image source={item.image} style={styles.productImage} resizeMode="cover" />
// //               </View>
// //               <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
// //               <Text style={styles.productPrice}>{item.price}</Text>
              
// //               <TouchableOpacity 
// //                 style={styles.viewItemButton} 
// //                 onPress={() => router.push('/product/products' as any)}
// //                 activeOpacity={0.8}
// //               >
// //                 <Text style={styles.viewItemButtonText}>View Item</Text>
// //               </TouchableOpacity>
// //             </View>
// //           ))}
// //         </ScrollView>

// //       </ScrollView>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   outerContainer: {
// //     flex: 1,
// //     backgroundColor: '#ffffff',
// //     paddingHorizontal: 20,
// //     paddingTop: 16,
// //   },
// //   scrollContent: {
// //     paddingBottom: 40,
// //   },
// //   headerContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'flex-start',
// //     marginBottom: 20,
// //   },
// //   headerTitle: {
// //     fontSize: 26,
// //     fontWeight: '800',
// //     color: '#111827',
// //     letterSpacing: -0.5,
// //   },
// //   headerSubtitle: {
// //     fontSize: 13,
// //     color: '#6B7280',
// //     marginTop: 4,
// //     maxWidth: '75%',
// //   },
// //   badgeContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FEF3C7',
// //     paddingHorizontal: 10,
// //     paddingVertical: 6,
// //     borderRadius: 12,
// //     borderWidth: 1,
// //     borderColor: '#FDE68A',
// //     gap: 4,
// //   },
// //   badgeText: {
// //     fontSize: 11,
// //     fontWeight: '700',
// //     color: '#E59400',
// //   },
// //   categoryContainer: {
// //     minHeight: SCREEN_HEIGHT * 0.65, // Takes up at least a substantial immersive portion of the page
// //     justifyContent: 'center',
// //     marginBottom: 32,
// //   },
// //   categoryGrid: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     justifyContent: 'space-between',

// //     gap: 12,
// //     // gap: 30,

// //   },
// //   categoryCard: {
// //     width: '48%',
// //     // width: '32%',

// //     // height: 160,
// //     height: 260,

// //     borderRadius: 20,
// //     overflow: 'hidden',
// //     backgroundColor: '#F3F4F6',
// //     elevation: 4,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.12,
// //     shadowRadius: 8,
// //     borderWidth: 1,
// //     borderColor: 'transparent',
// //   },
// //   selectedCategoryCard: {
// //     borderColor: '#E59400',
// //     borderWidth: 2,
// //   },
// //   categoryBgImage: {
// //     width: '100%',
// //     height: '100%',
// //     justifyContent: 'space-between',
// //   },
// //   categoryImageStyle: {
// //     borderRadius: 20,
// //   },
// //   categoryOverlay: {
// //     flex: 1,
// //     backgroundColor: 'rgba(0, 0, 0, 0.45)', // Rich dark gradient tint for crystal clear text readability
// //     justifyContent: 'space-between',
// //     padding: 12,
// //   },
// //   countBadge: {
// //     alignSelf: 'flex-end',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //     paddingHorizontal: 8,
// //     paddingVertical: 3,
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     borderColor: 'rgba(255, 255, 255, 0.2)',
// //   },
// //   countText: {
// //     color: '#FFFFFF',
// //     fontSize: 10,
// //     fontWeight: '600',
// //   },
// //   categoryInfo: {
// //     justifyContent: 'flex-end',
// //   },
// //   categoryText: {
// //     color: '#FFFFFF',
// //     fontSize: 15,
// //     fontWeight: '700',
// //     marginBottom: 2,
// //   },
// //   browseRow: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   browseText: {
// //     color: '#FEF3C7',
// //     fontSize: 11,
// //     fontWeight: '500',
// //   },
// //   sectionHeaderRow: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 14,
// //   },
// //   sectionTitle: {
// //     fontSize: 20,
// //     fontWeight: '700',
// //     color: '#111827',
// //   },
// //   seeAllText: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#6B7280',
// //   },
// //   horizontalScroll: {
// //     marginBottom: 16,
// //   },
// //   productCard: {
// //     width: 150,
// //     // height: 300,  

// //     backgroundColor: '#F9FAFB',
// //     borderRadius: 16,
// //     padding: 12,
// //     marginRight: 14,
// //     borderWidth: 1,
// //     borderColor: '#E5E7EB',
// //     justifyContent: 'space-between',
// //   },
// //   productImagePlaceholder: {
// //     width: '100%',
// //     height: 100,
// //     backgroundColor: '#FEF3C7',
// //     borderRadius: 12,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 8,
// //     overflow: 'hidden',
// //   },
// //   productImage: {
// //     width: '100%',
// //     height: '100%',
// //     borderRadius: 12,
// //   },
// //   productName: {
// //     fontSize: 12,
// //     fontWeight: '600',
// //     color: '#1F2937',
// //     marginBottom: 4,
// //   },
// //   productPrice: {
// //     fontSize: 14,
// //     fontWeight: '800',
// //     color: '#E59400',
// //     marginBottom: 8,
// //   },
// //   viewItemButton: {
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: 10,
// //     paddingVertical: 6,
// //     alignItems: 'center',
// //     borderWidth: 1,
// //     borderColor: '#E5E7EB',
// //   },
// //   viewItemButtonText: {
// //     fontSize: 11,
// //     fontWeight: '700',
// //     color: '#374151',
// //   },
// // });


// // newer10
// import React, { useState } from 'react';
// import { View, Text, ScrollView, Pressable, ImageBackground, Image, StyleSheet, useWindowDimensions } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { router } from 'expo-router';

// import img1 from '../images/products/product1.jpeg';

// const ALL_CATEGORIES = [
//   { 
//     id: 'computers', 
//     name: 'Computers', 
//     count: '34 items', 
//     image: { uri: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80' } 
//   },
//   { 
//     id: 'gaming', 
//     name: 'Gaming', 
//     count: '42 items', 
//     image: { uri: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80' } 
//   },
//   { 
//     id: 'electronics', 
//     name: 'Electronics', 
//     count: '56 items', 
//     image: { uri: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80' } 
//   },
//   { 
//     id: 'kitchen', 
//     name: 'Kitchen', 
//     count: '28 items', 
//     image: { uri: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80' } 
//   },
//   { 
//     id: 'audio', 
//     name: 'Audio', 
//     count: '19 items', 
//     image: { uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80' } 
//   },
//   { 
//     id: 'home-office', 
//     name: 'Home Office', 
//     count: '22 items', 
//     image: { uri: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80' } 
//   },
//   { 
//     id: 'new', 
//     name: 'New Arrivals', 
//     count: '15 items', 
//     image: { uri: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80' } 
//   },
//   { 
//     id: 'used', 
//     name: 'Certified Used', 
//     count: '31 items', 
//     image: { uri: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80' } 
//   },
//   { 
//     id: 'promotions', 
//     name: 'Promotions', 
//     count: '48 items', 
//     image: { uri: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=80' } 
//   },
//   { 
//     id: 'phones', 
//     name: 'Phones & Tablets', 
//     count: '39 items', 
//     image: { uri: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80' } 
//   },
//   { 
//     id: 'tvs', 
//     name: 'TVs & Displays', 
//     count: '18 items', 
//     image: { uri: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80' } 
//   },
//   { 
//     id: 'tools', 
//     name: 'Tools & DIY', 
//     count: '25 items', 
//     image: { uri: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' } 
//   },
// ];

// const FEATURED_PRODUCTS = [
//   { id: '1', name: 'Acer Aspire Gaming Laptop', price: 'R 6,499', rating: '4.8', tag: 'Best Seller', image: img1 },
//   { id: '2', name: 'Sony WH-1000XM4 Headphones', price: 'R 2,999', rating: '4.9', tag: 'Top Rated', image: img1 },
//   { id: '3', name: 'Logitech Mechanical Keyboard', price: 'R 1,299', rating: '4.7', tag: 'Popular', image: img1 },
//   { id: '4', name: 'Instant Vortex Air Fryer', price: 'R 1,899', rating: '4.8', tag: 'Sale', image: img1 },
//   { id: '5', name: 'PlayStation 5 DualSense Controller', price: 'R 1,199', rating: '4.9', tag: 'Gaming', image: img1 },
//   { id: '6', name: 'Dell 27" 4K Monitor', price: 'R 4,500', rating: '4.6', tag: 'Pro', image: img1 },
// ];

// export default function HomeView() {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

//   // Responsive column sizing based on screen width
//   const { width } = useWindowDimensions();
//   let numColumns = 2;
//   if (width >= 1200) {
//     numColumns = 4; // Extreme width -> 4 columns
//   } else if (width >= 900) {
//     numColumns = 3; // Large width -> 3 columns
//   } else {
//     numColumns = 2; // Medium or small width -> 2 columns
//   }

//   const horizontalPadding = width >= 768 ? 40 : 20;
//   const gap = 14;
//   const totalGapWidth = gap * (numColumns - 1);
//   const availableWidth = width - (horizontalPadding * 2) - totalGapWidth;
//   const cardWidth = availableWidth / numColumns;

//   const handleCategoryPress = (category: typeof ALL_CATEGORIES[0]) => {
//     setSelectedCategory(category.name);
//     router.push({
//       pathname: '/product/products',
//       params: { category: category.name },
//     } as any);
//   };

//   return (
//     <View style={[styles.outerContainer, { paddingHorizontal: horizontalPadding }]}>
//       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
//         {/* Header & Subtitle */}
//         <View style={styles.headerContainer}>
//           <View>
//             <Text style={styles.headerTitle}>Explore Categories</Text>
//             <Text style={styles.headerSubtitle}>Select a category to discover curated products and promotions.</Text>
//           </View>
//           <View style={styles.badgeContainer}>
//             <Ionicons name="layers-outline" size={14} color="#E59400" />
//             <Text style={styles.badgeText}>{ALL_CATEGORIES.length} Categories</Text>
//           </View>
//         </View>

//         {/* Responsive Categories Grid */}
//         <View style={styles.categoryContainer}>
//           <View style={[styles.categoryGrid, { gap }]}>
//             {ALL_CATEGORIES.map((cat) => {
//               const isSelected = selectedCategory === cat.name;
//               const isHovered = hoveredCardId === cat.id;

//               return (
//                 <Pressable
//                   key={cat.id}
//                   style={[
//                     styles.categoryCard, 
//                     { width: cardWidth },
//                     isSelected && styles.selectedCategoryCard,
//                     isHovered && styles.hoveredCategoryCard,
//                   ]}
//                   onHoverIn={() => setHoveredCardId(cat.id)}
//                   onHoverOut={() => setHoveredCardId(null)}
//                   onPress={() => handleCategoryPress(cat)}
//                 >
//                   <ImageBackground 
//                     source={cat.image} 
//                     style={styles.categoryBgImage} 
//                     imageStyle={styles.categoryImageStyle}
//                   >
//                     <View style={[styles.categoryOverlay, isHovered && styles.categoryOverlayHover]}>
//                       {/* Item Count Badge */}
//                       <View style={styles.countBadge}>
//                         <Text style={styles.countText}>{cat.count}</Text>
//                       </View>

//                       {/* Category Details */}
//                       <View style={styles.categoryInfo}>
//                         <Text style={[styles.categoryText, isHovered && styles.categoryTextHover]} numberOfLines={1}>
//                           {cat.name}
//                         </Text>
//                         <View style={styles.browseRow}>
//                           <Text style={styles.browseText}>Browse items</Text>
//                           <Ionicons 
//                             name="chevron-forward" 
//                             size={12} 
//                             color="#FDE68A" 
//                             style={[styles.chevronIcon, isHovered && styles.chevronIconHover]} 
//                           />
//                         </View>
//                       </View>
//                     </View>
//                   </ImageBackground>
//                 </Pressable>
//               );
//             })}
//           </View>
//         </View>

//         {/* Improved Featured Products Section */}
//         <View style={styles.sectionHeaderRow}>
//           <View>
//             <Text style={styles.sectionTitle}>Featured Products</Text>
//             <Text style={styles.sectionSubtitle}>Handpicked top quality tech & gear</Text>
//           </View>
//           <Pressable onPress={() => router.push('/product/products' as any)} style={styles.seeAllButton}>
//             <Text style={styles.seeAllText}>See all</Text>
//             <Ionicons name="arrow-forward" size={13} color="#E59400" />
//           </Pressable>
//         </View>

//         {/* Improved Featured Products Horizontal Scroll */}
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll} contentContainerStyle={{ paddingBottom: 8 }}>
//           {FEATURED_PRODUCTS.map((item) => (
//             <Pressable 
//               key={item.id} 
//               style={styles.productCard}
//               onPress={() => router.push('/product/products' as any)}
//             >
//               {/* Product Tag Badge */}
//               <View style={styles.productTagBadge}>
//                 <Text style={styles.productTagText}>{item.tag}</Text>
//               </View>

//               <View style={styles.productImagePlaceholder}>
//                 <Image source={item.image} style={styles.productImage} resizeMode="cover" />
//               </View>

//               <View style={styles.productMetaRow}>
//                 <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
//                 <View style={styles.ratingContainer}>
//                   <Ionicons name="star" size={11} color="#F59E0B" />
//                   <Text style={styles.ratingText}>{item.rating}</Text>
//                 </View>
//               </View>

//               <View style={styles.productFooterRow}>
//                 <Text style={styles.productPrice}>{item.price}</Text>
//                 <View style={styles.quickAddButton}>
//                   <Ionicons name="cart-outline" size={14} color="#FFFFFF" />
//                 </View>
//               </View>
//             </Pressable>
//           ))}
//         </ScrollView>

//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   outerContainer: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     paddingTop: 20,
//   },
//   scrollContent: {
//     paddingBottom: 40,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 24,
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: '800',
//     color: '#111827',
//     letterSpacing: -0.5,
//   },
//   headerSubtitle: {
//     fontSize: 13,
//     color: '#6B7280',
//     marginTop: 4,
//   },
//   badgeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FEF3C7',
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#FDE68A',
//     gap: 4,
//   },
//   badgeText: {
//     fontSize: 11,
//     fontWeight: '700',
//     color: '#E59400',
//   },
//   categoryContainer: {
//     marginBottom: 36,
//   },
//   categoryGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   categoryCard: {
//     height: 165,
//     borderRadius: 20,
//     overflow: 'hidden',
//     backgroundColor: '#F3F4F6',
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.12,
//     shadowRadius: 8,
//     borderWidth: 2,
//     borderColor: 'transparent',
//     marginBottom: 14,
//     transitionProperty: 'all 0.3s ease',
//     // transition: 'all 0.3s ease',
//   },
//   hoveredCategoryCard: {
//     borderColor: '#E59400',
//     transform: [{ translateY: -4 }],
//     shadowOpacity: 0.22,
//     shadowRadius: 12,
//   },
//   selectedCategoryCard: {
//     borderColor: '#E59400',
//   },
//   categoryBgImage: {
//     width: '100%',
//     height: '100%',
//   },
//   categoryImageStyle: {
//     borderRadius: 18,
//   },
//   categoryOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.45)',
//     justifyContent: 'space-between',
//     padding: 14,
//   },
//   categoryOverlayHover: {
//     backgroundColor: 'rgba(0, 0, 0, 0.55)',
//   },
//   countBadge: {
//     alignSelf: 'flex-end',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   countText: {
//     color: '#FFFFFF',
//     fontSize: 10,
//     fontWeight: '600',
//   },
//   categoryInfo: {
//     justifyContent: 'flex-end',
//   },
//   categoryText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '700',
//     marginBottom: 2,
//   },
//   categoryTextHover: {
//     color: '#FDE68A',
//   },
//   browseRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   browseText: {
//     color: '#FEF3C7',
//     fontSize: 11,
//     fontWeight: '500',
//   },
//   chevronIcon: {
//     marginLeft: 4,
//   },
//   chevronIconHover: {
//     transform: [{ translateX: 3 }],
//   },
//   sectionHeaderRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-end',
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#111827',
//   },
//   sectionSubtitle: {
//     fontSize: 12,
//     color: '#6B7280',
//     marginTop: 2,
//   },
//   seeAllButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 4,
//   },
//   seeAllText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#E59400',
//   },
//   horizontalScroll: {
//     marginBottom: 16,
//   },
//   productCard: {
//     width: 175,
//     backgroundColor: '#F9FAFB',
//     borderRadius: 20,
//     padding: 12,
//     marginRight: 14,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     position: 'relative',
//     justifyContent: 'space-between',
//   },
//   productTagBadge: {
//     position: 'absolute',
//     top: 16,
//     left: 16,
//     zIndex: 2,
//     backgroundColor: 'rgba(229, 148, 0, 0.9)',
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//     borderRadius: 8,
//   },
//   productTagText: {
//     color: '#FFFFFF',
//     fontSize: 9,
//     fontWeight: '700',
//   },
//   productImagePlaceholder: {
//     width: '100%',
//     height: 115,
//     backgroundColor: '#FEF3C7',
//     borderRadius: 14,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//     overflow: 'hidden',
//   },
//   productImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 14,
//   },
//   productMetaRow: {
//     marginBottom: 8,
//   },
//   productName: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: '#1F2937',
//     marginBottom: 4,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 3,
//   },
//   ratingText: {
//     fontSize: 11,
//     fontWeight: '600',
//     color: '#4B5563',
//   },
//   productFooterRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 4,
//   },
//   productPrice: {
//     fontSize: 15,
//     fontWeight: '800',
//     color: '#E59400',
//   },
//   quickAddButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: '#E59400',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


// newer11
import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, ImageBackground, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import img1 from '../images/products/product1.jpeg';

const ALL_CATEGORIES = [
  { 
    id: 'computers', 
    name: 'Computers', 
    count: '34 items', 
    image: { uri: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'gaming', 
    name: 'Gaming', 
    count: '42 items', 
    image: { uri: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'electronics', 
    name: 'Electronics', 
    count: '56 items', 
    image: { uri: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'kitchen', 
    name: 'Kitchen', 
    count: '28 items', 
    image: { uri: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'audio', 
    name: 'Audio', 
    count: '19 items', 
    image: { uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'home-office', 
    name: 'Home Office', 
    count: '22 items', 
    image: { uri: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'new', 
    name: 'New Arrivals', 
    count: '15 items', 
    image: { uri: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'used', 
    name: 'Certified Used', 
    count: '31 items', 
    image: { uri: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'promotions', 
    name: 'Promotions', 
    count: '48 items', 
    image: { uri: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'phones', 
    name: 'Phones & Tablets', 
    count: '39 items', 
    image: { uri: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'tvs', 
    name: 'TVs & Displays', 
    count: '18 items', 
    image: { uri: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'tools', 
    name: 'Tools & DIY', 
    count: '25 items', 
    image: { uri: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' } 
  },
];

const FEATURED_PRODUCTS = [
  { id: '1', name: 'Acer Aspire Gaming Laptop', price: 'R 6,499', rating: '4.8', tag: 'Best Seller', image: img1 },
  { id: '2', name: 'Sony WH-1000XM4 Headphones', price: 'R 2,999', rating: '4.9', tag: 'Top Rated', image: img1 },
  { id: '3', name: 'Logitech Mechanical Keyboard', price: 'R 1,299', rating: '4.7', tag: 'Popular', image: img1 },
  { id: '4', name: 'Instant Vortex Air Fryer', price: 'R 1,899', rating: '4.8', tag: 'Sale', image: img1 },
  { id: '5', name: 'PlayStation 5 DualSense Controller', price: 'R 1,199', rating: '4.9', tag: 'Gaming', image: img1 },
  { id: '6', name: 'Dell 27" 4K Monitor', price: 'R 4,500', rating: '4.6', tag: 'Pro', image: img1 },
];

export default function HomeView() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const { width } = useWindowDimensions();

  // Determine card width percentage based on screen width thresholds
  let cardWidthPercentage = '48%'; // Medium / Small width -> 2 columns
  if (width >= 1200) {
    cardWidthPercentage = '23%'; // Extreme width -> 4 columns (approx 4 * 23% + gaps = 100%)
  } else if (width >= 900) {
    cardWidthPercentage = '31%'; // Large width -> 3 columns (approx 3 * 31% + gaps = 100%)
  }

  const horizontalPadding = width >= 768 ? 40 : 20;

  const handleCategoryPress = (category: typeof ALL_CATEGORIES[0]) => {
    setSelectedCategory(category.name);
    router.push({
      pathname: '/product/products',
      params: { category: category.name },
    } as any);
  };

  return (
    <View style={[styles.outerContainer, { paddingHorizontal: horizontalPadding }]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header & Subtitle */}
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerTitle}>Explore Categories</Text>
            <Text style={styles.headerSubtitle}>Select a category to discover curated products and promotions.</Text>
          </View>
          <View style={styles.badgeContainer}>
            <Ionicons name="layers-outline" size={14} color="#E59400" />
            <Text style={styles.badgeText}>{ALL_CATEGORIES.length} Categories</Text>
          </View>
        </View>

        {/* Responsive Categories Grid */}
        <View style={styles.categoryContainer}>
          <View style={styles.categoryGrid}>
            {ALL_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.name;
              const isHovered = hoveredCardId === cat.id;

              return (
                <Pressable
                  key={cat.id}
                  style={[
                    styles.categoryCard, 
                    { width: cardWidthPercentage as any },
                    isSelected && styles.selectedCategoryCard,
                    isHovered && styles.hoveredCategoryCard,
                  ]}
                  onHoverIn={() => setHoveredCardId(cat.id)}
                  onHoverOut={() => setHoveredCardId(null)}
                  onPress={() => handleCategoryPress(cat)}
                >
                  <ImageBackground 
                    source={cat.image} 
                    style={styles.categoryBgImage} 
                    imageStyle={styles.categoryImageStyle}
                  >
                    <View style={[styles.categoryOverlay, isHovered && styles.categoryOverlayHover]}>
                      <View style={styles.countBadge}>
                        <Text style={styles.countText}>{cat.count}</Text>
                      </View>

                      <View style={styles.categoryInfo}>
                        <Text style={[styles.categoryText, isHovered && styles.categoryTextHover]} numberOfLines={1}>
                          {cat.name}
                        </Text>
                        <View style={styles.browseRow}>
                          <Text style={styles.browseText}>Browse items</Text>
                          <Ionicons 
                            name="chevron-forward" 
                            size={12} 
                            color="#FDE68A" 
                            style={[styles.chevronIcon, isHovered && styles.chevronIconHover]} 
                          />
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Featured Products Section */}
        <View style={styles.sectionHeaderRow}>
          <View>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <Text style={styles.sectionSubtitle}>Handpicked top quality tech & gear</Text>
          </View>
          <Pressable onPress={() => router.push('/product/products' as any)} style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See all</Text>
            <Ionicons name="arrow-forward" size={13} color="#E59400" />
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll} contentContainerStyle={{ paddingBottom: 8 }}>
          {FEATURED_PRODUCTS.map((item) => (
            <Pressable 
              key={item.id} 
              style={styles.productCard}
              onPress={() => router.push('/product/products' as any)}
            >
              <View style={styles.productTagBadge}>
                <Text style={styles.productTagText}>{item.tag}</Text>
              </View>

              <View style={styles.productImagePlaceholder}>
                <Image source={item.image} style={styles.productImage} resizeMode="cover" />
              </View>

              <View style={styles.productMetaRow}>
                <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={11} color="#F59E0B" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
              </View>

              <View style={styles.productFooterRow}>
                <Text style={styles.productPrice}>{item.price}</Text>
                <View style={styles.quickAddButton}>
                  <Ionicons name="cart-outline" size={14} color="#FFFFFF" />
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FDE68A',
    gap: 4,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#E59400',
  },
  categoryContainer: {
    marginBottom: 36,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Perfectly distributes columns across the row without blank trailing margins
  },
  categoryCard: {
    height: 165,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#F3F4F6',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
    marginBottom: 16,
  },
  hoveredCategoryCard: {
    borderColor: '#E59400',
    transform: [{ translateY: -4 }],
    shadowOpacity: 0.22,
    shadowRadius: 12,
  },
  selectedCategoryCard: {
    borderColor: '#E59400',
  },
  categoryBgImage: {
    width: '100%',
    height: '100%',
  },
  categoryImageStyle: {
    borderRadius: 18,
  },
  categoryOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'space-between',
    padding: 14,
  },
  categoryOverlayHover: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  countBadge: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  countText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
  categoryInfo: {
    justifyContent: 'flex-end',
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  categoryTextHover: {
    color: '#FDE68A',
  },
  browseRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  browseText: {
    color: '#FEF3C7',
    fontSize: 11,
    fontWeight: '500',
  },
  chevronIcon: {
    marginLeft: 4,
  },
  chevronIconHover: {
    transform: [{ translateX: 3 }],
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E59400',
  },
  horizontalScroll: {
    marginBottom: 16,
  },
  productCard: {
    width: 175,
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    padding: 12,
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    position: 'relative',
    justifyContent: 'space-between',
  },
  productTagBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 2,
    backgroundColor: 'rgba(229, 148, 0, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  productTagText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },
  productImagePlaceholder: {
    width: '100%',
    height: 115,
    backgroundColor: '#FEF3C7',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 14,
  },
  productMetaRow: {
    marginBottom: 8,
  },
  productName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  ratingText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#4B5563',
  },
  productFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '800',
    color: '#E59400',
  },
  quickAddButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E59400',
    justifyContent: 'center',
    alignItems: 'center',
  },
});