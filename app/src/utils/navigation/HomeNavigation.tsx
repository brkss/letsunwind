import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { Breath, Home, Breathing, Profile, Reflect } from '../../screens';

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
				name={"ConfigBreathing"}
				component={Breath}
				options={{
					//cardStyleInterpolator: ({current: {progress}}) => ({
						//cardStyle: {opacity: progress}
					//})
				}}
				sharedElements={(route) => {
					const id = route.params.id;
					return [
						{
							id: `${id}-arrow`,
							animation: "fade-in"
						},
						{
							id: `${id}-title`,
							animation: "fade"
						}
					];
				}}
			/>
			<Stack.Screen 
				name={'Breathing'}
				component={Breathing}
				options={{
					presentation: "transparentModal",
					gestureEnabled: true
				}}
				sharedElements={() => {
					const id = 'bt' 
					return [
						{
							id: `${id}-title`,
							animation: 'fade'
						}
					]
				}}
			/>
			<Stack.Screen
				name={'Profile'}
				component={Profile}
				options={{
					presentation: 'modal',
					gestureEnabled: true
				}}
			/>
			
			<Stack.Screen
				name={'Reflect'}
				component={Reflect} 
			/>
		</Stack.Navigator>
	)
}
