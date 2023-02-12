import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { snapPoint, useVector } from 'react-native-redash';
import { SharedElement } from 'react-navigation-shared-element';
import { AwarnessItem } from '../../utils/data/awarness'
import { InfoArticle, Loading } from '../../components';
import { useGetAwarenessInfoQuery } from '../../generated/graphql';

const { width, height } = Dimensions.get("window") 

export const Info : React.FC<any> = ({navigation, route}) => {

	const { id } = route.params
	const { data, loading, error } = useGetAwarenessInfoQuery({
		variables: {
			id: id
		}
	});
	const isGestureActive = useSharedValue<boolean>(false)
	const translation = useVector()

	if (loading || error)
		return <Loading />

	const onGestureEvent = useAnimatedGestureHandler({
		onStart: () => (isGestureActive.value = true),
		onActive: ({translationX, translationY}) => {
			translation.y.value = translationY
			translation.x.value = translationX
		},
		onEnd: ({translationY, velocityY}) => {
			const snapBack = snapPoint(translationY, velocityY, [0, height]) === height
			if(snapBack){
				runOnJS(navigation.goBack)()
			}else {
				isGestureActive.value = false;
				translation.x.value = withSpring(0)
				translation.y.value = withSpring(0)
			}
		}
	})

	const style = useAnimatedStyle(() => {
		const scale = interpolate(
			translation.y.value,
			[0, height],
			[1, .5],
			Extrapolate.CLAMP
		)
		return {
			transform: [
				{translateX: translation.x.value * scale},
				{translateY: translation.y.value * scale},
				{scale: scale}
			]
		}	
	});

	return (
		<PanGestureHandler onGestureEvent={onGestureEvent}>
			<Animated.View style={[style, {borderRadius: 40, flex: 1, backgroundColor: 'black'}]}>
				<View style={styles.container}>
					<View 
						style={{
							height: 5,
							width: '50%', 
							backgroundColor: 'white', 
							borderRadius: 10, 
							marginBottom: 20, 
							alignSelf: 'center',
						}} 
					/>
					<ScrollView showsVerticalScrollIndicator={false}>
							<LinearGradient  colors={[data?.getAwarenessInfo.gradient_top!, data?.getAwarenessInfo.gradient_bottom!]} style={styles.card}>
							</LinearGradient>
						<InfoArticle content={data?.getAwarenessInfo.content!} />
					</ScrollView>
				</View>
			</Animated.View>
		</PanGestureHandler>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20	
	},
	card: {
		height: width - 40,
		width: width - 40,
		borderRadius: 30 
	},
	title: {
		color: 'white',
		fontFamily: 'cooper',
		fontSize: 30,
		marginTop: 30
	}	
})
