import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Pressable } from 'react-native';
import { Fluid, StartButton } from '../../components'
import Ionicons from '@expo/vector-icons/Ionicons'

export const Breath : React.FC = () => {
	
	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 30}}>
					<Pressable>
						<Ionicons name={'arrow-up-outline'} color={'white'} size={40} />
					</Pressable>
					<Text style={styles.heading}>Breathing</Text>
				</View>
				<Fluid />
				<StartButton />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	heading: {
		color: 'white',
		fontFamily: 'cooper',
		textAlign: 'center',
		fontSize: 30
	},
	txt: {
		color: 'white'
	}
})
