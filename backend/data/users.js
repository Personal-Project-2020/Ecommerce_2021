const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Filimon',
    email: 'filimon@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Lwam',
    email: 'lwam@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

module.exports = users;
