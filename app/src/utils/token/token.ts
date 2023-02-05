

let accessToken = "";

export const SetAccessToken = (_token: string) => {
	accessToken = _token;
}

export const GetAccessToken = () : string => {
	return accessToken;
}
