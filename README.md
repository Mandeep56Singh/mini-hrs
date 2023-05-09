# NxMiniHrs
This is a MonoRepo project consisiting of a NestJs backend and React Front end.

## Requirements
1. Node v16+
2. npm
3. PostgreSQL database
4. Docker

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
Run `nx test front-end`

### Backend tests

Run `nx test back-end`

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.


