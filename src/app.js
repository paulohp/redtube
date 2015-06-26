import { install } from 'source-map-support';
import request from 'request';
import qs from 'qs';
install();

const baseUrl = 'http://api.redtube.com/?data=redtube.';
export default class Redtube {
  constructor(properties) {
    this.properties = properties;
  }

  search(opts) {
    var output = this.properties.output+'&';
    var querystring = qs.stringify(opts);
    request.get(baseUrl+'Videos.searchVideos&output='+output+querystring, (err, body, response) => {
      console.log(err, body, response);
    });
  }
}