import { install } from 'source-map-support';
import { request } from 'request';
install();

export default class Redtube {
  const baseUrl = 'http://api.redtube.com/?data=redtube.';
  search(opts) {
    request(baseUrl+'Videos.searchVideos'+opts)
  }
}