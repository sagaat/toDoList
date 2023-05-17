import { useState } from 'react';
import { StyleSheet, FlatList, View, TextInput, Button, TouchableOpacity, Text, Modal } from 'react-native';

const Liste = () => {
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
    const [modalVisible, setModalVisible] = useState('');
    const [selectedGoal, setSelectedGoal] = useState('');

    const addGoal = () =>{
        newGoal && setGoal([...sampleGoals, { key: newGoal }]);
    };

    const deleteGoal = (key) =>{
        setGoal(sampleGoals => sampleGoals.filter((item) => item.key !== key));
    }

    const editGoal = () => {
        const updatedGoals = sampleGoals.map(item => {
            if (item.key === selectedGoal) {
                return { ...item, key: newGoal };
            }
            return item;
        });
        setGoal(updatedGoals);
        setModalVisible(false);
        setSelectedGoal('');
        setNewGoal('');
    };
    
    const openModal = (goal) => {
        setModalVisible(true);
        setSelectedGoal(goal);
        setNewGoal(goal);
    };
    
    const closeModal = () => {
        setModalVisible(false);
        setSelectedGoal('');
        setNewGoal('');    
    };
    

    const styles = StyleSheet.create({
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
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
        },
        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContent: {
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            width: '80%',
        },
        modalInput: {
            width: '100%',
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
        },
        modalBtnContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            marginTop: 20,
        },
        modalBtn: {
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5,
        },
        modalBtnText: {
            color: 'white',
            fontWeight: 'bold',
        },
    });

    return (
        <View>
            <View style={styles.row}>
                <TextInput 
                    placeholder="Nouvel objectif ?"
                    color="ghostwhite"
                    placeholderTextColor="ghostwhite"
                    clearTextOnFocus                
                    onChangeText={(newGoal) => setNewGoal(newGoal)}
                    value={newGoal}
                ></TextInput>
                <Button title="Ajouter" onPress={addGoal}/>
            </View>
            <View>
                <FlatList
                    data={sampleGoals}
                    renderItem={({ item }) => (
                    <View style={styles.list}>
                        <TouchableOpacity
                            style={styles.btnEdit}
                            onPress={() => openModal(item.key)}
                        >
                            <Text>{item.key}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.btnDelete} onPress={() => deleteGoal(item.key)} 
                        >
                            <Text style={{color: 'white'}}>X</Text>
                        </TouchableOpacity>
                    </View>
                    )}
                ></FlatList>
            </View>
            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Modifier l'objectif"
                            onChangeText={(newGoal) => setNewGoal(newGoal)}
                            value={newGoal}
                        />
                        <View style={styles.modalBtnContainer}>
                            <TouchableOpacity
                                style={[styles.modalBtn, { backgroundColor: 'green' }]}
                                onPress={editGoal}
                            >
                                <Text style={styles.modalBtnText}>Valider</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalBtn, { backgroundColor: 'red' }]}
                                onPress={closeModal}
                            >
                                <Text style={styles.modalBtnText}>Annuler</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View> 
    );
};

export default Liste;