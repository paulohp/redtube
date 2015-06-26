import { install } from 'source-map-support';
import request from 'request';
import qs from 'qs';
install();

const baseUrl = 'http://api.redtube.com/?data=redtube.';
export default class Redtube {
  constructor(properties) {
    if(!properties || properties.output === undefined)
      properties.output = 'json'
    this.properties = properties;
  }

  search(opts, cb) {
    let output = this.properties.output+'&';
    let querystring = qs.stringify(opts);
    let url = `${baseUrl}Videos.searchVideos&output=${output}${querystring}`;

    request.get(url, (err, response, body) => {
      if(cb){
        if (err) {
          return cb(err, null);
        }
        return cb(null, JSON.parse(response.body));
      }
    });
  }

  getVideoById(opts, cb) {
    let output = this.properties.output+'&';
    let querystring = qs.stringify(opts);
    let url = `${baseUrl}Videos.getVideoById&output=${output}${querystring}`;

    request.get(url, (err, response, body) => {
      if(cb){
        if (err) {
          return cb(err, null);
        }
        return cb(null, JSON.parse(response.body));
      }
    });
  }
}