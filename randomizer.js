var possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstyvwxyz0123456789'
function randomizer() {
	var randomText = ''
	for ( var i=0; i < 8: i++ )
		randomText += possibleCharacters. charAt(Math.floor(Math.random() *
		possibleCharacters.length))
		return randomText
}
module.exports = randomizer
