import { useCallback } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MainNavigation } from './src/utils/navigation';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { AuthProvider } from './src/utils/auth/Auth'
import * as SecureStore from 'expo-secure-store'
import { URI } from './src/utils/constants'

// gql 
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import { GetAccessToken, SetAccessToken } from './src/utils/token/token';

const cache = new InMemoryCache()

const requestLink = new ApolloLink((operation, forward) =>  {
	const token = GetAccessToken()
	if (token)
	operation.setContext({
		headers: {
			Authorization: `bearer ${token.token}`
		}
	});
	return forward(operation);
})

const link: any = new TokenRefreshLink({
	accessTokenField: "access_token",
	isTokenValidOrUndefined: () => {
		const token = GetAccessToken()
		if (!token.token) return true;
		//const exp_date = new Date(token.exp!);
		//if (new Date() > exp_date){
		//	return false;
		//}
		return true;
	},
	fetchAccessToken: async () => {
		const refresh_token = await SecureStore.getItemAsync("REF_TOKEN");
		const response = await fetch(`${URI}/refresh_token`, {
			method: "POST",
			body: JSON.stringify({
				refresh_token: refresh_token
			})
		});
		const data = await response.json();
		//SetAccessToken("", new Date(data.access_token_expires_at!))
		return data;
	},
	handleFetch: (accessToken: string) => {
		SetAccessToken(accessToken, null);
	},
	handleError: (err: Error) => {
		console.warn("Your refresh token is invalid. Try to relogin");
		console.error(err);
	},
})

const client : any = new ApolloClient({
	link: ApolloLink.from([
		link,
		onError(({graphQLErrors, networkError}) => {
			console.log("gql errors : ", graphQLErrors);
			console.log("network errors : ", networkError)
		}),
		requestLink,
		new HttpLink({
			uri: `${URI}/query`,
		})
	]),
	cache
})

export default function App() {


	const [fontsLoaded] = useFonts({
		'cooper': require('./assets/fonts/CooperBlack.ttf'),
		'AvBold': require('./assets/fonts/AvBold.otf'),
		'AvReg': require('./assets/fonts/AvReg.otf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
		}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<ApolloProvider client={client}>
				<AuthProvider>
					<MainNavigation />
					<StatusBar style="light" />
				</AuthProvider>
			</ApolloProvider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
