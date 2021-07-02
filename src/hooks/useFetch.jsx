export default async function useFetch(url) {
  let res = await fetch(url);
  const data = await res.json();
  return data;
}
