import Image from '../models/Image'
import Orphanage from '../models/Orphanage'
import IImageOrphanage from '../repositories/interfaces/IImageOrphanage'
import IOrphanageRepository from '../repositories/interfaces/IOrphanageRepository'
import ImageOrphanagerepository from '../repositories/repository/ImageOrphanageRepository'
import UploasService from './UploadsService'

interface Request {
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  open_hours: string
  open_at_weekends: boolean
  images: Array<{
    path: string
    orphanage_id: string
  }>
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
    open_at_weekends,
    images
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

    const imageRepository = new ImageOrphanagerepository()
    const uploadImageService = new UploasService(imageRepository)

    images.map(async image => {
      return await uploadImageService.execute({
        path: image.path,
        orphanage_id: orphanage.id
      })
    })

    console.log('id-orphanage: ', orphanage.id)

    return orphanage
  }
}

export default CreateOrphanagesService
