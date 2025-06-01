import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.API_KEY;

async function convertCurrency(from,to,amount) {
    try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`);
        const result = response.data.conversion_result;
        return result;
    } catch (error) {
        console.log(error);
        throw new Error('Currency conversion failed');
    }
}

export { convertCurrency };