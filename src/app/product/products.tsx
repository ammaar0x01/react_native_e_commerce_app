import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


import img1 from '../../images/products/product4.jpg';

// import img1 from '../../images/products/product3.jpeg';
// import img1 from '../../images/products/product1.jpeg';




interface ProductItem {
  id: string;
  name: string;
  price: string;
  location: string;
}

const PRODUCTS: ProductItem[] = [
  { id: '1', name: 'Asus laptop', price: 'R 3000', location: 'Grassy Park' },
  { id: '2', name: 'Vodacom Tablet 64GB Storage', price: 'R 2100', location: 'Claremont' },
  { id: '3', name: 'Acer i5 10th Gen 512GB ROM, 8GB RAM', price: 'R 4400', location: 'Sea Point' },
  { id: '4', name: 'Phone cover', price: 'R 100', location: 'Atlantis' },
  { id: '5', name: 'Phone cover', price: 'R 100', location: 'Atlantis' },
  { id: '6', name: 'Phone cover', price: 'R 100', location: 'Atlantis' },
];

export default function productsView() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.whiteCardContainer}>
          
          {/* Breadcrumb Navigation */}
          <View style={styles.breadcrumbContainer}>
            <Text style={styles.breadcrumbText}>Pre-owned/Computers</Text>
          </View>

          {/* Section Heading */}
          <Text style={styles.pageTitle}>Computers</Text>
          <Text style={styles.resultsCount}>Number of results: 34</Text>

  {/* <View style={styles.resultsHeader}>
          <Text style={styles.resultsTitle}>Computers</Text>
          <Text style={styles.resultsCount}>Number of results: 34</Text>
        </View>
         */}
          {/* Filter Bar */}
          <View style={styles.filterBar}>
            <View style={styles.filterGroup}>
              <Text style={styles.filterLabel}>Filter by</Text>
              <View style={styles.filterDropdown}>
                <Text style={styles.filterDropdownText}>Brand ⌄</Text>
              </View>
              <View style={styles.filterDropdown}>
                <Text style={styles.filterDropdownText}>Department ⌄</Text>
              </View>
            </View>
          </View>

          {/* Products Grid */}
          <View style={styles.productsGrid}>
            {PRODUCTS.map((item) => {
              const isHovered = hoveredId === item.id;

              return (
                <Pressable
                  key={item.id}
                  onHoverIn={() => setHoveredId(item.id)}
                  onHoverOut={() => setHoveredId(null)}
                  onPress={() => router.push('/product/details' as any)}
                  style={[
                    styles.productCard,
                    isHovered && styles.productCardHovered,
                  ]}
                >
                  {/* Hover Overlay with "View More Details" */}
                  {isHovered && (
                    <View style={styles.hoverOverlay}>
                      <View style={styles.hoverOverlayContent}>
                        <Text style={styles.hoverOverlayText}>View</Text>
                        <Text style={styles.hoverOverlayText}>More</Text>
                        <Text style={styles.hoverOverlayText}>Details</Text>
                      </View>
                    </View>
                  )}

                  {/* Product Image Placeholder */}
                  <View style={styles.productImagePlaceholder}>
                    {/* <Ionicons name="laptop-outline" size={40} color="#111827" /> */}

                  <Image 
                    source={img1} 
                    style={styles.productImage}
                    resizeMode="cover" />

                    {/* <Image source={img0x00} />  */}
                  </View>

                  <Text numberOfLines={2} style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                  <Text style={styles.productLocation}>Location: {item.location}</Text>
                </Pressable>
              );
            })}
          </View>

          {/* Pagination Footer */}
          <View style={styles.paginationContainer}>
            <TouchableOpacity style={styles.pageButtonActiveFirst}>
              <Text style={styles.pageButtonActiveText}>First</Text>
            </TouchableOpacity>
            {[1, 2, 3, 4, 5].map((page) => (
              <TouchableOpacity
                key={page}
                onPress={() => setCurrentPage(page)}
                style={[
                  styles.pageButton,
                  currentPage === page && styles.pageButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pageButtonText,
                    currentPage === page && styles.pageButtonActiveText,
                  ]}
                >
                  {page}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.pageButton}>
              <Text style={styles.pageButtonText}>Last</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#E59400',
    // padding: 16,
  },
  scrollContent: {
    // paddingBottom: 40,
  },
  whiteCardContainer: {
    backgroundColor: '#FFFFFF',
    // borderRadius: 32,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  breadcrumbContainer: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  breadcrumbText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
  },
  pageTitle: {
    // fontSize: 36,
    fontSize: 56,

    fontWeight: '800',
    
    // color: '#2E7D32', // Green accent matching reference
    // color: '#ef8206', 
    color: '#0a0500', 


    textAlign: 'center',
    marginBottom: 14,

    // newer
    marginTop: 24,
    fontFamily: "Serif", // use a custom font? 
  },
  filterBar: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    backgroundColor: '#FFFFFF',
  },
  filterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flexWrap: 'wrap',
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  filterDropdown: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F9FAFB',
  },
  filterDropdownText: {
    fontSize: 13,
    color: '#4B5563',
    fontWeight: '500',
  },

  // === PRODUCTS ===
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    justifyContent: 'flex-start',
    marginBottom: 40,
  },
  // ----
  productImage: {
    // width: '100%',
    // height: '100%',
    // borderRadius: 12,
  },
  // ---
  productCard: {
    // width: '30%',
    width: '20%', // adaptable width dependent on number of images? 

    // height: '60%',

    minWidth: 220,
    flexGrow: 1,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 20,
    padding: 16,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    overflow: 'hidden',
  },
  productCardHovered: {
    // borderColor: '#6366F1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  hoverOverlay: {
    // ...StyleSheet.absoluteFillObject,
    ...StyleSheet.absoluteFill,

    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  hoverOverlayContent: {
    alignItems: 'center',
  },
  hoverOverlayText: {
    color: '#FFFFFF',
    // fontSize: 16,
    fontSize: 27,

    // fontWeight: '700',
    fontWeight: '500',

    textAlign: 'center',

    // lineHeight: 22,
    lineHeight: 35,

    // fontFamily: 'serif', 

  },
  productImagePlaceholder: {
    width: '100%',
    height: 140,
    // backgroundColor: '#F3F4F6',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
    height: 38,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },
  productLocation: {
    fontSize: 12,
    color: '#6B7280',
  },

  // === PAGE related === 
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
  pageButton: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 9999,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  pageButtonActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  pageButtonActiveFirst: {
    backgroundColor: '#65A30D',
    borderRadius: 9999,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  pageButtonActiveText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },

  // more -----------------
  resultsCount: {
    fontSize: 16,

    // fontWeight: '600',
    fontWeight: '700',

    // color: '#4B5563',
    color: '#d25b00',

      textAlign: 'center',
    marginBottom: 24,
  },
});
