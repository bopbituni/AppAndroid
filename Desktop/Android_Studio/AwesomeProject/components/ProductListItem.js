import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ProductListItem(props) {
    const {product} = props;
    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                <Image style={styles.img} source={{uri: product.images[0].url}}/>
                <View style={styles.info}>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{product.price} đồng</Text>
                        <TouchableOpacity>
                            <Text style={styles.cartText}>--Đặt Ngay--</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    cartText:{
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 15,
        shadowOffset : {width: 0, height: 0}
    },
    container: {
        marginBottom: 20,
        borderRadius: 7,
        backgroundColor: '#FFF',
        overflow:'hidden'
    },
    info : {
        padding: 0
    },
    img :{
        height: 150,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    name: {
        fontSize: 16,
        marginBottom: 8
    },
    priceRow :{
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize:16,
        color: '#888',
        flex: 1
    }

})