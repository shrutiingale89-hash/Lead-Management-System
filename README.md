# Lead Management System

## Project Overview

Lead Management System is a full-stack web application developed using React, Node.js, Express.js, and PostgreSQL.

The application helps organizations manage customer leads efficiently by providing features such as:

* User Registration and Login
* JWT Authentication
* Lead Creation
* Lead Assignment
* Lead Management
* Lead Search and Filtering
* Lead Status Tracking
* Activity Logging
* Pagination
* Role-Based User Management Structure

---

# Technology Stack

## Frontend

* React.js
* Axios
* Bootstrap
* JavaScript
* HTML
* CSS

## Backend

* Node.js
* Express.js
* JWT Authentication
* Bcrypt Password Hashing

## Database

* PostgreSQL

## Deployment


* Backend: Render
* Database: Supabase PostgreSQL

---

# Features

## Authentication

* User Registration
* User Login
* Password Hashing using Bcrypt
* JWT Token Generation
* Protected Routes

## Lead Management

* Create Lead
* View Leads
* Update Lead
* Delete Lead
* Search Leads
* Filter Leads by Status
* Pagination

## Activity Logs

System tracks:

* Lead Created
* Lead Updated
* Status Changed
* Lead Assigned

## Auto Assignment

Newly created leads are automatically assigned to agents.

---

# Database Tables

## Users

Stores application users.

Fields:

* id
* name
* email
* password
* role
* created_at

## Leads

Stores lead information.

Fields:

* id
* name
* email
* phone
* source
* status
* assigned_to
* notes
* created_at

## Activity Logs

Stores lead activity history.

Fields:

* id
* lead_id
* action
* performed_by
* created_at

---

# Project Structure

Lead-Management-System

backend/

src/

Controllers/

Middleware/

Routes/

Services/

Utils/

db/

server.js

frontend/

src/

pages/

App.jsx

main.jsx

---

# Installation Steps

## Clone Repository

git clone <repository-url>

## Backend Setup

Navigate to backend folder:

cd backend

Install dependencies:

npm install

Create .env file:

PORT=5000

DB_HOST=localhost

DB_PORT=5432

DB_NAME=lead Management System

DB_USER=postgres

DB_PASSWORD=root

JWT_SECRET=waanee_secret_key

Start backend:

npm start

Backend runs on:

http://localhost:5000

---

## Frontend Setup

Navigate to frontend folder:

cd frontend

Install dependencies:

npm install

Start frontend:

npm run dev

Frontend runs on:

http://localhost:5173

---

# API Endpoints

## Authentication

POST /api/auth/register

POST /api/auth/login

## Leads

GET /api/leads

GET /api/leads/:id

POST /api/leads

PUT /api/leads/:id

DELETE /api/leads/:id

---

# Deployment

## Backend Deployment (Render)

1. Push project to GitHub.
2. Create Web Service in Render.
3. Select backend folder as Root Directory.
4. Build Command:

npm install

5. Start Command:

npm start

6. Configure Environment Variables:

DB_HOST

DB_PORT

DB_NAME

DB_USER

DB_PASSWORD

JWT_SECRET

Backend URL:

https://lead-management-system-gtzn.onrender.com

---

## Database Deployment (Supabase)

1. Create Supabase Project.
2. Create Users table.
3. Create Leads table.
4. Create Activity Logs table.
5. Copy connection details.
6. Add connection details to Render Environment Variables.

---



# Future Enhancements


* Dashboard Analytics
* Lead Export
* Email Notifications
* Advanced Reporting
* Docker Support
* CI/CD Pipeline
* frontend Deployment 
<img width="1920" height="1080" alt="Screenshot (1887)" src="https://github.com/user-attachments/assets/e4cca1db-3908-4d85-858c-b22221ecf0ba" />
<img width="1920" height="1080" alt="Screenshot (1886)" src="https://github.com/user-attachments/assets/ed2fbdd7-3964-4a54-8def-635a0c1ac81f" />
<img width="1920" height="1080" alt="Screenshot (1885)" src="https://github.com/user-attachments/assets/f80495e2-d29e-4324-aaf5-7116701ed928" />
<img width="1920" height="1080" alt="Screenshot (1884)" src="https://github.com/user-attachments/assets/3f7679c1-2345-473f-83e9-d243edf9ce45" />
<img width="1920" height="1080" alt="Screenshot (1883)" src="https://github.com/user-attachments/assets/55890138-7eea-4305-9f2a-cbc9060ae74c" />
<img width="1920" height="1080" alt="Screenshot (1888)" src="https://github.com/user-attachments/assets/8e1907ec-2d96-4998-b963-1e9817548f93" />


---

