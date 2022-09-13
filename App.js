import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Navbar } from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import { Landing } from './components/Landing/Landing';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();



export default function App() {
    return (
      <>
      <QueryClientProvider client={queryClient}>
      <Example/>
      </QueryClientProvider>

      </>
    )
};

function Example() {
  const [counter, setCounter] = useState(0)

  console.log("this is my arr", myarr);

  const increase = async () => {
    setCounter(prevCount => prevCount + 1)
    
  }
  return (
    <>
    <View style={styles.container}>
      <Text>Hey Success! {counter}</Text>
      <Button onPress={increase} title="Click me!" color="#841584"></Button>
      <StatusBar style="auto" />
      <Text className="text-4xl font-bold text-red-400 dark:text-white">
        hey
      </Text>
    </View>
    <Landing/>
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

})