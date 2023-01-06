import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';


interface Props {
	title: string;
	id: string 
	navigation: any
}


export const Option : React.FC<Props> = ({title, id, navigation}) => {
	
	const [opacity, setOpacity] = React.useState(1);
	useFocusEffect(() => {
		if (navigation.isFocused())
			setOpacity(1);
	})
	return (
		<Pressable 
			style={({pressed}) => ([{opacity: pressed ? 0.5 : 1}, styles.container])}
			onPress={() => {
				setOpacity(0);
				navigation.push("Breathing", { id: id })
			}}
		>
				<View style={[styles.row, {opacity}]}>
						<View style={styles.circle}>
							<SharedElement id={`${id}-arrow`}>
								<Ionicons color={'white'} size={30} name={'arrow-forward-outline'} />
							</SharedElement>
						</View>
						<SharedElement id={`${id}-title`}>
							<Text style={styles.title}>{title}</Text>
						</SharedElement>
				</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 100,
		marginTop: 20
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	circle: {
		height: 100,
		width: 100,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'flex-end',
		backgroundColor: '#8FD1FF',
		position: 'absolute',
		left: -50,
		paddingRight: 15
	},
	title: {
		color: 'white',
		left: 70,
		fontSize: 30,
		fontFamily: 'cooper'
	}
})
