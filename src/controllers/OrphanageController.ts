import { Request, Response } from 'express'
import Orphanage from '../models/Orphanage'
import OrphanageRepository from '../repositories/repository/OrphanageRepository'
import CreateOrphanagesService from '../services/CreateOrphanagesService'
import ShowOrphanageByIdService from '../services/ShowOrphanageByIdService'

class OrphanageController {
  public async index(req: Request, res: Response): Promise<Response> {
    const orphanageRepository = new OrphanageRepository()

    const orphanages = await orphanageRepository.findAll()

    return res.json(orphanages)
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const orphanageRepository = new OrphanageRepository()
    const orphanageByIdService = new ShowOrphanageByIdService(
      orphanageRepository
    )

    const orphanage = await orphanageByIdService.execute(id)

    return res.json(orphanage)
  }

  public async create(req: Request, res: Response): Promise<Response> {
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
      open_at_weekends
    })

    return res.status(201).json(orphanage)
  }
}

export default OrphanageController
