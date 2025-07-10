import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const loans = [
  {
    name: 'مصطفى الشيخ',
    ministry: 'وزارة المالية',
    amount: '',
    count: '',
    remaining: 'المتبقي',
  },
  {
    name: 'محمد عبد الرحمن',
    ministry: 'وزارة الصحه',
    amount: '1000000',
    count: '10',
    remaining: '0 المتبقي',
  },
  {
    name: 'بسام محمد حميد',
    ministry: 'وزارة النفط',
    amount: '',
    count: '',
    remaining: 'المتبقي',
  },
];

export default function MainScreen() {
  return (
    <View style={styles.container}>
      {/* الشريط العلوي */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconBtn}><Text style={styles.topIcon}>🔔</Text></TouchableOpacity>
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="البحث عن سلفة ..."
            placeholderTextColor="#fff"
            textAlign="right"
          />
          <TouchableOpacity style={styles.dollarBtn}><Text style={styles.dollarIcon}>$</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.iconBtn}><Text style={styles.topIcon}>☰</Text></TouchableOpacity>
      </View>
      {/* العنوان */}
      <Text style={styles.sectionTitle}>ابرز السلف</Text>
      {/* قائمة السلف */}
      <ScrollView contentContainerStyle={styles.cardsList} showsVerticalScrollIndicator={false}>
        {loans.map((loan, idx) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.cardText}>
                <Text style={styles.cardName}>{loan.name}</Text>
                <Text style={styles.cardMinistry}>{loan.ministry}</Text>
                <View style={styles.cardRow}>
                  <Text style={styles.cardLabel}>المبلغ</Text>
                  <Text style={styles.cardValue}>{loan.amount}</Text>
                </View>
                <View style={styles.cardRow}>
                  <Text style={styles.cardLabel}>العدد</Text>
                  <Text style={styles.cardValue}>{loan.count}</Text>
                </View>
                <Text style={styles.cardRemain}>{loan.remaining}</Text>
              </View>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarIcon}>👤</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  topBar: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  iconBtn: {
    padding: 6,
  },
  topIcon: {
    fontSize: 22,
    color: '#2C5F4A',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#2C5F4A',
    borderRadius: 25,
    marginHorizontal: 8,
    paddingHorizontal: 10,
    height: 44,
  },
  searchIcon: {
    fontSize: 22,
    color: '#fff',
    marginLeft: 6,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 8,
  },
  dollarBtn: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  dollarIcon: {
    color: '#2C5F4A',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C5F4A',
    alignSelf: 'flex-end',
    marginBottom: 8,
    marginRight: 8,
  },
  cardsList: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#1FC06F',
    borderRadius: 16,
    marginBottom: 16,
    padding: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '100%',
  },
  cardText: {
    flex: 1,
    marginRight: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
    textAlign: 'right',
  },
  cardMinistry: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 2,
    textAlign: 'right',
  },
  cardRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 2,
  },
  cardLabel: {
    fontSize: 13,
    color: '#fff',
    marginLeft: 6,
  },
  cardValue: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardRemain: {
    fontSize: 13,
    color: '#E6FFB2',
    marginTop: 2,
    textAlign: 'right',
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  avatarIcon: {
    fontSize: 28,
    color: '#2C5F4A',
  },
}); 