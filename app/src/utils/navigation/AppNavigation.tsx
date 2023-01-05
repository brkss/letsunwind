import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Breath, Home } from '../../screens';

export const AppNavigation : React.FC = () => {

	const { Group, Screen, Navigator } = createStackNavigator();

	return (
		<Navigator>
			<Group screenOptions={{headerShown: false}}>
				<Screen name={'Home'} component={Home} />
				<Screen name={'Breath'} component={Breath} />
			</Group>
		</Navigator>
	)
}
