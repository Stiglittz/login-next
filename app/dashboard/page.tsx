export default function Dashboard() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-900">Estadísticas</h2>
          <p className="text-blue-600">Contenido del dashboard...</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-900">Actividad</h2>
          <p className="text-green-600">Actividad reciente...</p>
        </div>
      </div>
    </div>
  );
}