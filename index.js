const instagramBot = require('./instagramBot.js')

async function main(){
	await instagramBot.initialize();
	await instagramBot.login('','');
	// debugger
}

main();