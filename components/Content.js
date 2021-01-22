import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Content = () => {
    
    const { content, info } = styles;
    return (
        <View style={content}>
            {
                props.temp
                ?
                (<View>
                    <Text style={info}>{Math.round(this.props.temp)}&#8451;</Text>
                </View>)
                :
                null
            }
            
            {/* <View>
                <Text style={info}>{props.weather}</Text>
            </View>
            <View>
                <Text style={info}>{props}</Text>
            </View>
            <View>
                <Text style={info}>15</Text>
            </View>
            <View>
                <Text style={info}>15</Text>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
        backgroundColor: 'transparent'
    },
    info: {
        fontSize: 50,
        color: 'black',
        paddingLeft: 20,
        paddingTop: 50
    }
})


export default Content
