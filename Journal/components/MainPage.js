import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import journal from '../src/journal.png';

export default function MainPage(navigation) {
  return (
    <SafeAreaView>
      <View>
        <Text>hiiii</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFDFF',
  },
});
