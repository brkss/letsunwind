import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Input, Button } from '../../components';
export const Confirmation : React.FC = () => {

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<Text style={styles.title}>Confirmation Code</Text>
				<Text style={styles.subtitle}>check your email !</Text>
				<View style={{height: 50}} />
				<Input label='CODE' onChange={(t) => {}} />
				<View style={{height: 10}} />
				<Button txt='Confirm' clicked={() => {}} filled />
			</View>
		</SafeAreaView>	
	)
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		padding: 10,
		justifyContent: 'center',
		//alignItems: 'center'
	},
	title: {
		color: 'white',
		fontSize: 23,
		fontFamily: 'cooper',
		marginBottom:5 
	},
	subtitle: {
		fontFamily: 'AvBold',
		fontSize: 17,
		color: 'white',
		opacity: 0.8
	}
})
