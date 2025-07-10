import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function CreateLoanScreen() {
  const [amount, setAmount] = useState('');
  const [subscribers, setSubscribers] = useState('');
  const [monthly, setMonthly] = useState('');
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [father, setFather] = useState('');
  const [grand, setGrand] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>انشاء سلفة جديده ...</Text>
      {/* مبلغ السلفة */}
      <Text style={styles.label}>مبلغ السلفة؟</Text>
      <TextInput style={styles.input} value={amount} onChangeText={setAmount} keyboardType="numeric" placeholder="" textAlign="right" />
      {/* عدد المشتركين */}
      <Text style={styles.label}>عدد المشتركين؟</Text>
      <TextInput style={styles.input} value={subscribers} onChangeText={setSubscribers} keyboardType="numeric" placeholder="" textAlign="right" />
      {/* مبلغ التسديد الشهري */}
      <Text style={styles.label}>مبلغ التسديد الشهري</Text>
      <TextInput style={styles.input} value={monthly} onChangeText={setMonthly} keyboardType="numeric" placeholder="" textAlign="right" />
      {/* خط فاصل */}
      <View style={styles.divider} />
      {/* اختيار المدينة */}
      <Text style={styles.label}>اختر المدينه؟</Text>
      <TextInput style={styles.input} value={city} onChangeText={setCity} placeholder="" textAlign="right" />
      {/* الاسم الثلاثي */}
      <View style={styles.tripleRow}>
        <TextInput style={[styles.input, styles.tripleInput]} value={name} onChangeText={setName} placeholder="اسمك" textAlign="right" />
        <TextInput style={[styles.input, styles.tripleInput]} value={father} onChangeText={setFather} placeholder="الاب" textAlign="right" />
        <TextInput style={[styles.input, styles.tripleInput]} value={grand} onChangeText={setGrand} placeholder="الجد" textAlign="right" />
      </View>
      {/* رقم الهاتف */}
      <Text style={styles.label}>رقم الهاتف</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" placeholder="" textAlign="right" />
      {/* رفع صورة */}
      <Text style={styles.label}>أضف هنا صورتك واضحة وبدون فلاتر</Text>
      <TouchableOpacity style={styles.imageBox}>
        <Text style={styles.imageIcon}>🖼️</Text>
      </TouchableOpacity>
      {/* زر الإنشاء */}
      <TouchableOpacity style={styles.createBtn}>
        <Text style={styles.createText}>انشاء</Text>
      </TouchableOpacity>
      {/* ملاحظة */}
      <Text style={styles.note}>بعد الانشاء يجب ان تنتظر موافقة المدير ...</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    color: '#2C5F4A',
    fontWeight: 'bold',
    marginBottom: 18,
    alignSelf: 'center',
  },
  label: {
    fontSize: 15,
    color: '#222',
    alignSelf: 'flex-end',
    marginBottom: 4,
    marginRight: 8,
  },
  input: {
    backgroundColor: '#BDBDBD',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#222',
    marginBottom: 12,
    width: 270,
    textAlign: 'right',
  },
  divider: {
    height: 2,
    backgroundColor: '#222',
    width: 270,
    marginVertical: 12,
    opacity: 0.2,
  },
  tripleRow: {
    flexDirection: 'row-reverse',
    width: 270,
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  tripleInput: {
    flex: 1,
    marginHorizontal: 2,
    minWidth: 0,
  },
  imageBox: {
    width: 120,
    height: 80,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  imageIcon: {
    fontSize: 36,
    color: '#888',
  },
  createBtn: {
    backgroundColor: '#00D26A',
    borderRadius: 12,
    width: 200,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  createText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  note: {
    color: '#888',
    fontSize: 13,
    marginTop: 8,
    alignSelf: 'center',
  },
}); 