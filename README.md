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

# ⚙️ Setup Instructions

## 1️⃣ Clone the repo
```bash
git clone https://github.com/Geremi57/good-morning-pagge.git
cd good-morning-pagge

2️⃣ PostgreSQL Setup

Make sure PostgreSQL is installed and running locally.

Connect as the postgres superuser:

sudo -u postgres psql

Create the Node.js user (if it doesn’t exist):

CREATE USER geremi WITH PASSWORD 'your_postgres_password';

Create the database (if it doesn’t exist):

CREATE DATABASE tannmann;

Connect to the database:

\c tannmann

Create the submissions table with sequence privileges:

CREATE TABLE IF NOT EXISTS submissions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL
);

-- Grant privileges to Node user
GRANT ALL PRIVILEGES ON TABLE submissions TO geremi;
GRANT ALL PRIVILEGES ON SEQUENCE submissions_id_seq TO geremi;

✅ This ensures your Node backend can insert rows into submissions without errors.
3️⃣ Backend Setup

cd server
npm install

Create a .env file in server/:

DB_USER=geremi
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_NAME=tannmann
DB_PORT=5432
PORT=3000

4️⃣ Frontend Setup

cd good-morning
npm install

5️⃣ Start Everything with Shell Script

From the project root:

./run.sh

    Node backend: http://localhost:3000

    Angular frontend: http://localhost:4200

Logs are saved to:

    server/backend.log

    good-morning/frontend.log

Stop both processes:

./stop.sh

6️⃣ Testing

Open the frontend: http://localhost:4200

Fill out the form and submit.

Backend console logs the inserted row, e.g.:



Verify in PostgreSQL:

\c tannmann
SELECT * FROM submissions;
