import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '/lib/db';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Validasi sederhana
    if (!email || !password) {
      return NextResponse.json({ error: 'Email dan password wajib diisi' }, { status: 400 });
    }

    // Cek apakah user sudah ada
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length > 0) {
      return NextResponse.json({ error: 'Email sudah terdaftar' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru
    await db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);

    return NextResponse.json({ success: true, message: 'Registrasi berhasil' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Terjadi kesalahan server' }, { status: 500 });
  }
}
