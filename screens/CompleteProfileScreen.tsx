import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Switch, ScrollView } from 'react-native';

export default function CompleteProfileScreen() {
  const [isEmployee, setIsEmployee] = useState<'yes' | 'no' | null>(null);
  const [agree, setAgree] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* صورة واسم المستخدم */}
      <View style={styles.profileRow}>
        <View style={styles.avatar}><Text style={{fontSize: 28}}>👷‍♂️</Text></View>
        <Text style={styles.profileName}>احمد سلمان ماجد</Text>
      </View>
      {/* عنوان */}
      <Text style={styles.header}>إكمال معلومات الحساب</Text>
      {/* اختيار المحافظة */}
      <View style={styles.inputRow}>
        <Text style={styles.icon}>📍</Text>
        <TextInput style={styles.input} placeholder="اختر المحافظة" placeholderTextColor="#aaa" textAlign="right" />
      </View>
      {/* اختيار الوزارة */}
      <TextInput style={styles.input} placeholder="اختر الوزارة" placeholderTextColor="#aaa" textAlign="right" />
      {/* الاسم الثلاثي */}
      <View style={styles.tripleRow}>
        <TextInput style={[styles.input, styles.tripleInput]} placeholder="اسمك" placeholderTextColor="#aaa" textAlign="right" />
        <TextInput style={[styles.input, styles.tripleInput]} placeholder="اسم الاب" placeholderTextColor="#aaa" textAlign="right" />
        <TextInput style={[styles.input, styles.tripleInput]} placeholder="اسم الجد" placeholderTextColor="#aaa" textAlign="right" />
      </View>
      {/* ملاحظة */}
      <Text style={styles.note}>سيرسل رمز تحقق الى رقم هاتفك بعد تعبئة جميع الحقول بشكل صحيح لضمان استلام الخدمة</Text>
      {/* رقم الهاتف */}
      <View style={styles.inputRow}>
        <Text style={styles.icon}>🔒</Text>
        <TextInput style={styles.input} placeholder="رقم الهاتف" placeholderTextColor="#aaa" keyboardType="phone-pad" textAlign="right" />
      </View>
      {/* سؤال موظف */}
      <Text style={styles.question}>هل انت موظف بدائرة ام عدد ؟</Text>
      <View style={styles.toggleRow}>
        <TouchableOpacity style={[styles.toggleBtn, isEmployee === 'yes' && styles.toggleBtnActive]} onPress={() => setIsEmployee('yes')}>
          <Text style={[styles.toggleText, isEmployee === 'yes' && styles.toggleTextActive]}>بدائرة</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.toggleBtn, isEmployee === 'no' && styles.toggleBtnActive]} onPress={() => setIsEmployee('no')}>
          <Text style={[styles.toggleText, isEmployee === 'no' && styles.toggleTextActive]}>عدد</Text>
        </TouchableOpacity>
      </View>
      {/* تفاصيل الحجز */}
      <Text style={styles.detailsLabel}>تفاصيل إضافية</Text>
      <TextInput
        style={styles.detailsInput}
        placeholder="اكتب هنا تفاصيل إضافية عنك أو عن الخدمة المطلوبة..."
        placeholderTextColor="#bbb"
        multiline
        numberOfLines={4}
        textAlign="right"
      />
      {/* الموافقة على الشروط */}
      <View style={styles.agreeRow}>
        <Switch value={agree} onValueChange={setAgree} thumbColor={agree ? '#4CAF50' : '#ccc'} />
        <Text style={styles.agreeText}>اوافق على شروط الاستخدام</Text>
      </View>
      {/* أزرار الاستمرار والإلغاء */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.continueBtn}>
          <Text style={styles.continueText}>استمرار</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn}>
          <Text style={styles.cancelText}>الغاء</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ...require('./BookingScreen').default.styles,
  header: {
    fontSize: 20,
    color: '#2C5F4A',
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  detailsLabel: {
    fontSize: 15,
    color: '#222',
    marginTop: 10,
    alignSelf: 'flex-end',
    marginBottom: 4,
  },
}); 