import ICreateOrphanageDTO from '../../dtos/CreateOrphanages'
import Orphanage from '../../models/Orphanage'

export default interface IOrphanage {
  findAll(): Promise<Orphanage[] | undefined>
  findById(id: string): Promise<Orphanage | undefined>
  create(createOrphanageDTO: ICreateOrphanageDTO): Promise<Orphanage>
}
