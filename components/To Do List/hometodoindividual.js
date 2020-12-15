import React, { useState, useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Keyboard, Alert, KeyboardAvoidingView, Platform, AsyncStorage, ScrollView} from "react-native";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList} from "react-native";
import {Icon} from 'react-native-elements';

export default function hometodoindividual({navigation}) {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  async function addTask() {
    const search = task.filter(task => task === newTask);

    if (search.length !== 0) {
      Alert.alert("Atención", "Has repetido el nombre de la tarea.");
      return;
    }

    if (newTask === "") {
      Alert.alert("Atención", "No puedes añadir una tarea en blanco.");
      return;
    }

    setTask([...task, newTask]);
    setNewTask("");

    Keyboard.dismiss();
  }

  async function removeTask(item) {
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
          onPress: () => setTask(task.filter(tasks => tasks !== item))
        }
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {
    async function loadTask() {
      const task = await AsyncStorage.getItem("task");

      if (task) {
        setTask(JSON.parse(task));
      }
    }
    loadTask();
  }, []);

  useEffect(() => {
    async function saveTask() {
      AsyncStorage.setItem("task", JSON.stringify(task));
    }
    saveTask();
  }, [task]);

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
              data={task}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              style={styles.FlatList}
              renderItem={({ item }) => (
                <View style={styles.ContainerView}>
                  <Text style={styles.Texto}>{item}</Text>
                  <TouchableOpacity onPress={() => removeTask(item)}>
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
              value={newTask}
              placeholder="Escribe una actividad"
              maxLength={200}
              onChangeText={text => setNewTask(text)}
            />
            <TouchableOpacity style={styles.Button} onPress={() => addTask()}>
              <Ionicons name="ios-add" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.Form2}>
          <View style={styles.container2}>
            	<TouchableOpacity style={{marginTop: '2%'}} onPress={() => navigation.navigate('hometodoindividual')}>
                	<View style={styles.buttonContainer}>
                    	<Icon name='user' color='#135D81' type='font-awesome'/>
                	</View>
            	</TouchableOpacity>
            	<TouchableOpacity style={{marginTop: '2%'}} onPress={() => navigation.navigate('hometodoparejas')}>
                	<View style={styles.buttonContainer}>
                    	<Icon name='user-friends' color='#3491cd' type='font-awesome-5'/>
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