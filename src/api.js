export async function apiRequest(
  path,
  { body, headers = {}, ...options } = {},
) {
  const response = await fetch(path, {
    ...options,
    headers: {
      ...(body ? { "Content-Type": "application/json" } : {}),
      ...headers,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  const data = await response
    .json()
    .catch(() => ({
      error: "The server could not be reached. Please try again.",
    }));
  if (!response.ok) {
    const error = new Error(data.error || "Unable to complete this request.");
    error.status = response.status;
    throw error;
  }
  return data;
}
