import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';
import { Input, Button } from '../../components'

export const Login : React.FC<any>  = ({navigation}) => {

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<Text style={styles.title}>Login</Text>		
				<View style={{height: 30}} />
				<Input label='Your Email' onChange={(t) => {}} />
				<Button txt="Login" clicked={() => {}} filled />
				<Pressable onPress={() => navigation.navigate("Register")} style={styles.link}>
					<Text style={styles.linkText}>new here ? create account !</Text>
				</Pressable>


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
		fontSize: 30,
		paddingStart: 10
		//textAlign: 'center'
	},
	link: {
		marginTop: 10	,
		//marginBottom: 20	
	},
	linkText: {
		color: 'white',
		fontFamily: 'AvBold',
		fontSize: 15	
	}
})
