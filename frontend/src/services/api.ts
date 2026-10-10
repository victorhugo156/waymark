const URL_API = 'https://api.transport.nsw.gov.au/v1/tp/stop_finder';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJxclA4YnpFSDFKd0Y2SDdmOE1JWm5pdUpOWjZveHJwS3dXM0VaZzNIQTFzIiwiaWF0IjoxNzg5NDI1OTM1fQ.M9f0Bx1gN7fexNAkL5FKP7o7j3FgiMPxyuH0GGrlpDY';

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

