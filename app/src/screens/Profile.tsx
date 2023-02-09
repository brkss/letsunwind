import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, ScrollView, } from 'react-native';
import { SessionElement, Button, Loading } from '../components';
import { AuthContext } from '../utils/auth/Auth';
import { useGetExercicesQuery } from '../generated/graphql';

export const Profile : React.FC = () => {

	const { loading, error, data } = useGetExercicesQuery({
		onCompleted: (res) => {
			console.log("res : ", res.getExercices)
		}
	});
	const { logout } = React.useContext(AuthContext)

	if (loading || error){
		return <Loading />
	}

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: '#161616'}}>
			<View style={styles.container}>
				<Text style={styles.heading}>My Sessions</Text>
				<ScrollView
					showsVerticalScrollIndicator={false}
				>
					{
						data?.getExercices.map((ex, key) => (
							<SessionElement name={ex.name} duration={ex.duration} key={key} />
						))	
					}
					<View style={{height: 40}} />
					<Button filled txt='Logout' clicked={() => logout()} />
				</ScrollView>			
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	heading: {
		color: 'white',
		fontFamily: 'cooper',
		fontSize: 30,
		paddingBottom: 15 ,
	}
})
