export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Selamat datang di Dashboard</h1>
      <form action="/api/auth/logout" method="POST">
        <button className="bg-red-500 text-white p-2 mt-4">Logout</button>
      </form>
    </div>
  );
}
