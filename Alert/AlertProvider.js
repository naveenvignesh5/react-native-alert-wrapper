import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import DropdownAlert from 'react-native-dropdownalert';
 
class AlertProvider extends PureComponent {
  state = {}

  static childContextTypes = {
    alertWithType: PropTypes.func,
    alert: PropTypes.func,
  }

  static propTypes = {
    customAlert: PropTypes.any,
  }

  static defaultProps = {
    customAlert: null,
  }

  getChildContext = () => ({
    alert: (...args) => this.alert.alert(...args),
    alertWithType: (...args) => this.alert.alertWithType(...args),
  });
  
  render() {
    const { customAlert: AlertComponent } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {React.Children.only(this.props.children)}
        {AlertComponent
          ? <AlertComponent ref={(r) => { this.alert = r; }} />
          : <DropdownAlert ref={(r) => { this.alert = r; }}/>}
      </View>
    );
  }
}

export default AlertProvider;
