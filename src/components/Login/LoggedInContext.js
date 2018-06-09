import React, { Component } from 'react';

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
