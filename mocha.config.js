require('babel-register')();

const chai = require('chai');
const chaiImmutable = require('chai-immutable');
const chaiEnzyme = require('chai-enzyme');

chai.use(chaiImmutable);
chai.use(chaiEnzyme());
