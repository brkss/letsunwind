import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Tips } from '../../components';
import Ionicons from '@expo/vector-icons/Ionicons'

const tips = [
	{
		txt: "Strengthen your focus by noticing the cool breath as you inhale and the warmth as you exhale. "
	},
	{
		txt: "Strengthen your focus by noticing the cool breath as you inhale and the warmth as you exhale. "
	}
]

export const Breathing : React.FC = () => {


	React.useEffect(() => {
		
	},[])

	return (
		<View style={styles.container}>
			<SafeAreaView >
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Ionicons name={'arrow-down-outline'} size={40} color={'black'} />
				</View>
				<Tips tips={tips} />	
				<Pressable style={styles.row}>
					<Text style={styles.btnTxt}>Go</Text>
					<Ionicons name={'arrow-forward-outline'} size={40} color={'black'} />
				</Pressable>
			</SafeAreaView>
		</View>
	)
}

const styles = StyleSheet.create({
	
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white'	
	},
	title: {
		fontFamily: 'cooper',
		//color: 'black',
		fontSize: 30
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	btnTxt: {
		fontSize: 30,
		fontFamily: 'cooper',
		marginRight: 20
	}
})
