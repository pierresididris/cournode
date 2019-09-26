const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

(async function() {
  // Connection URL
  const url = 'mongodb://localhost:27017/myproject';
  // Database Name
  const dbName = 'myproject';
  const client = new MongoClient(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
  });

  try {
    // Use connect method to connect to the Server
	await client.connect();
	console.log("Connected correctly to server");


	const db = client.db(dbName);

	// Get the collection
	const col = db.collection('dates');

	// Insert multiple documents
	r = await col.insertMany([{ date: new Date() }]);

	// Get first two documents that match the query
	const docs = await col.find({}).toArray();
	console.log(docs)
  } catch (err) {
    console.log(err.stack);
  }

  client.close();
})();

//mongo:27017/test