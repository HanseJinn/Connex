const db = require("../config/db");
const bcrypt = require("bcryptjs");

class User {
  static async createUser(username, email, password, isAdmin = false) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.execute(
      "INSERT INTO users (username, email, password, isAdmin) VALUES (?, ?, ?, ?)",
      [username, email, hashedPassword, isAdmin]
    );
    return result;
  }

  static async findByEmail(email) {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
  }
}

module.exports = User;
