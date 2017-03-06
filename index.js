var express = require('express'); //variable express = express
var app = express() ;
var randomizer = require('./randomizer.js'); //the variable randomizer requires randomizer.js function  
var sequelize = new sequelize('bfcarter_shortner', 'bfcarter_shorten', 'c92kfzmdlamn@2d',{
    host:'212.1.210.1',
    dialect:'mysql'
})
//shorten url
var Url = sequelize.define('url', {
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
	var random = randomizer()
	var longurl = req.query.longurl
//creating url	
	url.create({
		short:random,
		long: longurl
		})
		res.send(random) //send random url 
app.listen(3000) //listen on 3000
})