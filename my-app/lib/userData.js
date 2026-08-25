import { getToken } from "./authenticate";

async function fetchWithToken(url, method) {
  const res = await fetch(url, {
    method: method,
    headers: {
      'Authorization': `JWT ${getToken()}`, 
      'content-type': 'application/json',
    },
  });

  if (res.status === 200) {
    return await res.json(); 
  } else {
    return []; 
  }
}

export async function getFavourites() {
  return await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/favourites`, 'GET');
}

export async function addToFavourites(id) {
  return await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`, 'PUT');
}

export async function removeFromFavourites(id) {
  return await fetchWithToken(`${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`, 'DELETE');
}