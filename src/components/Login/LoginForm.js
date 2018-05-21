import React, { Component } from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity, Text, StatusBar} from 'react-native';

type Props = {};
export default class LoginForm extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <TextInput
                    placeholder="Username"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={'#212121'}
                    returnKeyType="next"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCapitalize="none"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={'#212121'}
                    returnKeyType="go"
                    secureTextEntry={true}
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: '#C8E6C9',
        marginBottom: 15,
        color: '#212121',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#388E3C',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#C8E6C9',
        fontWeight: '700',
    },
});