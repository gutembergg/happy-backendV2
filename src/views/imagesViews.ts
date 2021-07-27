import Image from '../models/Image'

export default {
  render(image: Image | undefined, headerHost: string, originalURL: string) {
    return {
      id: image?.id,
      url: `http://${headerHost}${originalURL}/${image?.path}`
    }
  },

  renderMany(
    images: Image[] | undefined,
    headerHost: string,
    originalURL: string
  ) {
    return images?.map(image => this.render(image, headerHost, originalURL))
  }
}
