import express from 'express'
import userAuth from '../middlewares/authMiddleware.js'
import { createJobController, getAllJobsController , updateJobController, deleteJobController, jobStatsController} from '../controller/jobsController.js'
const router = express.Router()

//routes
//CREATE JOB || POST
router.post('/create-job', userAuth, createJobController)
//GET JOBS || GET
router.get('/get-job', userAuth, getAllJobsController)
//UPDATE JOBS || PATCH
router.patch('/update-job/:id', userAuth, updateJobController)
//DELETE JOBS || DELETE
router.delete('/delete-job/:id', userAuth, deleteJobController)
//JOBS STATS || GET
router.get('/job-stat', userAuth, jobStatsController)

export default router