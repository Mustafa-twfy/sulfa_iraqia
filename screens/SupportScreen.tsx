import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SupportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>الدعم الفني</Text>
      <View style={styles.card}>
        <Text style={styles.label}>للمساعدة أو الاستفسار:</Text>
        <Text style={styles.value}>رقم الهاتف: 07800000000</Text>
        <Text style={styles.value}>البريد الإلكتروني: support@sulfa.com</Text>
        <Text style={styles.value}>أوقات العمل: 9 صباحًا - 5 مساءً</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C5F4A',
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    color: '#FFC700',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: 320,
    marginBottom: 30,
    alignItems: 'flex-end',
  },
  label: {
    color: '#2C5F4A',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'right',
  },
  value: {
    color: '#222',
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'right',
  },
}); 