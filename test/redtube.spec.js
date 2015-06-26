import { expect } from 'chai';
import Redtube from '../src/app';

describe('Redtube', () => {
  let r;

  beforeEach(()=>{
    r = new Redtube({});
  });
  it('defaut output should be json', done => {
    expect(r.properties.output).to.equal('json');
    done();
  });

  it('should search by a term and return more than 10 values', done =>{
    r.search({search: 'Teen'}, (err, response) => {
      expect(err).to.be.a('null');
      expect(response['videos']).to.have.length.above(10);
      done();
    });
  });

  it('should return a video for the getVideoById', done => {
    r.getVideoById({video_id: 1147059}, (err, response) => {
      expect(err).to.be.a('null');
      expect(response).to.be.a('object');
      done();
    });
  });

  it('should return a embed video for the getVideoEmbedCode', done => {
    r.getVideoEmbedCode(1147059, (err, response) => {
      expect(err).to.be.a('null');
      expect(response).to.be.a('object');
      done();
    });
  });
});