to innstall dependencies:-
npm i <package-name>

to install dev dependencies:-
npm i <package-name> --save-dev

to run in production:-
npm start

to run in dev environment:-
npm run start:dev

all APIs:-
1. http://localhost:3000/api/data
request type:- get

2. http://localhost:3000/api/data/22/aman
request tpye:- get (path parameter)

3. http://localhost:3000/api/data1?id=21&name=aman mishra
request type:- get(query parameter)

4. http://localhost:3000/api/data
request type:- post
payload:-
{
	"id": 263,
	"name": "aman mishra"
}