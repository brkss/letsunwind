import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Input, Button } from '../../components';
import { useVerifyUserMutation } from '../../generated/graphql'
import { AuthContext } from '../../utils/auth/Auth';
import { SetAccessToken } from '../../utils/token/token';
import * as SecureStore from 'expo-secure-store';


export const Confirmation : React.FC<any> = ({route}) => {

	const ctx = React.useContext(AuthContext);

	const [verify] = useVerifyUserMutation();
	const { email } = route.params;
	const [error, setError] = React.useState("");
	const [code, setCode] = React.useState("");

	const handleVerification = () => {
		if(!code || code.length < 4){
			setError("Invalid Code !");
			return;
		}
		verify({
			variables: {
				email: email,
				code: code
			},
		}).then(async res => {
			
			console.log("res : ", res)
			if (!res.data?.verifyUser?.status){
				// log user in 
				const exp = new Date(res.data!.verifyUser!.access_token_expires_at!);
				ctx.login(res.data!.verifyUser!.access_token!, exp)
				SetAccessToken(res.data!.verifyUser!.access_token!, exp)
				await SecureStore.setItemAsync("REF_TOKEN", res.data!.verifyUser!.refresh_token!);
				await SecureStore.setItemAsync("REF_TOKEN_EXP", new Date(res.data!.verifyUser!.refresh_token_expires_at!).toString());
			}
		}).catch((e: Error) => {
			console.log(" error accured while verifying user ! : ", e);
			setError(e.message);
		})
	}

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<Text style={styles.title}>Confirmation Code</Text>
				<Text style={styles.subtitle}>check your email !</Text>
				<View style={{height: 50}} />
				<Input label='CODE' onChange={(t) => setCode(t)} />
				<View style={{height: 10}} />
				<Button txt='Confirm' clicked={handleVerification} filled />
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
