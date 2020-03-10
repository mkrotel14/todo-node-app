Feature: Cadastro de usuário
   Cadastro de usuário de validação de dados.

Scenario: Add a Todo
   Given Eu devo me cadastrar na plataforma utilizando o nome "Igorzão" "Ferreira" com o email "igor@igor.com" e a senha "teste123" e com o nome de usuario "igorpancheski"
   Then Eu devo receber uma confirmação dos dados gravados e seu identificador
   Then Eu devo logar no sistema com username "igorpancheski" e senha "teste123"
   Then Eu devo excluir a conta criada