
import { Survey } from '../types/Survey'
import { survey as anSurvey} from './anxiety.survey'

export interface AwarnessItem {
	id: 		string;
	title: 		string;
	gradient:	string[];
	content: 	string;
	survey?:  	Survey
}

export const _data : AwarnessItem[] = [
	{
		id: 'a-1',
		title: "DDDDDDD",
		gradient: ["#FFA7A7", "#FFD0D0"],
		content: ``,
	},
	{
		id: `a-2`,
		title: "AAAAAAAA",
		gradient: ["#f6d5f7", "#fbe9d7"],
		content: ``,
		survey: anSurvey 
	},
	{
		id: `a-3`,
		title: "SSSSSSSS",
		gradient: ["#b5c6e0", "#ebf4f5"],
		content: ``
	},
	{
		id: `a-4`,
		title: "MSMSMSMS",
		gradient: ["#b2e5f8", "#f2f3e2"],
		content: ``	
	},
]
