/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import LoginForm from "./LoginForm";
const logo = require('../../images/logo.jpg');

type Props = {};
export default class Login extends Component<Props> {

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        source={logo}
                        style={styles.logo} />
                    <Text style={styles.title}>COSTS</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4CAF50',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        opacity: 0.9,
        borderRadius: 50
    },
    formContainer: {

    },
    title: {
        color: '#C8E6C9',
        marginTop: 10,
        width: 160,
        fontSize: 20,
        textAlign: 'center',
    },
});
