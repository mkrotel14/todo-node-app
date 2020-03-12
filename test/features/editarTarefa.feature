Feature: Editar Tarefa

Scenario: Editar Tarefa
   Given Eu devo me cadastrar na plataforma utilizando o nome "Igorzão" "Ferreira" com o email "igor@igor.com" e a senha "teste123" e com o nome de usuario "igorpancheski"
   Then Eu devo logar no sistema com username "igorpancheski" e senha "teste123"
   Then Eu devo cadastrar uma tarefa com o conteudo "Dar banho no cachorro" e a data de finalização é um dia após da data atual
   Then Eu devo editar o conteúdo da tarefa criada para "Dar banho no gato"
   Then Eu devo editar a data da tarefa criada para uma data anterior a atual e devo receber um erro