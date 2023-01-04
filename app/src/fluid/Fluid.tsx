import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { Slide } from './Slide';
import * as Haptics from 'expo-haptics';


const { width } = Dimensions.get('window')


const slides =[
	{
	  color: "#3984FF",
	  //picture: require("./assets/1.png"),
	  aspectRatio: 439.75 / 470.5,
	},
	{
	  color: "#39ffb4",
	  //picture: require("./assets/2.png"),
	  aspectRatio: 400.5 / 429.5,
	},
	{
	  color: "#ffb439",
	  //picture: require("./assets/4.png"),
	  aspectRatio: 391.25 / 520,
	},
]; 

export const Fluid : React.FC = () => {

	const x = useSharedValue(0);
	const scrollHandler = useAnimatedScrollHandler({
		onScroll: (e) => {
			//if(e.contentOffset.x % width == 0)
				//Haptics.selectionAsync()
			x.value = e.contentOffset.x
		}
	})

	return (
		<View style={styles.container}>
			<Animated.ScrollView
				onScroll={scrollHandler}
				scrollEventThrottle={16}
				snapToInterval={width}
				decelerationRate="fast"
				showsHorizontalScrollIndicator={false}
				horizontal
			>
			{
				slides.map((slide, key) => { 
					const isFirst = key === 0;
					const isLast = key === slides.length - 1
					return (<View style={styles.content} key={key}>
						<Slide
							x={x}
							index={key}
							colors={[
								isFirst ? slide.color: slides[key - 1].color,
								slide.color,
								isLast ? slide.color : slides[key + 1].color
							]}
						/>
					</View>)
				})
			}	
			</Animated.ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	content: {
		flex: 1,
		width: width,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
