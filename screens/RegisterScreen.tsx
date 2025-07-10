import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, I18nManager } from 'react-native';

// تفعيل RTL (احتياطي)
I18nManager.forceRTL(true);

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      {/* الدائرة مع رمز الدولار */}
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.dollar}>$</Text>
        </View>
        {/* رمز طائرة نصي بدلاً من صورة */}
        <Text style={styles.planeIcon}>✈️</Text>
      </View>
      {/* اسم التطبيق */}
      <Text style={styles.title}>سلفة عراقية</Text>
      {/* الوصف */}
      <Text style={styles.subtitle}>اول تطبيق عراقي يختص بالسلف للموظفين</Text>
      {/* زر تسجيل باستخدام Google */}
      <TouchableOpacity style={styles.googleBtn}>
        {/* دائرة بها رمز مستخدم نصي */}
        <View style={styles.iconCircle}>
          <Text style={styles.userIcon}>👤</Text>
        </View>
        <Text style={styles.googleText}>تسجيل باستخدام google</Text>
      </TouchableOpacity>
      {/* زر تخطي */}
      <TouchableOpacity style={styles.skipBtn}>
        <Text style={styles.skipText}>تخطي</Text>
      </TouchableOpacity>
      {/* نسيت كلمة السر */}
      <TouchableOpacity>
        <Text style={styles.forgot}>نسيت كلمة السر؟</Text>
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
  circleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  dollar: {
    fontSize: 60,
    color: '#2C5F4A',
    fontWeight: 'bold',
  },
  planeIcon: {
    position: 'absolute',
    top: 10,
    left: 80,
    fontSize: 32,
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  userIcon: {
    fontSize: 18,
  },
  title: {
    fontSize: 28,
    color: '#FFC700',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 30,
    textAlign: 'center',
  },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginBottom: 15,
    width: 270,
    alignSelf: 'center',
  },
  googleText: {
    color: '#2C5F4A',
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipBtn: {
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
    paddingVertical: 10,
    width: 270,
    alignItems: 'center',
    marginBottom: 25,
  },
  skipText: {
    color: '#2C5F4A',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgot: {
    color: '#B0B0B0',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
}); 