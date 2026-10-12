// // import * as Device from 'expo-device';
// // import { Platform, StyleSheet } from 'react-native';
// // import { SafeAreaView } from 'react-native-safe-area-context';

// // import { AnimatedIcon } from '@/components/animated-icon';
// // import { HintRow } from '@/components/hint-row';
// // import { ThemedText } from '@/components/themed-text';
// // import { ThemedView } from '@/components/themed-view';
// // import { WebBadge } from '@/components/web-badge';
// // import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

// // function getDevMenuHint() {
// //   if (Platform.OS === 'web') {
// //     return <ThemedText type="small">use browser devtools</ThemedText>;
// //   }
// //   if (Device.isDevice) {
// //     return (
// //       <ThemedText type="small">
// //         shake device or press <ThemedText type="code">m</ThemedText> in terminal
// //       </ThemedText>
// //     );
// //   }
// //   const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
// //   return (
// //     <ThemedText type="small">
// //       press <ThemedText type="code">{shortcut}</ThemedText>
// //     </ThemedText>
// //   );
// // }

// // export default function HomeScreen() {
// //   return (
// //     <ThemedView style={styles.container}>
// //       <SafeAreaView style={styles.safeArea}>
// //         <ThemedView style={styles.heroSection}>
// //           <AnimatedIcon />
// //           <ThemedText type="title" style={styles.title}>
// //             Welcome to&nbsp;Expo
// //           </ThemedText>
// //         </ThemedView>

// //         <ThemedText type="code" style={styles.code}>
// //           get started
// //         </ThemedText>

// //         <ThemedView type="backgroundElement" style={styles.stepContainer}>
// //           <HintRow
// //             title="Try editing"
// //             hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
// //           />
// //           <HintRow title="Dev tools" hint={getDevMenuHint()} />
// //           <HintRow
// //             title="Fresh start"
// //             hint={<ThemedText type="code">npm run reset-project</ThemedText>}
// //           />
// //         </ThemedView>

// //         {Platform.OS === 'web' && <WebBadge />}
// //       </SafeAreaView>
// //     </ThemedView>
// //   );
// // }

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


// // newer
// // import React from 'react';
// // import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';

// // export default function HomeScreen() {
// //   return (
// //     <View className="flex-1 bg-[#3B66FF] justify-center items-center px-6">
// //       <View className="w-full max-w-sm space-y-4 items-center">
// //         {/* Search Products Input */}
// //         <View className="w-full bg-transparent border border-white/60 rounded-full px-5 py-3 flex-row justify-between items-center">
// //           <TextInput
// //             placeholder="Search Products"
// //             placeholderTextColor="#E0E7FF"
// //             className="text-white flex-1 text-sm mr-2"
// //           />
// //           <Ionicons name="search-outline" size={18} color="white" />
// //         </View>

// //         {/* Select a Store Input */}
// //         <View className="w-full bg-transparent border border-white/60 rounded-full px-5 py-3 flex-row justify-between items-center">
// //           <TextInput
// //             placeholder="Select a Store"
// //             placeholderTextColor="#E0E7FF"
// //             className="text-white flex-1 text-sm mr-2"
// //           />
// //           <Ionicons name="search-outline" size={18} color="white" />
// //         </View>

// //         {/* Search Action Button */}
// //         <TouchableOpacity className="w-full bg-white rounded-full py-3.5 items-center mt-2 shadow-md">
// //           <Text className="text-[#3B66FF] font-bold text-base">Search</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // }


// // newer3
// // import React from 'react';
// // import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';

// // export default function HomeScreen() {
// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.cardWrapper}>
// //         {/* Search Products Input */}
// //         <View style={styles.inputPill}>
// //           <TextInput
// //             placeholder="Search Products"
// //             placeholderTextColor="#E0E7FF"
// //             style={styles.textInput}
// //           />
// //           <Ionicons name="search-outline" size={18} color="white" />
// //         </View>

// //         {/* Select a Store Input */}
// //         <View style={styles.inputPill}>
// //           <TextInput
// //             placeholder="Select a Store"
// //             placeholderTextColor="#E0E7FF"
// //             style={styles.textInput}
// //           />
// //           <Ionicons name="search-outline" size={18} color="white" />
// //         </View>

// //         {/* Search Action Button */}
// //         <TouchableOpacity activeOpacity={0.85} style={styles.searchButton}>
// //           <Text style={styles.searchButtonText}>Search</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // }



// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     flexDirection: 'row',
// // //   },
// // //   safeArea: {
// // //     flex: 1,
// // //     paddingHorizontal: Spacing.four,
// // //     alignItems: 'center',
// // //     gap: Spacing.three,
// // //     paddingBottom: BottomTabInset + Spacing.three,
// // //     maxWidth: MaxContentWidth,
// // //   },
// // //   heroSection: {
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     flex: 1,
// // //     paddingHorizontal: Spacing.four,
// // //     gap: Spacing.four,
// // //   },
// // //   title: {
// // //     textAlign: 'center',
// // //   },
// // //   code: {
// // //     textTransform: 'uppercase',
// // //   },
// // //   stepContainer: {
// // //     gap: Spacing.three,
// // //     alignSelf: 'stretch',
// // //     paddingHorizontal: Spacing.three,
// // //     paddingVertical: Spacing.four,
// // //     borderRadius: Spacing.four,
// // //   },
// // // });


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     // backgroundColor: '#3B66FF',

// //     backgroundColor: '#E59400',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     paddingHorizontal: 24,
// //   },
// //   cardWrapper: {
// //     width: '100%',
// //     maxWidth: 360,
// //     alignItems: 'center',
// //     gap: 16,
// //   },
// //   inputPill: {
// //     width: '100%',
// //     backgroundColor: 'transparent',
// //     borderWidth: 1.5,
// //     borderColor: 'rgba(255, 255, 255, 0.6)',
// //     borderRadius: 9999,
// //     paddingHorizontal: 20,
// //     paddingVertical: 12,
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   textInput: {
// //     color: '#FFFFFF',
// //     flex: 1,
// //     fontSize: 14,
// //     marginRight: 8,
// //     outlineStyle: 'none' as any,
// //   },
// //   searchButton: {
// //     width: '100%',
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: 9999,
// //     paddingVertical: 14,
// //     alignItems: 'center',
// //     marginTop: 8,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 8,
// //     elevation: 4,
// //   },
// //   searchButtonText: {
// //     color: '#3B66FF',
// //     fontWeight: '700',
// //     fontSize: 16,
// //   },
// // });



// // newer4
// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { router } from 'expo-router';

// import img1 from '../images/products/product1.jpeg';
// // import img1 from '@/src/images/products/product1.jpeg';


// const FEATURED_PRODUCTS = [
//   { id: '1', name: 'Acer Aspire Gaming Laptop', price: 'R 6,499', image: img1},
//   { id: '2', name: 'Sony WH-1000XM4 Headphones', price: 'R 2,999', image: img1 },
//   { id: '3', name: 'Logitech Mechanical Keyboard', price: 'R 1,299' },
//   { id: '4', name: 'Instant Vortex Air Fryer', price: 'R 1,899' },
//   { id: '5', name: 'PlayStation 5 DualSense Controller', price: 'R 1,199' },
//   { id: '6', name: 'Dell 27" 4K Monitor', price: 'R 4,500' },
//   { id: '7', name: 'DeLonghi Espresso Machine', price: 'R 3,299' },
//   { id: '8', name: 'Apple iPad Air (5th Gen)', price: 'R 8,999' },
// ];

// const CATEGORIES = ['Computers', 'Gaming', 'Electronics', 'Kitchen', 'Audio', 'Home Office'];

// export default function HomeView() {
//   return (
//     <View style={styles.outerContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
//           <Text style={styles.topHeaderTitle}>The Pawn Shop</Text>

//         <View style={styles.whiteCardContainer}>
          
//           {/* Header Title */}
//           {/* <Text style={styles.topHeaderTitle}>The Pawn Shop</Text> */}

//           {/* Featured Products Section (6-8 items grid/scroll) */}
//           <View style={styles.sectionHeaderRow}>
//             <Text style={styles.sectionTitle}>Featured Products</Text>
//             {/* <TouchableOpacity>
//               <Text style={styles.seeAllText}>See all</Text>
//             </TouchableOpacity> */}

//                <TouchableOpacity 
//                                       onPress={() => router.push('/product/products' as any)}
//                         >
//                           <Text style={styles.seeAllText}>See all</Text>
//                         </TouchableOpacity>
//           </View>

//           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
//             {FEATURED_PRODUCTS.map((item) => (
//               <View key={item.id} style={styles.productCard}>
//                 <View style={styles.productImagePlaceholder}>
//                   {/* <Ionicons name="cube-outline" size={36} color="#E59400" /> */}
//                   <Image source={img1} style={styles.productImage} />

//                 </View>
//                 <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
//                 <Text style={styles.productPrice}>{item.price}</Text>
//               </View>
//             ))}
//           </ScrollView>

//           {/* Categories Section (Matching Image References) */}
//           <View style={[styles.sectionHeaderRow, { marginTop: 32 }]}>
//             <Text style={styles.sectionTitle}>Shop by Category</Text>
//             {/* <TouchableOpacity>
//               <Text style={styles.seeAllText}>See all</Text>
//             </TouchableOpacity> */}

//                <TouchableOpacity 
//                                       onPress={() => router.push('/product/products' as any)}
//                         >
//                           <Text style={styles.seeAllText}>See all</Text>
//                         </TouchableOpacity>
//           </View>

//           <View style={styles.categoryGrid}>
//             {CATEGORIES.map((cat, index) => (
//               <TouchableOpacity key={index} style={styles.categoryChip}>
//                 <Text style={styles.categoryText}>{cat}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//    productImage: {
//     width: '100%',
//     height: 100,
//     borderRadius: 12,
//     resizeMode: 'cover',
//   },
  
//   outerContainer: {
//     flex: 1,
//     backgroundColor: '#E59400',
//     padding: 16,
//   },
//   scrollContent: {
//     paddingBottom: 40,
//   },
//   whiteCardContainer: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 32,
//     padding: 24,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 12,
//     elevation: 5,
//   },
//   topHeaderTitle: {
//     fontSize: 30,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 20,
//     textAlign: 'center',
//   },

//   // topHeaderTitle: {
//   //   fontSize: 16,
//   //   fontWeight: '600',
//   //   color: '#333',
//   //   marginBottom: 20,
//   //   textAlign: 'center',
//   // },
//   sectionHeaderRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 14,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#111827',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#6B7280',
//     fontWeight: '500',
//   },
//   horizontalScroll: {
//     marginBottom: 10,
//   },
//   productCard: {
//     width: 150,
//     backgroundColor: '#F9FAFB',
//     borderRadius: 16,
//     padding: 12,
//     marginRight: 14,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//   },
//   productImagePlaceholder: {
//     width: '100%',
//     height: 100,
//     backgroundColor: '#FEF3C7',
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   productName: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: '#1F2937',
//     marginBottom: 4,
//   },
//   productPrice: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: '#E59400',
//   },
//   categoryGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 12,
//     justifyContent: 'space-between',
//   },
//   categoryChip: {
//     backgroundColor: '#E59400',
//     borderRadius: 14,
//     paddingVertical: 14,
//     paddingHorizontal: 16,
//     width: '31%',
//     alignItems: 'center',
//     marginBottom: 4,
//   },
//   categoryText: {
//     color: '#FFFFFF',
//     fontSize: 13,
//     fontWeight: '600',
//   },
// });



// // newer5
// // import React, { useState } from 'react';
// // import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';
// // import { router } from 'expo-router';
// // import "../global.css"

// // import img1 from '../images/products/product1.jpeg';

// // const FEATURED_PRODUCTS = [
// //   { id: '1', name: 'Acer Aspire Gaming Laptop', price: 'R 6,499', image: img1 },
// //   { id: '2', name: 'Sony WH-1000XM4 Headphones', price: 'R 2,999', image: img1 },
// //   { id: '3', name: 'Logitech Mechanical Keyboard', price: 'R 1,299' },
// //   { id: '4', name: 'Instant Vortex Air Fryer', price: 'R 1,899' },
// //   { id: '5', name: 'PlayStation 5 DualSense Controller', price: 'R 1,199' },
// //   { id: '6', name: 'Dell 27" 4K Monitor', price: 'R 4,500' },
// //   { id: '7', name: 'DeLonghi Espresso Machine', price: 'R 3,299' },
// //   { id: '8', name: 'Apple iPad Air (5th Gen)', price: 'R 8,999' },
// // ];

// // const CATEGORIES_DEFAULT = ['Computers', 'Gaming', 'Electronics', 'Kitchen', 'Audio', 'Home Office'];
// // const CATEGORIES_EXPANDED = [
// //   'Computers', 'Gaming', 'Electronics',
// //   'Kitchen', 'Kitchen', 'Kitchen',
// //   'Computers', 'Gaming', 'Electronics',
// //   'Kitchen', 'Kitchen', 'Kitchen',
// //   'Computers', 'Gaming', 'Electronics',
// //   'Kitchen', 'Kitchen', 'Kitchen',
// // ];

// // export default function HomeView() {
// //   const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(false);

// //   const displayedCategories = isCategoriesExpanded ? CATEGORIES_EXPANDED : CATEGORIES_DEFAULT;

// //   return (
// //     <View className="flex-1 bg-[#FFE8B6] px-4 pt-2">
// //       <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        
// //         {/* Shop by Category Card Widget */}
// //         <View className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm mb-6">
// //           <View className="flex-row justify-between items-center mb-4">
// //             <Text className="text-lg font-bold text-gray-900">Shop by Category</Text>
// //             <TouchableOpacity onPress={() => setIsCategoriesExpanded(!isCategoriesExpanded)}>
// //               <Text className="text-sm font-medium text-gray-500">
// //                 {isCategoriesExpanded ? 'See less' : 'See all'}
// //               </Text>
// //             </TouchableOpacity>
// //           </View>

// //           <View className="flex-row flex-wrap gap-3 justify-between">
// //             {displayedCategories.map((cat, index) => (
// //               <TouchableOpacity
// //                 key={index}
// //                 className="bg-[#E59400] rounded-2xl py-3.5 px-2 w-[31%] items-center mb-1 shadow-sm"
// //               >
// //                 <Text className="text-white text-xs font-semibold text-center" numberOfLines={1}>
// //                   {cat}
// //                 </Text>
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         </View>

// //         {/* Section Heading & Results */}
// //         <View className="items-center my-3">
// //           <Text className="text-3xl font-extrabold text-gray-900 mb-1">Computers</Text>
// //           <Text className="text-sm font-semibold text-gray-700">Number of results: 34</Text>
// //         </View>

// //         {/* Featured Products Section Header */}
// //         <View className="flex-row justify-between items-center mb-3 mt-4">
// //           <Text className="text-xl font-bold text-gray-900">Featured Products</Text>
// //           <TouchableOpacity onPress={() => router.push('/product/products' as any)}>
// //             <Text className="text-sm font-medium text-gray-500">See all</Text>
// //           </TouchableOpacity>
// //         </View>

// //         {/* Featured Products Horizontal Scroll */}
// //         <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
// //           {FEATURED_PRODUCTS.map((item) => (
// //             <View key={item.id} className="bg-gray-50 rounded-2xl p-3 mr-3.5 border border-gray-200 w-[150px]">
// //               <View className="w-full h-24 bg-amber-100 rounded-xl justify-center items-center mb-2.5 overflow-hidden">
// //                 {item.image ? (
// //                   <Image source={item.image} className="w-full h-full rounded-xl" resizeMode="cover" />
// //                 ) : (
// //                   <Ionicons name="cube-outline" size={32} color="#E59400" />
// //                 )}
// //               </View>
// //               <Text numberOfLines={1} className="text-xs font-semibold text-gray-800 mb-1">{item.name}</Text>
// //               <Text className="text-sm font-bold text-[#E59400]">{item.price}</Text>
// //             </View>
// //           ))}
// //         </ScrollView>

// //       </ScrollView>
// //     </View>
// //   );
// // }



// newer6 works. 

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import img1 from '../images/products/product1.jpeg';

const FEATURED_PRODUCTS = [
  { id: '1', name: 'Acer Aspire Gaming Laptop', price: 'R 6,499', image: img1 },
  { id: '2', name: 'Sony WH-1000XM4 Headphones', price: 'R 2,999', image: img1 },
  { id: '3', name: 'Logitech Mechanical Keyboard', price: 'R 1,299' },
  { id: '4', name: 'Instant Vortex Air Fryer', price: 'R 1,899' },
  { id: '5', name: 'PlayStation 5 DualSense Controller', price: 'R 1,199' },
  { id: '6', name: 'Dell 27" 4K Monitor', price: 'R 4,500' },
  { id: '7', name: 'DeLonghi Espresso Machine', price: 'R 3,299' },
  { id: '8', name: 'Apple iPad Air (5th Gen)', price: 'R 8,999' },
];

const CATEGORIES_DEFAULT = ['Computers', 'Gaming', 'Electronics', 'Kitchen', 'Audio', 'Home Office'];
const CATEGORIES_EXPANDED = [
  'New', 'Used', 'Promotions',

  'Computers', 'Gaming', 'Electronics',
  'Kitchen', 'Phones', 'TVs',
  'Audio', 'Tools', 'Fitness',
  // 'Computers', 'Gaming', 'Electronics',
  // 'Kitchen', 'Kitchen', 'Kitchen',
];

export default function HomeView() {
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(false);
  const displayedCategories = isCategoriesExpanded ? CATEGORIES_EXPANDED : CATEGORIES_DEFAULT;

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Shop by Category Card Widget */}
        <View style={styles.categoryCard}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Shop by Category</Text>
            <TouchableOpacity onPress={() => setIsCategoriesExpanded(!isCategoriesExpanded)}>
              <Text style={styles.seeAllText}>
                {isCategoriesExpanded ? 'See less' : 'See all'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoryGrid}>
            {displayedCategories.map((cat, index) => (
              <TouchableOpacity key={index} style={styles.categoryChip}>
                <Text style={styles.categoryText} numberOfLines={1}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Section Heading & Results */}
        {/* <View style={styles.resultsHeader}>
          <Text style={styles.resultsTitle}>Computers</Text>
          <Text style={styles.resultsCount}>Number of results: 34</Text>
        </View> */}

        {/* Featured Products Section Header */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <TouchableOpacity onPress={() => router.push('/product/products' as any)}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Products Horizontal Scroll */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {FEATURED_PRODUCTS.map((item) => (
            <View key={item.id} style={styles.productCard}>
              <View style={styles.productImagePlaceholder}>
                {item.image ? (
                  <Image source={img1} style={styles.productImage} resizeMode="cover" />
                  // <Image source={item.image} style={styles.productImage} resizeMode="cover" />

                ) : (
                  // <Ionicons name="cube-outline" size={32} color="#E59400" />
                  <Image source={img1} style={styles.productImage} resizeMode="cover" />
               
               )}
              </View>
              <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          ))}
        </ScrollView>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,

    // backgroundColor: '#FFE8B6',
    // backgroundColor: '#ffc400',
    backgroundColor: '#ffffff',

    // padding: 16,
    padding: 40,
    paddingStart: 60, 
    paddingEnd: 60, 


  },
  scrollContent: {
    paddingBottom: 40,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
    elevation: 3,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  categoryChip: {
    backgroundColor: '#E59400',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 8,

    // width: '31%',
    // width: '18%',
    width: '23%',

    // height: '40%', 
    // height: '60px', 

    alignItems: 'center',
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  resultsHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resultsTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },
  resultsCount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
  },
  horizontalScroll: {
    marginBottom: 16,
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
    height: 96,
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  productName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '800',
    color: '#E59400',
  },
});



// newer 7
// import React from 'react';
// import { Platform } from 'react-native';
// import HomeView from './home'; // Your mobile home view component
// import WebLandingView from '@/components/web-landing-view';

// export default function IndexRoute() {
//   if (Platform.OS === 'web') {
//     return <WebLandingView />;
//   }

//   return <HomeView />;
// }



// newer 8
// import React from 'react';
// import HomeView from './home';

// export default function IndexRoute() {
//   return <HomeView />;
// }
