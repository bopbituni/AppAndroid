import React, {Component} from 'react';
import axios from 'axios';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import ProductListItem from '../components/ProductListItem'

export default class WhiteRice extends Component {
    static navigationOptions = {
        title : 'Cơm Rang Đủ Món'
    };

    constructor(props) {
        super(props);
        this.state = {
            products : []
        };
    }

componentDidMount() {
    axios.get('https://api.myjson.com/bins/i1clw')
    .then(res => {
        this.setState({
            products: res.data
        })
    }). catch (error => {
        console.error(error)
    })
}

    render() {
        const {navigation} = this.props;
        const {products} = this.state;

        return (
            
            <FlatList
                numColumns={2}
                data={products}
                renderItem={({item}) => 
                    <View style={styles.wrapper}>
                    <ProductListItem product={item}/>
                    </View>
                }
                keyExtractor={(item) => `${item.id}`}
            >
            </FlatList>
 
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8
    }
})