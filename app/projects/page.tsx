export default function Projects() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-purple-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-purple-900">Proyecto 1</h2>
          <p className="text-purple-600">Descripción del proyecto...</p>
        </div>
        <div className="bg-pink-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-pink-900">Proyecto 2</h2>
          <p className="text-pink-600">Descripción del proyecto...</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-yellow-900">Proyecto 3</h2>
          <p className="text-yellow-600">Descripción del proyecto...</p>
        </div>
      </div>
    </div>
  );
}