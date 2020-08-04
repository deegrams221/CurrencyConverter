import React from 'react';
import {
  Alert,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const currencyPerDollar = {
  RUPEE: 75.02,
  EURO: 0.85,
  POUND: 0.77,
  RUBEL: 73.51,
  AUSDOLLAR: 1.4,
  CANDOLLAR: 1.34,
  YEN: 105.87,
  DINAR: 1190.5,
  BITCOIN: 0.000089,
  PESO: 22.76,
  TRINDOLLAR: 52.36,
  SHILLING: 107.88,
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      resultValue: '0.0',
    };
  }

  btnPressed = (currency) => {
    if (this.state.inputValue === '') {
      Alert.alert('Enter a value');
    }
    let result =
      parseFloat(this.state.inputValue) * currencyPerDollar[currency];

    this.setState({ resultValue: result.toFixed(2) });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.screenview}>
            <View style={styles.resultscontainer}>
              <Text style={styles.resultvalue}>{this.state.resultValue}</Text>
            </View>
            <View style={styles.inputcontainer}>
              <TextInput
                style={styles.textinput}
                selectionColor='#fff'
                keyboardType='numeric'
                placeholder='Enter Value'
                value={this.state.inputValue}
                onChangeText={(inputValue) =>
                  this.setState({
                    inputValue,
                  })
                }
              />
            </View>
            <View style={styles.converterbtncontainer}>
              <TouchableOpacity
                onPress={() => this.btnPressed('RUPEE')}
                style={styles.converterbtn}
              >
                <Text style={styles.converterbtntext}>Rupee</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed('EURO')}
                style={styles.converterbtn}
              >
                <Text style={styles.converterbtntext}>Euro</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed('POUND')}
                style={styles.converterbtn}
              >
                <Text style={styles.converterbtntext}>Pound</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed('RUBEL')}
                style={styles.converterbtn}
              >
                <Text style={styles.converterbtntext}>Rubel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed('AUSDOLLAR')}
                style={styles.converterbtn}
              >
                <Text style={styles.converterbtntext}>Australian</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed('CANDOLLAR')}
                style={styles.converterbtn}
              >
                <Text style={styles.converterbtntext}>Canadian</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed('YEN')}
                style={styles.converterbtn}
              >
                <Text style={styles.converterbtntext}>Yen</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed('DINAR')}
                style={styles.converterbtn}
              >
                <Text style={styles.converterbtntext}>Dinar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed('BITCOIN')}
                style={styles.converterbtn}
              >
                <Text style={styles.converterbtntext}>Bitcoin</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed('PESO')}
                style={styles.converterbtn}
              >
                <Text style={styles.converterbtntext}>Peso</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed('TRINDOLLAR')}
                style={styles.converterbtn}
              >
                <Text style={styles.converterbtntext}>Trinidad</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.btnPressed('SHILLING')}
                style={styles.converterbtn}
              >
                <Text style={styles.converterbtntext}>Kenyan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screenview: {
    flex: 1,
    padding: 10,
  },
  resultscontainer: {
    height: 70,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#44001A',
    backgroundColor: '#B68CB8',
    borderWidth: 3,
  },
  resultvalue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputcontainer: {
    height: 70,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#44001A',
    borderWidth: 3,
    backgroundColor: '#B68CB8',
  },
  textinput: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
  converterbtncontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    borderColor: '#44001A',
    borderWidth: 2,
  },
  converterbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B68CB8',
    height: 100,
    borderColor: '#44001A',
    borderWidth: 2,
    width: '33.3%',
  },
  converterbtntext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
