type AccessTokenType = { token: string, exp: Date | null }

let accessToken : AccessTokenType = {
	token: "",
	exp: null
};

export const SetAccessToken = (_token: string, exp: Date) => {
	accessToken = {
		token: _token,
		exp: exp
	};

}

export const GetAccessToken = () : AccessTokenType=> {
	return accessToken;
}
