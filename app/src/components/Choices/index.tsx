import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Item } from './Item';
import { Choice } from '../../utils/types/Survey'


interface Props {
	select: (val: number) => void;
	choices: Choice[]
	selected: number;
}

export const Choices : React.FC<Props> = ({selected, choices, select}) => {
	//const [selec, setSelec] = React.useState<number>(selected);

	const handleSelect = (val: number) => {
		//setSelec(val)
		select(val)
	}
	return (
		<View style={styles.container}>
			{
				choices.map((choice, key) => (
					<Item 
						key={key} 
						clicked={() => handleSelect(choice.value)} 
						selected={selected === choice.value} 
						txt={choice.text} 
					/>
				))
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'	
	}
})
