import { useEffect, useState } from 'react'
import { getPopularMovies } from './api/api.js'
import {Contenedor} from './components/Contenedor.jsx'
import {Tarjeta} from './components/Tarjeta.jsx'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  const url = import.meta.env.VITE_URL
  const token = import.meta.env.VITE_TOKEN

  const config = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  }

  fetch(url, config)
    .then(res => res.json())
    .then(data => {
      console.log('Películas recibidas:', data)
      setMovies(data.results || [])
      setLoading(false)             
    })
    .catch(err => {
      console.error('Error al cargar películas:', err)
      setLoading(false)
    })
}, [])
    const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <main className="bg-gradient-to-br from-slate-50 via-sky-100 to-blue-100 min-h-screen text-gray-900 font-serif p-10">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-transparent bg-clip-text drop-shadow-md tracking-wide">
  EL MONDONGO
</h1>
        <input
          type="text"
          placeholder="Buscar"
          className="w-full max-w-lg p-4 rounded-xl bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white border-2 border-pink-400 
           focus:outline-none focus:ring-4 focus:ring-pink-300"
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>

      {loading ? (
        <p className="text-center text-xl">Cargando películas...</p>
      ) : (
       
        <Contenedor>
          {filteredMovies.map((movie) => (
            <Tarjeta key={movie.id} item={movie} />
          ))}
        </Contenedor>
      )}
    </main>
  );
}

export default App;