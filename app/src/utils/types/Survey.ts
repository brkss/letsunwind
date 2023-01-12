
export interface Survey {
	question: Question[];
	choices: Choice[];
	results: Result[];
}

export interface Question {
	text: string;
}

export interface Choice {
	text: 	string;
	value: 	number;
}

export interface Result {
	min: 		number;
	max: 		number;
	comment: 	string;
}
