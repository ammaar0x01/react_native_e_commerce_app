import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';

const POPULAR_BRANDS = ['DIXON', 'DOOGEE', 'OUKITEL', 'LAGENIO', 'OSCAL', 'HOTWAV'];
const CATEGORIES = ['Jewellery', 'Computers', 'Appliances', 'Gaming', 'Hair', 'Gold', 'Promotions', 'Best Prices', 'Phones', 'TVs'];

export default function WebLandingView() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Top Navbar */}
      <View style={styles.navBar}>
        <View style={styles.navLinksLeft}>
          <Text style={styles.navLinkActive}>Home</Text>
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
            <Text style={styles.navLink}>Login / Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Hero Banner Section */}
      <View style={styles.heroSection}>
        <Text style={styles.brandTitle}>The PawnShop</Text>
        
        <View style={styles.searchBoxCard}>
          <View style={styles.searchRow}>
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
        <View style={styles.promoCardsContainer}>
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

      {/* Back to Top */}
      <TouchableOpacity 
        onPress={() => window?.scrollTo({ top: 0, behavior: 'smooth' })} 
        style={styles.backToTopButton}
      >
        <Text style={styles.backToTopText}>Back to top</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerConnectTitle}>Connect with us</Text>
        <View style={styles.socialIconsRow}>
          <Ionicons name="logo-facebook" size={24} color="#FFF" />
          <Ionicons name="logo-instagram" size={24} color="#FFF" />
          <Ionicons name="logo-twitter" size={24} color="#FFF" />
          <Ionicons name="logo-youtube" size={24} color="#FFF" />
        </View>

        <View style={styles.footerLinksColumns}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE8B6',
  },
  navBar: {
    backgroundColor: '#111827',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 14,
    alignItems: 'center',
  },
  navLinksLeft: {
    flexDirection: 'row',
    gap: 24,
  },
  navLinksRight: {
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
  },
  navLink: {
    color: '#D1D5DB',
    fontSize: 14,
    fontWeight: '600',
  },
  navLinkActive: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  cartIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  heroSection: {
    backgroundColor: '#E59400',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  brandTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 24,
  },
  searchBoxCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    maxWidth: 600,
    boxShadow: '0px 6px 16px rgba(0,0,0,0.1)',
    elevation: 4,
    marginBottom: 30,
  },
  searchRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },
  inputField: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
  },
  searchButton: {
    backgroundColor: '#E59400',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 15,
  },
  promoCardsContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    width: '100%',
    maxWidth: 700,
  },
  promoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    flex: 1,
    alignItems: 'center',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
    elevation: 3,
  },
  promoCardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 12,
  },
  promoImagePlaceholder: {
    width: '100%',
    height: 120,
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  promoButton: {
    backgroundColor: '#E59400',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  promoButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
  brandsSection: {
    backgroundColor: '#ECFCCB',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 20,
  },
  sectionHeaderWhite: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  brandChipsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
    maxWidth: 700,
  },
  brandChip: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 28,
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
  },
  brandChipText: {
    fontWeight: '800',
    color: '#1F2937',
    fontSize: 14,
  },
  categorySection: {
    backgroundColor: '#E59400',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
    maxWidth: 800,
  },
  categoryChip: {
    backgroundColor: '#FEF3C7',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  categoryChipText: {
    color: '#B45309',
    fontWeight: '700',
    fontSize: 13,
  },
  backToTopButton: {
    backgroundColor: '#FEF3C7',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    marginVertical: 30,
  },
  backToTopText: {
    color: '#D97706',
    fontWeight: '800',
    fontSize: 14,
  },
  footer: {
    backgroundColor: '#1E3A8A',
    paddingTop: 40,
    paddingBottom: 24,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  footerConnectTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  socialIconsRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 30,
  },
  footerLinksColumns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 900,
    marginBottom: 30,
  },
  footerCol: {
    gap: 8,
  },
  footerColHeading: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 14,
    marginBottom: 4,
  },
  footerItem: {
    color: '#93C5FD',
    fontSize: 13,
  },
  copyrightText: {
    color: '#93C5FD',
    fontSize: 12,
    marginTop: 10,
  },
});
