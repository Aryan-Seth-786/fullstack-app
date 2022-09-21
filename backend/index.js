import express from 'express'
import cors from 'cors'
import Router from './routes/routes.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use(Router)
app.listen(5000,()=>{
    console.log('server running on localhost:5000');
})
/* http://127.0.0.1:5173/ */