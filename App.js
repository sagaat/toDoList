import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [sampleGoals, setGoal] = useState([
    {id: 1, key: "Faire les courses"},
    {id: 2, key: "Aller à la salle 3 fois par semaine"},
    {id: 3, key: "Monter à plus de 5000m d'altitude"},
    {id: 4, key: "Acheter mon premier appartement"},
    {id: 5, key: "Perdre 5kg"},
    {id: 6, key: "Gagner en productivite"},
    {id: 7, key: "Apprendre un nouveau langage"},
    {id: 8, key: "Faire une mission en freelance"},
    {id: 9, key: "Organiser un meetup autour de la tech"},
    {id: 10, key: "Faire un triathlon"},
  ]);

  const [newGoal, setNewGoal] = useState('');

  const addGoal = () =>{
    newGoal && setGoal([...sampleGoals, { key: newGoal }]);
  };

  deleteGoal = (key) =>{
    setGoal(sampleGoals => sampleGoals.filter((item) => item.key !== key));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.red}>Open up <Text style={styles.bold}>App.js</Text> to start working on your app!</Text>
      <View style={styles.row}>
        <TextInput 
          placeholder="Nouvel objectif ?"
          onChangeText={(newGoal) => setNewGoal(newGoal)}
          value={newGoal}
        ></TextInput>
        <Button title="Ajouter" onPress={addGoal}/>
      </View>
      <FlatList
        data={sampleGoals}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <Text>{item.key}</Text>
            <TouchableOpacity style={styles.btnDelete} onPress={() => this.deleteGoal(item.key)} >
              <Text style={{color: 'white'}}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDAB9',
  },
  red: {
    color: 'red',
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  list: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  btnDelete: {
    backgroundColor: 'red',
    marginLeft: 25,
    padding: 5,
    borderRadius : 5,
  },
  row: {
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});