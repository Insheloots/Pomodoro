import React, { useState, useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Keyboard, Alert, KeyboardAvoidingView, Platform, AsyncStorage, ScrollView} from "react-native";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList} from "react-native";
import {Icon} from 'react-native-elements';

export default function hometodogrupal({navigation}) {
  const [taskgrupal, setTaskGrupal] = useState([]);
  const [newTaskGrupal, setNewTaskGrupal] = useState("");

  async function addTaskGrupal() {
    const search = taskgrupal.filter(taskgrupal => taskgrupal === newTaskGrupal);

    if(newTaskGrupal === ''){
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

    else if(newTaskGrupal.length >= 20){
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

    setTaskGrupal([...taskgrupal, newTaskGrupal]);
    setNewTaskGrupal("");

    Keyboard.dismiss();
  }

  async function removeTaskGrupal(item) {
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
          onPress: () => setTask(task.filter(tasks => tasks !== item))
        }
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {
    async function loadTaskGrupal() {
      const taskgrupal = await AsyncStorage.getItem("taskgrupal");

      if (taskgrupal) {
        setTaskGrupal(JSON.parse(taskgrupal));
      }
    }
    loadTaskGrupal();
  }, []);

  useEffect(() => {
    async function saveTaskGrupal() {
      AsyncStorage.setItem("taskgrupal", JSON.stringify(taskgrupal));
    }
    saveTaskGrupal();
  }, [taskgrupal]);

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
              data={taskgrupal}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              style={styles.FlatList}
              renderItem={({ item }) => (
                <View style={styles.ContainerView}>
                  <Text style={styles.Texto}>{item}</Text>
                  <TouchableOpacity onPress={() => removeTaskGrupal(item)}>
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
              value={newTaskGrupal}
              placeholder="Escribe una actividad"
              maxLength={200}
              onChangeText={text => setNewTaskGrupal(text)}
            />
            <TouchableOpacity style={styles.Button} onPress={() => addTaskGrupal()}>
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