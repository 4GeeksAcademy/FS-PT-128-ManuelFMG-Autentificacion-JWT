import { Navigate } from "react-router-dom";

export const login = async (user, navigate) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/login`,
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();
  if (!response.ok) {
    alert(data.error);
    return;
  }
  localStorage.setItem("token", data.token);
  navigate("/private");
};

export const register = async (user) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/register`,
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();
  if (!response.ok) {
    console.log("ERROR BACKEND:", data);
    alert(data.error || data.msg || "Error en registro");
    return;
  }
  return { ok: true };
};

export const privateCheck = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/profile`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  );
  const data = await response.json();
  if (!response.ok) {
    return false;
  }
  return data;
};
