import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// نوع المستخدم: superAdmin (مدير أساسي)، governorAdmin (مدير محافظة)
const USER_TYPE: 'superAdmin' | 'governorAdmin' = 'superAdmin'; // غيّرها لمحاكاة الصلاحيات

// بيانات وهمية
const users = [
  { id: 1, name: 'علي محمد', city: 'بغداد', role: 'مشترك' },
  { id: 2, name: 'سارة علي', city: 'بغداد', role: 'مشترك' },
  { id: 3, name: 'حسن كريم', city: 'البصرة', role: 'مشترك' },
  { id: 4, name: 'مدير بغداد', city: 'بغداد', role: 'مدير محافظة' },
];

export default function AdminDashboardScreen() {
  const [selectedCity, setSelectedCity] = useState('بغداد');

  // تصفية المستخدمين حسب نوع المدير
  const visibleUsers = USER_TYPE === 'superAdmin'
    ? users
    : users.filter(u => u.city === selectedCity);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>لوحة تحكم المدير</Text>
      {USER_TYPE === 'superAdmin' && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>إدارة مدراء المحافظات</Text>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionText}>إنشاء مدير محافظة جديد</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>المشتركين ({USER_TYPE === 'superAdmin' ? 'كل المحافظات' : selectedCity})</Text>
        <ScrollView contentContainerStyle={styles.list}>
          {visibleUsers.filter(u => u.role === 'مشترك').map(u => (
            <View key={u.id} style={styles.userCard}>
              <Text style={styles.userName}>{u.name}</Text>
              <Text style={styles.userCity}>المحافظة: {u.city}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>السلف</Text>
        <Text style={styles.infoText}>هنا يمكن للمدير الموافقة أو الرفض على السلف (محاكاة فقط).</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C5F4A',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    color: '#FFC700',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    width: 340,
    marginBottom: 18,
    alignItems: 'flex-end',
  },
  sectionTitle: {
    color: '#2C5F4A',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'right',
  },
  actionBtn: {
    backgroundColor: '#FFC700',
    borderRadius: 25,
    paddingVertical: 10,
    width: 200,
    alignItems: 'center',
    marginBottom: 10,
  },
  actionText: {
    color: '#2C5F4A',
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  userCard: {
    backgroundColor: '#E6F9F0',
    borderRadius: 12,
    padding: 12,
    width: 280,
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  userName: {
    color: '#2C5F4A',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  userCity: {
    color: '#888',
    fontSize: 14,
    marginBottom: 2,
  },
  infoText: {
    color: '#222',
    fontSize: 15,
    marginTop: 6,
    textAlign: 'right',
  },
}); 