import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TodoItem = ({item, pressHandler}) => {
    return (
        <TouchableOpacity style={style.item} onPress={()=>pressHandler(item.key)} >
            <Text>{item.key}-{item.text}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#BBB',
        borderWidth:1,
        borderStyle: 'dashed',
        borderRadius:10
    }
})
export default TodoItem;