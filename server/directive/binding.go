package directive

import (
	"context"
	"fmt"

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

	fmt.Println("binding called : ", fieldName);

	err = validate.Var(val, constraint)
	if err != nil {
		err := fmt.Errorf("%s: Invalid entry\n%+v", fieldName, err);
		return val, err
	}

	return next(ctx)
}
