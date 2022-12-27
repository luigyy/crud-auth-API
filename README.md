# Description

This is an API that I use as boilerplate for other apps,  with /login and /register routes for authentication, as well as CRUD operations for registered 
users.

It also has routes for validating JWT tokens, as well as a /admin/* route for implementing routes that can only be accessed by role.

By default, it uses a mongodb database.

## Routes 

#### auth
* /auth/register
* /auth/login
* /auth/checktoken

#### crud
* /user/read/:id
* /user/update/:id - Requires fields to be updated, by default they are _name_, _lastName_, _email_
* /user/delete/:id
