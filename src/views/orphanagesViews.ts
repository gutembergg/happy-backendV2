import Orphanage from '../models/Orphanage'

export default {
  render(orphanage: Orphanage | undefined) {
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
      updated_at: orphanage?.updated_at
    }
  },

  renderMany(orphanages: Orphanage[] | undefined) {
    return orphanages?.map(orphanage => this.render(orphanage))
  }
}
