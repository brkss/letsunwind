import { Survey } from '../types/Survey'


export const survey: Survey = {
	choices: [
		{
			text: "Not at all",
			value: 0
		},
		{
			text: "Several days",
			value: 1
		},
		{
			text: "More than half the days",
			value: 2,
		},
		{
			text: "Nearly every day",
			value: 3
		}
	],
	question: [
		{
			text: "Feeling nervous, anxious or on edge",
		},
		{
			text: "Not being able to stop or control worrying"
		},
		{
			text: "Worrying too much about different things",
		},
		{
			text: "Trouble relaxing"
		},
		{
			text: "Being so restless that it is hard to sit still"
		},
		{
			text: "Becoming easily annoyed or irritable"
		},
		{
			text: "Feeling afraid as if something awful might happen"
		}
	],
	results: [
		{
			comment: "Mild anxiety",
			max: 9,
			min: 5
		},
		{
			comment: "Moderate anxiety",
			max: 14,
			min: 10
		},
		{
			comment: "Severe anxiety",
			max: 21,
			min: 15
		}
	]
}
