export default async function getResponseJson(response: Response){
  try {
    return await response.json();
  } catch {
    return null;
  }
}
