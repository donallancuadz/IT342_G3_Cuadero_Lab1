const API_BASE = "http://localhost:8080";

function parseJsonOrText(text) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function basicAuthHeader(email, password) {
  const token = btoa(`${email}:${password}`);
  return { Authorization: `Basic ${token}` };
}

export async function registerUser({ fullName, email, password }) {
  const res = await fetch(`${API_BASE}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName, email, password }),
  });

  const text = await res.text();
  const data = parseJsonOrText(text);

  if (!res.ok) throw new Error(typeof data === "string" ? data : "Register failed");
  return data;
}

export async function loginUser({ email, password }) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const text = await res.text();
  const data = parseJsonOrText(text);

  if (!res.ok) throw new Error(typeof data === "string" ? data : "Login failed");
  return data;
}

export async function getMe(email, password) {
  const res = await fetch(`${API_BASE}/api/user/me`, {
    method: "GET",
    headers: {
      ...basicAuthHeader(email, password),
    },
  });

  const text = await res.text();
  const data = parseJsonOrText(text);

  if (!res.ok) throw new Error(typeof data === "string" ? data : "Unauthorized");
  return data;
}