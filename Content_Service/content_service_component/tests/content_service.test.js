const request = require('supertest');
const mongoose = require('mongoose');
const path = require('path');
const app = require('../../app');
const contentServiceDAL = require('../content_service_DAL');

const success = {
  status: 'success',
};

afterAll(() => {
  mongoose.connection.close();
});

test('new contents test', async () => {
  const data = await contentServiceDAL.queryNewContents();
  console.log(data);
  expect(data).not.toBeFalsy();
});

// test('testing postCSV api route', async () => {
//   const data = await request(app)
//     .post('/postContent')
//     .attach('csv_file', path.resolve(__dirname, './testing.csv'))
//     .expect(200);
//   console.log(data.body);
// });

// test('testing DAL', async () => {
//   const a = await contentServiceDAL.saveCsvData({
//     title: 'three point someone',
//     story: 'about three students',
//     user_id: '12333',
//     date_published: '2011-10-22T00:00:00.000Z',
//   });
//   expect(a).toMatchObject(success);
// });
