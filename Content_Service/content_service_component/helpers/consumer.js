const amqp = require('amqplib');
const fs = require('fs');
const path = require('path');
const contentServices = require('../content_services');
const contentServiceDAL = require('../content_service_DAL');
const deleteAsset = require('../assets/deleteAsset');

let connection;
let channel;
const amqpServer = 'amqp://localhost:5672';

const connect = async () => {
  try {
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue('csvFiles');
    await channel.assertQueue('csvContents');
    console.log('consumer is listening...');
  } catch (err) {
    // console.error(err);
  }

  channel.consume('csvFiles', async (csvFile) => {
    const file = csvFile.content.toString();
    if (file) {
      try {
        await contentServices.scrapeDataFromCSV(file);
        channel.ack(csvFile);
        await deleteAsset(file);
      } catch (err) {
        // console.error(err);
      }
    }
  });

  channel.consume('csvContents', async (csvContent) => {
    const content = JSON.parse(csvContent.content.toString());
    if (content) {
      try {
        await contentServiceDAL.saveCsvData(content);
        channel.ack(csvContent);
      } catch (err) {
        console.error(err);
      }
    }
  });
};

connect();
