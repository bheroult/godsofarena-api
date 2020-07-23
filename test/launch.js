const expect = require('chai').expect;
const config = require(import config from  'config';
import server from '../src/index';
const env = require("../app/env");

describe('Server', ()=>{
    it('tests that server is running current port', async()=>{
        expect(server.port).to.equal(config.get('port'))
   
    })
});