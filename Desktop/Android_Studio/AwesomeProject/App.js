import React, {Component} from 'react';
import {
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    View,
    Button,
    ScrollView
} from 'react-native';
const Context = React.createContext('default value');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contextData: "state default valuesss"
    }
  }

  render() {
    return (
        <View style={styles.container}>
        <Context.Provider value={this.state.contextData}>
        <Text>Content Api React-Native</Text>
        <Button onPress={() => this.setState({contextData: 'button value'})} title='Change Value'/>
        <Child />
        </Context.Provider>
        </View>
    );
  }
}

class Child extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{paddingLeft: 16, paddingRight: 16}}
                    contentContainerStyle={{backgroundColor: '#F08'}}    
                >
                <ChildOfChild />
                <ChildOfChild />
                <ChildOfChild />
                <ChildOfChild />
                <ChildOfChild />
                <ChildOfChild />
                <ChildOfChild />
                <ChildOfChild />
                <ChildOfChild />
                <ChildOfChild />
                <ChildOfChild />
                <ChildOfChild />
                <ChildOfChild />
                <ChildOfChild />
                <ChildOfChild />
                <ChildOfChild />

                </ScrollView>
            </View>
        );
    }
}

class ChildOfChild extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Context.Consumer>
                {data => <Text style={styles.child}> Data is here : {data} </Text>}
            </Context.Consumer>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    child: {
        fontSize: 19,
        textAlign: 'center',
        margin: 10,
    }
})

