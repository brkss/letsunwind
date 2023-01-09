import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


interface Props {
	label: string,
	onChange: (t: string) => void;
}

export const Input : React.FC<Props> = ({label, onChange}) => {

	return (
		<View style={styles.container}>
			<TextInput onChangeText={onChange} placeholderTextColor={'#969595'} placeholder={label} style={styles.input} />
		</View>	
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 20	
	},
	input: {
		color: 'white',
		fontFamily: 'cooper',
		fontSize: 24,
		padding: 10
	}
})
