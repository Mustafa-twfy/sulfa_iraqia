import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';

type LoanDetailsRouteParams = { loan?: { name: string; amount: string; status: string; city: string; date: string; details: string } };

export default function LoanDetailsScreen() {
  const route = useRoute<RouteProp<Record<string, LoanDetailsRouteParams>, string>>();
  const navigation = useNavigation();
  // إذا لم يتم تمرير بيانات، استخدم بيانات افتراضية
  const loan = route.params?.loan || {
    name: 'أحمد علي',
    amount: '1,000,000',
    status: 'قيد الانتظار',
    city: 'بغداد',
    date: '2024-06-01',
    details: 'سلفة للموظفين في وزارة المالية'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>تفاصيل السلفة</Text>
      <View style={styles.card}>
        <Text style={styles.label}>الاسم الثلاثي:</Text>
        <Text style={styles.value}>{loan.name}</Text>
        <Text style={styles.label}>المبلغ:</Text>
        <Text style={styles.value}>{loan.amount} د.ع</Text>
        <Text style={styles.label}>الحالة:</Text>
        <Text style={styles.value}>{loan.status}</Text>
        <Text style={styles.label}>المحافظة:</Text>
        <Text style={styles.value}>{loan.city}</Text>
        <Text style={styles.label}>التاريخ:</Text>
        <Text style={styles.value}>{loan.date}</Text>
        <Text style={styles.label}>تفاصيل إضافية:</Text>
        <Text style={styles.value}>{loan.details}</Text>
      </View>
      <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.actionText}>رجوع</Text>
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
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: 320,
    marginBottom: 30,
  },
  label: {
    color: '#2C5F4A',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  value: {
    color: '#222',
    fontSize: 16,
    marginBottom: 2,
    textAlign: 'right',
  },
  actionBtn: {
    backgroundColor: '#FFC700',
    borderRadius: 25,
    paddingVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  actionText: {
    color: '#2C5F4A',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 