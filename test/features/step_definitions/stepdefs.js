const { Given, When, Then, AfterAll } = require('cucumber');
const { expect } = require('chai');
const axios = require("axios");

Given(`Eu devo me cadastrar na plataforma utilizando o nome {string} {string} com o email {string} e a senha {string} e com o nome de usuario {string}`, { timeout: 2 * 5000 }, async function (firstName, lastName, email, password, username) {
    try {
        let response = (await axios.post("http://localhost:3001/users/new", {
            firstName, lastName, email, password, username
        }));
        this.user = response.data;
        return true;
    } catch (err) {
        throw new Error(err.response.data);
    }
});

Then('Eu devo receber uma confirmação dos dados gravados e seu identificador', { timeout: 2 * 5000 }, async function () {
    let fields = ['firstName', 'lastName', 'email', 'username', '_id', 'todo', 'createdAt'];
    fields.forEach(field => {
        if (!(field in this.user)) {
            throw new Error({ message: "O usuário não foi gravado corretamente" });
        }
    })
});

Then('Eu devo logar no sistema com username {string} e senha {string}', { timeout: 2 * 5000 }, async function (username, password) {
    try {
        let response = await axios.post("http://localhost:3001/login", {
            username, password
        });
        this.token = response.data;
        return true;
    } catch (err) {
        throw new Error(err.response.data);
    }
});

Then('Eu devo excluir a conta criada', { timeout: 2 * 5000 }, async function () {
    await axios.delete("http://localhost:3001/users/delete", {
        data: {
            user_id: this.user._id
        }
    });
    return true;
});