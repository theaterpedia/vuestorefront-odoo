# Starting new project

We already explained how to test our integration in your local machine. In this point we're going to show how you can start your own new project using our integration. It's really simple to get start. Just follow the steps below.


## Running in your local machine

1. Type the command to get the project: ``` git clone https://github.com/vuestorefront-community/template-odoo.git ```

2. Copy .env.example to .env 

:triangular_flag_on_post: _Do not commit .env file for security reasons_

3. Install the dependences: ```yarn install``` 

:dart: _This script will get all categories and products previously entered into odoo database and generate Nuxt custom routes. It creates a Custom Routes folder with all routes retrieved from odoo_

4. Build for production and launch server: ```yarn build```

5. Build local: ```yarn build:local```



::: tip Docker
You can use Docker instead. Type:
```docker-compose up --build -d```

You might need to: Type:
```docker-compose restart odoo nginx```
:::

## After installation

Now just open http://localhost:3000 for VSF and http://localhost:8069 for local Odoo (credentials admin/admin)
