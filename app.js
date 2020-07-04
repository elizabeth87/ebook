const express = require('express');

const path = require('path');
// const stripe = require('stripe')(
//   'sk_test_51H0GcOLxRkLCpRxOvtOxGc7hYgj0KsSiLOblNBj6EKSq1Sxkz1Ixxd2jkEXjCWfwxNjTNV85LkrQo4Zya9SLkSwA00FA4NAGpn'
// );
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('.public', options));
// app.use('/public', express.static(path.join(__dirname, 'public')));

// Index Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public'));
});

const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
