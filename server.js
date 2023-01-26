const { faker } = require("@faker-js/faker");

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//This are variables with fake data
class Usuario {
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.telephone = faker.phone.number("+595-98#-###-###");
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Empresa {
  constructor() {
    this.name = faker.company.name();
    this.direction = {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    };
  }
}

app.get("/api/users/new", (req, res) => {
  newUser = new Usuario();
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  let newCompany = new Empresa();
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  newUser = new Usuario();
  newCompany = new Empresa();
  res.json({ user: newUser, company: newCompany });
});

const server = app.listen(8000, () => {
  console.log(`Listening at Port ${server.address().port}`);
});
