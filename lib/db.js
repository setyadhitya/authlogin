// /lib/db.js
import mysql from 'mysql2/promise';

// Buat koneksi ke database MySQL
export const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // ganti sesuai password MySQL kamu
  database: 'labordatenbank', // nama database
});
