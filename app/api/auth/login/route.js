import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '/lib/db';

const JWT_SECRET = 'rahasia_super_aman'; // sebaiknya simpan di .env

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Validasi sederhana
    if (!email || !password) {
      return NextResponse.json({ error: 'Email dan password wajib diisi' }, { status: 400 });
    }

    // Cari user
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) {
      return NextResponse.json({ error: 'User tidak ditemukan' }, { status: 404 });
    }

    const user = rows[0];

    // Cek password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return NextResponse.json({ error: 'Password salah' }, { status: 401 });
    }

    // Buat token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    // Simpan token di cookie HTTP-only
    const response = NextResponse.json({ success: true, message: 'Login berhasil' });
    response.cookies.set('token', token, { httpOnly: true, secure: true, sameSite: 'strict', maxAge: 3600 });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Terjadi kesalahan server' }, { status: 500 });
  }
}
