import React from 'react';
import {  SafeAreaView, View, StyleSheet } from 'react-native';
import { Option, Header } from '../components'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
				<ScrollView style={styles.content}>
					{
						options.map((option, key) => (
							<Option key={key} navigation={navigation} id={option.id} title={option.name} />
						))
					}
				</ScrollView>
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
	}
})
