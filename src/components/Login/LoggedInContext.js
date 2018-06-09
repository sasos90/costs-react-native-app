import React, { Component } from 'react';
import {KEY_TOKEN, KEY_USER} from "../../helpers/LSK";
import {Alert, AsyncStorage} from "react-native";

export const LoggedInContext = React.createContext({
    username: null,
    token: null,
    setLogin: () => {
        console.log('DEFAULT CALLBACK');
    },
});

type Props = {};
export default class LoggedInProvider extends Component<Props> {

    constructor(props) {
        super(props);
        this.setLogin = this.setLogin.bind(this);
    };

    async componentWillMount() {
        try {
            const userValue = await AsyncStorage.getItem(KEY_USER);
            const tokenValue = await AsyncStorage.getItem(KEY_TOKEN);
            if (userValue !== null && tokenValue !== null) {
                const user = JSON.parse(userValue);
                this.setState({
                    username: user.username,
                    token: tokenValue
                });
            }
        } catch (err) {
            console.log('ERROR reading from storage', err);
            Alert.alert(
                'Error',
                'Something wrong while reading from storage',
                [],
                { cancelable: true }
            )
        }
    }

    setLogin(username, token) {
        this.setState({ username, token });
    }

    state = {
        username: null,
        token: null,
        setLogin: this.setLogin.bind(this)
    };

    render() {
        return (
            <LoggedInContext.Provider value={this.state}>
                {this.props.children}
            </LoggedInContext.Provider>
        );
    }
}
