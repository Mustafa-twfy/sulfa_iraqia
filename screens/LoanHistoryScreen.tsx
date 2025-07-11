import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

const loans = [
  { id: 1, name: 'سلفة رمضان', amount: '500,000', status: 'مكتملة', date: '2024-03-15', details: 'سلفة خاصة بشهر رمضان', city: 'بغداد' },
  { id: 2, name: 'سلفة العيد', amount: '1,000,000', status: 'قيد الانتظار', date: '2024-05-01', details: 'سلفة عيد الفطر', city: 'بغداد' },
  { id: 3, name: 'سلفة طارئة', amount: '750,000', status: 'مرفوضة', date: '2024-01-10', details: 'سلفة طارئة', city: 'البصرة' },
];

export default function LoanHistoryScreen() {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>سجل السلف</Text>
      <ScrollView contentContainerStyle={styles.list}>
        {loans.map(loan => (
          <TouchableOpacity
            key={loan.id}
            style={styles.card}
            onPress={() => navigation.navigate('تفاصيل السلفة', { loan })}
          >
            <Text style={styles.loanName}>{loan.name}</Text>
            <Text style={styles.loanInfo}>المبلغ: {loan.amount} د.ع</Text>
            <Text style={styles.loanInfo}>الحالة: {loan.status}</Text>
            <Text style={styles.loanInfo}>التاريخ: {loan.date}</Text>
          </TouchableOpacity>
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
  loanName: {
    color: '#2C5F4A',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 6,
  },
  loanInfo: {
    color: '#222',
    fontSize: 15,
    marginBottom: 2,
    textAlign: 'right',
  },
}); 