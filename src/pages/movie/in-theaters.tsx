import { MovieList } from '../../components/movie/movie-list';

const InTheatersPage = async () => {
  const res = await fetch('/api/movie/in-theaters');
  const data = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">In Theaters</h1>
      <MovieList movies={data.subjects} />
    </div>
  );
};

export default InTheatersPage;