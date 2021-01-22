import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment'

const Footer = () => {
    const {} = styles;
    return (
        <View>
            <View>
                <Text>
                    {moment().format('LLLL')}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
})


export default Footer
