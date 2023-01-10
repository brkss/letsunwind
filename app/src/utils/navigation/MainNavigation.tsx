import React from 'react';
import { AppNavigation } from './AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation } from './AuthNavigation';


export const MainNavigation : React.FC = () => {

	
	return (
		<NavigationContainer>
			{
				true ?
					<AppNavigation />
				: <AuthNavigation />
			}
		</NavigationContainer>
	)
}
