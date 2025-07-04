// server.js
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import https from 'https';
import router from './routes/router.js';  // your existing routes

const app = express();

// Enable CORS for all domains
app.use(cors({ origin: '*' }));

// Use your router under the /api path
app.use('/api', router);

// Health check endpoint
app.get('/', (req, res) => {
  res.send('🟢 Option Chain Proxy is running');
});

// Create an Axios instance with keepAlive and a longer timeout
const httpClient = axios.create({
  timeout: 20000,  // 20-second timeout
  httpsAgent: new https.Agent({ keepAlive: true })
});

// Override axios usage in routes: 
// In your `routes/router.js`, replace any `axios.get(…)` calls with:
//    import { httpClient } from '../server.js';
// and then use `await httpClient.get(...)`

// Example of what /api/getexpiry handler might look like:

// import { Router } from 'express';
// import { httpClient } from '../server.js';
// const router = Router();

// router.get('/getexpiry', async (req, res) => {
//   try {
//     const { symbol } = req.query;
//     const resp = await httpClient.get(`https://www.nseindia.com/api/option-chain-indices?symbol=${symbol.toUpperCase()}`);
//     const expiryDates = resp.data.records.expiryDates;  // example path
//     res.json(expiryDates);
//   } catch (err) {
//     res.status(500).json({ error: err.toString() });
//   }
// });

// Export httpClient if you need it in route files
export { httpClient };

const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  if (err) console.error(`❌ Server error: ${err.message}`);
  else console.log(`✅ Proxy running on port ${port}`);
});