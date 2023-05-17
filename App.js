import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  View, ImageBackground } from 'react-native';
import Liste from './components/liste';

export default function App() {
  
  const image = {uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjE1JV3qP02IhV1LOTZgiJVTuzsEKmIdVn6D1y2uD2OJ9V-qeUiQPGL6IRe5RmxlC2QOd-esgWxRRTSlU4i2Ovtbynhq-uwSovEhDgwhvlk5dzux9vgCzIj4GbPWk1Ef2ippEXB0IKJy56ogMQe7xRlnLuAJBmiqpEW2DO5WRqo4m0KJWWwjKdDLjcRXg/w296-h640/12052022-CLEAN-BLUE-WAVES.png'}
  
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <StatusBar style="auto"/>
        <Text style={styles.red}>
          Open up <Text style={styles.bold}>App.js</Text> to start working on your app!
        </Text>
        <Liste />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDAB9',
  },
  image: {
    flex: 1,
    alignItems: 'center',
  },
  red: {
    color: 'red',
    marginBottom: 20,
    marginTop: 60,
    
  },
  bold: {
    fontWeight: 'bold',
  },
});