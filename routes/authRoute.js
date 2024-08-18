import express from 'express'
import { regiseterController, loginController } from '../controller/authController.js'
//router object
const router = express.Router()

//routes
// REGISTER || POST
router.post('/regiseter', regiseterController)

// LOGIN || POST
router.post('/login', loginController)
//export 
export default router