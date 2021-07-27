import { getRepository, Repository } from 'typeorm'
import CreateOrphanageImageDTO from '../../dtos/CreateOrphanageImageDTO'
import Image from '../../models/Image'
import IImageOrphanage from '../interfaces/IImageOrphanage'

class ImageOrphanagerepository implements IImageOrphanage {
  private _ormRepository: Repository<Image>

  constructor() {
    this._ormRepository = getRepository(Image)
  }

  public async create({
    path,
    orphanage_id
  }: CreateOrphanageImageDTO): Promise<Image> {
    const images = this._ormRepository.create({
      path,
      orphanage_id
    })
    await this._ormRepository.save(images)

    return images
  }
}

export default ImageOrphanagerepository
