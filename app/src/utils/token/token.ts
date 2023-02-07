type AccessTokenType = { token: string, exp: Date | null }

let accessToken : AccessTokenType = {
	token: "",
	exp: new Date("12/02/2023") 
};

export const SetAccessToken = (_token?: string, exp?: Date | null) => {
	accessToken = {
		token: _token || accessToken.token,
		exp: exp || accessToken.exp
	};

}

export const GetAccessToken = () : AccessTokenType=> {
	return accessToken;
}
