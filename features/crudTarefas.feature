Feature: Editar Tarefa
   Editar Tarefa

Scenario Outline: Editar Tarefa
   Given Eu devo me cadastrar na plataforma utilizando o nome "<firstname>" "<lastname>" com o email "<email>" e a senha "<password>" e com o nome de usuario "<username>"
   Then Eu devo logar no sistema com username "<username>" e senha "<password>"
   Then Eu devo cadastrar uma tarefa com o conteudo "<contentTask>" e a data de finalização é "0" dia após da data atual
   Then Eu devo editar o conteúdo da tarefa criada para "<editedContentTask>"
   Then Eu devo editar a data da tarefa criada para uma data anterior a atual
   Then Eu devo excluir a tarefa criada


Examples: 
   | firstname          | lastname            | email               | password                | username         | contentTask            | editedContentTask      | 
   | Igor               | ferreira            | igor@igor.com       | teste123                | igorpraxedes     | Lavar o carro          | moto                   | TRUE
   | Igor               | f                   | igor@igor.com       | teste123                | igorpraxedes     | Lavar o carro          |                        | FALSE