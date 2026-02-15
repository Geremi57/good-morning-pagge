require('dotenv').config();

console.log('DB Host:', process.env.DB_HOST);
console.log('DB Name:', process.env.DB_NAME);
console.log('DB User:', process.env.DB_USER);


const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


// Test route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Submit route
app.post('/submit', async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO submissions (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
      [name, email, phone]
    );
    console.log('Inserted row:', result.rows[0]);  // <-- this will log the inserted row
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (err) {
    console.error('Insert error:', err);
    res.status(500).json({ error: err.message });
  }
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
