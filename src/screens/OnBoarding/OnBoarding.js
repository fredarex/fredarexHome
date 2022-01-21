import React, { useRef, useState } from 'react';
import { FlatList, Image, StatusBar, StyleSheet,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View,Animated,Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NextButton from '../../components/NextButton';
import OnboardingItem from '../../components/OnboardingItem';
import Paginator from '../../components/Paginator';
import { images, theme } from '../../constants';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
// Theme
const {COLORS, FONTS, SIZES } = theme;
const {findHome,sellHome} = images
// Dummy Data
const onBoardings = [
  {
    title: "Looking for a home",
    description: "Capture The Charm, Love, The Space, Live The Location",
    img:  findHome
  },
  {
    title: "Need to sell your home",
    description: "FredarexHome provides the best platform to get buyer for your home",
    img: sellHome
  }

];

const OnBoarding = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const login = async () => {
    try {
       await AsyncStorage.setItem("@onBoardingPageLoad:key","login");
       
    } catch (error) {

    }
 }
  const viewableItemsChanged = useRef(({viewableItems}) => {
      setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  
  const scrollTo = () => {
    if (currentIndex < onBoardings.length - 1) {
      slidesRef.current.scrollToIndex({index : currentIndex + 1});
    } else {
        console.log('Last item.');
        navigation.navigate("Login");
    }
  }

 
   return (
       <View style={styles.container}>
         <View style={{flex: 3}}>
          <FlatList  
            data={onBoardings} 
            renderItem={({item }) => <OnboardingItem item={item} /> } 
            horizontal
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {x: scrollX } } },
            ],{useNativeDriver:false})}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}

            />
         </View>
         <Paginator data={onBoardings} scrollX={scrollX} />
         <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / onBoardings.length)} />
       </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: COLORS.white
  }
 
});




export default OnBoarding;

