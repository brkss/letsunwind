import React from 'react';
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native';
import { } from 'react-native-gesture-handler';
import { Option } from '../components'

const options = [
	{
		name: "Breathing",
	},
	{
		name: "Reflection"
	}
]

export const Home : React.FC = () => {

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<ScrollView style={styles.content}>
					{
						options.map((option, key) => (
							<Option title={option.name} />
						))
					}
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		paddingTop: 30
	}
})
