export const fetchAPI = async (input: RequestInfo | URL, init?: RequestInit) => {
  const res = await fetch(input, { ...init, headers: { "User-Agent": "chrome", ...(init?.headers ?? {}) } })
  const text = await res.text()
  try {
    const json = JSON.parse(text)
    return json
  } catch (error) {
    return text
  }
}