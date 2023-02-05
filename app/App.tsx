import { useCallback } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MainNavigation } from './src/utils/navigation';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { AuthProvider } from './src/utils/auth/Auth'

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
			<AuthProvider>
				<MainNavigation />
				<StatusBar style="light" />
			</AuthProvider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
