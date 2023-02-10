package seed

import (
	"context"
	"fmt"

	db "github.com/brkss/gogql/db/sqlc"
	"github.com/google/uuid"
)

type SurveyQuestionAnswer struct {
	Ans string;
	Value int
}

type SurveyQuestion struct {
	Qst string;
	Answer []SurveyQuestionAnswer
}

type SurveyResult struct {
	Min int
	Max int
	Comment string
}

type Survey struct {
	Name string;
	Questions []SurveyQuestion;
	Result []SurveyResult;
}

var answers = []SurveyQuestionAnswer{
					{
						Ans: "Not at all",
						Value: 0,
					},
					{
						Ans: "Several days",
						Value: 1,
					},
					{
						Ans: "More than half the days",
						Value: 2,
					},
					{
						Ans: "Nearly every day",
						Value: 3,
					},
}

var SurveyData = []Survey{
	{
		Name: "Depression Screen Questionnaire",
		Questions: []SurveyQuestion{
			{
				Qst: "Little interest or pleasure in doing things",
				Answer: answers,
			},
			{
				Qst: "Feeling down, depressed, or hopeless",
				Answer: answers,
			},
			{
				Qst: "Trouble falling or staying asleep, sleeping too much",
				Answer: answers,
			},
			{
				Qst: "Feeling tired or having little energy",
				Answer: answers,
			},
			{
				Qst: "Poor appetite or overeating",
				Answer: answers,
			},
			{
				Qst: "Feeling bad about yourself – or that you are a failure or have let yourself or your family down",
				Answer: answers,
			},
			{
				Qst: "Trouble concentrating on things, such as reading the newspaper or watching television",
				Answer: answers,
			},
			{
				Qst: "Moving or speaking so slowly that other people could have noticed? Or the opposite – being so fidgety or restless that you have been moving around a lot more than usual",
				Answer: answers,
			},
			{
				Qst: "Thoughts that you would be better off dead or of hurting yourself in some way",
				Answer: answers,
			},
		},
		Result: []SurveyResult{
			{
				Max: 4,
				Min: 1,
				Comment: "Minimal depression",
			},
			{
				Max: 9,
				Min: 5,
				Comment: "Mild depression",
			},
			{
				Max: 14,
				Min: 9,
				Comment: "Moderate depression",
			},
			{
				Max: 19,
				Min: 15,
				Comment: "Moderate – Severe depression",
			},
			{
				Max: 27,
				Min: 20,
				Comment: "Severe depression",
			},
		},
	},
	{
		Name: "Anxiety Screen Questionnaire",
		Questions: []SurveyQuestion{
			{
				Qst: "Feeling nervous, anxious or on edge",
				Answer: answers,
			},
			{
				Qst: "Not being able to stop or control worrying",
				Answer: answers,
			},
			{
				Qst: "Worrying too much about different things",
				Answer: answers,
			},
			{
				Qst: "Trouble relaxing",
				Answer: answers,
			},
			{
				Qst: "Being so restless that it is hard to sit still",
				Answer: answers,
			},
			{
				Qst: "Becoming easily annoyed or irritable",
				Answer: answers,
			},
			{
				Qst: "Feeling afraid as if something awful might happen",
				Answer: answers,
			},
		},
		Result: []SurveyResult{
			{
				Max: 0,
				Min: 4,
				Comment: "Pretty much normal",
			},
			{
				Max: 5,
				Min: 9,	
				Comment: "Mild anxiety",
			},
			{
				Max: 14,
				Min: 10,
				Comment: "Moderate anxiety",
			},
			{
				Max: 15,
				Min: 21,
				Comment: "Severe anxiety",
			},
			
		},
	},
}


func SeedSurvies(store db.Store)(error) {

	survies, _ := store.GetSurvies(context.Background())
	if len(survies) > 0 {
		return nil;
	}

	for _, survey := range SurveyData {
		// create survey !
		sur, _ :=  store.CreateSurvey(context.Background(), db.CreateSurveyParams{ ID: uuid.New().String(), Name: survey.Name});	
		// create survey's questions 
		for _, question := range survey.Questions {
			qst, _ := store.CreateSurveyQuestion(context.Background(), db.CreateSurveyQuestionParams{ ID: uuid.New().String(), Qst: question.Qst, SurveyID: sur.ID, })	
			// create question's answers
			for _, answer := range question.Answer {
				arg := db.CreateQuestionAnswerParams{
					ID: uuid.New().String(),
					Val: int32(answer.Value),
					Ans: answer.Ans,
					QuestionID: qst.ID,
				}
				store.CreateQuestionAnswer(context.Background(), arg)
			}
		}
		// create survey's results 
		for _, result := range survey.Result {
			arg := db.CreateSurveyResultParams{
				ID: uuid.New().String(),
				Min: int32(result.Min),
				Max: int32(result.Max),
				Comment: result.Comment,
				SurverID: sur.ID,
			}
			res, err := store.CreateSurveyResult(context.Background(), arg)
			fmt.Println("res : ", res, err);
		}
	}
	
	return nil
}
