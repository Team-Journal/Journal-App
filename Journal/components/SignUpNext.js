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

export default function SignUpNext({navigation}) {
  return (
    <SafeAreaView style={styles.container_f}>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.signUp}>회원가입</Text>
        <View>
          <View style={styles.emailView}>
            <TextInput
              style={styles.emailInput}
              placeholder="아이디를 입력해주세요"
              placeholderTextColor="#BDBFCF"
            />
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.sendCode}>중복 확인</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.codeInput}
            placeholder="비밀번호를 입력해주세요"
            placeholderTextColor="#BDBFCF"
          />
          <View style={styles.checkPW}>
            <TextInput
              style={styles.codeInput}
              placeholder="비밀번호 확인"
              placeholderTextColor="#BDBFCF"
            />
            <Image style={styles.check} source={check} />
          </View>
          <View style={styles.haveIDView}>
            <Text style={styles.haveID}>이미 아이디가 있으신가요?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.goToLogin}>로그인하기</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Login')}>
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
  signUp: {
    marginTop: 15,
    fontSize: 15,
    color: '#6C708D',
  },
  emailInput: {
    padding: 10,
    fontSize: 10,
    width: 240,
    height: 50,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    elevation: 1,
    borderRadius: 10,
  },
  codeInput: {
    marginTop: 20,
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
    flexDirection: 'column',
  },
  sendCode: {
    textAlign: 'center',
    textAlignVertical: 'center',
    ...Platform.select({
      ios: {
        lineHeight: 50, // as same as height
      },
      android: {},
    }),
    fontSize: 10,
    marginLeft: 7,
    width: 60,
    height: 50,
    backgroundColor: '#ABB2EF',
    color: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  check: {
    width: 18,
    height: 18,
    marginLeft: -30,
    marginTop: 35,
  },
  haveIDView: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: -120,
  },
  haveID: {
    fontSize: 10,
    color: '#BDBFCF',
    marginRight: 5,
  },
  goToLogin: {
    fontSize: 10,
    color: '#1A73E9',
    textDecorationLine: 'underline',
  },
  next: {
    top: 205,
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
  checkPW: {
    flexDirection: 'row',
  },
});
