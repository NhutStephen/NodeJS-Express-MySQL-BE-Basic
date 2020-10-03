# NodeJS APIs With Express Framework, Using MySQL DB (CRUD projects)
Create a small project with BE services. After that, moving to FE side (Expected: Android app)
## Getting Started
Before working with our project, there are some necessary things you need to have first:
### Prerequisites
NodeJS
```
https://nodejs.org/en/download/package-manager/
```
Express Framework
```
https://expressjs.com/en/starter/installing.html
```
MySQL
```
https://dev.mysql.com/doc/mysql-osx-excerpt/5.7/en/osx-installation-pkg.html
```
Postman (For testing APIs)
## How To Run
Type: node server.js (url: localhost:3000) [Haven't had server to deploy yet due to personal projects]
Running test APIs with POST with these url pattern:
1. localhost:3000/customers (POST) - Create new customer
```
{
    "email": <type your email>,
    "name": <type your name>,
    "active": <true/false>
}
```
2. localhost:3000/customers (GET) - get all existed customers
3. localhost:3000/customers/{id} (GET) - get specific result 
4. localhost:3000/customers/{id} (PUT) - update on specific customer based on ID
```
{
    "email": <type your email>,
    "name": <type your name>,
    "active": <true/false>
}
```
5. localhost:3000/customers/{id} (DELETE) - delete specific result based on ID