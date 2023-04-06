import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

const BasicComponent = () => {
    return (
        <ScrollView>
            <Text style={styles.text}>Hello Native World!!!</Text>
            <View>
                <Text style={styles.text}>Android First!!!</Text>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={styles.img}
                />
            </View>
            <TextInput
                style={styles.textInput}
                defaultValue="You can type here"
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 200
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        margin: 10,
        borderRadius: 15
    },
    text: {
        paddingLeft: 10,
        fontSize: 15,
        color: 'steelblue'
    }
});

export default BasicComponent;