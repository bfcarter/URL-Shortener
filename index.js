const express = require('express'); //variable express = express
const app = express() ;
const randomizer = require('./randomizer.js'); //the variable randomizer requires randomizer.js function  
const sequelize = new sequelize('bfcarter_shortner', 'bfcarter_shorten', 'c92kfzmdlamn@2d',{
    host:'212.1.210.1',
    dialect:'mysql'
})

const d = require("./debug.js")  //debugging
//shorten url
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


url.sync({force;false}).then(function (){
app.get('/api/makeurl', function (req,res) {
	const random = randomizer()
	const longurl = req.query.longurl
//creating url	
	url.create({
		short:random,
		long: longurl
		})
		d.debug("created " + random + " url")
		res.send(random) //send random url
		
		app.get(/'api/gourl/:short', function(req, res) {
		const random = randomizer()
		const short + req.params.short
		
		Url.findOne({
			where: {
				short: short
			}
		}).then(function(url) {
		d.debug("redirected to " + url.long)
		res.redirect(url.long)
		})
	})
app.listen(3000) //listen on 3000
})