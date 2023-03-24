import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import journal from '../src/journal.png';
import logo from '../src/logo.png';
import searchIcon from '../src/searchIcon.png';
import addFriend from '../src/addFriend.png';
import upload from '../src/upload.png';
import myPage from '../src/myPage.png';

export default function MainPage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.journal} source={journal} />
      </View>
      <View style={styles.searchView}>
        <TextInput
          style={styles.searchBox}
          placeholder="아이디를 입력해주세요"
          placeholderTextColor="#BDBFCF"
        />
        <TouchableOpacity activeOpacity={0.5}>
          <Image style={styles.searchIcon} source={searchIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.addFriendView}>
        <Image style={styles.addFriend} source={addFriend} />
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text style={{color: '#ABB2EF', fontSize: 15, fontWeight: 600}}>
            친구 추가하기
          </Text>
          <Text style={{color: '#ABB2EF', fontSize: 12, marginTop: 5}}>
            추가된 친구가 없나요?
          </Text>
          <Text style={{color: '#ABB2EF', fontSize: 12}}>
            아이디 검색으로 친구를 추가해보세요!
          </Text>
        </View>
      </View>
      <View style={styles.tapBar}>
        <TouchableOpacity onPress={() => navigation.navigate('PostPage')}>
          <Image style={styles.upload} source={upload} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.logo} source={logo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
          <Image style={styles.myPage} source={myPage} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FDFDFF',
  },
  journal: {
    marginTop: 10,
    width: 52,
    height: 65,
  },
  searchView: {
    top: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    padding: 15,
    fontSize: 10,
    width: 335,
    height: 45,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 3},
    elevation: 1,
    borderRadius: 10,
    marginLeft: 15,
  },
  searchIcon: {
    width: 15,
    height: 15,
    left: -35,
  },
  addFriendView: {
    marginTop: 170,
    flexDirection: 'column',
    alignItems: 'center',
  },
  addFriend: {
    width: 120,
    height: 120,
  },
  tapBar: {
    marginTop: 180,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 250,
    height: 60,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    elevation: 1,
    borderRadius: 10,
  },
  upload: {
    marginRight: 45,
    width: 30,
    height: 27,
  },
  logo: {
    marginTop: 3,
    marginRight: 45,
    width: 41,
    height: 36,
  },
  myPage: {
    width: 28,
    height: 28,
  },
});
