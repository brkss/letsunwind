import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Input, Button } from '../../components'

export const Login : React.FC  = () => {

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<Text style={styles.title}>Login</Text>		
				<View style={{height: 30}} />
				<Input label='Your Email' onChange={(t) => {}} />
				<Button txt="Login" clicked={() => {}} filled />
			</View>
		</SafeAreaView>
	)
}

const styles= StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 10
	},
	title: {
		color: 'white',
		fontFamily: 'cooper',
		fontSize: 30
	}
})
