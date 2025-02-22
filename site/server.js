const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock user data (замените на базу данных в реальном проекте)
const users = [
    { id: 1, email: 'user@example.com', password: 'password123' }
];

// Route for login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Find user by email and password
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.status(200).json({ message: 'Login successful!', user });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});