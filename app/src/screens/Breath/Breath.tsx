import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Fluid } from '../../components'

export const Breath : React.FC = () => {

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<Fluid />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	txt: {
		color: 'white'
	}
})
