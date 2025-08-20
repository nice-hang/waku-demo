export const GET = async () => {
  const res = await fetch('https://douban.uieee.com/v2/movie/top250');
  const data = await res.json();
  return new Response(JSON.stringify(data));
}