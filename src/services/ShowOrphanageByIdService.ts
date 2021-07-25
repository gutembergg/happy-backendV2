import Orphanage from '../models/Orphanage'
import IOrphanageRepository from '../repositories/interfaces/IOrphanageRepository'

class ShowOrphanageByIdService {
  private _orphanageRepository: IOrphanageRepository

  constructor(orphanageRepository: IOrphanageRepository) {
    this._orphanageRepository = orphanageRepository
  }

  public async execute(id: string): Promise<Orphanage | undefined> {
    const orphanage = await this._orphanageRepository.findById(id)

    return orphanage
  }
}

export default ShowOrphanageByIdService
