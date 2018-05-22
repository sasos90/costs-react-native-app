import React, { Component } from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity, Text, StatusBar, Button} from 'react-native';

type Props = {};
export default class LoginForm extends Component<Props> {

    constructor() {
        super();
        this.login = this.login.bind(this);
    }

    async login() {
        console.log('new');
        try {
            const res = await fetch('http://172.23.159.145:3000/login', {
                method: 'POST',
                body: JSON.stringify({
                    email: 'email@something.com',
                    password: 'somePassword'
                })
            });
            console.log(await res.json());
        } catch (err) {
            console.log(err);
        }
    }

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
                <Button
                    onPress={this.login}
                    color="#388E3C"
                    title="LOGIN" />
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
