

export async function getPlaces(searchValue: string) {
  const response = await fetch(
    `http://localhost:8000/places?search=${encodeURIComponent(searchValue)}`
  );

  const data = await response.json();

  return data;
}

