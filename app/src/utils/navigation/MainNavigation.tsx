import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AppNavigation } from './AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation } from './AuthNavigation';
import { AuthContext } from '../auth/Auth';
import * as SecureStore from 'expo-secure-store'
import { URI } from '../../utils/constants'
import { GetAccessToken, SetAccessToken } from '../token/token';

export const MainNavigation : React.FC = () => {

	const { token, login } = React.useContext(AuthContext)
	const [loading, setLoading] = React.useState(true);

	// refresh token !
	React.useEffect(() => {
	
		{
			token ? (
				<AppNavigation />
			) : <AuthNavigation />
		}
		SecureStore.getItemAsync("REF_TOKEN").then(async (_token) => {
			console.log("fetching new access/refresh token : ", _token);
			if(_token){
				console.log("got refresh token !")
				const response = await fetch(`${URI}/refresh-token`, {
					method: "POST",
					body: JSON.stringify({
						refresh_token: _token
					}),
				});
				const data = await response.json();
				if (data.refresh_token && data.access_token){
					SetAccessToken(data.access_token, data.access_token_expires_at);
					login(data.access_token, data.access_token_expires_at);
					await SecureStore.setItemAsync("REF_TOKEN", data.refresh_token);
				}
			}else {
				SetAccessToken("hello")
				login("hello", new Date("7/2/2023"));
			}
			setLoading(false);
		}).catch(e => {
			console.log("something went wrong : ", e)
			setLoading(false);
		}) 

	}, []);

	if (loading)
		return (
			<View style={{flex :1, justifyContent: 'center', alignItems: 'center'}}>
				<ActivityIndicator />	
			</View>
		)	
	
	return (
		<NavigationContainer>
			{
				token ?
					<AppNavigation />
				: <AuthNavigation />
			}
		</NavigationContainer>
	)
}
