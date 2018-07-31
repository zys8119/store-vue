import axios from 'axios'

export default function (config) {
  const rootUrl = $$rootUrl
  config.url = rootUrl + config.url
  if (config.fullUrl) {
    config.url = config.fullUrl
  }
  return axios(config)
}
