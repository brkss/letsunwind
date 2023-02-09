import React from 'react';
import useState from 'react-usestateref'
import { SetAccessToken } from '../token/token'
import * as SecureStore from 'expo-secure-store';

type IToken = null | string;



export const AuthContext = React.createContext<{
	token: IToken,
	login: (_token: string, exp: Date) => void;
	logout: () => void;
}>({
	token: null,
	login: () => {},
	logout: () => {},
});


export const AuthProvider : React.FC<any> = ({children}) => {
	
	const [token, SetToken, ref] = useState<IToken>(null);


	return (
		<AuthContext.Provider
			value={{
				token: ref.current,
				login: (_token: string, exp: Date) => {
					console.log("login set token : ", token, _token)
					SetToken(_token);
					SetAccessToken(_token, exp);
				},
				logout: async () => {
					SetAccessToken("", null)
					SetToken(null)
					await SecureStore.setItemAsync("REF_TOKEN", "")
					await SecureStore.setItemAsync("REF_TOKEN_EXP", "")
				}
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
