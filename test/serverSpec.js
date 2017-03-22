process.env.NODE_ENV = "test";

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);


describe('/GET terms', () => {
      it('it should GET a render form with text', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.should.have.property('text');
                res.text.should.not.equal('')
              done();
            });
      });
});

describe('/GET terms', () => {
      it('it should GET all the terms', (done) => {
        chai.request(server)
            .get('/wheel')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.should.have.property('text');
                res.body.should.have.length(1)
              done();
            });
      });
});
