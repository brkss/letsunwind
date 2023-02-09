import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withDelay, withTiming } from 'react-native-reanimated'
import Ionicons from '@expo/vector-icons/Ionicons'
import { _data } from '../../utils//data/reflection';
import { GetExercicesDocument, GetExercicesQuery, useCreateExerciseMutation } from '../../generated/graphql';

const txt = [
	"1- Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
	"2- Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
	"3- Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
	"4- Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
	"5- Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
	"6- Lorem Ipsum is simply dummy text of the printing and typesetting industry ?",
]

const pick = (picked: number[]): number => {
	let index = -1
	while(index < 0){
		let rand = Math.floor(Math.random() * _data.length)
		if(!picked.includes(rand)){
			return rand;
		}
	}
	return (index);
}

export const Reflect : React.FC<any> = ({navigation, route}) => {


	const [create] = useCreateExerciseMutation();

	const picked : number[] = []
	const { minutes } = route.params;
	const duration = (minutes * 60 * 1000) + new Date().getTime()
	const opacity = useSharedValue<number>(1)
	// animation !
	const [current, setCurrent] = React.useState(0);
	const next = () => {
		if((duration - new Date().getTime()) < 0){
			const _data = {
				time: minutes,
				type: "Reflect"
			}
			create({
				variables: {
					name: _data.type,
					duration: _data.time
				},
				update: (store, {data}) => {
					if (!data?.createExercice.status)
					 	return null;
					const exercises = store.readQuery<GetExercicesQuery>({
						query: GetExercicesDocument
					})?.getExercices!;
					const new_exercice = data.createExercice.exercice!
					store.writeQuery<GetExercicesQuery>({
						query: GetExercicesDocument,
						data: {
							getExercices: [new_exercice, ...exercises]
						}
					});
				}
			}).then(_ => {
				navigation.navigate('Home')
			}).catch(_ => {
				navigation.navigate('Home')
			})
			return (0);
		}
		if(current >= txt.length - 1){
			setCurrent(0);
			return;
		}
		opacity.value = withTiming(0, {duration: 700})
		setTimeout(() => {
			const ind = pick(picked)
			picked.push(ind);
			setCurrent(ind);
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
				<Animated.Text  style={[styles.txt, txtStyle]}>{_data[current]}</Animated.Text>
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
