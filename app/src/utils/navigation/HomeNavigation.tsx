import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { Breath, Home } from '../../screens';


const Stack = createSharedElementStackNavigator<any>();
export const HomeNavigation : React.FC = () => {

	return (
		<Stack.Navigator
			screenOptions={{
				gestureEnabled: false,
				headerShown: false,
				cardOverlayEnabled: true,
				cardStyle: {backgroundColor: "transparent"},
				presentation: 'modal'
			}}
		>
			<Stack.Screen
				name={"Home"} component={Home}
			/>
			<Stack.Screen
				name={"Breathing"}
				component={Breath}
				sharedElements={(route) => {
					const id = route.params.id;
					return [`${id}-arrow`, `${id}-title`];
				}}
			/>
		</Stack.Navigator>
	)
}
