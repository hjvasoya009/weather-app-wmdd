import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';


const Form = (props) => {
    const { header, textInput, title } = styles
    return (
        <View style={header}>
            <Text style={title}>Open Weather App</Text>
            <TextInput
                style={textInput}
                placeholder='Input a city name or country code'
                onEndEditing={props.onSubmit}
                onChangeText={props.onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '100%'
    },
    textInput: {
        width: 300,
        height: 40,
        borderColor: 'grey',
        borderWidth: 2,
        padding: 5
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 50
    }
});


export default Form;
