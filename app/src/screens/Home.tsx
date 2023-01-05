import React from 'react';
import {  SafeAreaView, View, StyleSheet } from 'react-native';
import { } from 'react-native-gesture-handler';
import { Option } from '../components'
import { ScrollView } from 'react-native-gesture-handler';

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

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<ScrollView style={styles.content}>
					{
						options.map((option, key) => (
							<Option key={key} navigation={navigation} id={option.id} title={option.name} />
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
