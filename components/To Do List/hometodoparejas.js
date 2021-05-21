import React, { useState, useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Keyboard, Alert, KeyboardAvoidingView, Platform, AsyncStorage, ScrollView} from "react-native";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList} from "react-native";
import {Icon} from 'react-native-elements';

export default function hometodoparejas({navigation}) {
  const [taskparejas, setTaskParejas] = useState([]);
  const [newTaskParejas, setNewTaskParejas] = useState("");

  async function addTaskParejas() {
    const search = taskparejas.filter(taskparejas => taskparejas === newTaskParejas);

    if(newTaskParejas === ''){
      Alert.alert(
        '⚠️ Tarea en blanco',
        'No es posible añadir una tarea en blanco.',
        [
          {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
      return;
    }

    else if(search.length !== 0){
      Alert.alert(
        '⚠️ Tarea repetida',
        'Has repetido el nombre de la tarea.',
        [
          {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
      return;
    }

    else if(newTaskParejas.length >= 200){
      Alert.alert(
        '⚠️ Tamaño de la tarea',
        'La actividad ingresada contiene muchos caracteres.',
        [
          {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
      return;
    }

    setTaskParejas([...taskparejas, newTaskParejas]);
    setNewTaskParejas("");

    Keyboard.dismiss();
  }

  async function removeTaskParejas(item) {
    Alert.alert(
      "⚠️ Eliminar actividad",
      "¿Estás seguro que deseas borrarla?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return;
          },
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => setTaskParejas(taskparejas.filter(taskparejas => taskparejas !== item))
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
                <View style={styles.fixToText}>
                <TouchableOpacity onPress={() => removeTaskParejas(item)}>
                  <MaterialIcons style={styles.iconrecyclebin}
                    name="delete-forever"
                    size={25}
                    color="#f64c75"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Temporizador Pomodoro')}>
                   <Ionicons style={styles.iconclock} name="md-time" size={25} color="#f64c75" />
                </TouchableOpacity>
              </View>
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
        </View>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 80,
    marginTop: 0,
    backgroundColor: "#FFF"
  },
  Body: {
    flex: 1,
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
    fontFamily: 'regularO',
    borderWidth: 1,
    borderColor: "#eee"
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007AFF",
    borderRadius: 4,
    marginLeft: 10
  },
  FlatList: {
    flex: 1,
    marginVertical: "5%",
    
  },
  Texto: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
    fontFamily: 'semiBoldO',
    textAlign: "left",
    marginRight: '35%',
  },
  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#eee",
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
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '75%'
  },
});