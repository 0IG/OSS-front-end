# OSS / OSSENSE

For everything BJJ Related!

## Important Links

- [Deployed API Server]()
- [Deployed Frontend]()
- [Trello Board]()
- [ERD]()
- [Wireframes]()

## OSS
OSS is an app for anyone and everyone getting into the sport!

## Local Setup

If you'd like to run my project locally, please read the following steps:

1. Fork and clone this repository.

### Backend Setup

It is recommended that you open a new terminal tab that will be dedicated to running and developing your back-end

- cd back-end
- touch .env

.env

PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=OSS


- npm install - install npm packages listed in package.json
- npm run db:init - initialize a new database and create tables
- npm run db:seed - seed the table(s) with some data
- nodemon - confirm that this is running on port 3333
- Visit http://localhost:3333/recommended and make sure you see some recommended gear

### Frontend Setup

It is recommended that you open a new terminal tab that will be dedicated to running and developing your front-end

- cd front-end
- touch .env

.env

REACT_APP_API_URL=http://localhost:3333


- npm install - install npm packages listed in package.json
- npm start - make sure your React app can start


