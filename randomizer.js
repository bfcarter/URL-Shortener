var possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstyvwxyz0123456789'; //possible characters for randomizer

//randomizer function = the math
function randomizer() {
	var randomText = ''
	for ( var i=0; i < 8: i++ )
		randomText += possibleCharacters. charAt(Math.floor(Math.random() *
		possibleCharacters.length))
		return randomText
}

//exporting randomizer so it can be used again
module.exports = randomizer

