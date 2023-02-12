

import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

interface Props {
	content: string;
}

const s : any = {
	body : {
		background: "black",
		color: "white",
	} 
}

export const InfoArticle : React.FC<Props> = ({content}) =>  {
	const { width } = useWindowDimensions();
	return (
		<RenderHtml
			contentWidth={width}
			source={{html: content}}
			tagsStyles={s}
		/>
	);
}
