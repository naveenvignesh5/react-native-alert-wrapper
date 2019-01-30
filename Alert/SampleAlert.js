import React, { PureComponent } from 'react';
import { View, Alert } from 'react-native';

class SampleAlert extends PureComponent {
  state = {}

  alert = (title = '', message = '',) => {
    Alert.alert(
      title,
      message,
    );
  }

  alertWithType = (type) => {
    Alert.alert(type);
  }

  render() {
    return (
      <View ref={(r) => { this.ref = r; } }/>
    );
  }
}

export default SampleAlert;
