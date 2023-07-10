import express from "express";
import { getNSEOptionChain, getExpiryDates } from "../utils/utils.js";

const router = express.Router();


router.get('/option-chain/', async (req, res) => {
    //symbol.toUpperCase();
    try {
        const symbol = req.query.symbol;
        const expiry = req.query.expiry;
        const data = await getNSEOptionChain(symbol.toUpperCase(), expiry);

        console.log("****************************************************");
        console.log("calling option chain:", data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})




/**
 * Example Url http://localhost:8000/api/getexpiry?symbol=nifty
 */
router.get('/getexpiry', async (req, res) => {
    try {
        const symbol = req.query.symbol;
        const data = await getExpiryDates(symbol.toUpperCase());
        console.log("****************************************************");
        console.log("call expiry dates:", data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


export default router;
