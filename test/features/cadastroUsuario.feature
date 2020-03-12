Feature: Login
   Login e Cadastro de usuário.
   validação de dados.
Scenario: Login
   Given Eu devo me cadastrar na plataforma utilizando o nome "Igorzão" "Ferreira" com o email "igor@igor.com" e a senha "teste123" e com o nome de usuario "igorpancheski"
   Then Eu devo receber uma confirmação dos dados gravados e seu identificador
   Then Eu devo logar no sistema com username "igorpancheski" e senha "teste123"