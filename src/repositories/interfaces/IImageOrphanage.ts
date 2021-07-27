import CreateOrphanageImageDTO from '../../dtos/CreateOrphanageImageDTO'
import Image from '../../models/Image'

export default interface IImageOrphanage {
  create(createOrphanageImageDTO: CreateOrphanageImageDTO): Promise<Image>
}
