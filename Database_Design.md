# Database Design

## Users Table

| Column     | Type         |
| ---------- | ------------ |
| id         | Integer      |
| name       | Varchar(100) |
| email      | Varchar(100) |
| password   | Varchar(255) |
| role       | Varchar(20)  |
| created_at | Timestamp    |

## Leads Table

| Column      | Type         |
| ----------- | ------------ |
| id          | Integer      |
| name        | Varchar(100) |
| email       | Varchar(100) |
| phone       | Varchar(20)  |
| source      | Varchar(50)  |
| status      | Varchar(50)  |
| assigned_to | Integer      |
| notes       | Text         |
| created_at  | Timestamp    |

## Activity Logs Table

| Column       | Type         |
| ------------ | ------------ |
| id           | Integer      |
| lead_id      | Integer      |
| action       | Varchar(100) |
| performed_by | Integer      |
| created_at   | Timestamp    |

## Relationships

* One User can be assigned multiple Leads.
* One Lead can have multiple Activity Logs.
* Activity Logs track actions performed on Leads.


##ER Diagram

+------------------+
|      USERS       |
+------------------+
| id (PK)          |
| name             |
| email            |
| password         |
| role             |
| created_at       |
+------------------+
         |
         | 1
         |
         | assigned_to
         |
         V
+------------------+
|      LEADS       |
+------------------+
| id (PK)          |
| name             |
| email            |
| phone            |
| source           |
| status           |
| assigned_to (FK) |
| notes            |
| created_at       |
+------------------+
         |
         | 1
         |
         | lead_id
         |
         V
+----------------------+
|    ACTIVITY_LOGS     |
+----------------------+
| id (PK)              |
| lead_id (FK)         |
| action               |
| performed_by (FK)    |
| created_at           |
+----------------------+
         ^
         |
         |
         | performed_by
         |
+------------------+
|      USERS       |
+------------------+