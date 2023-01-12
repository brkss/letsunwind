import React from 'react';
import { Dimensions, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from '../../components'
import Ionicons from '@expo/vector-icons/Ionicons'
import { StackActions } from '@react-navigation/native'

const { width } = Dimensions.get('window')

export const Result : React.FC<any> = ({navigation}) => {


	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black',}}>
			<View style={styles.container}>
				<View>
					<Ionicons name={'close-outline'} color={'white'} size={50} onPress={() => navigation.dispatch(StackActions.popToTop())} />
				</View>
				<View style={{flex: 1, justifyContent: 'center'}}>
					<View style={styles.circle}>
						<Text style={styles.score}>8</Text>
					</View>
					<Text style={styles.comment}>Mild anxiety</Text>
					<Text style={styles.info}>According to PHQ-9</Text>
				</View>
				<Button txt='Find Help' clicked={() => {}} />
			</View>
		</SafeAreaView>		
	)
} 

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 40,
		alignItems: 'center'
	},
	circle: {
		height: (width * .7) - 80,
		width: (width * .7) - 80,
		backgroundColor: 'white',
		borderRadius: width - 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	score: {
		fontSize: 60,
		fontFamily: 'cooper',
		color: 'black'
	},
	comment: {
		color: 'white',
		fontFamily: 'AvBold',
		fontSize: 20,
		marginTop: 40,
		textAlign: 'center'
	},
	info: {
		color: 'white',
		fontFamily: 'AvReg',
		fontSize: 20,
		marginTop: 15,
		textAlign: 'center'
	}
})
