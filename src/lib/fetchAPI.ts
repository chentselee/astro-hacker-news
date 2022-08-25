export const fetchAPI = (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
  return fetch(input, { ...init, headers: { "User-Agent": "chrome", ...(init?.headers ?? {}) } })
}