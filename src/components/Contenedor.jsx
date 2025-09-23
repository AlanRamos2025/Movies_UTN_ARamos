export function Contenedor({ children }) {
  return (
    <div className="max-w-screen-2xl mx-auto p-6 min-h-screen 
                    bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-400 
                    text-gray-900 rounded-2xl shadow-2xl
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {children}
    </div>
  );
}
