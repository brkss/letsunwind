package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.24

import (
	"context"
	"fmt"

	"github.com/brkss/gogql/graph/model"
	"github.com/vektah/gqlparser/v2/gqlerror"
)

// GetSurvey is the resolver for the getSurvey field.
func (r *queryResolver) GetSurvey(ctx context.Context, id string) (*model.Survey, error) {
	var response model.Survey
	//// get survey
	survey, err := r.Store.GetSurvey(ctx, id)
	if err != nil {
		return nil, &gqlerror.Error{
			Message: "Can't load survey !",
		}
	}

	response.ID = survey.ID
	response.Name = survey.Name

	// get survey's questions
	questions, err := r.Store.GetSurveyQuestions(ctx, survey.ID)
	if err != nil {
		return nil, &gqlerror.Error{
			Message: "Can't load survey's querstions !",
		}
	}

	fmt.Println("questions : ", questions)
	var survey_questions []*model.Question
	/// get question's options
	for _, qst := range questions {
		answers, _ := r.Store.GetQuestionAnswers(ctx, qst.ID)
		var answers_model []*model.Answer
		for _, ans := range answers {
			answers_model = append(answers_model, &model.Answer{
				ID:         ans.ID,
				Ans:        ans.Ans,
				Val:        float64(ans.Val),
				QuestionID: ans.QuestionID,
			})
		}
		qq := &model.Question{
			ID:     qst.ID,
			Qst:    qst.Qst,
			Answer: answers_model,
		}
		survey_questions = append(survey_questions, qq)
	}
	response.Questions = survey_questions
	return &response, nil
	//panic(fmt.Errorf("not implemented: GetSurvey - getSurvey"))
}

// Survies is the resolver for the survies field.
func (r *queryResolver) Survies(ctx context.Context) ([]*model.Survey, error) {
	survies, err := r.Store.GetSurvies(ctx)
	if err != nil {
		return nil, &gqlerror.Error{
			Message: err.Error(),
		}
	}

	// map survies !
	var response []*model.Survey
	for _, s := range survies {
		response = append(response, &model.Survey{
			ID:   s.ID,
			Name: s.Name,
		})
	}
	return response, nil
}
