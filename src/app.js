import { install } from 'source-map-support';
import request from 'request';
import qs from 'qs';
import polyfill from 'babel/polyfill';
install();

const baseUrl = 'http://api.redtube.com/?data=redtube.';
export default class Redtube {
  constructor(properties) {
    this.properties = properties;
  }

  search(opts, cb) {
    let output = this.properties.output+'&';
    let querystring = qs.stringify(opts);
    request.get(baseUrl+'Videos.searchVideos&output='+output+querystring, (err, body, response) => {
      if(cb){
        if (err) {
          return cb(err, null);
        }
        return cb(null, response);
      }
    });
  }

  getVideoById(opts, cb) {
    let output = this.properties.output+'&';
    let querystring = qs.stringify(opts);

    request.get(baseUrl+'Videos.getVideoById&output='+output+querystring, (err, body, response) => {
      if(cb){
        if (err) {
          return cb(err, null);
        }
        return cb(null, response);
      }
    });
  }
}