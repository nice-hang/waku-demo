import { Link } from 'waku';

import { Counter } from '../components/counter';

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.title}</h1>
      <p>{data.body}</p>
      <Counter />
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>
    </div>
  );
}

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
