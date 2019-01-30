### **React-Native-Alert-Wrapper**

<ul>
  <li>A Wrapper that enables you to call your alert from anywhere in the app</li>
  <li>Removes the pain of writing your alert views on each rn-screen</li>
</ul>

***Note:*** This project uses [react-native-dropdownalert](https://www.npmjs.com/package/react-native-dropdownalert/v/3.1.2) as a default alert component. Have a look at it. :blush:

#### Platform Support
Supports both Android and iOS.

#### Props
The following props are applicable for the **AlertProvider** wrapper.

Prop              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
customAlert         | any     | Yes       | null       | Custom Alert Component


### Guide to write custom alert component

**Basic Template**

```javascript
   class CustomAlertComponent extends PureComponent { // PureComponent - Optimal Performance
      // Required
      alert = (...params) => {
        // Logic to trigger alert
      }

      // Required
      alertWithType = (...params) => {
        // Similar to alert method. Could be used to have different alert types
      }

      render() {
        return (
          // View definitions
        );
      }
   }
```

***Warning:***

CustomAlertComponent class requires both `alert` and `alertWithType` methods to be defined. Otherwise it will raise undefined error<br>

### Integrating with React Native

**App.js**

```javascript
import React from 'react';
import { AlertProvider, SampleAlert } from 'react-native-alert-wrapper';

// CustomComponent
import CustomAlertComponent from './CustomAlertComponent'; // Wherever you keep it

const App = () => (
  // ...  
);

const AppWithAlert = () => (
  <AlertProvider
    // customAlert={SampleAlert}  Using your out-of-box custom alert component
    // customAlert={CustomAlertComponent} Using your own component
  >
    <App />
  <AlertProvider>
);

export default AppWithAlert;
```

### Usage inside a Screen Component

```javascript
import React, { Component } from 'react';
import { View, Button } from 'react-native';

import { connectAlert } from 'react-native-alert-wrapper';

class Home extends Component {
  state = {}

  render() {
    <View>
      <Button title="Show Alert" onPress={() => this.props.alert(param1, param2)} />
    </View>
  }
}

export default connectAlert(Home); // with make alert and alertWithType props available to Home
```

### TO-DO
- [ ] To generalize code for React & React-native
- [ ] QA
