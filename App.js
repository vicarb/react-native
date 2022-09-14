import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Navbar } from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import { Landing } from './components/Landing/Landing';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Swipe } from './components/Swiper/Swipe';


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



  const increase = () => {
    setCounter(prevCount => prevCount + 1)
    
  }
  return (
    <>
  <ScrollView>
    <View style={styles.container}>
      <Text className='mt-20'>Hey Success! {counter}</Text>
      <Button onPress={increase}  title="Click me!" ></Button>
      <StatusBar style="auto" />
      <Text className="text-4xl font-bold text-red-400 dark:text-white">
        hey
      </Text>
    </View>
    <Landing/>

      <Navbar/>
      <Swipe/>
  </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

})