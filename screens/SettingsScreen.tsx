import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>الإعدادات</Text>
      <TouchableOpacity style={styles.optionBtn}>
        <Text style={styles.optionText}>تغيير اللغة</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionBtn}>
        <Text style={styles.optionText}>تحديث بيانات الحساب</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionBtn}>
        <Text style={styles.optionText}>تسجيل الخروج</Text>
      </TouchableOpacity>
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
    marginBottom: 30,
  },
  optionBtn: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 14,
    width: 270,
    alignItems: 'center',
    marginBottom: 18,
  },
  optionText: {
    color: '#2C5F4A',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 