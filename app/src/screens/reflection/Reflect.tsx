import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withDelay, withTiming } from 'react-native-reanimated'
import Ionicons from '@expo/vector-icons/Ionicons'

const txt = [
	"1- Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
	"2- Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
	"3- Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
	"4- Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
	"5- Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
	"6- Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
]

export const Reflect : React.FC<any> = ({navigation}) => {

	const opacity = useSharedValue<number>(1)
	// animation !
	const [current, setCurrent] = React.useState(0);
	const next = () => {
		if(current >= txt.length - 1){
			setCurrent(0);
			navigation.navigate('Home')
			return;
		}
		opacity.value = withTiming(0, {duration: 700})
		setTimeout(() => {
			setCurrent(current + 1);
		}, 700);
		opacity.value = withDelay(700, withTiming(1, {duration: 700}))
	}

	const txtStyle = useAnimatedStyle(() => {
		return ({
			opacity: opacity.value
		})
	});

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<Pressable onPress={next} style={styles.container}>
				<View>
					<Text style={styles.heading}>Reflect</Text>
					<View style={{justifyContent: 'center', alignItems: 'center'}}>
						<Ionicons name={'arrow-down-outline'} size={40} color={'white'} />
					</View>
				</View>
				<Animated.Text  style={[styles.txt, txtStyle]}>{txt[current]}</Animated.Text>
				<Text style={styles.hint}>tap</Text>
			</Pressable>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		padding: 20
	},
	txt: {
		color: 'white',
		textAlign: 'center',
		fontSize: 18,
		lineHeight: 30
	},
	heading: {
		color: 'white',
		fontFamily: 'cooper',
		textAlign: 'center',
		fontSize: 40
	},
	hint:{
		color: 'white',
		textAlign: 'center'
	}
})
