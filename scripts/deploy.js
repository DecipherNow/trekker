const archiver = require('archiver');
const aws = require('aws-sdk');
const fs = require('fs');
const tmp = require('tmp');

// Writes a zip file with the contents of this project to a stream and invokes the callback when done.
function archive(stream, callback) {
	stream.on('close', callback)
	var archive = archiver('zip', { zlib: { level: 9 } })
	archive.pipe(stream)
	archive.directory('.', false)
	archive.finalize();
}

// Creates a temporary file and invokes the callback with the path.
function temporary(callback) {
	tmp.file(function (error, path, _, _) {
		if (error) { throw Error(error); }
		callback(path);
	});
}

// Uploads a file to S3 and invokes the callback when done.
function upload(stream, callback) {
	var s3 = new aws.S3({ accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY });
	s3.upload({ Body: stream, Bucket: process.env.AWS_BUCKET, Key: 'trekker/trekker-' + version() + '.zip' }).send(callback);
}

// Reads the version from the VERSION file.
function version() {
	return fs.readFileSync('VERSION', 'utf8').trim();
}

temporary(function (path) {

	console.log("Generating archive...");

	var writer = fs.createWriteStream(path);
	archive(writer, function () {

		console.log("Uploading archive...");

		var reader = fs.createReadStream(path);
		upload(reader, function () {
			console.log("Complete");
		})
	})
});
