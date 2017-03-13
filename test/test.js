const assert =require ('assert');
const Randomizer = require('../randomizer.js');
const sequelize =require('sequelize');
const sequelize = new sequelize('bfcarter_shortner',
'bfcarter_shorten', 'c92kfZmdlamn@2d', {
host: '212.1.210.1',
dialect: 'mysql',
});
//url shortner
const Url = sequelize.define('url', {
    short: {
        type: sequelize.string,
    },
    long: {
        type:sequelize.string,
    }
}, {
    freezeTableName: true
});

describe('urls', () => {
  describe('/api/makeurl', () => {
    it('should return random url id', () => {
      const random = Randomizer();
      const longurl = 'https://google.com';

      Url.create({
        short: random,
        long: longurl,
      });

      assert.equal(true, random.length > 0);
    });
  });
  describe('/api/gourl/:short', () => {
    it('should find the destination url', (done) => {
      const random = Randomizer();
      const longurl = 'https://google.com';
//create url
      Url.create({
        short: random,
        long: longurl,
      }).then(() => {
        Url.findOne({
          where: {
            short: random,
          },
        }).then(() => {
          done();
        });
      });
    });
  });
}