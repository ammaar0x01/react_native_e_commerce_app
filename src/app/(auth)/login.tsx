import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginView() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.cardWrapper}>
          
          {/* Brand Header */}
          <View style={styles.brandContainer}>
            <Text style={styles.brandSub}>The</Text>
            <Text style={styles.brandMain}>PawnShop</Text>
          </View>

          {/* Inner Orange Card */}
          <View style={styles.orangeCard}>
            <Text style={styles.cardTitle}>Log In</Text>

            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#6B7280"
              value={email}
              onChangeText={setEmail}
              style={styles.inputField}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#6B7280"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.inputField}
            />

            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordText}>I forgot my password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} activeOpacity={0.85}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.noAccountButton}>
              <Text style={styles.noAccountText}>I don't have an account</Text>
            </TouchableOpacity>
          </View>

          {/* Browse Button */}
          <TouchableOpacity
            onPress={() => router.push('/')}
            style={styles.browseButton}
            activeOpacity={0.85}
          >
            <Text style={styles.browseButtonText}>I just want to browse</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#FFE8B6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    width: '100%',
  },
  cardWrapper: {
    width: '100%',
    maxWidth: 420,
    alignItems: 'center',
  },
  brandContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  brandSub: {
    fontSize: 22,
    fontWeight: '600',
    color: '#D97706',
    lineHeight: 24,
  },
  brandMain: {
    fontSize: 32,
    fontWeight: '800',
    color: '#D97706',
  },
  orangeCard: {
    backgroundColor: '#E59400',
    borderRadius: 32,
    padding: 32,
    paddingHorizontal: 50, 
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 28,
  },
  inputField: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 14,
    width: '100%',
    fontSize: 15,
    color: '#111827',
    marginBottom: 16,
  },
  forgotPasswordButton: {
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#E59400',
    fontSize: 16,
    fontWeight: '800',
  },
  noAccountButton: {
    marginTop: 4,
  },
  noAccountText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  browseButton: {
    backgroundColor: '#A14B00',
    borderRadius: 24,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  browseButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
