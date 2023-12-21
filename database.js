const { MongoClient } = require('mongodb');
const password = 'UtSaV@0712#';
const encodedPassword = encodeURIComponent(password);

const uri = `mongodb+srv://utsav0712:${encodedPassword}@cluster-1.9to0rll.mongodb.net/?retryWrites=true&w=majority`;
        
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db();
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

module.exports = connectToDatabase;
