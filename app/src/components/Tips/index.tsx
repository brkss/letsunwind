import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import { ITip } from '../../utils/Tip'
import { SharedElement } from 'react-navigation-shared-element';

const { width } = Dimensions.get('window')

interface Props {
	tips: ITip[]
}


export const Tips: React.FC<Props> = ({tips}) => {

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tips</Text>
			<ScrollView
				scrollEventThrottle={16}
				snapToInterval={width}
				decelerationRate="fast"
				showsHorizontalScrollIndicator={false}
				horizontal
				style={{paddingLeft: 0, marginLeft: 0}}
			>
				{
					tips.map((tip, key) => (
						<View 
							style={{
								width: width, 
								justifyContent: 'center'	
						}}
						>
							<Text key={key} style={styles.txt}>
								{tip.txt}
							</Text>
						</View>
						
					)) 
				}
				
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20
	},
	title: {
		fontFamily: 'cooper',
		fontSize: 28,
		//color: 'white'
	},
	txt: {
		fontFamily: 'AvBold',	
		fontSize: 16,
		//color: "white",
		marginTop: 20,
		lineHeight: 23,
		textAlign: 'center',
		width: width * .9 
	}
})
