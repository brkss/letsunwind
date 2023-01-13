import React from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { AwarenessCard } from '../../components'
import { _data,  } from '../../utils/data/awarness'
import Ionicons from '@expo/vector-icons/Ionicons'
import Animated,  { runOnJS, useAnimatedScrollHandler } from 'react-native-reanimated';

const { width } = Dimensions.get('window')
const SNAP = width - (width * .1)
export const AwarenessList : React.FC<any> = ({navigation}) => {

	const [currentCard, setCurrentCard] = React.useState<number>(0);
	const scrollHanlder = useAnimatedScrollHandler ({
		onScroll: (e) => {
			runOnJS(setCurrentCard)(Math.round((e.contentOffset.x / SNAP)))
			console.log("curr >> ", SNAP, e.contentOffset.x, Math.round((e.contentOffset.x / SNAP)))
		}	
	})

	return (
		<SafeAreaView 
			style={{flex :1, backgroundColor: 'black'}}
		>
			<View style={styles.container}>
				<Text style={styles.heading}>
					<Ionicons name={'arrow-down-outline'} size={38}  />Awareness
				</Text>
				<Animated.ScrollView
					onScroll={scrollHanlder}
					scrollEventThrottle={16}
					snapToInterval={width - (width * .1)}
					decelerationRate="fast"
					showsHorizontalScrollIndicator={false}
					horizontal
				>
					{
						_data.map((elm, key) => (
							<AwarenessCard 
								current={currentCard === key}
								navigation={navigation}
								clicked={() => navigation.navigate("Info", {item: elm})}
								key={key}
								item={elm}			
							/>
						))
					}					
				</Animated.ScrollView>
			</View>		
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex : 1,
		justifyContent: 'center',
		paddingTop: 20
	},
	heading: {
		color: 'white',
		fontFamily: 'cooper',
		fontSize: 40,
		textAlign: 'center'
	}
})
