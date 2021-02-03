## SW-recruitment-task

### About

A complete Node.js REST API running on docker containers. User is able to create his own account with random chosen Star Wars hero. As a result, he can log in and make requests to get certain resources binded to his hero, for example films in which he played.

### Configuration

Please perform the following steps in exact sequence:

1. Create `.env` file from `.env.dist`

   ```
   $ cp .env.dist .env
   ```

   Remember to fill up required values in `.env`

2. Run - `docker-compose build builder`

3. Run - `npm run start`

4. Visit - `localhost:1337/doc` for endpoint documentation

### Dev setup

This app is fully dockerized, so in order to use it you have to have docker and docker-compose installed. What's more you need to have npm in order to run npm scripts.

1. In order to run the whole app type:

   ```
   npm run start
   ```

2. In order to watch files for dev purpose type:

   ```
   npm run watch
   ```

3. In order to update swagger documentation:

   ```
   npm run swagger-autogen
   ```

### Database migrations

Migrations should be stored inside migrations directory.

Easiest way to create a migration is to generate it from entity/ies:

```
npm run generate-migration -- <migration-name>
```

This should generate a migration for all connected entities.
