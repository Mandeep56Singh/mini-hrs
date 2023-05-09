# NxMiniHrs
This is a MonoRepo project consisiting of a NestJs backend and React Front end.
It uses the following 
1. Ant Design system
2. Prisma ORM

## Requirements
1. Node v16+
2. npm
3. Nx v16+
4. PostgreSQL database
5. Docker

## Setup and installation
1. Clone project
2. Navigate into project `cd mini-hrs`
3. Install dependancies `npm install`
4. Create a .env file with the following configuration

```
DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>?schema=<schema>"

```

5. Serve front-end `nx serve front-end` and navigate to `http://localhost:4200/`
6. Serve api `nx serve back-end` and navigate to `http://localhost:3000/api`


## Testing

### Front end tests
Run `nx test front-end`. Project uses Jest
For e2e testing with Cypress run `nx e2e front-end-e2e`

### Backend tests

Run `nx test back-end`
Run `nx e2e back-end-e2e`

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Build

### Front End

Run `nx build front-end:production`

### Backend

Run `nx build backe-end:production`

## Migrations

The project uses Prisma ORM.
To run migrations `npx prisma migrate dev`

## View Tables

Run `npx prisma studio` and navigate to `http://localhost:5555`

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.


