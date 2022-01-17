const amqp = require('amqplib');

const amqpServer = 'amqp://localhost:5672';

let connection;
let channel;

const connect = async () => {
  try {
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue('csvFiles');
    await channel.assertQueue('csvContents');
    console.log('publisher connected');
  } catch (err) {
    console.error(err);
  }
};

const publishCsvFile = async (csvFile) => {
  try {
    channel.sendToQueue('csvFiles', Buffer.from(csvFile));
    console.log(`file enqueued successfully`);
  } catch (err) {
    console.error(err);
  }
};

const publishCsvContent = async (content) => {
  try {
    channel.sendToQueue('csvContents', Buffer.from(JSON.stringify(content)));
    console.log(`csv content enqueued successfully`);
  } catch (err) {
    console.error(err);
  }
};

const disconnect = async () => {
  await channel.close();
  await connection.close();
};

connect();

module.exports = {
  connect,
  disconnect,
  publishCsvFile,
  publishCsvContent,
};
