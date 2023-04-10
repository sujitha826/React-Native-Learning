import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

const HeaderComponent = ({ title }) => {
    const headerTitle = title;

    return (
        <View style={styles.header}>
            { /* <Icon name={'comments'} light />*/}
            <Text style={styles.text}>{headerTitle}</Text>
        </View>
    );
};

// HeaderComponent.defaultProps = {
//     title: 'Shopping List',
// };

const styles = StyleSheet.create({
    header: {
        height: 80,
        padding: 15,
        backgroundColor: 'white',
        margin: 12
    },
    text: {
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default HeaderComponent;