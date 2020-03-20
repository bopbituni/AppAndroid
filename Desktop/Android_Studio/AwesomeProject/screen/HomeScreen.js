import React, {Component} from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title : 'Home'
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.fontSize}>               
                     Chào Mừng Bạn Đến Với ThanhFood
                    </Text>
                </View>
                <View style={styles.body}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('YellowRice',{categoryId : 1})}    
                    >
                        <Text style={styles.fontSize}>Chọn Cơm Rang</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('WhiteRice', {categoryId : 2})}    
                    >
                        <Text style={styles.fontSize}>Chọn Cơm Trắng</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.fontSize}>               
                     Tập đoàn ThanhFood hân hạnh tài trợ
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
    
    },
    header: {
        alignItems: 'stretch',
        flex: 1,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        backgroundColor: 'pink',
        width: 340
    },
    body: {
        flex: 4,
        // backgroundColor: 'black',
        alignItems: 'stretch',

    },
    footer: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'stretch',
        width: 340,
    


    },
    fontSize: {
        fontSize: 20,
        paddingTop: 30,
        justifyContent: 'center',
        alignContent: 'center'
    },
    button: {
        padding: 18,
        width: 340,
        borderRadius: 4,
        backgroundColor: 'blue',
        alignContent: 'stretch',
        flex: 1
    }

})