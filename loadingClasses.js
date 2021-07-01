// SET UP ENV FIRST AS INSTRUCTED HERE: https://firebase.google.com/docs/admin/setup
var admin = require('firebase-admin');
const fs = require('fs');
let classData = fs.readFileSync('./classNames2122Descs.json')
classData = JSON.parse(classData);
console.log(classData)
var admin = require("firebase-admin");

var serviceAccount = JSON.parse(fs.readFileSync("./xperiance-e2fd7-firebase-adminsdk-lj9mn-7ff772f996.json"));

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://xperiance-e2fd7-default-rtdb.firebaseio.com"
});

const firestore = admin.firestore()
let bulkWriter = firestore.bulkWriter()
let documentRef = firestore.collection('classes')

Object.keys(classData).forEach(e => {
	bulkWriter.create(documentRef.doc(classData[e].code), { name: e, desc: classData[e].desc })
		.then(f => {
			console.log(f + 'succeeded')
		})
		.catch(f => {
			console.log(f.message)
		})

})
bulkWriter.onWriteError((error) => {
	if (
		error.code === GrpcStatus.UNAVAILABLE &&
		error.failedAttempts < MAX_RETRY_ATTEMPTS
	) {
		return true;
	} else {
		console.log('Failed write at document: ', error.documentRef);
		return false;
	}
});
bulkWriter
	.onWriteResult((documentRef, result) => {
		console.log(
			'Successfully executed write on document: ',
			documentRef,
			' at: ',
			result
		);
	});
bulkWriter.close()
	.then(e => [
		console.log('done!')
	])
