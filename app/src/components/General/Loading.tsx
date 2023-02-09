import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const Loading: React.FC = () => {

	return (
		<View style={styles.container}>
			<ActivityIndicator />
		</View>	
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center'
	}
})
