import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import Route from './src/Navigation/Route';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Route />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
