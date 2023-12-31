import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';

export default function App() {

  const [todos,setTodos] = useState([
    {text:'Buy a new coffee', key: 1},
    {text:'Buy milk', key: 2},
    {text:'Create react native app', key: 3},
    {text:'Create node app', key: 4},
    {text:'Create react app', key: 5},
    {text:'Create angular app', key: 6},
    {text:'Create spring boot app', key: 7},
    {text:'Create next app', key: 8},
    {text:'Create grails app', key: 9},
    {text:'Create vue app', key: 10},
    {text:'Getting start on docker', key: 11},
    {text:'Getting start on jenkins', key: 12},
  ]);
  const pressHandler = (key)=>{
    setTodos((previous)=>{
      return previous.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
      if(text.length > 3){
        setTodos((previous)=>{
          return [
            {text:text,key:Math.random()},
            ...previous
          ]
      });
      }else{
        Alert.alert('OOPS','Vous devez renseigner au moins 4 caractères');
      }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
            {/* todo forms */}
            <AddTodo submitHandler = {submitHandler}/>
            <View style={styles.list}>
                <FlatList
                  data={todos}
                  renderItem={({item})=>(
                      <TodoItem item={item} pressHandler={pressHandler} />
                    )}
                />
            </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20
  }
});
