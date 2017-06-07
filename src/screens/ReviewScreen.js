import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  render() {
    return (
      <View>
        <Text>Boilerplate Text</Text>
        <Text>Review Screen</Text>
      </View>
    );
  }
}

ReviewScreen.navigationOptions = ({ navigation }) => ({
  title: 'Review Jobs',
  headerRight: (
    <Button
      title="Settings"
      onPress={() => { navigation.navigate('settings'); }}
      backgroundColor="rgba(0,0,0,0)"
      color="rgba(0, 122, 255, 1)"
    />
  ),
  headerStyle: {
    marginTop: Platform.OS === 'android' ? 24 : 0,
  },
});

export default ReviewScreen;
