import IOrphanageRepository from '../repositories/interfaces/IOrphanageRepository'

interface IRequest {
  path: string
  orphanage_id: string
}

class UploasService {
  private _orphanageRepository: IOrphanageRepository

  constructor(orphanageRepository: IOrphanageRepository) {
    this._orphanageRepository = orphanageRepository
  }

  public async execute({ path, orphanage_id }: IRequest) {}
}
