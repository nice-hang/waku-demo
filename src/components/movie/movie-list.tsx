interface Movie {
  id: string;
  title: string;
  year: string;
  images: {
    large: string;
  };
}

interface MovieListProps {
  movies: Movie[];
}

export const MovieList = ({ movies }: MovieListProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {movies.map((movie) => (
      <div key={movie.id} className="border rounded-lg overflow-hidden">
        <img src={movie.images.large} alt={movie.title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold">{movie.title}</h2>
          <p className="text-sm text-gray-500">{movie.year}</p>
        </div>
      </div>
    ))}
  </div>
);