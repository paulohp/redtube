import { install } from 'source-map-support';
import request from 'request';
install();

const baseUrl = 'http://api.redtube.com/?data=redtube.';
export default class Redtube {
  constructor(properties) {
    this.properties = properties;
  }

  search(opts) {
    request.get(baseUrl+'Videos.searchVideos&output='+this.properties.output+opts, (err, body, response) => {
      console.log(err, body, response);
    });
  }
}