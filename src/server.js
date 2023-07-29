import { createServer } from 'cors-anywhere';

const PORT = 8080; // You can change this port if needed

createServer({
  originWhitelist: [], // Allow all origins
}).listen(PORT, () => {
  console.log(`CORS Anywhere proxy server is running on port ${PORT}`);
});
