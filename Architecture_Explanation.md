# Architecture Explanation

## Frontend Layer

ReactJS is used to build the user interface.

Features:

* Login
* Registration
* Dashboard
* Lead Management
* Search and Filtering

## Backend Layer

Node.js and Express.js provide REST APIs.

Responsibilities:

* Authentication
* Authorization
* Lead Management
* Activity Logging
* Database Operations

## Database Layer

PostgreSQL stores application data.

Tables:

* Users
* Leads
* Activity Logs

## Flow

User → React Frontend → Express Backend → PostgreSQL Database

Authentication is implemented using JWT Tokens.
