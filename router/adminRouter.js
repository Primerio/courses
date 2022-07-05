import {Router} from "express"
import * as adminController from '../controllers/adminController.js'

const adminRouter = new Router()

adminRouter.get('/login', adminController.adminLogin)

export default adminRouter