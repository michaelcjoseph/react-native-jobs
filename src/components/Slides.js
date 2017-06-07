import React, { Component, PropTypes } from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = {
  textStyle: {
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center',
  },
  slideStyle: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
  },
  buttonViewStyle: {
    marginTop: 15,
  },
};

class Slides extends Component {
  renderSlides() {
    return this.props.data.map((slide, i) => (
      <View
        key={slide.text}
        style={[styles.slideStyle, { backgroundColor: slide.color }]}
      >
        <Text style={styles.textStyle}>
          {slide.text}
        </Text>
        {this.renderLastSlideButton(i)}
      </View>
    ));
  }

  renderLastSlideButton(index) {
    if (index === this.props.data.length - 1) {
      return (
        <View style={styles.buttonViewStyle}>
          <Button
            raised
            title="I'm Ready!"
            buttonStyle={styles.buttonStyle}
            onPress={this.props.onComplete}
          />
        </View>
      );
    }

    return null;
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

Slides.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Slides;
