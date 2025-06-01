import { convertCurrency } from '../models/converterModel.js';

async function showForm(req,res) {
    try {
       res.render('index', { result: undefined }); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function convert(req,res) {
    try {
         const { amount, from, to } = req.body;
         const result = await convertCurrency(from, to, amount);
         res.render('index', { result });
    } catch (error) {
         res.status(500).json({ message: error.message });
    }
}

export { showForm, convert };