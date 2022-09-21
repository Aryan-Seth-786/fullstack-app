import express from 'express'
const router = express.Router()

router.get('/',(req,res)=>{
    res.end('home page');
})
router.get('/about',(req,res)=>{
    res.end('about page')
})
export default router
