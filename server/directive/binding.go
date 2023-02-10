package directive

import (
	"context"
	"fmt"
	"strings"

	"github.com/99designs/gqlgen/graphql"
	"github.com/go-playground/validator/v10"
)

var validate = validator.New()

func Binding(ctx context.Context, obj interface{}, next graphql.Resolver, constraint string) (interface{}, error) {

	val, err := next(ctx)
	if err != nil {
		panic(err)
	}

	fieldName := *graphql.GetPathContext(ctx).Field

	// email condition ! 
	if fieldName == "email" {
		value := val.(string)
		domain := strings.Split(value, "@")[1]
		if domain != "um6p.ma" && domain != "student.1337.ma" {
			err := fmt.Errorf("%s: unknown email \n%+v", fieldName, err);
			return val, err 
		}
	}

	fmt.Println("binding called : ", fieldName);

	err = validate.Var(val, constraint)
	if err != nil {
		err := fmt.Errorf("%s: Invalid entry\n%+v", fieldName, err);
		return val, err
	}

	return next(ctx)
}
