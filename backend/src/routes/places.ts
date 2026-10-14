// app.get('/places', async (req, res) => {
//     const search = req.query.search;
  
//     console.log('Searching for:', search);
  
//       const url =
//       'https://api.transport.nsw.gov.au/v1/tp/stop_finder' +
//       '?outputFormat=rapidJSON' +
//       '&type_sf=any' +
//       `&name_sf=${encodeURIComponent(search as string)}` +
//       '&coordOutputFormat=EPSG:4326' +
//       '&TfNSWSF=true';
  
//     const response = await fetch(url, {
//       headers: {
//         Authorization: `apikey ${process.env.TFNSW_API_KEY}`,
//       },
//     });
  
//     const data = await response.json();
  
//     res.json(data);
     
//   });