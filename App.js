import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Open up <Text style={styles.bold}>App.js</Text> to start working on your app!</Text>
      <View>
        {sampleGoals.map((goal) =>{
          return (
          <View>
            <Text style={styles.list}>{`\u2022 ${goal.key}`}</Text>
          </View>
          );
        })}
      </View>  
      <View style={styles.row}>
        <TextInput placeholder="Nouvel objectif ?"></TextInput>
        <Button title="Ajouter" onPress={() => alert('OK !')}/>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red',
    marginBottom: 40,
  },
  bold: {
    fontWeight: 'bold',
  },
  list: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const sampleGoals =[
  {key: "Faire les courses"},
  {key: "Aller à la salle 3 fois par semaine"},
  {key: "Monter à plus de 5000m d'altitude"},
  {key: "Acheter mon premier appartement"},
  {key: "Perdre 5kg"},
  {key: "Gagner en productivite"},
  {key: "Apprendre un nouveau langage"},
  {key: "Faire une mission en freelance"},
  {key: "Organiser un meetup autour de la tech"},
  {key: "Faire un triathlon"},
];