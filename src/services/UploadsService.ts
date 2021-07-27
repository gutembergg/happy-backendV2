import Image from '../models/Image'
import IImageOrphanage from '../repositories/interfaces/IImageOrphanage'

interface IRequest {
  path: string
  orphanage_id: string
}

class UploasService {
  private _imagesRepository: IImageOrphanage

  constructor(imagesRepository: IImageOrphanage) {
    this._imagesRepository = imagesRepository
  }

  public async execute({ path, orphanage_id }: IRequest): Promise<Image> {
    const image = await this._imagesRepository.create({ path, orphanage_id })

    return image
  }
}

export default UploasService
