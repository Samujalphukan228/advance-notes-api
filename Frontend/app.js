const API = "http://localhost:5000";

async function apiFetch(endpoint, options = {}) {
  const res = await fetch(API + endpoint, {
    ...options,

    credentials: "include",

    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    alert("Request failed");

    throw new Error();
  }

  return res.json();
}
