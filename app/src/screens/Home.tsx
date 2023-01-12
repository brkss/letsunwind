import React from 'react';
import {  Text, SafeAreaView, View, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Option, Header, Button } from '../components'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window')

const options = [
	{
		name: "Breathing",
		id: "op-1"
	},
	{
		name: "Reflection",
		id: "op-2"
	}
]

export const Home : React.FC<any> = ({navigation}) => {

	const insets = useSafeAreaInsets()
	const insetsStyles = {
			paddingTop: insets.top,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            paddingBottom: insets.bottom
	}

	return (
		<View style={[styles.safearea, insetsStyles]}>
			<View style={styles.container}>
				<Header clicked={() => navigation.navigate("Profile")} />
					{
						options.map((option, key) => (
							<Option key={key} navigation={navigation} id={option.id} title={option.name} />
						))
					}
					
					{/*<Button txt='Learn More' clicked={() => navigation.navigate("Awarness")} filled />*/}
				<Pressable onPress={() => navigation.navigate("Awarness")} style={styles.btn}>
					<Text style={styles.btnText}>Awarness</Text>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	safearea: {
		flex: 1,
		backgroundColor: 'black',
	},
	content: {
		paddingTop: 30
	},
	line: {
		borderTopWidth: 1,
		borderTopColor: 'white',
		margin: 20,
		opacity: .7,
	},
	btn: {
		height: width,
		width: width,
		backgroundColor: 'white',
		borderRadius: width,
		padding: 50,
		//justifyContent: 'center',
		alignItems: 'center',
		bottom: -width / 1.3
	},
	btnText: {
		color: 'black',
		fontFamily: 'cooper',
		fontSize: 30
	}
})
