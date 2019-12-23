NAME = ft_linear_regression

init:
	npm ci

all: $(NAME)

$(NAME):
	tsc -p ./src/

clean:
	rm ./src/*.js

re: clean all