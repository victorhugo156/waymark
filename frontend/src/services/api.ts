const URL_API = 'https://api.transport.nsw.gov.au/v1/tp/stop_finder';
const API_KEY = import.meta.env.VITE_TFNSW_API_KEY;

export async function getPlaces(searchValue: string) {
  const url =
    `${URL_API}?outputFormat=rapidJSON` +
    `&type_sf=any` +
    `&name_sf=${encodeURIComponent(searchValue)}` +
    `&coordOutputFormat=EPSG:4326` +
    `&TfNSWSF=true`;

  const response = await fetch(url, {
    headers: {
      Authorization: `apikey ${API_KEY}`,
    },
  });

  const data = await response.json();

  return data;
}

