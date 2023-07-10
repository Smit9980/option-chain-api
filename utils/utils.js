import axios from 'axios'


/**
 * 
 * @param {'BANKNIFTY'} symbol 
 * @param {'13-Jul-2023'} date 
 */

export const getNSEOptionChain = async (symbol, date) => {

    const url = `https://www.nseindia.com/api/option-chain-indices?symbol=${symbol}`
  
    const data = await axios.get(url);
    const finalData = data.data.records.data;
    const desiredExpiryDate = date;
    const filteredData = finalData.filter(option => option.expiryDate === desiredExpiryDate);
    return filteredData;
  
  
  }
  
  export const getExpiryDates = async (symbol) => {
  
    const url = `https://www.nseindia.com/api/option-chain-indices?symbol=${symbol}`
    const data = await axios.get(url);
  
    const finalData = data.data.records.expiryDates;
    console.log(finalData);
    return finalData;
  }
  
  