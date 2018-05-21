/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {primaryColor, primaryColorText} from "../../../App";
const logo = require('../../images/logo.jpg');

type Props = {};
export default class Login extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        source={logo}
                        style={styles.logo} />
                    <Text style={styles.title}>Šparanje</Text>
                </View>
                <View style={styles.formContainer}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColor,
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
        color: primaryColorText,
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9,
    },
});
