// // import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
// // import * as SplashScreen from 'expo-splash-screen';
// // import { useColorScheme } from 'react-native';

// // import { AnimatedSplashOverlay } from '@/components/animated-icon';
// // import AppTabs from '@/components/app-tabs';

// // SplashScreen.preventAutoHideAsync();

// // export default function TabLayout() {
// //   const colorScheme = useColorScheme();
// //   return (
// //     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
// //       <AnimatedSplashOverlay />
// //       <AppTabs />
// //     </ThemeProvider>
// //   );
// // }


// // newer
// // import { Tabs } from 'expo-router';
// // import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// // import * as SplashScreen from 'expo-splash-screen';
// // import { useColorScheme, View } from 'react-native';
// // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// // import { AnimatedSplashOverlay } from '@/components/animated-icon';

// // SplashScreen.preventAutoHideAsync();

// // export default function TabLayout() {
// //   const colorScheme = useColorScheme();

// //   return (
// //     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
// //       <AnimatedSplashOverlay />
      
// //       <Tabs
// //         screenOptions={{
// //           headerShown: false,
// //           tabBarActiveTintColor: '#FFFFFF',
// //           tabBarInactiveTintColor: '#FFEECB',
// //           tabBarStyle: {
// //             backgroundColor: '#E59400', // Matching golden-orange background
// //             borderTopLeftRadius: 24,    // Rounded top corners from image
// //             borderTopRightRadius: 24,
// //             borderTopWidth: 0,
// //             height: 70,
// //             paddingBottom: 10,
// //             paddingTop: 8,
// //             position: 'absolute',
// //             elevation: 8,
// //             shadowColor: '#000',
// //             shadowOffset: { width: 0, height: -2 },
// //             shadowOpacity: 0.1,
// //             shadowRadius: 4,
// //           },
// //           tabBarLabelStyle: {
// //             fontSize: 12,
// //             fontWeight: '600',
// //           },
// //         }}
// //       >
// //         {/* 1. Home Tab */}
// //         <Tabs.Screen
// //           name="index"
// //           options={{
// //             title: 'Home',
// //             tabBarIcon: ({ color, size }) => (
// //               <Ionicons name="home-outline" size={26} color={color} />
// //             ),
// //           }}
// //         />

// //         {/* 2. Sell Tab */}
// //         <Tabs.Screen
// //           name="sell"
// //           options={{
// //             title: 'Sell',
// //             tabBarIcon: ({ color, size }) => (
// //               <MaterialCommunityIcons name="cash-multiple" size={28} color={color} />
// //             ),
// //           }}
// //         />

// //         {/* 3. Stores Tab */}
// //         <Tabs.Screen
// //           name="stores"
// //           options={{
// //             title: 'Stores',
// //             tabBarIcon: ({ color, size }) => (
// //               <Ionicons name="location-outline" size={26} color={color} />
// //             ),
// //           }}
// //         />

// //         {/* 4. Account Tab */}
// //         <Tabs.Screen
// //           name="account"
// //           options={{
// //             title: 'Account',
// //             tabBarIcon: ({ color, size }) => (
// //               <Ionicons name="person-circle-outline" size={28} color={color} />
// //             ),
// //           }}
// //         />
// //       </Tabs>
// //     </ThemeProvider>
// //   );
// // }


// // import { Tabs, ThemeProvider, DarkTheme, DefaultTheme } from 'expo-router';
// // import * as SplashScreen from 'expo-splash-screen';
// // import { useColorScheme } from 'react-native';
// // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// // import { AnimatedSplashOverlay } from '@/components/animated-icon';

// // SplashScreen.preventAutoHideAsync();

// // export default function TabLayout() {
// //   const colorScheme = useColorScheme();

// //   return (
// //     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
// //       <AnimatedSplashOverlay />
      
// //       <Tabs
// //         screenOptions={{
// //           headerShown: false,
// //           tabBarActiveTintColor: '#FFFFFF',
// //           tabBarInactiveTintColor: '#FFEECB',
// //           tabBarStyle: {
// //             backgroundColor: '#E59400',
// //             borderTopLeftRadius: 24,
// //             borderTopRightRadius: 24,
// //             borderTopWidth: 0,
// //             height: 70,
// //             paddingBottom: 10,
// //             paddingTop: 8,
// //             position: 'absolute',
// //             elevation: 8,
// //             shadowColor: '#000',
// //             shadowOffset: { width: 0, height: -2 },
// //             shadowOpacity: 0.1,
// //             shadowRadius: 4,
// //           },
// //           tabBarLabelStyle: {
// //             fontSize: 12,
// //             fontWeight: '600',
// //           },
// //         }}
// //       >
// //         <Tabs.Screen
// //           name="index"
// //           options={{
// //             title: 'Home',
// //             tabBarIcon: ({ color }) => (
// //               <Ionicons name="home-outline" size={26} color={color} />
// //             ),
// //           }}
// //         />

// //         <Tabs.Screen
// //           name="sell"
// //           options={{
// //             title: 'Sell',
// //             tabBarIcon: ({ color }) => (
// //               <MaterialCommunityIcons name="cash-multiple" size={28} color={color} />
// //             ),
// //           }}
// //         />

// //         <Tabs.Screen
// //           name="stores"
// //           options={{
// //             title: 'Stores',
// //             tabBarIcon: ({ color }) => (
// //               <Ionicons name="location-outline" size={26} color={color} />
// //             ),
// //           }}
// //         />

// //         <Tabs.Screen
// //           name="account"
// //           options={{
// //             title: 'Account',
// //             tabBarIcon: ({ color }) => (
// //               <Ionicons name="person-circle-outline" size={28} color={color} />
// //             ),
// //           }}
// //         />
// //       </Tabs>
// //     </ThemeProvider>
// //   );
// // }



// // import { Tabs, ThemeProvider, DarkTheme, DefaultTheme } from 'expo-router';
// // import * as SplashScreen from 'expo-splash-screen';
// // import { useColorScheme, Platform } from 'react-native';
// // import { useSafeAreaInsets } from 'react-native-safe-area-context';
// // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// // import { AnimatedSplashOverlay } from '@/components/animated-icon';

// // SplashScreen.preventAutoHideAsync();

// // export default function TabLayout() {
// //   const colorScheme = useColorScheme();
// //   const insets = useSafeAreaInsets();

// //   // On native mobile (Android/iOS), add the bottom safe inset (system buttons height) 
// //   // plus padding. On web, keep standard bottom padding.
// //   const isWeb = Platform.OS === 'web';
// //   const bottomMargin = isWeb ? 0 : Math.max(insets.bottom, 12);
// //   const tabHeight = isWeb ? 70 : 60 + bottomMargin;

// //   return (
// //     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
// //       <AnimatedSplashOverlay />
      
// //       <Tabs
// //         screenOptions={{
// //           headerShown: false,
// //           tabBarActiveTintColor: '#FFFFFF',
// //           tabBarInactiveTintColor: '#FFEECB',
// //           tabBarStyle: {
// //             backgroundColor: '#E59400',
// //             borderTopLeftRadius: 24,
// //             borderTopRightRadius: 24,
// //             borderTopWidth: 0,
// //             height: tabHeight,
// //             paddingBottom: bottomMargin,
// //             paddingTop: 8,
// //             position: 'absolute',
// //             bottom: isWeb ? 0 : bottomMargin / 2, // Lifts the bar slightly above native system navigation bar
// //             left: 0,
// //             right: 0,
// //             elevation: 8,
// //             shadowColor: '#000',
// //             shadowOffset: { width: 0, height: -2 },
// //             shadowOpacity: 0.1,
// //             shadowRadius: 4,
// //           },
// //           tabBarLabelStyle: {
// //             fontSize: 12,
// //             fontWeight: '600',
// //           },
// //         }}
// //       >
// //         <Tabs.Screen
// //           name="index"
// //           options={{
// //             title: 'Home',
// //             tabBarIcon: ({ color }) => (
// //               <Ionicons name="home-outline" size={26} color={color} />
// //             ),
// //           }}
// //         />

// //         <Tabs.Screen
// //           name="sell"
// //           options={{
// //             title: 'Sell',
// //             tabBarIcon: ({ color }) => (
// //               <MaterialCommunityIcons name="cash-multiple" size={28} color={color} />
// //             ),
// //           }}
// //         />

// //         <Tabs.Screen
// //           name="stores"
// //           options={{
// //             title: 'Stores',
// //             tabBarIcon: ({ color }) => (
// //               <Ionicons name="location-outline" size={26} color={color} />
// //             ),
// //           }}
// //         />

// //         <Tabs.Screen
// //           name="account"
// //           options={{
// //             title: 'Account',
// //             tabBarIcon: ({ color }) => (
// //               <Ionicons name="person-circle-outline" size={28} color={color} />
// //             ),
// //           }}
// //         />
// //       </Tabs>
// //     </ThemeProvider>
// //   );
// // }


// // newer2
// // import { Tabs, ThemeProvider, DarkTheme, DefaultTheme } from 'expo-router';
// // import * as SplashScreen from 'expo-splash-screen';
// // import { useColorScheme, Platform } from 'react-native';
// // import { useSafeAreaInsets } from 'react-native-safe-area-context';
// // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// // import { AnimatedSplashOverlay } from '@/components/animated-icon';

// // SplashScreen.preventAutoHideAsync();

// // export default function TabLayout() {
// //   const colorScheme = useColorScheme();
// //   const insets = useSafeAreaInsets();

// //   const isWeb = Platform.OS === 'web';
// //   // Use insets.bottom on native to pad icons above system buttons, default to 8 on web
// //   const bottomPadding = isWeb ? 8 : Math.max(insets.bottom, 12);
// //   // Base height (60) + safe area padding
// //   const totalBarHeight = 60 + bottomPadding;

// //   return (
// //     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
// //       <AnimatedSplashOverlay />
      
// //       <Tabs
// //         screenOptions={{
// //           headerShown: false,
// //           tabBarActiveTintColor: '#FFFFFF',
// //           tabBarInactiveTintColor: '#FFEECB',
// //           tabBarStyle: {
// //             backgroundColor: '#E59400',
// //             borderTopLeftRadius: 24,
// //             borderTopRightRadius: 24,
// //             borderTopWidth: 0,
// //             height: totalBarHeight,
// //             paddingBottom: bottomPadding,
// //             paddingTop: 8,
// //             position: 'absolute',
// //             bottom: 0, // Flushes the container to the screen edge
// //             left: 0,
// //             right: 0,
// //             elevation: 8,
// //             shadowColor: '#000',
// //             shadowOffset: { width: 0, height: -2 },
// //             shadowOpacity: 0.1,
// //             shadowRadius: 4,
// //           },
// //           tabBarLabelStyle: {
// //             fontSize: 12,
// //             fontWeight: '600',
// //           },
// //         }}
// //       >
// //         <Tabs.Screen
// //           name="index"
// //           options={{
// //             title: 'Home',
// //             tabBarIcon: ({ color }) => (
// //               <Ionicons name="home-outline" size={26} color={color} />
// //             ),
// //           }}
// //         />

// //         <Tabs.Screen
// //           name="sell"
// //           options={{
// //             title: 'Sell',
// //             tabBarIcon: ({ color }) => (
// //               <MaterialCommunityIcons name="cash-multiple" size={28} color={color} />
// //             ),
// //           }}
// //         />

// //         <Tabs.Screen
// //           name="stores"
// //           options={{
// //             title: 'Stores',
// //             tabBarIcon: ({ color }) => (
// //               <Ionicons name="location-outline" size={26} color={color} />
// //             ),
// //           }}
// //         />

// //         <Tabs.Screen
// //           name="account"
// //           options={{
// //             title: 'Account',
// //             tabBarIcon: ({ color }) => (
// //               <Ionicons name="person-circle-outline" size={28} color={color} />
// //             ),
// //           }}
// //         />
// //       </Tabs>
// //     </ThemeProvider>
// //   );
// // }



// // newer3 -- works
// // import { Tabs, ThemeProvider, DarkTheme, DefaultTheme } from 'expo-router';
// // import * as SplashScreen from 'expo-splash-screen';
// // import { useColorScheme, Platform, useWindowDimensions } from 'react-native';
// // import { useSafeAreaInsets } from 'react-native-safe-area-context';
// // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// // import { AnimatedSplashOverlay } from '@/components/animated-icon';

// // SplashScreen.preventAutoHideAsync();

// // export default function TabLayout() {
// //   const colorScheme = useColorScheme();
// //   const insets = useSafeAreaInsets();
// //   const { width } = useWindowDimensions();

// //   // Responsive breakpoint (>= 768px)
// //   const isMediumOrLarger = width >= 768;
// //   const isWeb = Platform.OS === 'web';

// //   const bottomPadding = isWeb ? 8 : Math.max(insets.bottom, 12);
// //   const totalBarHeight = isMediumOrLarger ? 64 : 60 + bottomPadding;

// //   return (
// //     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
// //       <AnimatedSplashOverlay />

// //       <Tabs
// //         screenOptions={{
// //           headerShown: false,
// //           tabBarActiveTintColor: '#FFFFFF',
// //           tabBarInactiveTintColor: '#FFEECB',
// //           tabBarStyle: {
// //             backgroundColor: '#E59400',
// //             borderTopLeftRadius: 24,
// //             borderTopRightRadius: 24,
// //             borderBottomLeftRadius: isMediumOrLarger ? 24 : 0,
// //             borderBottomRightRadius: isMediumOrLarger ? 24 : 0,
// //             borderTopWidth: 0,
// //             height: totalBarHeight,
// //             paddingBottom: isMediumOrLarger ? 8 : bottomPadding,
// //             paddingTop: 8,
// //             position: 'absolute',

// //             // Positioning & Dynamic Responsiveness Fix:
// //             // Pin both left and right to 0 on small screens to force 100% full-width span.
// //             // On desktop/medium screens, center using margin horizontal auto.
// //             bottom: isMediumOrLarger ? 16 : 0,
// //             left: isMediumOrLarger ? 'auto' : 0,
// //             right: isMediumOrLarger ? 'auto' : 0,
// //             width: isMediumOrLarger ? 480 : '100%',
// //             maxWidth: '100%',
// //             alignSelf: 'center',

// //             elevation: 8,
// //             shadowColor: '#000',
// //             shadowOffset: { width: 0, height: 4 },
// //             shadowOpacity: 0.15,
// //             shadowRadius: 6,
// //           },
// //           tabBarLabelStyle: {
// //             fontSize: 12,
// //             fontWeight: '600',
// //           },
// //           sceneStyle: {
// //             paddingBottom: totalBarHeight + (isMediumOrLarger ? 24 : 8),
// //           },
// //         }}
// //       >
// //         <Tabs.Screen
// //           name="index"
// //           options={{
// //             title: 'Home',
// //             tabBarIcon: ({ color }) => (
// //               <Ionicons name="home-outline" size={26} color={color} />
// //             ),
// //           }}
// //         />

// //         <Tabs.Screen
// //           name="sell"
// //           options={{
// //             title: 'Sell',
// //             tabBarIcon: ({ color }) => (
// //               <MaterialCommunityIcons name="cash-multiple" size={28} color={color} />
// //             ),
// //           }}
// //         />

// //         <Tabs.Screen
// //           name="stores"
// //           options={{
// //             title: 'Stores',
// //             tabBarIcon: ({ color }) => (
// //               <Ionicons name="location-outline" size={26} color={color} />
// //             ),
// //           }}
// //         />

// //         <Tabs.Screen
// //           name="account"
// //           options={{
// //             title: 'Account',
// //             tabBarIcon: ({ color }) => (
// //               <Ionicons name="person-circle-outline" size={28} color={color} />
// //             ),
// //           }}
// //         />
// //       </Tabs>
// //     </ThemeProvider>
// //   );
// // }



// // newer4
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

// // function SidebarIcon({ icon, path, activePath, onPress }: NavItemProps) {
// //   const [hovered, setHovered] = useState(false);
// //   const isActive = activePath === path;

// //   return (
// //     <Pressable
// //       onPress={onPress}
// //       onHoverIn={() => setHovered(true)}
// //       onHoverOut={() => setHovered(false)}
// //       style={({ pressed }) => [
// //         {
// //           padding: 10,
// //           borderRadius: 12,
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           backgroundColor: pressed
// //             ? 'rgba(255, 255, 255, 0.25)'
// //             : hovered
// //             ? 'rgba(255, 255, 255, 0.15)'
// //             : isActive
// //             ? 'rgba(255, 255, 255, 0.1)'
// //             : 'transparent',
// //           transitionProperty: 'all',
// //           transitionDuration: '150ms',
// //         },
// //       ]}
// //     >
// //       {icon}
// //     </Pressable>
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

// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// //   const bottomPadding = isWeb ? 8 : Math.max(insets.bottom, 12);
// //   const totalBarHeight = 60 + bottomPadding;

// //   const navItems = [
// //     {
// //       label: 'Home',
// //       path: '/',
// //       icon: <Ionicons name="home-outline" size={24} color="white" />,
// //     },
// //     {
// //       label: 'Search',
// //       path: '/search',
// //       icon: <Ionicons name="search-outline" size={24} color="white" />,
// //     },
// //     {
// //       label: 'Stores',
// //       path: '/stores',
// //       icon: <Ionicons name="location-outline" size={24} color="white" />,
// //     },
// //     {
// //       label: 'Account',
// //       path: '/account',
// //       icon: <Ionicons name="person-circle-outline" size={24} color="white" />,
// //     },
// //     {
// //       label: 'Cart',
// //       path: '/cart',
// //       icon: <Ionicons name="cart-outline" size={24} color="white" />,
// //     },
// //     {
// //       label: 'Sell',
// //       path: '/sell',
// //       icon: <MaterialCommunityIcons name="cash-multiple" size={24} color="white" />,
// //     },
// //   ];

// //   return (
// //     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
// //       <AnimatedSplashOverlay />

// //       <View style={{ flex: 1, width: '100%', height: '100%' }}>
// //         {/* Web Mobile Top Bar */}
// //         {isWebMobile && (
// //           <View style={{ backgroundColor: '#000000', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 14, zIndex: 50 }}>
// //             <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 18 }}>The PawnShop</Text>
// //             <TouchableOpacity onPress={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ padding: 4 }}>
// //               <Ionicons name={mobileMenuOpen ? 'close' : 'menu'} size={28} color="white" />
// //             </TouchableOpacity>
// //           </View>
// //         )}

// //         {/* Web Mobile Collapsable Dropdown Menu */}
// //         {isWebMobile && mobileMenuOpen && (
// //           <View style={{ backgroundColor: '#0a0a0a', paddingHorizontal: 24, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#222222', zIndex: 40 }}>
// //             {navItems.map((item) => (
// //               <TouchableOpacity
// //                 key={item.path}
// //                 onPress={() => {
// //                   router.push(item.path as any);
// //                   setMobileMenuOpen(false);
// //                 }}
// //                 style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }}
// //               >
// //                 {item.icon}
// //                 <Text style={{ color: 'white', fontWeight: '600', marginLeft: 16, fontSize: 15 }}>
// //                   {item.label}
// //                 </Text>
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         )}

// //         <View style={{ flex: 1, flexDirection: 'row', width: '100%', height: '100%' }}>
// //           {/* Desktop Web Sidebar */}
// //           {isDesktop && (
// //             <View
// //               style={{
// //                 width: 72,
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
// //               <View style={{ flexDirection: 'column', alignItems: 'center', gap: 20 }}>
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

// //               {/* Bottom Back Button */}
// //               <TouchableOpacity
// //                 onPress={() => router.back()}
// //                 style={{ padding: 10, borderRadius: 12 }}
// //               >
// //                 <Octicons name="arrow-left" size={22} color="white" />
// //               </TouchableOpacity>
// //             </View>
// //           )}

// //           {/* Screen Display Container */}
// //           <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#000517' }}>
// //           {/* <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#3b65ff00' }}> */}

// //             <Tabs
// //               screenOptions={{
// //                 headerShown: false,
// //                 tabBarActiveTintColor: '#FFFFFF',
// //                 tabBarInactiveTintColor: '#FFEECB',
// //                 tabBarStyle: isWeb
// //                   ? { display: 'none' }
// //                   : {
// //                       backgroundColor: '#0d0800',
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
// //                   backgroundColor: '#3b65ff00',
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

