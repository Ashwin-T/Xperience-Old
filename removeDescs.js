
const fs = require('fs');
let out = {}
let classNames2122 = JSON.parse(fs.readFileSync('./classNames2122Descs.json'))
Object.keys(classNames2122).forEach(className => {
	out[className] = {code:classNames2122[className].code}
});
fs.writeFile('classNames2122.json', JSON.stringify(out), error=>{
	error && console.log(error)
});