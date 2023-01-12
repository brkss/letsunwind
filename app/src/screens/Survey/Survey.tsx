import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { Choices, Button } from '../../components'
import { survey } from '../../utils/data/anxiety.survey';

export const Survey : React.FC = () => {

	const opacity = useSharedValue<number>(1)
	const [currentQst, setCurrentQst] = React.useState<number>(0)
	const [tmp, setTmp] = React.useState<number>(-1);
	const [score, setScore] = React.useState(0);
	
	const next = () => {
		if(currentQst > survey.question.length - 1 || tmp === -1){
			console.log("score : ", score)
			return;
		}
		opacity.value = withTiming(0, {duration: 800})
		if (currentQst + 1 < survey.question.length)
			setCurrentQst(currentQst + 1)
		setTmp(-1)
		setScore(score + tmp)
		opacity.value = withDelay(1200, withTiming(1, {duration: 800}))
	} 

	const qstStyle = useAnimatedStyle(() => {
		return {
			opacity: opacity.value 
		}
	})

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			<View style={styles.container}>
				<Text style={styles.count}>{currentQst + 1}/{survey.question.length}</Text>
				<Text style={styles.txt}>
					Over the last 2 weeks, how often have you been bothered by
					<Animated.Text style={[styles.question,	qstStyle]}> {survey.question[currentQst].text} ?</Animated.Text>
				</Text>
				<Choices selected={tmp} select={(v) => setTmp(v)} choices={survey.choices} />
				<Button txt='Next' clicked={next} filled />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		paddingTop: 30,
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
	count: {
		color: 'white',
		fontFamily: 'cooper',
		fontSize: 30,
		textAlign: 'center',
		marginBottom: 10
	}
})


