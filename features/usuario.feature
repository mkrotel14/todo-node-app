Feature: Login
   Login e Cadastro de usuário.
   validação de dados.

Scenario Outline: Login
   Given Eu devo me cadastrar na plataforma utilizando o nome "<firstname>" "<lastname>" com o email "<email>" e a senha "<password>" e com o nome de usuario "<username>"
   Then Eu devo receber uma confirmação dos dados gravados e seu identificador
   Then Eu devo logar no sistema com username "<username>" e senha "<password>"

Examples:
   | firstname        | lastname           | email                | password          | username                  | 
   | Igorzao          | Ferreira           | igor@igor.com        | teste123          | igorpraxedes              | TRUE
   | Igor             | fer                | igor@igor.com        | teste123          | igorpraxedes              | TRUE
   | Igorzão          | fer                | igor@igor.com        | teste123          | igorpraxedes              | TRUE
   | Igorzão          | fer                | igorigor.com         | teste123          | igorpraxedes              | FALSE
   | Igorzão          |                   | igor@igor.com         | teste123          | igorpraxedes              | FALSE
   | Igorzão          | ferreira           | igorigor.com         | teste123          | igorpraxedes              | FALSE
   | Igor             | ferreira2          | igor@igor.com        | teste123          | igorpraxedes              | TRUE
   | Igorzão          | ferreira2          | igor@igor.com        | testeeee          | igorpraxedes              | FALSE
   | Igorzão          | ferreira2          | igor@igor.com        | 123456            | igorpraxedes              | FALSE
   | Igorzão          | ferreira2          | igor@igor.com        | teste1234         |                           | FALSE