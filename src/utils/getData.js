export default function doFetch(url, method, headers, body) {
  return fetch(url, { method, headers, body })
    .then((res) => {
      if (!res.ok) throw new Error("Error in fetch");
      return res.json();
    })
    .catch(console.log);
}
