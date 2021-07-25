import Orphanage from '../models/Orphanage'
import IOrphanageRepository from '../repositories/interfaces/IOrphanageRepository'

interface Request {
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  open_hours: string
  open_at_weekends: boolean
}

class CreateOrphanagesService {
  private _orphanageRepository: IOrphanageRepository

  constructor(orphanageRepository: IOrphanageRepository) {
    this._orphanageRepository = orphanageRepository
  }

  public async execute({
    name,
    latitude,
    longitude,
    about,
    instructions,
    open_hours,
    open_at_weekends
  }: Request): Promise<Orphanage> {
    const orphanage = await this._orphanageRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_hours,
      open_at_weekends
    })

    console.log('id-orphanage: ', orphanage.id)

    return orphanage
  }
}

export default CreateOrphanagesService
