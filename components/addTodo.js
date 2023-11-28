import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const AddTodo = () => {
    const [text,setText] = useState('');
    const changeHandler = (value) => {
        setText(value)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Ajouter une nouvelle tâche'
                onChangeText={changeHandler}
            />
            <Button 
                onPress={()=>console.log(text)}
                title='Ajouter'
                color='coral'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor: '#ddd'
    }
})

export default AddTodo;