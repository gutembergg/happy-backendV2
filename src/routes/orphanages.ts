import { Router } from 'express'
import multer from 'multer'
import multerConfig from '../config/multer'
import OrphanageController from '../controllers/OrphanageController'

const orphanageRoutes = Router()
const uploads = multer(multerConfig)

const orphanagesController = new OrphanageController()

orphanageRoutes.get('/', orphanagesController.index)
orphanageRoutes.get('/:id', orphanagesController.show)
orphanageRoutes.post('/', uploads.array('images'), orphanagesController.create)

export default orphanageRoutes
