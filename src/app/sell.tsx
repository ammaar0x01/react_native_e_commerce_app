// // // import React, { useState } from 'react';
// // // import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Platform, useWindowDimensions } from 'react-native';
// // // import { Ionicons } from '@expo/vector-icons';
// // // import { useRouter } from 'expo-router';

// // // export default function SellView() {
// // //   const router = useRouter();
// // //   const { width } = useWindowDimensions();
// // //   const [itemName, setItemName] = useState('');
// // //   const [description, setDescription] = useState('');
// // //   const [price, setPrice] = useState('');

// // //   const isDesktop = Platform.OS === 'web' && width >= 768;

// // //   return (
// // //     <View style={styles.outerContainer}>
// // //       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
// // //         <View style={[styles.contentWrapper, isDesktop && styles.contentWrapperDesktop]}>
          
// // //           <Text style={styles.pageTitle}>Sell Items</Text>

// // //           {/* Image Upload Box */}
// // //           <TouchableOpacity style={styles.imageUploadBox} activeOpacity={0.8}>
// // //             <View style={styles.selectImagesButton}>
// // //               <Text style={styles.selectImagesText}>Select images</Text>
// // //             </View>
// // //           </TouchableOpacity>

// // //           {/* Form Fields */}
// // //           <View style={styles.formContainer}>
// // //             <TextInput
// // //               placeholder="Name of item"
// // //               placeholderTextColor="#9CA3AF"
// // //               value={itemName}
// // //               onChangeText={setItemName}
// // //               style={styles.inputField}
// // //             />

// // //             <TextInput
// // //               placeholder="Description"
// // //               placeholderTextColor="#9CA3AF"
// // //               value={description}
// // //               onChangeText={setDescription}
// // //               multiline
// // //               numberOfLines={4}
// // //               style={[styles.inputField, styles.textAreaField]}
// // //             />

// // //             <TextInput
// // //               placeholder="Price"
// // //               placeholderTextColor="#9CA3AF"
// // //               value={price}
// // //               onChangeText={setPrice}
// // //               keyboardType="numeric"
// // //               style={styles.inputField}
// // //             />

// // //             {/* Condition Dropdown Placeholder */}
// // //             <TouchableOpacity style={styles.dropdownField}>
// // //               <Text style={styles.dropdownText}>Condition</Text>
// // //               <Ionicons name="chevron-down" size={20} color="#111827" />
// // //             </TouchableOpacity>

// // //             <TextInput
// // //               placeholder="Price"
// // //               placeholderTextColor="#9CA3AF"
// // //               style={styles.inputField}
// // //             />

// // //             {/* Store to sell to Dropdown */}
// // //             <TouchableOpacity style={styles.dropdownField}>
// // //               <Text style={styles.dropdownText}>Store to sell to</Text>
// // //               <Ionicons name="chevron-down" size={20} color="#111827" />
// // //             </TouchableOpacity>

// // //             <Text style={styles.disclaimerText}>
// // //               Please note that you need to deliver the product to that specific store
// // //             </Text>

// // //             {/* Submit Button */}
// // //             <TouchableOpacity style={styles.sellButton} activeOpacity={0.85}>
// // //               <Text style={styles.sellButtonText}>Sell Product</Text>
// // //             </TouchableOpacity>
// // //           </View>

// // //         </View>
// // //       </ScrollView>
// // //     </View>
// // //   );
// // // }
// // // // ==========================================


// // // const styles = StyleSheet.create({
// // //   outerContainer: {
// // //     flex: 1,
// // //     backgroundColor: '#ffffff',
// // //     padding: 40,
// // //   },
// // //   scrollContent: {
// // //     paddingBottom: 60,
// // //   },
// // //   contentWrapper: {
// // //     width: '100%',
// // //     // maxWidth: 600,
// // //     alignSelf: 'center',
// // //   },
// // //   contentWrapperDesktop: {
// // //     // maxWidth: 700,
// // //   },
// // //   pageTitle: {
// // //     // fontSize: 40,
// // //     fontSize: 44,

// // //     fontWeight: '800',
// // //     color: '#111827',
// // //     marginBottom: 20,
// // //     // fontFamily: 'serif', 
// // //   },

// // //   imageUploadBox: {
// // //     borderWidth: 1,
// // //     borderStyle: 'dashed',
// // //     borderColor: '#9CA3AF',
// // //     borderRadius: 20,
// // //     height: 160,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     backgroundColor: '#FFFFFF',
// // //     marginBottom: 24,
// // //   },
// // //   selectImagesButton: {
// // //     backgroundColor: '#FFE3A8',
// // //     borderRadius: 16,
// // //     paddingVertical: 12,
// // //     paddingHorizontal: 24,
// // //     borderWidth: 1,
// // //     borderColor: '#E59400',
// // //   },
// // //   selectImagesText: {
// // //     color: '#111827',
// // //     fontWeight: '700',
// // //     fontSize: 14,
// // //   },
// // //   formContainer: {
// // //     gap: 16,
// // //   },
// // //   inputField: {
// // //     backgroundColor: '#FFFFFF',
// // //     borderRadius: 16,
// // //     paddingHorizontal: 20,
// // //     paddingVertical: 14,
// // //     borderWidth: 1,
// // //     borderColor: '#E5E7EB',
// // //     fontSize: 15,
// // //     color: '#111827',
// // //   },
// // //   textAreaField: {
// // //     height: 100,
// // //     textAlignVertical: 'top',
// // //   },
// // //   dropdownField: {
// // //     backgroundColor: '#FFFFFF',
// // //     borderRadius: 16,
// // //     paddingHorizontal: 20,
// // //     paddingVertical: 14,
// // //     borderWidth: 1,
// // //     borderColor: '#E5E7EB',
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //   },
// // //   dropdownText: {
// // //     fontSize: 15,
// // //     color: '#9CA3AF',
// // //   },
// // //   disclaimerText: {
// // //     fontSize: 12,
// // //     color: '#4B5563',
// // //     lineHeight: 18,
// // //     marginTop: 4,
// // //     marginBottom: 8,
// // //   },
// // //   sellButton: {
// // //     backgroundColor: '#E59400',
// // //     borderRadius: 20,
// // //     paddingVertical: 16,
// // //     alignItems: 'center',
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 4,
// // //     elevation: 3,
// // //   },
// // //   sellButtonText: {
// // //     color: '#FFFFFF',
// // //     fontWeight: '800',
// // //     fontSize: 16,
// // //   },
// // // });



// // // newer1
// // import React, { useState, useEffect } from 'react';
// // import { 
// //   View, 
// //   Text, 
// //   ScrollView, 
// //   TextInput, 
// //   TouchableOpacity, 
// //   StyleSheet, 
// //   Platform, 
// //   useWindowDimensions, 
// //   Image, 
// //   Alert 
// // } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';
// // import { useRouter } from 'expo-router';

// // // Temporary Local JSON Database Key
// // const STORAGE_KEY = 'TEMP_PRODUCTS_DB_JSON';

// // interface ProductItem {
// //   id: string;
// //   name: string;
// //   description: string;
// //   price: string;
// //   condition: string;
// //   store: string;
// //   imageUri: string | null;
// //   createdAt: string;
// // }

// // export default function SellView() {
// //   const router = useRouter();
// //   const { width } = useWindowDimensions();

// //   // Form State
// //   const [itemName, setItemName] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [price, setPrice] = useState('');
// //   const [condition, setCondition] = useState('New');
// //   const [store, setStore] = useState('Cape Town Main Store');
// //   const [imageUri, setImageUri] = useState<string | null>(null);

// //   // Database State (CRUD items list)
// //   const [savedProducts, setSavedProducts] = useState<ProductItem[]>([]);
// //   const [editingId, setEditingId] = useState<string | null>(null);

// //   const isDesktop = Platform.OS === 'web' && width >= 768;

// //   // Load items from our "temp json database" on mount
// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   const fetchProducts = () => {
// //     if (Platform.OS === 'web') {
// //       const data = localStorage.getItem(STORAGE_KEY);
// //       if (data) {
// //         setSavedProducts(JSON.parse(data));
// //       }
// //     }
// //   };

// //   // 1. CREATE & UPDATE (Save to Temp JSON Database)
// //   const handleSaveProduct = () => {
// //     if (!itemName.trim() || !price.trim()) {
// //       alert('Please fill in the item name and price.');
// //       return;
// //     }

// //     const newItem: ProductItem = {
// //       id: editingId ? editingId : Date.now().toString(),
// //       name: itemName,
// //       description,
// //       price,
// //       condition,
// //       store,
// //       imageUri,
// //       createdAt: new Date().toISOString(),
// //     };

// //     let updatedList;
// //     if (editingId) {
// //       // UPDATE operation
// //       updatedList = savedProducts.map((p) => (p.id === editingId ? newItem : p));
// //       setEditingId(null);
// //     } else {
// //       // CREATE operation
// //       updatedList = [newItem, ...savedProducts];
// //     }

// //     // Save to temp JSON database storage
// //     if (Platform.OS === 'web') {
// //       localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
// //     }

// //     setSavedProducts(updatedList);
// //     handleResetForm();
// //     alert(editingId ? 'Product updated successfully!' : 'Product saved to temporary JSON database!');
// //   };

// //   // 2. DELETE Operation
// //   const handleDeleteProduct = (id: string) => {
// //     const updatedList = savedProducts.filter((p) => p.id !== id);
// //     if (Platform.OS === 'web') {
// //       localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
// //     }
// //     setSavedProducts(updatedList);
// //   };

// //   // 3. EDIT/READ Operation (Populate form)
// //   const handleEditProduct = (product: ProductItem) => {
// //     setEditingId(product.id);
// //     setItemName(product.name);
// //     setDescription(product.description);
// //     setPrice(product.price);
// //     setCondition(product.condition);
// //     setStore(product.store);
// //     setImageUri(product.imageUri);
// //   };

// //   const handleResetForm = () => {
// //     setItemName('');
// //     setDescription('');
// //     setPrice('');
// //     setImageUri(null);
// //     setEditingId(null);
// //   };

// //   // Function to handle Image selection on Web
// //   const handleSelectImagesWeb = () => {
// //     if (Platform.OS !== 'web') return;

// //     const input = document.createElement('input');
// //     input.type = 'file';
// //     input.accept = 'image/*';
// //     input.onchange = (e: any) => {
// //       const file = e.target.files?.[0];
// //       if (file) {
// //         const reader = new FileReader();
// //         reader.onload = (uploadEvent) => {
// //           setImageUri(uploadEvent.target?.result as string);
// //         };
// //         reader.readAsDataURL(file);
// //       }
// //     };
// //     input.click();
// //   };

// //   return (
// //     <View style={styles.outerContainer}>
// //       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
// //         <View style={[styles.contentWrapper, isDesktop && styles.contentWrapperDesktop]}>
          
// //           <Text style={styles.pageTitle}>{editingId ? 'Edit Product' : 'Sell Items'}</Text>

// //           {/* Image Upload Box */}
// //           <TouchableOpacity 
// //             style={styles.imageUploadBox} 
// //             activeOpacity={0.8}
// //             onPress={handleSelectImagesWeb}
// //           >
// //             {imageUri ? (
// //               <Image source={{ uri: imageUri }} style={styles.previewImage} />
// //             ) : (
// //               <View style={styles.selectImagesButton}>
// //                 <Text style={styles.selectImagesText}>Select images</Text>
// //               </View>
// //             )}
// //           </TouchableOpacity>

// //           {/* Form Fields */}
// //           <View style={styles.formContainer}>
// //             <TextInput
// //               placeholder="Name of item"
// //               placeholderTextColor="#9CA3AF"
// //               value={itemName}
// //               onChangeText={setItemName}
// //               style={styles.inputField}
// //             />

// //             <TextInput
// //               placeholder="Description"
// //               placeholderTextColor="#9CA3AF"
// //               value={description}
// //               onChangeText={setDescription}
// //               multiline
// //               numberOfLines={4}
// //               style={[styles.inputField, styles.textAreaField]}
// //             />

// //             <TextInput
// //               placeholder="Price (e.g. R 1,500)"
// //               placeholderTextColor="#9CA3AF"
// //               value={price}
// //               onChangeText={setPrice}
// //               style={styles.inputField}
// //             />

// //             {/* Condition Selector */}
// //             <TouchableOpacity 
// //               style={styles.dropdownField} 
// //               onPress={() => setCondition(condition === 'New' ? 'Certified Used' : 'New')}
// //             >
// //               <Text style={styles.dropdownTextActive}>Condition: {condition}</Text>
// //               <Ionicons name="chevron-down" size={20} color="#111827" />
// //             </TouchableOpacity>

// //             {/* Store Selector */}
// //             <TouchableOpacity 
// //               style={styles.dropdownField}
// //               onPress={() => setStore(store === 'Cape Town Main Store' ? 'Bellville Branch' : 'Cape Town Main Store')}
// //             >
// //               <Text style={styles.dropdownTextActive}>Store: {store}</Text>
// //               <Ionicons name="chevron-down" size={20} color="#111827" />
// //             </TouchableOpacity>

// //             <Text style={styles.disclaimerText}>
// //               Please note that you need to deliver the product to that specific store
// //             </Text>

// //             {/* Submit / Update Button */}
// //             <TouchableOpacity style={styles.sellButton} activeOpacity={0.85} onPress={handleSaveProduct}>
// //               <Text style={styles.sellButtonText}>{editingId ? 'Update Product' : 'Sell Product'}</Text>
// //             </TouchableOpacity>

// //             {editingId && (
// //               <TouchableOpacity style={styles.cancelButton} onPress={handleResetForm}>
// //                 <Text style={styles.cancelButtonText}>Cancel Edit</Text>
// //               </TouchableOpacity>
// //             )}
// //           </View>

// //           {/* CRUD Database Items Preview Section */}
// //           <View style={styles.dbContainer}>
// //             <Text style={styles.dbTitle}>Temporary JSON Database Records ({savedProducts.length})</Text>
// //             {savedProducts.length === 0 ? (
// //               <Text style={styles.noDataText}>No items saved in temporary storage yet.</Text>
// //             ) : (
// //               savedProducts.map((item) => (
// //                 <View key={item.id} style={styles.dbCard}>
// //                   {item.imageUri && <Image source={{ uri: item.imageUri }} style={styles.dbThumb} />}
// //                   <View style={{ flex: 1 }}>
// //                     <Text style={styles.dbItemName}>{item.name}</Text>
// //                     <Text style={styles.dbItemPrice}>{item.price} • {item.condition}</Text>
// //                     <Text style={styles.dbItemStore}>📍 {item.store}</Text>
// //                   </View>
// //                   <View style={styles.dbActionRow}>
// //                     <TouchableOpacity onPress={() => handleEditProduct(item)} style={styles.editBtn}>
// //                       <Ionicons name="create-outline" size={16} color="#E59400" />
// //                     </TouchableOpacity>
// //                     <TouchableOpacity onPress={() => handleDeleteProduct(item.id)} style={styles.deleteBtn}>
// //                       <Ionicons name="trash-outline" size={16} color="#EF4444" />
// //                     </TouchableOpacity>
// //                   </View>
// //                 </View>
// //               ))
// //             )}
// //           </View>

// //         </View>
// //       </ScrollView>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   outerContainer: {
// //     flex: 1,
// //     backgroundColor: '#ffffff',
// //     padding: 40,
// //   },
// //   scrollContent: {
// //     paddingBottom: 60,
// //   },
// //   contentWrapper: {
// //     width: '100%',
// //     maxWidth: 700,
// //     alignSelf: 'center',
// //   },
// //   contentWrapperDesktop: {
// //     maxWidth: 700,
// //   },
// //   pageTitle: {
// //     fontSize: 44,
// //     fontWeight: '800',
// //     color: '#111827',
// //     marginBottom: 20,
// //   },
// //   imageUploadBox: {
// //     borderWidth: 1,
// //     borderStyle: 'dashed',
// //     borderColor: '#9CA3AF',
// //     borderRadius: 20,
// //     height: 160,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#FFFFFF',
// //     marginBottom: 24,
// //     overflow: 'hidden',
// //   },
// //   previewImage: {
// //     width: '100%',
// //     height: '100%',
// //     resizeMode: 'cover',
// //   },
// //   selectImagesButton: {
// //     backgroundColor: '#FFE3A8',
// //     borderRadius: 16,
// //     paddingVertical: 12,
// //     paddingHorizontal: 24,
// //     borderWidth: 1,
// //     borderColor: '#E59400',
// //   },
// //   selectImagesText: {
// //     color: '#111827',
// //     fontWeight: '700',
// //     fontSize: 14,
// //   },
// //   formContainer: {
// //     gap: 16,
// //     marginBottom: 40,
// //   },
// //   inputField: {
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: 16,
// //     paddingHorizontal: 20,
// //     paddingVertical: 14,
// //     borderWidth: 1,
// //     borderColor: '#E5E7EB',
// //     fontSize: 15,
// //     color: '#111827',
// //     outlineStyle: 'none' as any,
// //   },
// //   textAreaField: {
// //     height: 100,
// //     textAlignVertical: 'top',
// //   },
// //   dropdownField: {
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: 16,
// //     paddingHorizontal: 20,
// //     paddingVertical: 14,
// //     borderWidth: 1,
// //     borderColor: '#E5E7EB',
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   dropdownTextActive: {
// //     fontSize: 15,
// //     color: '#111827',
// //     fontWeight: '600',
// //   },
// //   disclaimerText: {
// //     fontSize: 12,
// //     color: '#4B5563',
// //     lineHeight: 18,
// //     marginTop: 4,
// //     marginBottom: 8,
// //   },
// //   sellButton: {
// //     backgroundColor: '#E59400',
// //     borderRadius: 20,
// //     paddingVertical: 16,
// //     alignItems: 'center',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 3,
// //   },
// //   sellButtonText: {
// //     color: '#FFFFFF',
// //     fontWeight: '800',
// //     fontSize: 16,
// //   },
// //   cancelButton: {
// //     backgroundColor: '#F3F4F6',
// //     borderRadius: 20,
// //     paddingVertical: 12,
// //     alignItems: 'center',
// //   },
// //   cancelButtonText: {
// //     color: '#4B5563',
// //     fontWeight: '700',
// //     fontSize: 14,
// //   },
// //   dbContainer: {
// //     borderTopWidth: 1,
// //     borderTopColor: '#E5E7EB',
// //     paddingTop: 24,
// //   },
// //   dbTitle: {
// //     fontSize: 18,
// //     fontWeight: '700',
// //     color: '#111827',
// //     marginBottom: 16,
// //   },
// //   noDataText: {
// //     color: '#9CA3AF',
// //     fontStyle: 'italic',
// //   },
// //   dbCard: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#F9FAFB',
// //     borderRadius: 12,
// //     padding: 12,
// //     marginBottom: 12,
// //     borderWidth: 1,
// //     borderColor: '#E5E7EB',
// //     gap: 12,
// //   },
// //   dbThumb: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 8,
// //     resizeMode: 'cover',
// //   },
// //   dbItemName: {
// //     fontSize: 15,
// //     fontWeight: '700',
// //     color: '#111827',
// //   },
// //   dbItemPrice: {
// //     fontSize: 13,
// //     color: '#D97706',
// //     fontWeight: '600',
// //   },
// //   dbItemStore: {
// //     fontSize: 12,
// //     color: '#6B7280',
// //     marginTop: 2,
// //   },
// //   dbActionRow: {
// //     flexDirection: 'row',
// //     gap: 8,
// //   },
// //   editBtn: {
// //     padding: 8,
// //     backgroundColor: '#FFFBEB',
// //     borderRadius: 8,
// //     borderWidth: 1,
// //     borderColor: '#FEF3C7',
// //   },
// //   deleteBtn: {
// //     padding: '8' as any,
// //     backgroundColor: '#FEF2F2',
// //     borderRadius: 8,
// //     borderWidth: 1,
// //     borderColor: '#FEE2E2',
// //   },
// // });



// // newer2
// import React, { useState, useEffect } from 'react';
// import { 
//   View, 
//   Text, 
//   ScrollView, 
//   TextInput, 
//   TouchableOpacity, 
//   StyleSheet, 
//   Platform, 
//   useWindowDimensions, 
//   Image 
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';

// // Temporary Local JSON Database Key
// const STORAGE_KEY = 'TEMP_PRODUCTS_DB_JSON';

// interface ProductItem {
//   id: string;
//   name: string;
//   description: string;
//   price: string;
//   condition: string;
//   store: string;
//   images: string[];
//   createdAt: string;
// }

// export default function SellView() {
//   const router = useRouter();
//   const { width } = useWindowDimensions();

//   // Form State
//   const [itemName, setItemName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [condition, setCondition] = useState('New');
//   const [store, setStore] = useState('Cape Town Main Store');
//   const [images, setImages] = useState<string[]>([]);

//   // Database State (CRUD items list)
//   const [savedProducts, setSavedProducts] = useState<ProductItem[]>([]);
//   const [editingId, setEditingId] = useState<string | null>(null);

//   const isDesktop = Platform.OS === 'web' && width >= 768;

//   // Load items from our temporary JSON database on mount
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = () => {
//     if (Platform.OS === 'web') {
//       const data = localStorage.getItem(STORAGE_KEY);
//       if (data) {
//         setSavedProducts(JSON.parse(data));
//       }
//     }
//   };

//   // Function to handle Multiple Image selection on Web (Min 3, Max 9)
//   const handleSelectImagesWeb = () => {
//     if (Platform.OS !== 'web') return;

//     const input = document.createElement('input');
//     input.type = 'file';
//     input.accept = 'image/*';
//     input.multiple = true; // Allow selecting multiple files at once
    
//     input.onchange = (e: any) => {
//       const files = Array.from(e.target.files as FileList);
//       if (files.length === 0) return;

//       // Calculate how many more images can be added up to max of 9
//       const remainingSlots = 9 - images.length;
//       if (remainingSlots <= 0) {
//         alert('You have already reached the maximum limit of 9 images.');
//         return;
//       }

//       const filesToProcess = files.slice(0, remainingSlots);
//       let loadedCount = 0;
//       const newBase64Images: string[] = [];

//       filesToProcess.forEach((file) => {
//         const reader = new FileReader();
//         reader.onload = (uploadEvent) => {
//           const result = uploadEvent.target?.result as string;
//           if (result) {
//             newBase64Images.push(result);
//           }
//           loadedCount++;
//           if (loadedCount === filesToProcess.length) {
//             setImages((prev) => [...prev, ...newBase64Images]);
//           }
//         };
//         reader.readAsDataURL(file);
//       });
//     };

//     input.click();
//   };

//   // Remove a specific image from the array
//   const handleRemoveImage = (indexToRemove: number) => {
//     setImages((prev) => prev.filter((_, index) => index !== indexToRemove));
//   };

//   // 1. CREATE & UPDATE (Save to Temp JSON Database with validation)
//   const handleSaveProduct = () => {
//     if (!itemName.trim() || !price.trim()) {
//       alert('Please fill in the item name and price.');
//       return;
//     }

//     if (images.length < 3) {
//       alert(`Please upload at least 3 images. You currently have ${images.length}.`);
//       return;
//     }

//     if (images.length > 9) {
//       alert('You can upload a maximum of 9 images.');
//       return;
//     }

//     const newItem: ProductItem = {
//       id: editingId ? editingId : Date.now().toString(),
//       name: itemName,
//       description,
//       price,
//       condition,
//       store,
//       images,
//       createdAt: new Date().toISOString(),
//     };

//     let updatedList;
//     if (editingId) {
//       // UPDATE operation
//       updatedList = savedProducts.map((p) => (p.id === editingId ? newItem : p));
//       setEditingId(null);
//     } else {
//       // CREATE operation
//       updatedList = [newItem, ...savedProducts];
//     }

//     // Save to temp JSON database storage
//     if (Platform.OS === 'web') {
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
//     }

//     setSavedProducts(updatedList);
//     handleResetForm();
//     alert(editingId ? 'Product updated successfully!' : 'Product saved to temporary JSON database!');
//   };

//   // 2. DELETE Operation
//   const handleDeleteProduct = (id: string) => {
//     const updatedList = savedProducts.filter((p) => p.id !== id);
//     if (Platform.OS === 'web') {
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
//     }
//     setSavedProducts(updatedList);
//   };

//   // 3. EDIT/READ Operation (Populate form)
//   const handleEditProduct = (product: ProductItem) => {
//     setEditingId(product.id);
//     setItemName(product.name);
//     setDescription(product.description);
//     setPrice(product.price);
//     setCondition(product.condition);
//     setStore(product.store);
//     setImages(product.images || []);
//   };

//   const handleResetForm = () => {
//     setItemName('');
//     setDescription('');
//     setPrice('');
//     setImages([]);
//     setEditingId(null);
//   };

//   return (
//     <View style={styles.outerContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
//         <View style={[styles.contentWrapper, isDesktop && styles.contentWrapperDesktop]}>
          
//           <Text style={styles.pageTitle}>{editingId ? 'Edit Product' : 'Sell Items'}</Text>

//           {/* Multiple Image Upload Box & Grid */}
//           <View style={styles.imageSection}>
//             <View style={styles.imageHeaderRow}>
//               <Text style={styles.imageSectionLabel}>
//                 Product Images ({images.length}/9) <Text style={styles.requiredText}>*Min 3, Max 9</Text>
//               </Text>
//               {images.length < 9 && (
//                 <TouchableOpacity style={styles.addMoreButton} onPress={handleSelectImagesWeb}>
//                   <Ionicons name="add" size={16} color="#E59400" />
//                   <Text style={styles.addMoreText}>Add Images</Text>
//                 </TouchableOpacity>
//               )}
//             </View>

//             {images.length === 0 ? (
//               <TouchableOpacity 
//                 style={styles.imageUploadBox} 
//                 activeOpacity={0.8}
//                 onPress={handleSelectImagesWeb}
//               >
//                 <View style={styles.selectImagesButton}>
//                   <Text style={styles.selectImagesText}>Select Images (Min 3 required)</Text>
//                 </View>
//               </TouchableOpacity>
//             ) : (
//               <View style={styles.imageGrid}>
//                 {images.map((imgUri, index) => (
//                   <View key={index} style={styles.imageThumbWrapper}>
//                     <Image source={{ uri: imgUri }} style={styles.previewImage} />
//                     <TouchableOpacity 
//                       style={styles.removeImageBtn} 
//                       onPress={() => handleRemoveImage(index)}
//                     >
//                       <Ionicons name="close" size={14} color="#FFFFFF" />
//                     </TouchableOpacity>
//                   </View>
//                 ))}
//                 {images.length < 9 && (
//                   <TouchableOpacity style={styles.imageAddMoreBox} onPress={handleSelectImagesWeb}>
//                     <Ionicons name="camera-outline" size={24} color="#9CA3AF" />
//                     <Text style={styles.imageAddMoreText}>Add more</Text>
//                   </TouchableOpacity>
//                 )}
//               </View>
//             )}
//           </View>

//           {/* Form Fields */}
//           <View style={styles.formContainer}>
//             <TextInput
//               placeholder="Name of item"
//               placeholderTextColor="#9CA3AF"
//               value={itemName}
//               onChangeText={setItemName}
//               style={styles.inputField}
//             />

//             <TextInput
//               placeholder="Description"
//               placeholderTextColor="#9CA3AF"
//               value={description}
//               onChangeText={setDescription}
//               multiline
//               numberOfLines={4}
//               style={[styles.inputField, styles.textAreaField]}
//             />

//             <TextInput
//               placeholder="Price (e.g. R 1,500)"
//               placeholderTextColor="#9CA3AF"
//               value={price}
//               onChangeText={setPrice}
//               style={styles.inputField}
//             />

//             {/* Condition Selector */}
//             <TouchableOpacity 
//               style={styles.dropdownField} 
//               onPress={() => setCondition(condition === 'New' ? 'Certified Used' : 'New')}
//             >
//               <Text style={styles.dropdownTextActive}>Condition: {condition}</Text>
//               <Ionicons name="chevron-down" size={20} color="#111827" />
//             </TouchableOpacity>

//             {/* Store Selector */}
//             <TouchableOpacity 
//               style={styles.dropdownField}
//               onPress={() => setStore(store === 'Cape Town Main Store' ? 'Bellville Branch' : 'Cape Town Main Store')}
//             >
//               <Text style={styles.dropdownTextActive}>Store: {store}</Text>
//               <Ionicons name="chevron-down" size={20} color="#111827" />
//             </TouchableOpacity>

//             <Text style={styles.disclaimerText}>
//               Please note that you need to deliver the product to that specific store
//             </Text>

//             {/* Submit / Update Button */}
//             <TouchableOpacity style={styles.sellButton} activeOpacity={0.85} onPress={handleSaveProduct}>
//               <Text style={styles.sellButtonText}>{editingId ? 'Update Product' : 'Sell Product'}</Text>
//             </TouchableOpacity>

//             {editingId && (
//               <TouchableOpacity style={styles.cancelButton} onPress={handleResetForm}>
//                 <Text style={styles.cancelButtonText}>Cancel Edit</Text>
//               </TouchableOpacity>
//             )}
//           </View>

//           {/* CRUD Database Items Preview Section */}
//           <View style={styles.dbContainer}>
//             <Text style={styles.dbTitle}>Temporary JSON Database Records ({savedProducts.length})</Text>
//             {savedProducts.length === 0 ? (
//               <Text style={styles.noDataText}>No items saved in temporary storage yet.</Text>
//             ) : (
//               savedProducts.map((item) => (
//                 <View key={item.id} style={styles.dbCard}>
//                   {item.images && item.images.length > 0 && (
//                     <Image source={{ uri: item.images[0] }} style={styles.dbThumb} />
//                   )}
//                   <View style={{ flex: 1 }}>
//                     <Text style={styles.dbItemName}>{item.name}</Text>
//                     <Text style={styles.dbItemPrice}>{item.price} • {item.condition}</Text>
//                     <Text style={styles.dbItemStore}>📍 {item.store} ({item.images?.length || 0} photos)</Text>
//                   </View>
//                   <View style={styles.dbActionRow}>
//                     <TouchableOpacity onPress={() => handleEditProduct(item)} style={styles.editBtn}>
//                       <Ionicons name="create-outline" size={16} color="#E59400" />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => handleDeleteProduct(item.id)} style={styles.deleteBtn}>
//                       <Ionicons name="trash-outline" size={16} color="#EF4444" />
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               ))
//             )}
//           </View>

//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   outerContainer: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     padding: 40,
//   },
//   scrollContent: {
//     paddingBottom: 60,
//   },
//   contentWrapper: {
//     width: '100%',
//     maxWidth: 700,
//     alignSelf: 'center',
//   },
//   contentWrapperDesktop: {
//     maxWidth: 700,
//   },
//   pageTitle: {
//     fontSize: 44,
//     fontWeight: '800',
//     color: '#111827',
//     marginBottom: 20,
//   },
//   imageSection: {
//     marginBottom: 24,
//   },
//   imageHeaderRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   imageSectionLabel: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: '#111827',
//   },
//   requiredText: {
//     fontSize: 12,
//     color: '#D97706',
//     fontWeight: '600',
//   },
//   addMoreButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFBEB',
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#FEF3C7',
//     gap: 4,
//   },
//   addMoreText: {
//     fontSize: 12,
//     fontWeight: '700',
//     color: '#E59400',
//   },
//   imageUploadBox: {
//     borderWidth: 1.5,
//     borderStyle: 'dashed',
//     borderColor: '#9CA3AF',
//     borderRadius: 20,
//     height: 140,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FAFAFA',
//   },
//   selectImagesButton: {
//     backgroundColor: '#FFE3A8',
//     borderRadius: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderWidth: 1,
//     borderColor: '#E59400',
//   },
//   selectImagesText: {
//     color: '#111827',
//     fontWeight: '700',
//     fontSize: 14,
//   },
//   imageGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 10,
//   },
//   imageThumbWrapper: {
//     width: 90,
//     height: 90,
//     borderRadius: 12,
//     overflow: 'hidden',
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     position: 'relative',
//   },
//   previewImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   removeImageBtn: {
//     position: 'absolute',
//     top: 4,
//     right: 4,
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageAddMoreBox: {
//     width: 90,
//     height: 90,
//     borderRadius: 12,
//     borderWidth: 1.5,
//     borderStyle: 'dashed',
//     borderColor: '#CBD5E1',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F8FAFC',
//     gap: 2,
//   },
//   imageAddMoreText: {
//     fontSize: 10,
//     color: '#64748B',
//     fontWeight: '600',
//   },
//   formContainer: {
//     gap: 16,
//     marginBottom: 40,
//   },
//   inputField: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     paddingHorizontal: 20,
//     paddingVertical: 14,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     fontSize: 15,
//     color: '#111827',
//     outlineStyle: 'none' as any,
//   },
//   textAreaField: {
//     height: 100,
//     textAlignVertical: 'top',
//   },
//   dropdownField: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     paddingHorizontal: 20,
//     paddingVertical: 14,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   dropdownTextActive: {
//     fontSize: 15,
//     color: '#111827',
//     fontWeight: '600',
//   },
//   disclaimerText: {
//     fontSize: 12,
//     color: '#4B5563',
//     lineHeight: 18,
//     marginTop: 4,
//     marginBottom: 8,
//   },
//   sellButton: {
//     backgroundColor: '#E59400',
//     borderRadius: 20,
//     paddingVertical: 16,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   sellButtonText: {
//     color: '#FFFFFF',
//     fontWeight: '800',
//     fontSize: 16,
//   },
//   cancelButton: {
//     backgroundColor: '#F3F4F6',
//     borderRadius: 20,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   cancelButtonText: {
//     color: '#4B5563',
//     fontWeight: '700',
//     fontSize: 14,
//   },
//   dbContainer: {
//     borderTopWidth: 1,
//     borderTopColor: '#E5E7EB',
//     paddingTop: 24,
//   },
//   dbTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#111827',
//     marginBottom: 16,
//   },
//   noDataText: {
//     color: '#9CA3AF',
//     fontStyle: 'italic',
//   },
//   dbCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F9FAFB',
//     borderRadius: 12,
//     padding: 12,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     gap: 12,
//   },
//   dbThumb: {
//     width: 50,
//     height: 50,
//     borderRadius: 8,
//     resizeMode: 'cover',
//   },
//   dbItemName: {
//     fontSize: 15,
//     fontWeight: '700',
//     color: '#111827',
//   },
//   dbItemPrice: {
//     fontSize: 13,
//     color: '#D97706',
//     fontWeight: '600',
//   },
//   dbItemStore: {
//     fontSize: 12,
//     color: '#6B7280',
//     marginTop: 2,
//   },
//   dbActionRow: {
//     flexDirection: 'row',
//     gap: 8,
//   },
//   editBtn: {
//     padding: 8,
//     backgroundColor: '#FFFBEB',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#FEF3C7',
//   },
//   deleteBtn: {
//     padding: 8,
//     backgroundColor: '#FEF2F2',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#FEE2E2',
//   },
// });



// newer3
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Platform, 
  useWindowDimensions, 
  Image 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// ==========================================
// IndexedDB Helper for Large Data & Images
// ==========================================
const DB_NAME = 'SellProductsDB';
const STORE_NAME = 'products';
const DB_VERSION = 1;

const openDatabase = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (Platform.OS !== 'web') {
      reject(new Error('IndexedDB is only available on web.'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    // Create table/store if it does not exist
    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = (event: any) => resolve(event.target.result);
    request.onerror = (event: any) => reject(event.target.error);
  });
};

const dbGetAll = async (): Promise<any[]> => {
  if (Platform.OS !== 'web') return [];
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
};

const dbPut = async (item: any): Promise<void> => {
  if (Platform.OS !== 'web') return;
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put(item);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};

const dbDelete = async (id: string): Promise<void> => {
  if (Platform.OS !== 'web') return;
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};

interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: string;
  condition: string;
  store: string;
  images: string[];
  createdAt: string;
}

export default function SellView() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  // Form State
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [condition, setCondition] = useState('New');
  const [store, setStore] = useState('Cape Town Main Store');
  const [images, setImages] = useState<string[]>([]);

  // Database State (CRUD items list)
  const [savedProducts, setSavedProducts] = useState<ProductItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const isDesktop = Platform.OS === 'web' && width >= 768;

  // Load items from IndexedDB database on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const items = await dbGetAll();
      // Sort newest first
      items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setSavedProducts(items);
    } catch (error) {
      console.error('Failed to fetch from IndexedDB:', error);
    }
  };

  // Function to handle Multiple Image selection on Web (Min 3, Max 9)
  const handleSelectImagesWeb = () => {
    if (Platform.OS !== 'web') return;

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    
    input.onchange = (e: any) => {
      const files = Array.from(e.target.files as FileList);
      if (files.length === 0) return;

      const remainingSlots = 9 - images.length;
      if (remainingSlots <= 0) {
        alert('You have already reached the maximum limit of 9 images.');
        return;
      }

      const filesToProcess = files.slice(0, remainingSlots);
      let loadedCount = 0;
      const newBase64Images: string[] = [];

      filesToProcess.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (uploadEvent) => {
          const result = uploadEvent.target?.result as string;
          if (result) {
            newBase64Images.push(result);
          }
          loadedCount++;
          if (loadedCount === filesToProcess.length) {
            setImages((prev) => [...prev, ...newBase64Images]);
          }
        };
        reader.readAsDataURL(file);
      });
    };

    input.click();
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setImages((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  // 1. CREATE & UPDATE (Save to IndexedDB Database with validation)
  const handleSaveProduct = async () => {
    if (!itemName.trim() || !price.trim()) {
      alert('Please fill in the item name and price.');
      return;
    }

    if (images.length < 3) {
      alert(`Please upload at least 3 images. You currently have ${images.length}.`);
      return;
    }

    if (images.length > 9) {
      alert('You can upload a maximum of 9 images.');
      return;
    }

    const newItem: ProductItem = {
      id: editingId ? editingId : Date.now().toString(),
      name: itemName,
      description,
      price,
      condition,
      store,
      images,
      createdAt: new Date().toISOString(),
    };

    try {
      await dbPut(newItem);
      await fetchProducts();
      handleResetForm();
      alert(editingId ? 'Product updated successfully!' : 'Product saved to IndexedDB database!');
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save product to database quota.');
    }
  };

  // 2. DELETE Operation
  const handleDeleteProduct = async (id: string) => {
    try {
      await dbDelete(id);
      await fetchProducts();
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  // 3. EDIT/READ Operation (Populate form)
  const handleEditProduct = (product: ProductItem) => {
    setEditingId(product.id);
    setItemName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setCondition(product.condition);
    setStore(product.store);
    setImages(product.images || []);
  };

  const handleResetForm = () => {
    setItemName('');
    setDescription('');
    setPrice('');
    setImages([]);
    setEditingId(null);
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={[styles.contentWrapper, isDesktop && styles.contentWrapperDesktop]}>
          
          <Text style={styles.pageTitle}>{editingId ? 'Edit Product' : 'Sell Items'}</Text>

          {/* Multiple Image Upload Box & Grid */}
          <View style={styles.imageSection}>
            <View style={styles.imageHeaderRow}>
              <Text style={styles.imageSectionLabel}>
                Product Images ({images.length}/9) <Text style={styles.requiredText}>*Min 3, Max 9</Text>
              </Text>
              {images.length < 9 && (
                <TouchableOpacity style={styles.addMoreButton} onPress={handleSelectImagesWeb}>
                  <Ionicons name="add" size={16} color="#E59400" />
                  <Text style={styles.addMoreText}>Add Images</Text>
                </TouchableOpacity>
              )}
            </View>

            {images.length === 0 ? (
              <TouchableOpacity 
                style={styles.imageUploadBox} 
                activeOpacity={0.8}
                onPress={handleSelectImagesWeb}
              >
                <View style={styles.selectImagesButton}>
                  <Text style={styles.selectImagesText}>Select Images (Min 3 required)</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <View style={styles.imageGrid}>
                {images.map((imgUri, index) => (
                  <View key={index} style={styles.imageThumbWrapper}>
                    <Image source={{ uri: imgUri }} style={styles.previewImage} />
                    <TouchableOpacity 
                      style={styles.removeImageBtn} 
                      onPress={() => handleRemoveImage(index)}
                    >
                      <Ionicons name="close" size={14} color="#FFFFFF" />
                    </TouchableOpacity>
                  </View>
                ))}
                {images.length < 9 && (
                  <TouchableOpacity style={styles.imageAddMoreBox} onPress={handleSelectImagesWeb}>
                    <Ionicons name="camera-outline" size={24} color="#9CA3AF" />
                    <Text style={styles.imageAddMoreText}>Add more</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>

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
              placeholder="Price (e.g. R 1,500)"
              placeholderTextColor="#9CA3AF"
              value={price}
              onChangeText={setPrice}
              style={styles.inputField}
            />

            {/* Condition Selector */}
            <TouchableOpacity 
              style={styles.dropdownField} 
              onPress={() => setCondition(condition === 'New' ? 'Certified Used' : 'New')}
            >
              <Text style={styles.dropdownTextActive}>Condition: {condition}</Text>
              <Ionicons name="chevron-down" size={20} color="#111827" />
            </TouchableOpacity>

            {/* Store Selector */}
            <TouchableOpacity 
              style={styles.dropdownField}
              onPress={() => setStore(store === 'Cape Town Main Store' ? 'Bellville Branch' : 'Cape Town Main Store')}
            >
              <Text style={styles.dropdownTextActive}>Store: {store}</Text>
              <Ionicons name="chevron-down" size={20} color="#111827" />
            </TouchableOpacity>

            <Text style={styles.disclaimerText}>
              Please note that you need to deliver the product to that specific store
            </Text>

            {/* Submit / Update Button */}
            <TouchableOpacity style={styles.sellButton} activeOpacity={0.85} onPress={handleSaveProduct}>
              <Text style={styles.sellButtonText}>{editingId ? 'Update Product' : 'Sell Product'}</Text>
            </TouchableOpacity>

            {editingId && (
              <TouchableOpacity style={styles.cancelButton} onPress={handleResetForm}>
                <Text style={styles.cancelButtonText}>Cancel Edit</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* CRUD Database Items Preview Section */}
          <View style={styles.dbContainer}>
            <Text style={styles.dbTitle}>IndexedDB Database Records ({savedProducts.length})</Text>
            {savedProducts.length === 0 ? (
              <Text style={styles.noDataText}>No items saved in database yet.</Text>
            ) : (
              savedProducts.map((item) => (
                <View key={item.id} style={styles.dbCard}>
                  {item.images && item.images.length > 0 && (
                    <Image source={{ uri: item.images[0] }} style={styles.dbThumb} />
                  )}
                  <View style={{ flex: 1 }}>
                    <Text style={styles.dbItemName}>{item.name}</Text>
                    <Text style={styles.dbItemPrice}>{item.price} • {item.condition}</Text>
                    <Text style={styles.dbItemStore}>📍 {item.store} ({item.images?.length || 0} photos)</Text>
                  </View>
                  <View style={styles.dbActionRow}>
                    <TouchableOpacity onPress={() => handleEditProduct(item)} style={styles.editBtn}>
                      <Ionicons name="create-outline" size={16} color="#E59400" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDeleteProduct(item.id)} style={styles.deleteBtn}>
                      <Ionicons name="trash-outline" size={16} color="#EF4444" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 40,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  contentWrapper: {
    width: '100%',
    maxWidth: 700,
    alignSelf: 'center',
  },
  contentWrapperDesktop: {
    maxWidth: 700,
  },
  pageTitle: {
    fontSize: 44,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 20,
  },
  imageSection: {
    marginBottom: 24,
  },
  imageHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageSectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  requiredText: {
    fontSize: 12,
    color: '#D97706',
    fontWeight: '600',
  },
  addMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFBEB',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FEF3C7',
    gap: 4,
  },
  addMoreText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#E59400',
  },
  imageUploadBox: {
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#9CA3AF',
    borderRadius: 20,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
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
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  imageThumbWrapper: {
    width: 90,
    height: 90,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    position: 'relative',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  removeImageBtn: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageAddMoreBox: {
    width: 90,
    height: 90,
    borderRadius: 12,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#CBD5E1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    gap: 2,
  },
  imageAddMoreText: {
    fontSize: 10,
    color: '#64748B',
    fontWeight: '600',
  },
  formContainer: {
    gap: 16,
    marginBottom: 40,
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
    outlineStyle: 'none' as any,
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
  dropdownTextActive: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '600',
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
  cancelButton: {
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#4B5563',
    fontWeight: '700',
    fontSize: 14,
  },
  dbContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 24,
  },
  dbTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  noDataText: {
    color: '#9CA3AF',
    fontStyle: 'italic',
  },
  dbCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 12,
  },
  dbThumb: {
    width: 50,
    height: 50,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  dbItemName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  dbItemPrice: {
    fontSize: 13,
    color: '#D97706',
    fontWeight: '600',
  },
  dbItemStore: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  dbActionRow: {
    flexDirection: 'row',
    gap: 8,
  },
  editBtn: {
    padding: 8,
    backgroundColor: '#FFFBEB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FEF3C7',
  },
  deleteBtn: {
    padding: 8,
    backgroundColor: '#FEF2F2',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
});

