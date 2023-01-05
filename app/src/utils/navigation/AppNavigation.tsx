import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigation } from './HomeNavigation';

export const AppNavigation : React.FC = () => {

	const { Group, Screen, Navigator } = createStackNavigator();

	return (
		<Navigator>
			<Group screenOptions={{headerShown: false}}>
				<Screen name={'HomeNav'} component={HomeNavigation} />
			</Group>
		</Navigator>
	)
}
