import { MovieList } from '../../components/movie/movie-list';

const Top250Page = async () => {
  const res = await fetch('/api/movie/top250');
  const data = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Top 250</h1>
      <MovieList movies={data.subjects} />
    </div>
  );
};

export default Top250Page;