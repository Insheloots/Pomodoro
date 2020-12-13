import React, { useState, useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Keyboard, Alert, KeyboardAvoidingView, Platform, AsyncStorage, ScrollView} from "react-native";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList} from "react-native";
import {Icon} from 'react-native-elements';

export default function hometodo({navigation}) {
  const [taskparejas, setTaskParejas] = useState([]);
  const [newTaskParejas, setNewTaskParejas] = useState("");

  async function addTaskParejas() {
    const search = taskparejas.filter(taskparejas => taskparejas === newTaskParejas);

    if (search.length !== 0) {
      Alert.alert("Atención", "Has repetido el nombre de la tarea.");
      return;
    }

    if (newTaskParejas === "") {
      Alert.alert("Atención", "No puedes añadir una tarea en blanco.");
      return;
    }

    setTaskParejas([...taskparejas, newTaskParejas]);
    setNewTaskParejas("");

    Keyboard.dismiss();
  }

  async function removeTaskParejas(item) {
    Alert.alert(
      "Eliminar actividad",
      "¿Estás seguro que quieres borrarla?",
      [
        {
          text: "Cancelar",
          onPress: () => {
            return;
          },
          style: "cancel"
        },
        {
          text: "Aceptar",
          onPress: () => setTaskParejas(taskparejas.filter(tasksparejas => tasksparejas !== item))
        }
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {
    async function loadTaskParejas() {
      const taskparejas = await AsyncStorage.getItem("taskparejas");

      if (taskparejas) {
        setTaskParejas(JSON.parse(taskparejas));
      }
    }
    loadTaskParejas();
  }, []);

  useEffect(() => {
    async function saveTaskParejas() {
      AsyncStorage.setItem("taskparejas", JSON.stringify(taskparejas));
    }
    saveTaskParejas();
  }, [taskparejas]);

  return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior="padding"
        style={{ flex: 1 }}
        enabled={Platform.OS === "ios"}
      >
        <View style={styles.container}>
          <View style={styles.Body}>
            <FlatList
              data={taskparejas}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              style={styles.FlatList}
              renderItem={({ item }) => (
                <View style={styles.ContainerView}>
                  <Text style={styles.Texto}>{item}</Text>
                  <TouchableOpacity onPress={() => removeTaskParejas(item)}>
                    <MaterialIcons
                      name="delete-forever"
                      size={25}
                      color="#f64c75"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Temporizador Pomodoro')}>
                     <Ionicons name="md-time" size={25} color="#f64c75" />
                  </TouchableOpacity>
                </View>
                
              )}
            />
          </View>

          <View style={styles.Form}>
            <TextInput
              style={styles.Input}
              placeholderTextColor="#999"
              autoCorrect={true}
              value={newTaskParejas}
              placeholder="Escribe una actividad"
              maxLength={200}
              onChangeText={text => setNewTaskParejas(text)}
            />
            <TouchableOpacity style={styles.Button} onPress={() => addTaskParejas()}>
              <Ionicons name="ios-add" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.Form2}>
          <View style={styles.container2}>
            	<TouchableOpacity style={{marginTop: '2%'}} onPress={() => navigation.navigate('hometodoindividual')}>
                	<View style={styles.buttonContainer}>
                    	<Icon name='user' color='#3491cd' type='font-awesome'/>
                	</View>
            	</TouchableOpacity>
            	<TouchableOpacity style={{marginTop: '2%'}} onPress={() => navigation.navigate('hometodoparejas')}>
                	<View style={styles.buttonContainer}>
                    	<Icon name='user-friends' color='#135D81' type='font-awesome-5'/>
                	</View>
            	</TouchableOpacity>
              <TouchableOpacity style={{marginTop: '2%'}} onPress={() => navigation.navigate('hometodogrupal')}>
                	<View style={styles.buttonContainer}>
                    	<Icon name='users' color='#3491cd' type='font-awesome'/>
                	</View>
            	</TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor: "#FFF"
  },
  Body: {
    flex: 1
  },
  Form: {
    padding: 0,
    height: 60,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 18,
    borderColor: "#eee"
  },
  Input: {
    flex: 1,
    height: 40,
    backgroundColor: "#eee",
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#eee"
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c6cce",
    borderRadius: 4,
    marginLeft: 10
  },
  FlatList: {
    flex: 1,
    marginTop: 5
  },
  Texto: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "left",
    marginRight: '20%',
  },
  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#eee",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#eee"
  },
  Form2: {
    padding: 0,
    height: 45,
    alignSelf: "stretch",
    paddingTop: 13,
    borderColor: "#eee"
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: '15%',
  }
});