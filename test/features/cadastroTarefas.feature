Feature: Cadastro de tarefas

Scenario: Adicionar Tarefa
   Given Eu devo me cadastrar na plataforma utilizando o nome "Igorzão" "Ferreira" com o email "igor@igor.com" e a senha "teste123" e com o nome de usuario "igorpancheski"
   Then Eu devo logar no sistema com username "igorpancheski" e senha "teste123"
   Then Eu devo cadastrar uma tarefa com o conteudo "Lavar o carro" e a data de finalização é um dia após da data atual
   Then Eu devo finalizar a tarefa criada, a operação não deverá ser permitida