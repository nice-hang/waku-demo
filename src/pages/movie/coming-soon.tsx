import { MovieList } from '../../components/movie/movie-list';

const ComingSoonPage = async () => {
  const res = await fetch('/api/movie/coming-soon');
  const data = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Coming Soon</h1>
      <MovieList movies={data.subjects} />
    </div>
  );
};

export default ComingSoonPage;