import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface Props {
	clicked: () => void;
	txt: string;
	filled?: boolean;
}

export const Button : React.FC<Props> = ({clicked, txt, filled}) => {


	return (
		<Pressable
			onPress={clicked}
			style={[
				styles.container,
				{
					borderWidth: filled ? 0 : 2,
					backgroundColor: filled ? 'white' : 'transparent'
				}
			]}
		>
			<Text
				style={[
					styles.btnTxt,
					{
						color: filled ? 'black' : 'white'
					}
				]}
			>
			{txt}
			</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 15,
		padding: 20,
		width: '100%',
		borderColor: 'white',
		borderWidth: 2,
		borderRadius: 17
	},
	btnTxt: {
		fontSize: 21,
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		fontFamily: 'cooper'
	},
})
