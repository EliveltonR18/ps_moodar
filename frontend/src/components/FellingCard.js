import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';

const FellingCard = ({ item }) =>{
    return(
        <View style={styles.fellingCard}>
            <View style={styles.fellingItem}>
                <View style={styles.fellingItemHeader}>
                    <Text style={styles.date}>há {distanceInWords(item.date, new Date(), {
                        locale: pt
                    })}</Text> 
                    <Text style={styles.stress}>{item.stress}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fellingItem: {
        padding: 10,
    },
    fellingItemHeader:{
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    date:{
        fontSize: 16,
        fontStyle:'italic',
        fontWeight:'bold',
        color: '#FF5f77',
    },
    stress:{
        borderRadius: 50,
        width: 30,
        height: 30,
        padding: 6,
        backgroundColor: '#FF5f77',
        borderStyle: 'solid',
        borderWidth:1,
        color: '#ffffff',
        textAlign: 'center',
        fontSize:16,
    }, 
    fellingCard:{
        borderStyle: 'solid',
        borderWidth:1,
        borderRadius: 8,
        margin:10,
    }
});

export default FellingCard;