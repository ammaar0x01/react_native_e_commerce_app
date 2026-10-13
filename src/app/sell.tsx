import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SellView() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const isDesktop = Platform.OS === 'web' && width >= 768;

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={[styles.contentWrapper, isDesktop && styles.contentWrapperDesktop]}>
          
          <Text style={styles.pageTitle}>Sell Items</Text>

          {/* Image Upload Box */}
          <TouchableOpacity style={styles.imageUploadBox} activeOpacity={0.8}>
            <View style={styles.selectImagesButton}>
              <Text style={styles.selectImagesText}>Select images</Text>
            </View>
          </TouchableOpacity>

          {/* Form Fields */}
          <View style={styles.formContainer}>
            <TextInput
              placeholder="Name of item"
              placeholderTextColor="#9CA3AF"
              value={itemName}
              onChangeText={setItemName}
              style={styles.inputField}
            />

            <TextInput
              placeholder="Description"
              placeholderTextColor="#9CA3AF"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={4}
              style={[styles.inputField, styles.textAreaField]}
            />

            <TextInput
              placeholder="Price"
              placeholderTextColor="#9CA3AF"
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
              style={styles.inputField}
            />

            {/* Condition Dropdown Placeholder */}
            <TouchableOpacity style={styles.dropdownField}>
              <Text style={styles.dropdownText}>Condition</Text>
              <Ionicons name="chevron-down" size={20} color="#111827" />
            </TouchableOpacity>

            <TextInput
              placeholder="Price"
              placeholderTextColor="#9CA3AF"
              style={styles.inputField}
            />

            {/* Store to sell to Dropdown */}
            <TouchableOpacity style={styles.dropdownField}>
              <Text style={styles.dropdownText}>Store to sell to</Text>
              <Ionicons name="chevron-down" size={20} color="#111827" />
            </TouchableOpacity>

            <Text style={styles.disclaimerText}>
              Please note that you need to deliver the product to that specific store
            </Text>

            {/* Submit Button */}
            <TouchableOpacity style={styles.sellButton} activeOpacity={0.85}>
              <Text style={styles.sellButtonText}>Sell Product</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}
// ==========================================


const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 40,
  },
  scrollContent: {
    paddingBottom: 60,
  },
  contentWrapper: {
    width: '100%',
    // maxWidth: 600,
    alignSelf: 'center',
  },
  contentWrapperDesktop: {
    // maxWidth: 700,
  },
  pageTitle: {
    // fontSize: 40,
    fontSize: 50,

    fontWeight: '800',
    color: '#111827',
    marginBottom: 20,
    // fontFamily: 'serif', 
  },

  imageUploadBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#9CA3AF',
    borderRadius: 20,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 24,
  },
  selectImagesButton: {
    backgroundColor: '#FFE3A8',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: '#E59400',
  },
  selectImagesText: {
    color: '#111827',
    fontWeight: '700',
    fontSize: 14,
  },
  formContainer: {
    gap: 16,
  },
  inputField: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    fontSize: 15,
    color: '#111827',
  },
  textAreaField: {
    height: 100,
    textAlignVertical: 'top',
  },
  dropdownField: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 15,
    color: '#9CA3AF',
  },
  disclaimerText: {
    fontSize: 12,
    color: '#4B5563',
    lineHeight: 18,
    marginTop: 4,
    marginBottom: 8,
  },
  sellButton: {
    backgroundColor: '#E59400',
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sellButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 16,
  },
});
