import { getStrapiURL } from "./api";

export function getStrapiMedia(media, option) {
  let { url } = ""
  option === "component" ? { url } = media.data[0].attributes : { url } = media.data.attributes

  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
