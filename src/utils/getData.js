export default function doFetch(url, method, headers, body) {
  return fetch(url, { method, headers, body })
    .then((res) => {
      console.log("fetch response", res);
      // if (!res.ok) throw new Error("Error in fetch");
      return res.json();
    })
    .catch(console.log);
}
