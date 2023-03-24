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
import searchIcon from '../src/searchIcon.png';

export default function MainPage() {
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
        <Image style={styles.searchIcon} source={searchIcon} />
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
});
