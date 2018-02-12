# RESTful API for sv (s_chul_v_erwaltung)

## Setup

`npm install`


### Migrations

Install any database application of your choice. Assuming you have mysql installed and running on your machine, first install the driver

```js
npm install mysql --save
```

and run migrations

```js
adonis migration:run
```

### API calls

Assuming RESTful service runs on HOST:PORT

configure `.env` file appropriately, e. g.
```
HOST=127.0.0.1
PORT=3333
APP_URL=http://${HOST}:${PORT}
NODE_ENV=development
CACHE_VIEWS=false
APP_KEY=qw6f...
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=someuser
DB_PASSWORD=somesupersecurepassword
DB_DATABASE=somedb
```

Make an API, e. g.
```
http://HOST:PORT/api/v1/teachers/
```

For specific routes look into `start/routes.js`
