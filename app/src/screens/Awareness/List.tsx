import React from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { AwarenessCard } from '../../components'
import { _data,  } from '../../utils/data/awarness'

const { width } = Dimensions.get('window')
export const AwarenessList : React.FC<any> = ({navigation}) => {

	return (
		<SafeAreaView style={{flex :1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<Text style={styles.heading}>Awareness</Text>
				<ScrollView
					scrollEventThrottle={16}
					snapToInterval={width - (width * .1)}
					decelerationRate="fast"
					showsHorizontalScrollIndicator={false}
					horizontal
				>
					{
						_data.map((elm, key) => (
							<AwarenessCard 
								navigation={navigation}
								clicked={() => navigation.navigate("Info", {item: elm})}
								key={key}
								item={elm}			
							/>
						))
					}					
				</ScrollView>
			</View>		
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex : 1,
		justifyContent: 'center'	
	},
	heading: {
		color: 'white',
		fontFamily: 'cooper',
		fontSize: 40,
		textAlign: 'center'
	}
})
