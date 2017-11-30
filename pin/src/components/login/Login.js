import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import Form from 'react-native-form';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../../actions/login';

class Login extends React.Component {
  static navigationOptions = {
    header: null
  };

  handleLogin = () => {
    this.props.navigation.navigate('Feed');
    // this.props.loginActions.login(this.refs.loginForm.getValues()).then(() => {
    //   console.log(this.props);
    // })
  }

  render() {
     return (
       <View style={styles.login}>
        <Text style={styles.logoText}>Pin</Text>
        <Form ref="loginForm">
          <TextInput
            type="TextInput"
            style={styles.input}
            autoCorrect={false}
            placeholder="Email"
            name="email"
          />
          <TextInput
            type="TextInput"
            style={styles.input}
            autoCorrect={false}
            placeholder="Password"
            name="password"
            secureTextEntry
          />
        </Form>
        <TouchableOpacity style={styles.button} onPress={() => this.handleLogin()}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  login: {
    paddingTop: 200,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'white',
    flex: 1
  },
  logoText: {
    alignSelf: 'center',
    fontSize: 50,
    fontWeight: '600',
    marginBottom: 50,
    letterSpacing: 5
  },
  input: {
    borderWidth: 0,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    marginTop: 5,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  button: {
    width: 75,
    height: 35,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 3,
    alignSelf: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    marginTop: 5,
    fontWeight: '600'
  },
});

const mapStateToProps = (state) => {
  return {
    login: state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
