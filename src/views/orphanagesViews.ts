import Orphanage from '../models/Orphanage'
import imagesViews from './imagesViews'

export default {
  render(
    orphanage: Orphanage | undefined,
    headerHost: string,
    originalURL: string
  ) {
    return {
      id: orphanage?.id,
      name: orphanage?.name,
      latitude: orphanage?.latitude,
      longitude: orphanage?.longitude,
      about: orphanage?.about,
      instructions: orphanage?.instructions,
      open_hours: orphanage?.open_hours,
      open_at_weekends: orphanage?.open_at_weekends,
      created_at: orphanage?.created_at,
      updated_at: orphanage?.updated_at,
      images: imagesViews.renderMany(orphanage?.images, headerHost, originalURL)
    }
  },

  renderMAny(
    orphanages: Orphanage[] | undefined,
    headerHost: string,
    originalURL: string
  ) {
    return orphanages?.map(orphanage =>
      this.render(orphanage, headerHost, originalURL)
    )
  }
}
