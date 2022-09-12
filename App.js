import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './components/Navbar/Navbar';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text>Hey Success!</Text>
      <StatusBar style="auto" />
      <Text className="text-4xl font-bold text-red-400 dark:text-white">
        hey
      </Text>
    </View>
      <Navbar/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
