## Url Response Analyzer API
A Node.js REST API which reports the responses of the analysis of the url entered.

**Build with**
- NodeJs
- ExpressJs
- Sequelize
- PostgreSQL

## Getting Started
1. Clone the repo 
2. Setup a postegre database
4. Create a `.env` file and fill it with your database data, you can use the .envexample file

##  Run migration
```node
npx sequelize-cli db:migrate
```
##  Run seeds
```node
npx sequelize-cli db:seed:all
```
## Start the server
```node
npm start
``` 

## Usage 
1. GET / get all records
``` url
http://localhost:3000/api/HTTP
```
2. GET / get records by id
``` url
http://localhost:3000/api/HTTP/:id
```
3. POST / post records
``` url
http://localhost:3000/api/HTTP
```
4. PUT / update selected records
``` url
http://localhost:3000/api/HTTP/:id
```
5. DELETE / delete selected records
``` url
http://localhost:3000/api/HTTP/:id
```

## Run Tests
```node
npm test
```