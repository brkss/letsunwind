import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, withDelay,  withTiming } from 'react-native-reanimated';

const intros = [
	"students are exposed to a lot of pressure and stress, which negatively impacts their mental health",
	"In the past decade, the number of students treated for mental disorders has been on the rise",
	/*
	"a survey conducted by the US National Alliance on Mental Illness resulted that 64% of students drop out of college because of mental health problems.",
	"The prevalence of depression among college students was 41% in 2021.",
	"22% of college students are diagnosed with severe depression",
	"21.2% of college students who are diagnosed with depression will have lifelong symptoms",
	"34% of college students have been diagnosed with anxiety",
	"Suicide rates of college students have tripled since the 1950s.",
	"In the 2020–2021 school year, 33% of students receiving mental health services considered suicide.",
	"Coping with new challenges and excessive academic demands often result in burnout, leading to stress and anxiety.",
*/
]

export const Intro : React.FC = () => {

	const opacity = useSharedValue<number>(0);
	const [curr, setCurr] = React.useState(0);


	// fading animation 
	const display = () => {
		opacity.value = withTiming(1, {duration: 700})
		opacity.value = withDelay(5700, withTiming(0, {duration: 700}))
	}

	React.useEffect(() => {
		display();
		const interval = setInterval(() => {
			if(curr < intros.length - 1){
				setCurr(curr + 1);	
			}
			else{
				console.log("clear interval")
				clearInterval(interval)
			}
			display();
		}, 7700)
		return () => clearInterval(interval)
	}, [curr])

	const introTxtStyle = useAnimatedStyle(() => {
		return {
			opacity: opacity.value
		}
	})

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<Animated.Text style={[styles.txt, introTxtStyle]}>{intros[curr]}</Animated.Text>
			</View>							
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding:10,
	},
	title: {
		//
	},
	btn: {
		//
	},
	txt: {
		color: 'white',
		fontFamily: 'AvBold',
		textAlign: 'center',
		fontSize: 16,
		lineHeight: 24
	}
})
