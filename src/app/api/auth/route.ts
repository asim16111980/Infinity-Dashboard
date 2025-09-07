export async function postData<T>(api: string, payload: T) {
  const res = await fetch(api, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  return res.json();
}