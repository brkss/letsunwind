import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Register, Login, Confirmation, Intro } from '../../screens';

export const AuthNavigation : React.FC = () => {

	const { Navigator, Screen } = createStackNavigator()

	return (
		<Navigator screenOptions={{headerShown: false}}>
			<Screen name={'Intro'} component={Intro} />
			<Screen name={'Register'} component={Register} />
			<Screen name={'Login'} component={Login} />
			<Screen name={'Confirmation'} component={Confirmation} />
		</Navigator>
	)
}
