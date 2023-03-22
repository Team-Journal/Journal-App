import React from 'react';
import SignUp from './components/SignUp';
import {View, SafeAreaView, StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUp />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFF',
  },
});
export default App;
