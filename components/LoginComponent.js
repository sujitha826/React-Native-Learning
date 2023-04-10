import React, { useState } from 'react';
import HeaderComponent from './Header';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function LoginComponent() {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const onChangeEmail = emailValue => setEmail(emailValue);
    const onChangePwd = pwdValue => setPwd(pwdValue);

    function specialCharFinder(val) {
        let hasSplChar = false
        if (val)
            hasSplChar = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(val)
        return hasSplChar;
    }

    const validatePassword = (value = '') => {
        let validation = {
            isValid: true,
            errorMsg: ''
        }
        let passRegex = /^(?=.*[a-z])(?=.*[A-Z])/;
        if (!value.length) {
            validation.isValid = false;
            validation.errorMsg = 'Password field is empty';
        } else if (value.length < 4 || value.length > 10) {
            validation.isValid = false;
            validation.errorMsg = 'Password length should be between 4 and 10';
        } else if (!passRegex.test(value) || !specialCharFinder(value)) {
            validation.isValid = false;
            validation.errorMsg = 'Password must contain atleast 1 special character';
        }
        return validation;
    }

    function validateEmail(email) {
        if (email) {
            const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
            return regex.test(email);
        }
    }

    const onPressHandler = () => {
        let emailValidate = email ? validateEmail(email) : false;
        let pwdValidate = validatePassword(pwd);
        if (emailValidate && pwdValidate.isValid) {
            Alert.alert('Success', 'You are logged in successfully');
            setEmail('');
            setPwd('');
        }
        else if (!emailValidate) {
            if (!email) {
                Alert.alert('Email is Empty', 'Please enter your email');
            }
            else {
                Alert.alert('Oops!!', 'Email is not valid, it should follow the format:yourname@example.com');
                setEmail('');
            }
        }
        else if (!pwdValidate.isValid) {
            if (!pwd) {
                Alert.alert('Password is Empty', 'Please enter the password');
            }
            else {
                Alert.alert('Oops!!', `${pwdValidate.errorMsg}`);
                setPwd('');
            }
        }
    }

    return (
        <View style={styles.container}>
            <HeaderComponent title='Log In' />
            <View style={styles.body}>
                <View style={styles.firstBlock}>
                    <Text style={styles.label}>E-Mail</Text>
                    <TextInput style={styles.textBox} placeholder='yourname@example.com' onChangeText={onChangeEmail} value={email}></TextInput>
                </View>

                <View style={styles.secondBlock}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.textBox} placeholder='yourpassword' onChangeText={onChangePwd} value={pwd} maxLength={10}></TextInput>
                </View>
            </View>

            <TouchableOpacity
                style={styles.btn} onPress={onPressHandler}>
                <Text style={styles.btnText}>
                    Start Deploying
                </Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        fontFamily: 'Cochin'
    },
    body: {
        marginTop: 67,
    },
    label: {
        color: 'black',
        fontSize: 16,
        paddingLeft: 25,
        fontWeight: 'bold'
    },
    secondBlock: {
        marginTop: 20,
    },
    textBox: {
        height: 50,
        margin: 10,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 15,
        borderRadius: 10
    },
    btn: {
        backgroundColor: '#0000f0',
        padding: 12,
        marginTop: 270,
        width: '50%',
        height: 50,
        borderRadius: 8,
        alignSelf: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
});