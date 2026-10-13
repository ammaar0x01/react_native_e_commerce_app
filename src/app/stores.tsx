import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
// ---------------------------------------------

import { stylesStores as styles } from '@/styles/stores.styles';
// ---------------------------------------------


interface StoreLocation {
  id: string;
  name: string;
  street: string;
  suburb: string;
  city: string;
  code: string;
  hasImage?: boolean;
}

const STORES_DATA: StoreLocation[] = [
  {
    id: '1',
    name: 'Adderley',
    street: '108 Adderley Street',
    suburb: 'Cape Town City Centre',
    city: 'Cape Town',
    code: '8000',
  },
  {
    id: '2',
    name: 'Adderley',
    street: '108 Adderley Street',
    suburb: 'Cape Town City Centre',
    city: 'Cape Town',
    code: '8000',
  },
  {
    id: '3',
    name: 'Adderley',
    street: '108 Adderley Street',
    suburb: 'Cape Town City Centre',
    city: 'Cape Town',
    code: '8000',
    hasImage: true,
  },
  {
    id: '4',
    name: 'Claremont',
    street: 'Main Road',
    suburb: 'Claremont',
    city: 'Cape Town',
    code: '7700',
  },
];

export default function StoresView() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState('');

  const isDesktop = Platform.OS === 'web' && width >= 768;

  const filteredStores = STORES_DATA.filter((store) =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.suburb.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          
          {/* Header Title */}
          <Text style={styles.pageTitle}>Locations</Text>

          {/* Search Location Input Bar */}
          <View style={styles.searchBarContainer}>
            <Ionicons name="search-outline" size={20} color="#6B7280" style={styles.searchIcon} />
            <TextInput
              placeholder="Search locations"
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={[
                styles.searchInput,
                ...Platform.select({
                  web: [{ outlineStyle: 'none' as any }],
                  default: [],
                }),
              ]}
            />
          </View>

          {/* Show Result Near Me Button */}
          <TouchableOpacity style={styles.nearMeButton} activeOpacity={0.85}>
            <Text style={styles.nearMeButtonText}>Show result near to me</Text>
          </TouchableOpacity>

          {/* Results Count Header */}
          <Text style={styles.resultsCountText}>
            Number of results: {filteredStores.length}
          </Text>

          {/* Store Cards Grid / List */}
          <View style={[styles.storesGrid, isDesktop && styles.storesGridDesktop]}>
            {filteredStores.map((store, index) => (
              <View key={`${store.id}-${index}`} style={[styles.storeCard, isDesktop && styles.storeCardDesktop]}>
                
                {/* Left side details */}
                <View style={styles.storeDetailsContainer}>
                  <View style={styles.storeHeaderRow}>
                    <Text style={styles.storeName}>{store.name}</Text>
                    {!store.hasImage && (
                      <TouchableOpacity style={styles.directionsButtonTop}>
                        <Text style={styles.directionsButtonTopText}>Directions</Text>
                      </TouchableOpacity>
                    )}
                  </View>

                  <Text style={styles.storeAddressLine}>{store.street}</Text>
                  <Text style={styles.storeAddressLine}>{store.suburb}</Text>
                  <Text style={styles.storeAddressLine}>{store.city}</Text>
                  <Text style={styles.storeAddressLine}>{store.code}</Text>

                  <TouchableOpacity style={styles.viewStoreDetailsButton}>
                    <Text style={styles.viewStoreDetailsText}>View store details</Text>
                  </TouchableOpacity>
                </View>

                {/* Right side image placeholder (matching bottom card reference) */}
                {store.hasImage && (
                  <View style={styles.storeImageSection}>
                    <View style={styles.imagePlaceholderBox} />
                    <TouchableOpacity style={styles.directionsButtonBottom}>
                      <Text style={styles.directionsButtonBottomText}>Directions</Text>
                    </TouchableOpacity>
                  </View>
                )}

              </View>
            ))}
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

