import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Linking, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const POPULAR_BRANDS = ['DIXON', 'DOOGEE', 'OUKITEL', 'LAGENIO', 'OSCAL', 'HOTWAV'];
const CATEGORIES = ['Jewellery', 'Computers', 'Appliances', 'Gaming', 'Hair', 'Gold', 'Promotions', 'Best Prices', 'Phones', 'TVs'];

export type SocialPlatform = 'facebook' | 'instagram' | 'twitter' | 'youtube';

const SOCIAL_URLS: Record<SocialPlatform, string> = {
  facebook: 'https://www.facebook.com',
  instagram: 'https://www.instagram.com',
  twitter: 'https://www.twitter.com',
  youtube: 'https://www.youtube.com',
};

export default function AboutLandingPage() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSocialPress = (platform: SocialPlatform) => {
    Linking.openURL(SOCIAL_URLS[platform]);
  };

  return (
    <View style={styles.container}>
      
      {/* Sticky Top Navbar */}
      <View style={styles.stickyNavBar}>
        {isSmallScreen ? (
          <View style={styles.mobileNavRow}>
            <Text style={styles.navBrand}>The PawnShop</Text>
            <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)} style={styles.hamburgerBtn}>
              <Ionicons name={menuOpen ? 'close' : 'menu'} size={26} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.desktopNavContainer}>
            <View style={styles.navLinksLeft}>
              <TouchableOpacity onPress={() => router.push('/' as any)}>
                <Text style={styles.navLink}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/stores' as any)}>
                <Text style={styles.navLink}>All Stores</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/sell' as any)}>
                <Text style={styles.navLink}>Sell / Pings</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.navLinksRight}>
              <TouchableOpacity onPress={() => router.push('/cart' as any)} style={styles.cartIconRow}>
                <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                <Text style={styles.navLink}>Cart (0)</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/(auth)/login' as any)}>
                <Text style={styles.navLinkAccent}>Login / Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      {/* Collapsible Mobile Menu Dropdown */}
      {isSmallScreen && menuOpen && (
        <View style={styles.mobileDropdownMenu}>
          <Text style={styles.dropdownHeader}>The PawnShop</Text>
          <TouchableOpacity onPress={() => { router.push('/' as any); setMenuOpen(false); }} style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { router.push('/stores' as any); setMenuOpen(false); }} style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>All Stores</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { router.push('/sell' as any); setMenuOpen(false); }} style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Sell / Pings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { router.push('/cart' as any); setMenuOpen(false); }} style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Cart (0)</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { router.push('/(auth)/login' as any); setMenuOpen(false); }} style={styles.dropdownItem}>
            <Text style={styles.dropdownTextAccent}>Login / Register</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Hero Banner Section */}
        <View style={styles.heroSection}>
          <Text style={styles.brandTitle}>The PawnShop</Text>
          
          <View style={styles.searchBoxCard}>
            <View style={[styles.searchRow, isSmallScreen && { flexDirection: 'column' }]}>
              <TextInput
                placeholder="Search Products..."
                placeholderTextColor="#888"
                style={styles.inputField}
              />
              <TextInput
                placeholder="Select a Store..."
                placeholderTextColor="#888"
                style={styles.inputField}
              />
            </View>
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>

          {/* Promo Cards Row */}
          <View style={[styles.promoCardsContainer, isSmallScreen && { flexDirection: 'column' }]}>
            <View style={styles.promoCard}>
              <Text style={styles.promoCardTitle}>View New Products</Text>
              <View style={styles.promoImagePlaceholder}>
                <Ionicons name="cube-outline" size={40} color="#E59400" />
              </View>
              <TouchableOpacity onPress={() => router.push('/product/products' as any)} style={styles.promoButton}>
                <Text style={styles.promoButtonText}>See More</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.promoCard}>
              <Text style={styles.promoCardTitle}>Deals and Promotions</Text>
              <View style={styles.promoImagePlaceholder}>
                <Ionicons name="pricetag-outline" size={40} color="#E59400" />
              </View>
              <TouchableOpacity onPress={() => router.push('/product/products' as any)} style={styles.promoButton}>
                <Text style={styles.promoButtonText}>See More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Popular Brands Section */}
        <View style={styles.brandsSection}>
          <Text style={styles.sectionHeader}>Popular Brands</Text>
          <View style={styles.brandChipsGrid}>
            {POPULAR_BRANDS.map((brand, idx) => (
              <View key={idx} style={styles.brandChip}>
                <Text style={styles.brandChipText}>{brand}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Browse by Category Section */}
        <View style={styles.categorySection}>
          <Text style={styles.sectionHeaderWhite}>Browse by Category</Text>
          <View style={styles.categoryGrid}>
            {CATEGORIES.map((cat, idx) => (
              <TouchableOpacity key={idx} style={styles.categoryChip}>
                <Text style={styles.categoryChipText}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Back to top */}
        <TouchableOpacity 
          onPress={() => window?.scrollTo({ top: 0, behavior: 'smooth' })} 
          style={styles.backToTopButton}
        >
          <Text style={styles.backToTopText}>Back to top</Text>
        </TouchableOpacity>

        {/* Footer with External Social Links */}
        <View style={styles.footer}>
          <Text style={styles.footerConnectTitle}>Connect with us</Text>
          <View style={styles.socialIconsRow}>
            <TouchableOpacity onPress={() => handleSocialPress('facebook')}>
              <Ionicons name="logo-facebook" size={26} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialPress('instagram')}>
              <Ionicons name="logo-instagram" size={26} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialPress('twitter')}>
              <Ionicons name="logo-twitter" size={26} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialPress('youtube')}>
              <Ionicons name="logo-youtube" size={26} color="#FFF" />
            </TouchableOpacity>
          </View>

          <View style={[styles.footerLinksColumns, isSmallScreen && { flexDirection: 'column', gap: 20 }]}>
            <View style={styles.footerCol}>
              <Text style={styles.footerColHeading}>About us</Text>
              <Text style={styles.footerItem}>Who we are</Text>
              <Text style={styles.footerItem}>Careers</Text>
            </View>
            <View style={styles.footerCol}>
              <Text style={styles.footerColHeading}>Offerings</Text>
              <Text style={styles.footerItem}>Pawn Loans</Text>
              <Text style={styles.footerItem}>Instant Cash</Text>
            </View>
            <View style={styles.footerCol}>
              <Text style={styles.footerColHeading}>Contact us</Text>
              <Text style={styles.footerItem}>Support Center</Text>
              <Text style={styles.footerItem}>Find a Store</Text>
            </View>
            <View style={styles.footerCol}>
              <Text style={styles.footerColHeading}>Transactions</Text>
              <Text style={styles.footerItem}>Secure Pay</Text>
              <Text style={styles.footerItem}>Terms & Conditions</Text>
            </View>
          </View>

          <Text style={styles.copyrightText}>© 2026 The PawnShop. All rights reserved.</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFE8B6' },
  stickyNavBar: {
    position: 'sticky' as any,
    top: 0,
    zIndex: 1000,
    backgroundColor: '#1E3A8A',
    paddingHorizontal: 30,
    paddingVertical: 14,
    width: '100%',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
  },
  desktopNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  mobileNavRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navBrand: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },
  hamburgerBtn: {
    padding: 4,
  },
  mobileDropdownMenu: {
    position: 'sticky' as any,
    top: 55,
    zIndex: 999,
    backgroundColor: '#1E3A8A',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2563EB',
  },
  dropdownHeader: {
    color: '#F59E0B',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 12,
  },
  dropdownItem: {
    paddingVertical: 10,
  },
  dropdownText: {
    color: '#D1D5DB',
    fontSize: 15,
    fontWeight: '600',
  },
  dropdownTextAccent: {
    color: '#F59E0B',
    fontSize: 15,
    fontWeight: '700',
  },
  navLinksLeft: { flexDirection: 'row', gap: 24 },
  navLinksRight: { flexDirection: 'row', gap: 24, alignItems: 'center' },
  navLink: { color: '#D1D5DB', fontSize: 14, fontWeight: '600' },
  navLinkAccent: { color: '#F59E0B', fontSize: 14, fontWeight: '700' },
  cartIconRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  scrollContent: { flexGrow: 1 },
  heroSection: { backgroundColor: '#2563EB', paddingVertical: 50, paddingHorizontal: 20, alignItems: 'center' },
  brandTitle: { fontSize: 40, fontWeight: '900', color: '#FFFFFF', marginBottom: 28, textAlign: 'center' },
  searchBoxCard: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, width: '100%', maxWidth: 650, boxShadow: '0px 6px 16px rgba(0,0,0,0.1)', elevation: 4, marginBottom: 35 },
  searchRow: { flexDirection: 'row', gap: 12, marginBottom: 14 },
  inputField: { flex: 1, backgroundColor: '#F3F4F6', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, fontSize: 14, color: '#111827' },
  searchButton: { backgroundColor: '#E59400', borderRadius: 12, paddingVertical: 12, alignItems: 'center' },
  searchButtonText: { color: '#FFFFFF', fontWeight: '800', fontSize: 15 },
  promoCardsContainer: { flexDirection: 'row', gap: 20, justifyContent: 'center', width: '100%', maxWidth: 750 },
  promoCard: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, flex: 1, alignItems: 'center', boxShadow: '0px 4px 12px rgba(0,0,0,0.08)', elevation: 3 },
  promoCardTitle: { fontSize: 16, fontWeight: '700', color: '#1F2937', marginBottom: 12 },
  promoImagePlaceholder: { width: '100%', height: 130, backgroundColor: '#FEF3C7', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 14 },
  promoButton: { backgroundColor: '#E59400', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 24 },
  promoButtonText: { color: '#FFFFFF', fontWeight: '700', fontSize: 13 },
  brandsSection: { backgroundColor: '#ECFCCB', paddingVertical: 45, paddingHorizontal: 20, alignItems: 'center' },
  sectionHeader: { fontSize: 22, fontWeight: '800', color: '#111827', marginBottom: 20 },
  sectionHeaderWhite: { fontSize: 22, fontWeight: '800', color: '#FFFFFF', marginBottom: 20, textAlign: 'center' },
  brandChipsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, justifyContent: 'center', maxWidth: 750 },
  brandChip: { backgroundColor: '#FFFFFF', borderRadius: 16, paddingVertical: 14, paddingHorizontal: 28, boxShadow: '0px 2px 6px rgba(0,0,0,0.05)' },
  brandChipText: { fontWeight: '800', color: '#1F2937', fontSize: 14 },
  categorySection: { backgroundColor: '#2563EB', paddingVertical: 45, paddingHorizontal: 20, alignItems: 'center' },
  categoryGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, justifyContent: 'center', maxWidth: 850 },
  categoryChip: { backgroundColor: '#FEF3C7', borderRadius: 20, paddingVertical: 12, paddingHorizontal: 24 },
  categoryChipText: { color: '#B45309', fontWeight: '700', fontSize: 13 },
  backToTopButton: { backgroundColor: '#FEF3C7', alignSelf: 'center', paddingVertical: 12, paddingHorizontal: 32, borderRadius: 20, marginVertical: 30 },
  backToTopText: { color: '#D97706', fontWeight: '800', fontSize: 14 },
  footer: { backgroundColor: '#1E3A8A', paddingTop: 40, paddingBottom: 24, paddingHorizontal: 40, alignItems: 'center' },
  footerConnectTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: '700', marginBottom: 16 },
  socialIconsRow: { flexDirection: 'row', gap: 24, marginBottom: 30 },
  footerLinksColumns: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', maxWidth: 900, marginBottom: 30 },
  footerCol: { gap: 8 },
  footerColHeading: { color: '#FFFFFF', fontWeight: '800', fontSize: 14, marginBottom: 4 },
  footerItem: { color: '#93C5FD', fontSize: 13 },
  copyrightText: { color: '#93C5FD', fontSize: 12, marginTop: 10 },
});

