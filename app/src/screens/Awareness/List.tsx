import React from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';


export const AwarenessList : React.FC = () => {


	return (
		<SafeAreaView style={{flex :1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<Text style={styles.heading}>Awareness</Text>
				<ScrollView horizontal>
					
				</ScrollView>
			</View>		
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		//
	},
	heading: {
		color: 'white',
		fontFamily: 'cooper',
		fontSize: 30
	}
})
