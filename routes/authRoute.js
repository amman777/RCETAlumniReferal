import express from 'express'
import { regiseterController, loginController } from '../controller/authController.js'
import rateLimit from 'express-rate-limit'

//ip limiter
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max:100, 
    standardHeaders: true, 
    legacyHeaders: false,
})

const router = express.Router()
//routes
// REGISTER || POST
router.post('/regiseter', limiter,regiseterController)

// LOGIN || POST
router.post('/login',limiter, loginController)
//export 
export default router