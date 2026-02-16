# Good Morning - Full-stack Submission

## 👋 About Me
Hi! I’m **Geremi Wanga** (aka `Geez`) a passionate full-stack developer who loves building interactive web experiences.  

I built this submission as part of the **Tann Mann Foundation fundraising project** test.  
It’s a **full Angular frontend with Node.js backend** that saves form submissions to a PostgreSQL database.

---

## 🚀 Project Features

- Responsive Angular form that collects:
  - Name
  - Email address
  - Phone number
- Frontend form validation:
  - Required fields
  - Valid email format
  - Phone number pattern validation
- Node.js backend (Express) that saves submissions to PostgreSQL
- Auto-create database table if it doesn’t exist
- Easy to configure via environment variables
- **One-command runner script** to start backend + frontend

---

## 🖥️ Tech Stack

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## ⚙️ Setup Instructions

### 1️ Clone the repo

```bash
git clone https://github.com/Geremi57/good-morning-pagge.git
cd good-morning-pagge

2️ PostgreSQL Setup

Make sure PostgreSQL is installed and running locally.

Connect as postgres:

sudo -u postgres psql


Create user (if not exists):

CREATE USER geremi WITH PASSWORD 'your_postgres_password';


Create database (if not exists):

CREATE DATABASE tannmann;


The Node backend will automatically create the submissions table when it starts.

3️ Backend Setup
cd server
npm install

Create .env file in backend/:
DB_USER=geremi
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_NAME=tannmann
DB_PORT=5432
PORT=3000

4️ Frontend Setup
cd good-morning
npm install

5️ Start Everything with Shell Script

From the root folder:

./run.sh


Node backend → http://localhost:3000

Angular frontend → http://localhost:4200

Logs saved to:

server/backend.log

good-morning/frontend.log

Optional: Stop both processes
./stop.sh

6️ Testing

Open frontend: http://localhost:4200

Fill out the form and submit

Backend console logs inserted row, e.g.:

{
  "id": 1,
  "name": "Geremi Wanga",
  "email": "wangageremi725@gmail.com",
  "phone": "+254712345678"
}


Verify in PostgreSQL:

\c tannmann
SELECT * FROM submissions;
