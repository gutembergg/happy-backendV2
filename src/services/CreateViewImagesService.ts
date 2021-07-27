import IOrphanageRepository from '../repositories/interfaces/IOrphanageRepository'
import imagesViews from '../views/imagesViews'

class CreateViewImageService {
  private _orphanageRepository: IOrphanageRepository

  constructor(
    orphanageRepository: IOrphanageRepository,
    headerHost: string,
    originalURL: string
  ) {
    this._orphanageRepository = orphanageRepository
  }

  public execute() {
    const views = imagesViews.renderMany
    return {}
  }
}

export default CreateViewImageService
