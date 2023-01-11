import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigation } from './HomeNavigation';
import { AwarenessList, Survey } from '../../screens/'

export const AppNavigation : React.FC = () => {

	const { Group, Screen, Navigator } = createStackNavigator();

	return (
		<Navigator>
			<Group screenOptions={{headerShown: false}}>
				<Screen name={'Survey'} component={Survey} />
				<Screen name={'HomeNav'} component={HomeNavigation} />
			</Group>
		</Navigator>
	)
}
