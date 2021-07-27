import { Request, Response } from 'express'
import Orphanage from '../models/Orphanage'
import OrphanageRepository from '../repositories/repository/OrphanageRepository'
import CreateOrphanagesService from '../services/CreateOrphanagesService'
import ShowOrphanageByIdService from '../services/ShowOrphanageByIdService'
import imagesViews from '../views/imagesViews'
import orphanagesViews from '../views/orphanagesViews'

class OrphanageController {
  public async index(req: Request, res: Response): Promise<Response> {
    const headerHost = String(req.headers.host)
    const originalURL = req.originalUrl

    const orphanageRepository = new OrphanageRepository()

    const orphanages = await orphanageRepository.findAll()

    return res.json(
      orphanagesViews.renderMAny(orphanages, headerHost, originalURL)
    )
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const headerHost = String(req.headers.host)
    const originalURL = req.originalUrl

    const orphanageRepository = new OrphanageRepository()
    const orphanageByIdService = new ShowOrphanageByIdService(
      orphanageRepository
    )

    const orphanage = await orphanageByIdService.execute(id)

    return res.json(orphanagesViews.render(orphanage, headerHost, originalURL))
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const requestImages = req.files as Express.Multer.File[]
    const images = requestImages.map(image => {
      return { path: image.filename, orphanage_id: '' }
    })

    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_hours,
      open_at_weekends
    } = req.body

    const orphanageRepository = new OrphanageRepository()
    const createOrphanageService = new CreateOrphanagesService(
      orphanageRepository
    )

    const orphanage = await createOrphanageService.execute({
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_hours,
      open_at_weekends,
      images
    })

    return res.status(201).json(orphanage)
  }
}

export default OrphanageController
