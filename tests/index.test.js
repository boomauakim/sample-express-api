const chai = require('chai');
const chaiHttp = require('chai-http');
const { after, describe, it } = require('mocha');

const server = require('../src/app.js');

chai.use(chaiHttp);

const { expect } = chai;

describe('Routes', () => {
  describe('index', () => {
    it('should response the GET method', () => {
      chai
        .request(server)
        .get('/')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.type).to.equal('application/json');
          expect(res.body.message).to.equal('Hello World');
        });
    });
  });
});

after(() => {
  server.close();
});
