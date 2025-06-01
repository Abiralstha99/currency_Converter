import express from "express";
import converterRoutes from './routes/converterRoutes.js';
const app = express();
const port = 3000;
import dotenv from 'dotenv';
dotenv.config();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.use('/', converterRoutes);

app.listen(port, () => {
    console.log(`Server started at Port ${port}`);
})