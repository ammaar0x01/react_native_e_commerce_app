
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface CartItem {
  id: string;
  name: string;
  price: number;
}

export default function CartView() {
  const router = useRouter();

  // Initial cart items based on the reference design
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: '1', name: 'Asus laptop', price: 4400 },
    { id: '2', name: 'Asus laptop', price: 4400 },
    { id: '3', name: 'Asus laptop', price: 4400 },
  ]);

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setCartItems([]);
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.whiteCardContainer}>
          
          {/* Page Title */}
          <Text style={styles.pageTitle}>Shopping Cart</Text>

          {/* Main Layout Grid (Cart Items Left, Summary Right) */}
          <View style={styles.cartContentLayout}>
            
            {/* Left Column: Items List */}
            <View style={styles.itemsColumn}>
              {cartItems.length === 0 ? (
                <View style={styles.emptyContainer}>
                  <Ionicons name="cart-outline" size={64} color="#9CA3AF" />
                  <Text style={styles.emptyText}>Your cart is empty</Text>
                </View>
              ) : (
                cartItems.map((item, index) => (
                  <View key={`${item.id}-${index}`} style={styles.cartItemCard}>
                    {/* Product Image / Placeholder */}
                    <View style={styles.productImagePlaceholder}>
                      <Ionicons name="laptop-outline" size={32} color="#111827" />
                    </View>

                    {/* Product Details */}
                    <View style={styles.productInfo}>
                      <Text style={styles.productName}>{item.name}</Text>
                      <Text style={styles.productPrice}>R{item.price}</Text>
                    </View>

                    {/* Remove Button */}
                    <TouchableOpacity
                      onPress={() => removeItem(item.id)}
                      style={styles.removeButton}
                    >
                      <Text style={styles.removeButtonText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                ))
              )}

              {/* Bottom Actions for Items */}
              {cartItems.length > 0 && (
                <View style={styles.bottomActionsRow}>
                  <View>
                    <Text style={styles.totalLabel}>Total:</Text>
                    <Text style={styles.totalValue}>R {totalAmount}</Text>
                  </View>

                  <View style={styles.actionButtonsGroup}>
                    <TouchableOpacity onPress={removeAll} style={styles.secondaryActionButton}>
                      <Text style={styles.secondaryActionText}>Remove All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => router.push('/')}
                      style={styles.secondaryActionButton}
                    >
                      <Text style={styles.secondaryActionText}>Continue Shopping</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>

            {/* Right Column: Order Summary Card */}
            <View style={styles.summaryColumn}>
              <View style={styles.orderSummaryCard}>
                <Text style={styles.summaryTitle}>Order Summary</Text>

                <View style={styles.summaryDivider} />

                <View style={styles.summaryRow}>
                  <Text style={styles.summaryKey}>Delivery:</Text>
                  <Text style={styles.summaryVal}>n/a</Text>
                </View>

                <View style={styles.summaryRow}>
                  <Text style={styles.summaryKey}>Order Total:</Text>
                  <Text style={styles.summaryValBold}>R{totalAmount}</Text>
                </View>

                <TouchableOpacity style={styles.checkoutButton}>
                  <Text style={styles.checkoutButtonText}>Secure Checkout</Text>
                </TouchableOpacity>
              </View>
            </View>

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
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 24,
  },
  cartContentLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
  },
  itemsColumn: {
    flex: 2,
    minWidth: 300,
  },
  summaryColumn: {
    flex: 1,
    minWidth: 260,
  },
  cartItemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  productImagePlaceholder: {
    width: 80,
    height: 60,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4B5563',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  removeButton: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  removeButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  bottomActionsRow: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 20,
    gap: 16,
  },
  totalLabel: {
    fontSize: 16,
    color: '#4B5563',
    fontWeight: '500',
  },
  totalValue: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
  },
  actionButtonsGroup: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  secondaryActionButton: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  secondaryActionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  orderSummaryCard: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  summaryKey: {
    fontSize: 15,
    color: '#4B5563',
  },
  summaryVal: {
    fontSize: 15,
    color: '#111827',
  },
  summaryValBold: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  checkoutButton: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  checkoutButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    marginTop: 12,
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
  },
});


