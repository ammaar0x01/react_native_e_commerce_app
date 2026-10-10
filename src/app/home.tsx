
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const FEATURED_PRODUCTS = [
  { id: '1', name: 'Acer Aspire Gaming Laptop', price: 'R 6,499' },
  { id: '2', name: 'Sony WH-1000XM4 Headphones', price: 'R 2,999' },
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
       
          <Text style={styles.topHeaderTitle}>The Shop</Text>

        <View style={styles.whiteCardContainer}>
          
          {/* Header Title */}
          {/* <Text style={styles.topHeaderTitle}>The Pawn Shop</Text> */}

          {/* Featured Products Section (6-8 items grid/scroll) */}
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {FEATURED_PRODUCTS.map((item) => (
              <View key={item.id} style={styles.productCard}>
                <View style={styles.productImagePlaceholder}>
                  <Ionicons name="cube-outline" size={36} color="#E59400" />
                </View>
                <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Categories Section (Matching Image References) */}
          <View style={[styles.sectionHeaderRow, { marginTop: 32 }]}>
            <Text style={styles.sectionTitle}>Shop by Category</Text>
            <TouchableOpacity 
                          onPress={() => router.push('/cart' as any)}
            >
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>

            <TouchableOpacity
                          onPress={() => router.push('/signup' as any)}
                          // style={styles.linkButton}
                        >
                          <Text>I don't have an account</Text>
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
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
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

