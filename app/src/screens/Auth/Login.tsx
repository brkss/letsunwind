import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';
import { Input, Button, Error } from '../../components'
import { useLoginMutation } from '../../generated/graphql'

export const Login : React.FC<any>  = ({navigation}) => {

	const [error, setError] = React.useState("");
	const [email, setEmail] = React.useState(""); 
	const [login] = useLoginMutation()

	const handleLogin = () => {
		if (email === "" || !email){
			// set error !
			return;
		}
		setError("");
		login({
			variables: {
				email: email	
			},
		}).then(res => {
			if (res.data?.login.status === true){
				navigation.navigate("Confirmation", {email: email});
			}
		}).catch((e: Error) => {
			if (e.message.split(":").length >= 2){
				setError(e.message.split(":")[1])
			}else
				setError("Something went wrong ! please try again");
			console.log("error : ", e.message.split(":")[1])
		})
	}

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				{ error.length > 0 && <Error error={error} /> }
				<Text style={styles.title}>Login</Text>		
				<View style={{height: 30}} />
				<Input label='Your Student Email' onChange={(t) => setEmail(t)} />
				<Button txt="Login" clicked={handleLogin} filled />
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
