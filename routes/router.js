// routes/router.js
import express from "express";
import { httpClient } from "../server.js"; // import shared client
const router = express.Router();

router.get("/getexpiry", async (req, res) => {
  const symbol = (req.query.symbol || "nifty").toLowerCase();
  try {
    const resp = await httpClient.get(
      `https://www.nseindia.com/api/option-chain-indices?symbol=${symbol}`
    );
    const expiries = resp.data.records.expiryDates;
    res.json(expiries);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

router.get("/option-chain", async (req, res) => {
  const symbol = (req.query.symbol || "nifty").toLowerCase();
  const expiry = req.query.expiry;
  try {
    const resp = await httpClient.get(
      `https://www.nseindia.com/api/option-chain-indices?symbol=${symbol}&expiryDate=${encodeURIComponent(expiry)}`
    );
    res.json(resp.data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

export default router;
