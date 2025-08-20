export const GET = async () => {
  const res = await fetch('https://douban.uieee.com/v2/movie/coming_soon');
  const data = await res.json();
  return new Response(JSON.stringify(data));
}