import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const { url } = media.data.attributes;
  console.log(url)
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}