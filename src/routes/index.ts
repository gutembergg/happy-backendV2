import { Router } from 'express'
import orphanageRoutes from './orphanages'

const routes = Router()

const prefixRoutes = '/api'

routes.use(`${prefixRoutes}/orphanages`, orphanageRoutes)

export default routes
