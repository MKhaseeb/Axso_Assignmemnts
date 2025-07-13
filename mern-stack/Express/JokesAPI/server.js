
const express = require("express");
const{faker}=require('@faker-js/faker')
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = 8000;
// req is short for request
// res is short for response

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const createUser = () => {
  const newFakeUser = {
    _id: faker.string.uuid(),
    fisrtName: faker.person.firstName(),
    lastName:faker.person.lastName(),
    phoneNumber:faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
  return newFakeUser;
};

const newFakeUser = createUser();
app.get("/api/user", (req, res) => {
    res.json( newFakeUser );
});

const createCompany = () => {
  const newFakeCompany = {
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address:faker.location.streetAddress(),
    city:faker.location.city(),
    state:faker.location.state(),
    zipCode:faker.location.zipCode(),
    country:faker.location.country(),
  };
  return newFakeCompany;
};

const newFakeCompany = createCompany();
app.get("/api/company", (req, res) => {
    res.json( newFakeCompany );
});


const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
