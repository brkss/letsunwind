import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigation } from './HomeNavigation';
import { Confirmation, Reflect, Intro, Register} from '../../screens/'

export const AppNavigation : React.FC = () => {

	const { Group, Screen, Navigator } = createStackNavigator();

	return (
		<Navigator>
			<Group screenOptions={{headerShown: false}}>
				<Screen name={'Confirmation'} component={Confirmation} />
				<Screen name={'Register'} component={Register} />
				<Screen name={'Intro'} component={Intro} />
				<Screen name={'Reflect'} component={Reflect} />
				<Screen name={'HomeNav'} component={HomeNavigation} />
			</Group>
		</Navigator>
	)
}
