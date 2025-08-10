'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.error || 'Registrasi gagal');
      return;
    }

    router.push('/login');
  };

  return (
    <div className="max-w-sm mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Register</h1>
      <form onSubmit={handleRegister} className="space-y-3">
        {error && <p className="text-red-500">{error}</p>}
        <input type="email" placeholder="Email" className="border p-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-green-500 text-white p-2 w-full">Register</button>
      </form>
    </div>
  );
}
