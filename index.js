import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(express.static(path.join(__dirname,"./views")))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "./views/index.html"))
})

app.listen(4000,()=>console.log('Le serveur est en marche...'))