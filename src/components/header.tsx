import { Link } from 'waku';

export const Header = () => {
  return (
    <header className="flex items-center gap-4 p-6 lg:fixed lg:left-0 lg:top-0">
      <h2 className="text-lg font-bold tracking-tight">
        <Link to="/">Waku starter</Link>
      </h2>
      <nav className="flex gap-4">
        <Link to="/movie/in-theaters">In Theaters</Link>
        <Link to="/movie/coming-soon">Coming Soon</Link>
        <Link to="/movie/top250">Top 250</Link>
      </nav>
    </header>
  );
};
