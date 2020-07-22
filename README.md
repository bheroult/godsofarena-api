# API Gods of Arena

API for the web app Gods of Arena

## Requirements

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)

## Installation

```
git clone

cd godsofarena-api
npm install
```

## Configuration

```
# copy env file for all environments
cp .env .env.local
# makes your changes in .env.local, which will not be pushed
nano .env.local
# you may have to change DB settings for your database and the environment variable
```

## Database

```
# create the databse 'godsofarena' and user godsofarena
CREATE DATABASE godsofarena;
create user godsofarena with encrypted password 'godsofarena';
grant all privileges on database godsofarena to godsofarena;

# do not forget to activate login option to authorize authentication from outside

# run migrations (before running server !!!) :
npm run migrate
```

## Modify database

If you want to edit the database (add/remove/update column, table, ...), you first need to create a new migration. This will be like a commit for the database state, and it will be possible to roll back to a previous state of the structure (not data).

```
cd /database
npx sequelize migration:generate --name name_of_your_migration
```

Edit the migration generated in database/migrations/timestamp-name_of_your_migration.js.
Then run the migration to apply changes in the database :

```
npm run migrate
```

This will not change your models. You will finally have to change them accordingly, or to create one if neccessary.

## Commands

```
npm run dev     # development server
npm run start   # production server
npm run migrate # run migrations
```

## Structure (generated with 'tree' command)

```

(to come)
```
