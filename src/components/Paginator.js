import React from 'react'
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native'
import { COLORS } from '../constants';

const Paginator = ({data, scrollX}) => {
    const { width } = Dimensions.get('screen');
    return (
        <View style={{flexDirection:'row',height: 64}}>
            {data.map((_, i)=> {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                });
                
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange:[0.3,1,0.3],
                    extrapolate:'clamp'
                })
                return <Animated.View style={[styles.dot,{width: dotWidth,opacity}]} key={i.toString()} />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems:'center'
    },
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: COLORS.darkBlue,
        marginHorizontal: 8
       
    }
})

export default Paginator
