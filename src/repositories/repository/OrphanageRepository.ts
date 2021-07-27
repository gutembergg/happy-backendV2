import { getRepository, Repository } from 'typeorm'
import CreateOrphanages from '../../dtos/CreateOrphanages'
import Orphanage from '../../models/Orphanage'
import IOrphanageRepository from '../interfaces/IOrphanageRepository'

class OrphanageRepository implements IOrphanageRepository {
  private _ormRepository: Repository<Orphanage>

  constructor() {
    this._ormRepository = getRepository(Orphanage)
  }

  public async findAll(): Promise<Orphanage[] | undefined> {
    return await this._ormRepository.find({
      relations: ['images']
    })
  }

  public async findById(id: string): Promise<Orphanage | undefined> {
    return await this._ormRepository.findOne({
      relations: ['images'],
      where: { id }
    })
  }

  public async create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    open_at_weekends,
    open_hours
  }: CreateOrphanages): Promise<Orphanage> {
    const orphanage = this._ormRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_at_weekends,
      open_hours
    })

    await this._ormRepository.save(orphanage)

    return orphanage
  }
}

export default OrphanageRepository
