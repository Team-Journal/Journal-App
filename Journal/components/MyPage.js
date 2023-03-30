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
import profilePic from '../src/profilePic.png';

export default function MyPage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.journal} source={journal} />
      </View>
      <View style={{marginTop: 50}}>
        <Image style={{width: 90, height: 90}} source={profilePic} />
      </View>
      <View style={styles.tapBar}>
        <TouchableOpacity onPress={() => navigation.navigate('PostPage')}>
          <Image style={styles.upload} source={upload} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
          <Image style={styles.logo} source={logo} />
        </TouchableOpacity>
        <TouchableOpacity>
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
  hello: {
    fontFamily: 'Dovemayo_gothic',
  },
});
