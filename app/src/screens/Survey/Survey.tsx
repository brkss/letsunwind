import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export const Survey : React.FC = () => {

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<Text style={styles.txt}>
					Over the last 2 weeks, how often have you been bothered by
					<Text style={styles.question}> Worrying too much about different things ?</Text>
				</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,

	},
	txt: {
		color: 'white',
		fontSize: 18,
		lineHeight: 27
	},
	question: {
		color: 'white',
		fontFamily: 'AvBold',
	},
})


