import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import dismissKeyboard from 'react-native-dismiss-keyboard';

export default class DismissKeyboardExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={dismissKeyboard}>
          <Text style={styles.welcome}>
           Press me to close the keyboard
          </Text>
        </TouchableHighlight>
        <TextInput 
          onChangeText={text => this.setState({text})}
          style={styles.input}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  },
});
