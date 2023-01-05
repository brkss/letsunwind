import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Option } from '../components'

export const Home : React.FC = () => {

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<Option />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})
