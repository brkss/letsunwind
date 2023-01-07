import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, { runOnJS, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { Slide } from './Slide';
import * as Haptics from 'expo-haptics';


const { width } = Dimensions.get('window')


const slides =[
	{
		color: "#B5FFE9",
		aspectRatio: 439.75 / 470.5,
		txt: "1min"
	},
	{
		color: "#B0BBF0",
		aspectRatio: 400.5 / 429.5,
		txt: "2min"
	},
	{
		color: "#F4E04D",
		aspectRatio: 391.25 / 520,
		txt: "3min"
	},
	{
		color: "#F8D8D6",
		aspectRatio: 391.25 / 520,
		txt: "4min"
	},
	{
		color: "#D3F7AC",
		aspectRatio: 391.25 / 520,
		txt: "5min"
	},
]; 

interface Props {
	onChange: (t: number) => void;
}

export const Fluid : React.FC<Props> = ({onChange}) => {

	const x = useSharedValue(0);
	const scrollHandler = useAnimatedScrollHandler({
		onScroll: (e) => {
			if(e.contentOffset.x % width == 0)
				runOnJS(Haptics.selectionAsync)()
			runOnJS(onChange)(Math.floor((e.contentOffset.x / width) + 1))
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
							txt={slide.txt}
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
		backgroundColor: 'black'
	},
	content: {
		flex: 1,
		width: width,
		justifyContent: 'center',
		alignItems: 'center'
	},
	
})
