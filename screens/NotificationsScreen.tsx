import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const notifications = [
  { id: 1, message: 'تمت الموافقة على سلفة العيد', date: '2024-05-02' },
  { id: 2, message: 'تم رفض سلفة طارئة', date: '2024-01-11' },
  { id: 3, message: 'يرجى تحديث بياناتك الشخصية', date: '2024-04-20' },
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>الإشعارات</Text>
      <ScrollView contentContainerStyle={styles.list}>
        {notifications.map(n => (
          <View key={n.id} style={styles.card}>
            <Text style={styles.message}>{n.message}</Text>
            <Text style={styles.date}>{n.date}</Text>
          </View>
        ))}
      </ScrollView>
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
  list: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    width: 320,
    marginBottom: 18,
    alignItems: 'flex-end',
  },
  message: {
    color: '#2C5F4A',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'right',
  },
  date: {
    color: '#888',
    fontSize: 13,
    textAlign: 'right',
  },
}); 