# Integration test

_In this section you will find everything you need to build our entire environment to do a deeper test on VSF + ODOO and make sure if our integration is what you has been looking for. We hope it is :innocent:_

## Before you start

Pre-requisites: Docker, Node.js (>=14.19.0), npm or similar and Git.

Last odoo **version** released: Clone the repo from (https://github.com/odoogap/vuestorefront-docker)

Its really convenient to test all the ecosystem Vuestorefront - Odoo Integration working in your local machine. We have prepared a docker-compose file that will help you to get started in a few minutes.

## Installation

First of all we should understand what's inside the docker-compose file. We have 4 services:
_:dart: You can go deeper [Configuration > docker-compose](/configuration/docker-compose.md#links) ._

- **Redis**: Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It's used by VSF to store the cache.

- **db**: PostgreSQL database used by Odoo.

- **odoo**: Odoo service. This is our backend service that you could use to manage your products, orders, etc.

- **vsf**: Here is our front end integrated to Vue Storefront.

```bash
docker-compose up --build -d
# You might want to check what happens under the hood
docker-compose logs -f
```

:dart: _If you use Docker Desktop on Windows, some .sh files are executed during instalation, so we recommend you to read_ [Docker Desktop Documentation](https://docs.docker.com/docker-for-windows/wsl/) .

## After installation

Now just open http://localhost:3000 for VSF and http://localhost:8069 for local Odoo (credentials admin/admin)

::: warning
You might not see the top categories (MEN/WOMEN) until the Odoo server is initialized (database init takes time to install all modules)
:::

## Tips

**How to stop the services?**

```bash
docker-compose stop
```

**How to clear Odoo database?**

Running this command below it will stop all docker services and clears the Odoo local database. 

```bash
docker-compose down -v
```

**Handle caching with Redis**

The ```REDIS_ENABLED=true``` into .env file ensure that Redis is enabled to be used. It is used to cache all odoo datas that has been accessed by the browser. Running this command below it will clear the Redis database.

```bash
docker exec -it redis redis-cli
127.0.0.1:6379> flushall
OK
```

# Video tutorial

Now you can watch and follow the steps in this video tutorial. Take your time :thumbsup:

<iframe width="560" height="315" src="https://www.youtube.com/embed/fN5EoFZnU8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
