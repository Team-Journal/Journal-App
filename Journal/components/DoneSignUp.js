import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import journal from '../src/journal.png';

export default function DoneSignUp({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FDFDFF'}}>
      <View style={styles.container}>
        <View>
          <Image style={styles.journal} source={journal} />
        </View>
        <View style={styles.phrases}>
          <Text style={{color: '#ABB2EF', fontWeight: 600, fontSize: 15}}>
            공유몽 회원가입이 완료되었습니다.
          </Text>
          <Text style={{textAlign: 'center', color: '#ABB2EF', fontSize: 15}}>
            다양한 콘텐츠를 감상해보세요!
          </Text>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('MainPage')}>
            <Text style={styles.start}>시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFDFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  journal: {
    marginTop: 80,
    width: 52,
    height: 65,
  },
  phrases: {
    marginTop: 200,
    flexDirection: 'column',
  },
  start: {
    top: 300,
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
