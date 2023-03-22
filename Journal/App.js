import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './components/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

// import {View} from 'react-native';
// import DoneSignUp from './components/DoneSignUp';

// export default function App() {
//   return (
//     <View>
//       <DoneSignUp />
//     </View>
//   );
// }
