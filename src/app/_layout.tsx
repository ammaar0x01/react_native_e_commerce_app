// // import React, { useState } from 'react';
// // import { Tabs, ThemeProvider, DarkTheme, DefaultTheme, useRouter, usePathname } from 'expo-router';
// // import * as SplashScreen from 'expo-splash-screen';
// // import {
// //   useColorScheme,
// //   Platform,
// //   useWindowDimensions,
// //   View,
// //   TouchableOpacity,
// //   Text,
// //   Pressable,
// //   TextInput,
// //   StyleSheet,
// // } from 'react-native';
// // import { useSafeAreaInsets } from 'react-native-safe-area-context';
// // import {
// //   Ionicons,
// //   MaterialCommunityIcons,
// //   Octicons,
// // } from '@expo/vector-icons';

// // import { AnimatedSplashOverlay } from '@/components/animated-icon';

// // SplashScreen.preventAutoHideAsync();

// // interface NavItemProps {
// //   icon: React.ReactNode;
// //   label: string;
// //   path: string;
// //   activePath: string;
// //   onPress: () => void;
// // }

// // function SidebarIcon({ icon, label, path, activePath, onPress }: NavItemProps) {
// //   const [hovered, setHovered] = useState(false);
// //   const isActive = activePath === path;

// //   return (
// //     <View style={{ position: 'relative', alignItems: 'center' }}>
// //       <Pressable
// //         onPress={onPress}
// //         onHoverIn={() => setHovered(true)}
// //         onHoverOut={() => setHovered(false)}
// //         style={({ pressed }) => [
// //           {
// //             padding: 10,
// //             borderRadius: 12,
// //             alignItems: 'center',
// //             justifyContent: 'center',
// //             backgroundColor: pressed
// //               ? 'rgba(255, 255, 255, 0.25)'
// //               : hovered
// //               ? 'rgba(255, 255, 255, 0.15)'
// //               : isActive
// //               ? 'rgba(255, 255, 255, 0.1)'
// //               : 'transparent',
// //           },
// //         ]}
// //       >
// //         {icon}
// //       </Pressable>

// //       {hovered && (
// //         <View
// //           style={{
// //             position: 'absolute',
// //             left: 70,
// //             top: '50%',
// //             transform: [{ translateY: -14 }],
// //             backgroundColor: '#1f2937',
// //             paddingHorizontal: 8,
// //             paddingVertical: 4,
// //             borderRadius: 6,
// //             zIndex: 100,
// //             shadowColor: '#000',
// //             shadowOffset: { width: 0, height: 2 },
// //             shadowOpacity: 0.2,
// //             shadowRadius: 3,
// //           }}
// //         >
// //           <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: '600' }}>{label}</Text>
// //         </View>
// //       )}
// //     </View>
// //   );
// // }

// // export default function TabLayout() {
// //   const colorScheme = useColorScheme();
// //   const insets = useSafeAreaInsets();
// //   const { width } = useWindowDimensions();
// //   const router = useRouter();
// //   const pathname = usePathname();

// //   const isWeb = Platform.OS === 'web';
// //   const isDesktop = isWeb && width >= 768;
// //   const isWebMobile = isWeb && width < 768;
// //   const isMobileApp = !isWeb; // Native iOS / Android app version

// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [isSearching, setIsSearching] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState('');

// //   const bottomPadding = isWeb ? 8 : Math.max(insets.bottom, 12);
// //   const totalBarHeight = 60 + bottomPadding;

// //   const navItems = [
// //     { label: 'Home', path: '/', icon: <Ionicons name="home-outline" size={24} color="white" /> },
// //     { label: 'Search', path: '/search', icon: <Ionicons name="search-outline" size={24} color="white" /> },
// //     { label: 'Stores', path: '/stores', icon: <Ionicons name="location-outline" size={24} color="white" /> },
// //     { label: 'Account', path: '/account', icon: <Ionicons name="person-circle-outline" size={24} color="white" /> },
// //     { label: 'Cart', path: '/cart', icon: <Ionicons name="cart-outline" size={24} color="white" /> },
// //     { label: 'Sell', path: '/sell', icon: <MaterialCommunityIcons name="cash-multiple" size={24} color="white" /> },
// //   ];

// //   return (
// //     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
// //       <AnimatedSplashOverlay />

// //       <View style={{ flex: 1, width: '100%', height: '100%' }}>
        
// //         {/* Sticky Mobile App Top Header (Native app only) */}
// //         {isMobileApp && (
// //           <View style={[styles.mobileTopBar, { paddingTop: Math.max(insets.top, 12) }]}>
// //             {isSearching ? (
// //               <View style={styles.searchBarActiveContainer}>
// //                 <TextInput
// //                   placeholder="Search products..."
// //                   placeholderTextColor="#888888"
// //                   value={searchQuery}
// //                   onChangeText={setSearchQuery}
// //                   autoFocus
// //                   style={styles.searchInput}
// //                 />
// //                 <TouchableOpacity
// //                   onPress={() => {
// //                     setIsSearching(false);
// //                     setSearchQuery('');
// //                   }}
// //                 >
// //                   <Text style={styles.cancelText}>Cancel</Text>
// //                 </TouchableOpacity>
// //               </View>
// //             ) : (
// //               <View style={styles.topBarDefaultContainer}>
// //                 <View>
// //                   <Text style={styles.brandSub}>The</Text>
// //                   <Text style={styles.brandMain}>PawnShop</Text>
// //                 </View>

// //                 <View style={styles.topBarIconsRow}>
// //                   <TouchableOpacity
// //                     onPress={() => setIsSearching(true)}
// //                     style={styles.iconButton}
// //                   >
// //                     <Ionicons name="search-outline" size={24} color="white" />
// //                   </TouchableOpacity>

// //                   <TouchableOpacity
// //                     onPress={() => router.push('/cart' as any)}
// //                     style={styles.iconButton}
// //                   >
// //                     <Ionicons name="cart-outline" size={24} color="white" />
// //                   </TouchableOpacity>
// //                 </View>
// //               </View>
// //             )}
// //           </View>
// //         )}

// //         {/* Web Mobile Top Bar */}
// //         {isWebMobile && (
// //           <View style={{ backgroundColor: '#000000', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 14, zIndex: 50 }}>
// //             <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 18 }}>The PawnShop</Text>
// //             <TouchableOpacity onPress={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ padding: 4 }}>
// //               <Ionicons name={mobileMenuOpen ? 'close' : 'menu'} size={28} color="white" />
// //             </TouchableOpacity>
// //           </View>
// //         )}

// //         {/* Web Mobile Dropdown Menu */}
// //         {isWebMobile && mobileMenuOpen && (
// //           <View style={{ backgroundColor: '#0a0a0a', paddingHorizontal: 24, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#222222', zIndex: 40 }}>
// //             {navItems.map((item) => (
// //               <TouchableOpacity
// //                 key={item.path}
// //                 onPress={() => { router.push(item.path as any); setMobileMenuOpen(false); }}
// //                 style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }}
// //               >
// //                 {item.icon}
// //                 <Text style={{ color: 'white', fontWeight: '600', marginLeft: 16, fontSize: 15 }}>{item.label}</Text>
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         )}

// //         <View style={{ flex: 1, flexDirection: 'row', width: '100%', height: '100%', backgroundColor: '#E59400' }}>
// //           {/* Desktop Web Sidebar */}
// //           {isDesktop && (
// //             <View
// //               style={{
// //                 width: 76,
// //                 backgroundColor: '#000000',
// //                 flexDirection: 'column',
// //                 justifyContent: 'space-between',
// //                 alignItems: 'center',
// //                 paddingVertical: 28,
// //                 paddingHorizontal: 8,
// //                 zIndex: 50,
// //                 height: '100%',
// //               }}
// //             >
// //               <View style={{ flexDirection: 'column', alignItems: 'center', gap: 18 }}>
// //                 {navItems.map((item) => (
// //                   <SidebarIcon
// //                     key={item.path}
// //                     icon={item.icon}
// //                     label={item.label}
// //                     path={item.path}
// //                     activePath={pathname}
// //                     onPress={() => router.push(item.path as any)}
// //                   />
// //                 ))}
// //               </View>

// //               <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, borderRadius: 12 }}>
// //                 <Octicons name="arrow-left" size={22} color="white" />
// //               </TouchableOpacity>
// //             </View>
// //           )}

// //           {/* Screen Content Wrapper */}
// //           <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#E59400' }}>
// //             <Tabs
// //               screenOptions={{
// //                 headerShown: false,
// //                 tabBarActiveTintColor: '#FFFFFF',
// //                 tabBarInactiveTintColor: '#FFEECB',
// //                 tabBarStyle: isWeb
// //                   ? { display: 'none' }
// //                   : {
// //                       backgroundColor: '#070500',
// //                       // borderTopLeftRadius: 24,
// //                       // borderTopRightRadius: 24,
// //                       borderTopWidth: 0,
// //                       height: totalBarHeight,
// //                       paddingBottom: bottomPadding,
// //                       paddingTop: 8,
// //                       position: 'absolute',
// //                       bottom: 0,
// //                       left: 0,
// //                       right: 0,
// //                       elevation: 8,
// //                     },
// //                 sceneStyle: {
// //                   backgroundColor: '#E59400',
// //                   paddingTop: isMobileApp ? 65 : 0, // Prevent content from hiding under sticky mobile header
// //                   paddingBottom: isWeb ? 0 : totalBarHeight,
// //                 },
// //               }}
// //             >
// //               <Tabs.Screen name="index" options={{ title: 'Home' }} />
// //               <Tabs.Screen name="sell" options={{ title: 'Sell' }} />
// //               <Tabs.Screen name="stores" options={{ title: 'Stores' }} />
// //               <Tabs.Screen name="account" options={{ title: 'Account' }} />
// //             </Tabs>
// //           </View>
// //         </View>
// //       </View>
// //     </ThemeProvider>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   mobileTopBar: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     backgroundColor: '#E59400',
// //     paddingHorizontal: 20,
// //     paddingBottom: 12,
// //     zIndex: 100,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 4,
// //   },
// //   topBarDefaultContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   brandSub: {
// //     fontSize: 12,
// //     fontWeight: '600',
// //     color: '#FFFFFF',
// //     lineHeight: 14,
// //   },
// //   brandMain: {
// //     fontSize: 18,
// //     fontWeight: '800',
// //     color: '#FFFFFF',
// //   },
// //   topBarIconsRow: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 16,
// //   },
// //   iconButton: {
// //     padding: 4,
// //   },
// //   searchBarActiveContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: 24,
// //     paddingHorizontal: 16,
// //     paddingVertical: 8,
// //     gap: 12,
// //   },
// //   searchInput: {
// //     flex: 1,
// //     fontSize: 14,
// //     color: '#111827',
// //   },
// //   cancelText: {
// //     fontSize: 14,
// //     fontWeight: '700',
// //     color: '#D97706',
// //   },
// // });




// // oldeer
// // newer5
// import React, { useState } from 'react';
// import { Tabs, ThemeProvider, DarkTheme, DefaultTheme, useRouter, usePathname } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import {
//   useColorScheme,
//   Platform,
//   useWindowDimensions,
//   View,
//   TouchableOpacity,
//   Text,
//   Pressable,
// } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import {
//   Ionicons,
//   MaterialCommunityIcons,
//   Octicons,
// } from '@expo/vector-icons';

// import { AnimatedSplashOverlay } from '@/components/animated-icon';

// SplashScreen.preventAutoHideAsync();

// interface NavItemProps {
//   icon: React.ReactNode;
//   label: string;
//   path: string;
//   activePath: string;
//   onPress: () => void;
// }

// function SidebarIcon({ icon, label, path, activePath, onPress }: NavItemProps) {
//   const [hovered, setHovered] = useState(false);
//   const isActive = activePath === path;

//   return (
//     <View style={{ position: 'relative', alignItems: 'center' }}>
//       <Pressable
//         onPress={onPress}
//         onHoverIn={() => setHovered(true)}
//         onHoverOut={() => setHovered(false)}
//         style={({ pressed }) => [
//           {
//             padding: 10,
//             borderRadius: 12,
//             alignItems: 'center',
//             justifyContent: 'center',
//             backgroundColor: pressed
//               ? 'rgba(255, 255, 255, 0.25)'
//               : hovered
//               ? 'rgba(255, 255, 255, 0.15)'
//               : isActive
//               ? 'rgba(255, 255, 255, 0.1)'
//               : 'transparent',
//           },
//         ]}
//       >
//         {icon}
//       </Pressable>

//       {/* Tooltip on Hover */}
//       {hovered && (
//         <View
//           style={{
//             position: 'absolute',
//             left: 70,
//             top: '50%',
//             transform: [{ translateY: -14 }],
//             backgroundColor: '#1f2937',
//             paddingHorizontal: 8,
//             paddingVertical: 4,
//             borderRadius: 6,
//             zIndex: 100,
//             shadowColor: '#000',
//             shadowOffset: { width: 0, height: 2 },
//             shadowOpacity: 0.2,
//             shadowRadius: 3,
//           }}
//         >
//           <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: '600' }}>{label}</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// export default function TabLayout() {
//   const colorScheme = useColorScheme();
//   const insets = useSafeAreaInsets();
//   const { width } = useWindowDimensions();
//   const router = useRouter();
//   const pathname = usePathname();

//   const isLoginScreen = pathname === '/login';

// // Inside your return:
// // {isDesktop && !isLoginScreen && <Sidebar />}

//   const isWeb = Platform.OS === 'web';
//   const isDesktop = isWeb && width >= 768;
//   const isWebMobile = isWeb && width < 768;

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const bottomPadding = isWeb ? 8 : Math.max(insets.bottom, 12);
//   const totalBarHeight = 60 + bottomPadding;

//   const navItems = [
//     { label: 'Home', path: '/', icon: <Ionicons name="home-outline" size={24} color="white" /> },
//     { label: 'Search', path: '/search', icon: <Ionicons name="search-outline" size={24} color="white" /> },
//     { label: 'Stores', path: '/stores', icon: <Ionicons name="location-outline" size={24} color="white" /> },
//     { label: 'Account', path: '/account', icon: <Ionicons name="person-circle-outline" size={24} color="white" /> },
//     { label: 'Cart', path: '/cart', icon: <Ionicons name="cart-outline" size={24} color="white" /> },
//     { label: 'Sell', path: '/sell', icon: <MaterialCommunityIcons name="cash-multiple" size={24} color="white" /> },
//   ];

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <AnimatedSplashOverlay />

//       <View style={{ flex: 1, width: '100%', height: '100%' }}>
//         {/* Web Mobile Top Bar */}
//         {isWebMobile && !isLoginScreen && (
//           <View style={{ backgroundColor: '#000000', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 14, zIndex: 50 }}>
//             <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 18 }}>The Pawn Shop</Text>
//             <TouchableOpacity onPress={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ padding: 4 }}>
//               <Ionicons name={mobileMenuOpen ? 'close' : 'menu'} size={28} color="white" />
//             </TouchableOpacity>
//           </View>
//         )}

//         {/* Web Mobile Dropdown Menu */}
//         {isWebMobile && mobileMenuOpen && (
//           <View style={{ backgroundColor: '#0a0a0a', paddingHorizontal: 24, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#222222', zIndex: 40 }}>
//             {navItems.map((item) => (
//               <TouchableOpacity
//                 key={item.path}
//                 onPress={() => { router.push(item.path as any); setMobileMenuOpen(false); }}
//                 style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }}
//               >
//                 {item.icon}
//                 <Text style={{ color: 'white', fontWeight: '600', marginLeft: 16, fontSize: 15 }}>{item.label}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}

//         <View style={{ flex: 1, flexDirection: 'row', width: '100%', height: '100%', backgroundColor: '#E59400' }}>
//           {/* Desktop Web Sidebar */}
//          {/* {isDesktop && !isLoginScreen && <Sidebar />} */}

//           {isDesktop && !isLoginScreen && (
//             <View
//               style={{
//                 width: 76,
//                 backgroundColor: '#000000',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 paddingVertical: 28,
//                 paddingHorizontal: 8,
//                 zIndex: 50,
//                 height: '100%',
//               }}
//             >
//               <View style={{ flexDirection: 'column', alignItems: 'center', gap: 18 }}>
//                 {navItems.map((item) => (
//                   <SidebarIcon
//                     key={item.path}
//                     icon={item.icon}
//                     label={item.label}
//                     path={item.path}
//                     activePath={pathname}
//                     onPress={() => router.push(item.path as any)}
//                   />
//                 ))}
//               </View>

//               <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, borderRadius: 12 }}>
//                 <Octicons name="arrow-left" size={22} color="white" />
//               </TouchableOpacity>
//             </View>
//           )}

//           {/* Screen Content Wrapper */}
//           <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#E59400' }}>
//             <Tabs
//               screenOptions={{
//                 headerShown: false,
//                 tabBarActiveTintColor: '#FFFFFF',
//                 tabBarInactiveTintColor: '#FFEECB',
//                 tabBarStyle: isWeb
//                   ? { display: 'none' }
//                   : {
//                       backgroundColor: '#E59400',
//                       borderTopLeftRadius: 24,
//                       borderTopRightRadius: 24,
//                       borderTopWidth: 0,
//                       height: totalBarHeight,
//                       paddingBottom: bottomPadding,
//                       paddingTop: 8,
//                       position: 'absolute',
//                       bottom: 0,
//                       left: 0,
//                       right: 0,
//                       elevation: 8,
//                     },
//                 sceneStyle: {
//                   backgroundColor: '#E59400',
//                   paddingBottom: isWeb ? 0 : totalBarHeight,
//                 },
//               }}
//             >
//               <Tabs.Screen name="index" options={{ title: 'Home' }} />
//               <Tabs.Screen name="sell" options={{ title: 'Sell' }} />
//               <Tabs.Screen name="stores" options={{ title: 'Stores' }} />
//               <Tabs.Screen name="account" options={{ title: 'Account' }} />
//             </Tabs>
//           </View>
//         </View>
//       </View>
//     </ThemeProvider>
//   );
// }


// newer1
import React, { useState } from 'react';
import { Tabs, ThemeProvider, DarkTheme, DefaultTheme, useRouter, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {
  useColorScheme,
  Platform,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from '@expo/vector-icons';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  activePath: string;
  onPress: () => void;
}

function SidebarIcon({ icon, label, path, activePath, onPress }: NavItemProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = activePath === path;

  return (
    <View style={{ position: 'relative', alignItems: 'center' }}>
      <Pressable
        onPress={onPress}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        style={({ pressed }) => [
          {
            padding: 10,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: pressed
              ? 'rgba(255, 255, 255, 0.25)'
              : hovered
              ? 'rgba(255, 255, 255, 0.15)'
              : isActive
              ? 'rgba(255, 255, 255, 0.1)'
              : 'transparent',
          },
        ]}
      >
        {icon}
      </Pressable>

      {hovered && (
        <View
          style={{
            position: 'absolute',
            left: 70,
            top: '50%',
            transform: [{ translateY: -14 }],
            backgroundColor: '#1f2937',
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 6,
            zIndex: 100,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        >
          <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: '600' }}>{label}</Text>
        </View>
      )}
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const router = useRouter();
  const pathname = usePathname();

  const isWeb = Platform.OS === 'web';
  const isDesktop = isWeb && width >= 768;
  const isWebMobile = isWeb && width < 768;
  const isMobileApp = !isWeb; // Native iOS / Android app version

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const bottomPadding = isWeb ? 8 : Math.max(insets.bottom, 12);
  const totalBarHeight = 60 + bottomPadding;

  // Sidebar items for desktop web navigation
  const sidebarNavItems = [
    { label: 'Home', path: '/', icon: <Ionicons name="home-outline" size={24} color="white" /> },
    { label: 'Search', path: '/search', icon: <Ionicons name="search-outline" size={24} color="white" /> },
    { label: 'Stores', path: '/stores', icon: <Ionicons name="location-outline" size={24} color="white" /> },
    { label: 'Account', path: '/account', icon: <Ionicons name="person-circle-outline" size={24} color="white" /> },
    { label: 'Cart', path: '/cart', icon: <Ionicons name="cart-outline" size={24} color="white" /> },
    { label: 'Sell', path: '/sell', icon: <MaterialCommunityIcons name="cash-multiple" size={24} color="white" /> },
  ];

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />

      <View style={{ flex: 1, width: '100%', height: '100%' }}>
        
        {/* Sticky Mobile App Top Header (Native app only) */}
        {isMobileApp && (
          <View style={[styles.mobileTopBar, { paddingTop: Math.max(insets.top, 12) }]}>
            {isSearching ? (
              <View style={styles.searchBarActiveContainer}>
                <TextInput
                  placeholder="Search products..."
                  placeholderTextColor="#888888"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  autoFocus
                  style={styles.searchInput}
                />
                <TouchableOpacity
                  onPress={() => {
                    setIsSearching(false);
                    setSearchQuery('');
                  }}
                >
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.topBarDefaultContainer}>
                <View>
                  <Text style={styles.brandSub}>The</Text>
                  <Text style={styles.brandMain}>PawnShop</Text>
                </View>

                <View style={styles.topBarIconsRow}>
                  <TouchableOpacity
                    onPress={() => setIsSearching(true)}
                    style={styles.iconButton}
                  >
                    <Ionicons name="search-outline" size={24} color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => router.push('/cart' as any)}
                    style={styles.iconButton}
                  >
                    <Ionicons name="cart-outline" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        )}

        {/* Web Mobile Top Bar */}
        {isWebMobile && (
          <View style={{ backgroundColor: '#000000', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 14, zIndex: 50 }}>
            <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 18 }}>The PawnShop</Text>
            <TouchableOpacity onPress={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ padding: 4 }}>
              <Ionicons name={mobileMenuOpen ? 'close' : 'menu'} size={28} color="white" />
            </TouchableOpacity>
          </View>
        )}

        {/* Web Mobile Dropdown Menu */}
        {isWebMobile && mobileMenuOpen && (
          <View style={{ backgroundColor: '#0a0a0a', paddingHorizontal: 24, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#222222', zIndex: 40 }}>
            {sidebarNavItems.map((item) => (
              <TouchableOpacity
                key={item.path}
                onPress={() => { router.push(item.path as any); setMobileMenuOpen(false); }}
                style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }}
              >
                {item.icon}
                <Text style={{ color: 'white', fontWeight: '600', marginLeft: 16, fontSize: 15 }}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View style={{ flex: 1, flexDirection: 'row', width: '100%', height: '100%', backgroundColor: '#E59400' }}>
          {/* Desktop Web Sidebar */}
          {isDesktop && (
            <View
              style={{
                width: 76,
                backgroundColor: '#000000',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 28,
                paddingHorizontal: 8,
                zIndex: 50,
                height: '100%',
              }}
            >
              <View style={{ flexDirection: 'column', alignItems: 'center', gap: 18 }}>
                {sidebarNavItems.map((item) => (
                  <SidebarIcon
                    key={item.path}
                    icon={item.icon}
                    label={item.label}
                    path={item.path}
                    activePath={pathname}
                    onPress={() => router.push(item.path as any)}
                  />
                ))}
              </View>

              <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, borderRadius: 12 }}>
                <Octicons name="arrow-left" size={22} color="white" />
              </TouchableOpacity>
            </View>
          )}

          {/* Screen Content Wrapper with 4 Main Tabs */}
          <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#E59400' }}>
            <Tabs
              screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: '#FFEECB',
                tabBarStyle: isWeb
                  ? { display: 'none' }
                  : {
                      backgroundColor: '#0e0900',
                      // borderTopLeftRadius: 24,
                      // borderTopRightRadius: 24,
                      borderTopWidth: 0,
                      height: totalBarHeight,
                      paddingBottom: bottomPadding,
                      paddingTop: 8,
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      elevation: 8,
                    },
                sceneStyle: {
                  backgroundColor: '#E59400',
                  paddingTop: isMobileApp ? 65 : 0,
                  paddingBottom: isWeb ? 0 : totalBarHeight,
                },
              }}
            >
              <Tabs.Screen
                name="index"
                options={{
                  title: 'Home',
                  tabBarIcon: ({ color }) => (
                    <Ionicons name="home-outline" size={24} color={color} />
                  ),
                }}
              />
              <Tabs.Screen
                name="sell"
                options={{
                  title: 'Sell',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cash-multiple" size={26} color={color} />
                  ),
                }}
              />
              <Tabs.Screen
                name="stores"
                options={{
                  title: 'Stores',
                  tabBarIcon: ({ color }) => (
                    <Ionicons name="location-outline" size={24} color={color} />
                  ),
                }}
              />
              <Tabs.Screen
                name="account"
                options={{
                  title: 'Account',
                  tabBarIcon: ({ color }) => (
                    <Ionicons name="person-circle-outline" size={26} color={color} />
                  ),
                }}
              />
          
            {/* Hidden auxiliary screens so they don't generate bottom tab buttons */}
              <Tabs.Screen name="cart" options={{ href: null }} />
              <Tabs.Screen name="search" options={{ href: null }} />
              <Tabs.Screen name="p" options={{ href: null }} />

              <Tabs.Screen name="product/products" options={{ href: null }} />
              <Tabs.Screen name="product/details" options={{ href: null }} />

              <Tabs.Screen name="(auth)/login" options={{ href: null }} />
              <Tabs.Screen name="(auth)/login1" options={{ href: null }} />
              <Tabs.Screen name="(auth)/signup" options={{ href: null }} />
            </Tabs>

          </View>
        </View>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  mobileTopBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#E59400',
    paddingHorizontal: 20,
    paddingBottom: 12,
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  topBarDefaultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandSub: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 14,
  },
  brandMain: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  topBarIconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
  searchBarActiveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
  },
  cancelText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#D97706',
  },
});
