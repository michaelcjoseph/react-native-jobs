import React, { Component, PropTypes } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    AsyncStorage.removeItem('fb_token');
  }

  render() {
    return (
      <View>
        <Text>Boilerplate Text</Text>
        <Text>Auth Screen</Text>
      </View>
    );
  }
}

AuthScreen.propTypes = {
  facebookLogin: PropTypes.func.isRequired,
};

export default connect(null, actions)(AuthScreen);
