import React, {Fragment, useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import logo from '../src/logo.png';
import check from '../src/check.png';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container_f}>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.login}>로그인</Text>
        <View>
          <View style={styles.emailView}>
            <TextInput
              style={styles.emailInput}
              placeholder="아이디를 입력해주세요"
              placeholderTextColor="#BDBFCF"
            />
          </View>
          <View style={styles.codeView}>
            <TextInput
              style={styles.codeInput}
              placeholder="비밀번호를 입력해주세요"
              placeholderTextColor="#BDBFCF"
            />
            <Image style={styles.check} source={check} />
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.next}>다음으로</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container_f: {
    flex: 1,
    backgroundColor: '#FDFDFF',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    marginTop: 100,
    width: 52,
    height: 46,
  },
  login: {
    marginTop: 15,
    fontSize: 15,
    color: '#6C708D',
  },
  emailInput: {
    padding: 10,
    fontSize: 10,
    width: 304,
    height: 50,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    elevation: 1,
    borderRadius: 10,
  },
  codeInput: {
    padding: 10,
    fontSize: 10,
    width: 304,
    height: 50,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    elevation: 1,
    borderRadius: 10,
  },
  emailView: {
    marginTop: 100,
    flexDirection: 'row',
  },
  codeView: {
    marginTop: 25,
    flexDirection: 'row',
  },
  check: {
    width: 18,
    height: 18,
    marginLeft: -30,
    marginTop: 16,
  },
  next: {
    marginTop: 270,
    fontSize: 10,
    width: 304,
    height: 40,
    color: '#fff',
    backgroundColor: '#ABB2EF',
    borderRadius: 10,
    overflow: 'hidden',
    textAlign: 'center',
    textAlignVertical: 'center',
    ...Platform.select({
      ios: {
        lineHeight: 40,
      },
      android: {},
    }),
  },
});
