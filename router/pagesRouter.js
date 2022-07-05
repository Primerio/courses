import {Router} from "express"
import * as pagesController from '../controllers/pagesController.js'

const pagesRouter = new Router()

pagesRouter.get('/', pagesController.homePage)

export default pagesRouter