import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { SessionElement } from '../components';

export const Profile : React.FC = () => {

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: '#161616'}}>
			<View style={styles.container}>
				<Text style={styles.heading}>My Sessions</Text>
				<ScrollView
					showsVerticalScrollIndicator={false}
				>
					<SessionElement />
				</ScrollView>			
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10
	},
	heading: {
		color: 'white',
		fontFamily: 'cooper',
		fontSize: 30,
		paddingBottom: 15 ,
	}
})
