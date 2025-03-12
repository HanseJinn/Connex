# Connex Backend

## Setup & Installation

```sh
# Install required packages
npm install express mysql2 dotenv bcryptjs jsonwebtoken cors helmet morgan

# Install Dev-Dependencies
npm install --save-dev nodemon jest supertest
```

## MySQL Table Creation

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
