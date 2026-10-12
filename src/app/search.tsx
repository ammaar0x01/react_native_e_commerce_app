
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchView() {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        {/* Search Products Input */}
        <View style={styles.inputPill}>
          <TextInput
            placeholder="Search Products"
            placeholderTextColor="#E0E7FF"
            style={styles.textInput}
          />
          <Ionicons name="search-outline" size={18} color="white" />
        </View>

        {/* Select a Store Input */}
        <View style={styles.inputPill}>
          <TextInput
            placeholder="Select a Store"
            placeholderTextColor="#E0E7FF"
            style={styles.textInput}
          />
          <Ionicons name="search-outline" size={18} color="white" />
        </View>

        {/* Search Action Button */}
        <TouchableOpacity activeOpacity={0.85} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   safeArea: {
//     flex: 1,
//     paddingHorizontal: Spacing.four,
//     alignItems: 'center',
//     gap: Spacing.three,
//     paddingBottom: BottomTabInset + Spacing.three,
//     maxWidth: MaxContentWidth,
//   },
//   heroSection: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     paddingHorizontal: Spacing.four,
//     gap: Spacing.four,
//   },
//   title: {
//     textAlign: 'center',
//   },
//   code: {
//     textTransform: 'uppercase',
//   },
//   stepContainer: {
//     gap: Spacing.three,
//     alignSelf: 'stretch',
//     paddingHorizontal: Spacing.three,
//     paddingVertical: Spacing.four,
//     borderRadius: Spacing.four,
//   },
// });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#3B66FF',

    backgroundColor: '#E59400',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  cardWrapper: {
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    gap: 16,
  },
  inputPill: {
    width: '100%',
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 9999,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    color: '#FFFFFF',
    flex: 1,
    fontSize: 14,
    marginRight: 8,
    outlineStyle: 'none' as any,
  },
  searchButton: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 9999,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  searchButtonText: {
    // color: '#3B66FF',
    color: '#000209',

    fontWeight: '700',
    fontSize: 16,
  },
});
