import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';


const HeaderComponent = ({ title }) => {
    const headerTitle = title;        // uses when there is no reassignment of the value

    return (
        <View style={styles.header}>
            <Text style={styles.text}>{headerTitle}</Text>
        </View>
    );
};

// HeaderComponent.defaultProps = {
//     title: 'Shopping List',
// };

const styles = StyleSheet.create({
    header: {
        height: 70,
        padding: 15,
        backgroundColor: 'darkslateblue',
    },
    text: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
    },
});

export default HeaderComponent;