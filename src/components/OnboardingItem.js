import React from 'react'
import { View, Text,Image,useWindowDimensions, StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../constants';

const OnboardingItem = ({item}) => {
    const {width} = Dimensions.get("screen");
    return (
        <View style={[styles.container, {width}]}>
            <Image source={item.img} style={[styles.image, {width, resizeMode:'contain'}]} />
            <View style={{flex:0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    image : {
        flex:0.7,
        justifyContent:"center"
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: COLORS.darkBlue,
        textAlign: 'center',
        fontFamily:'Montserrat-Black'
    },
    description: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64,
        fontFamily:'Roboto-Thin'
    }
});

export default OnboardingItem
