var express = require('express')
var app = express()
var randomizer = require('./randomizer.js')
var sequelize = new sequelize('bfcarter_shortner', 'bfcarter_shorten', 'c92kfzmdlamn@2d',{
    host:'212.1.210.1',
    dialect:'mysql'
})

var Url = sequelize.define('url', {
    short: {
        type: sequelize.string,
    },
    long: {
        type:sequelize.string,
    }
}, {
    freezeTableName: true
}
})

app.listen(3000)