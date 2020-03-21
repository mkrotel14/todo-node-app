Feature: Editar Tarefa
   Será adicionado uma quantidade de tarefas e elas devem ser listadas corretamente de acordo com a situação da tarefa.

Scenario: Listar Tarefas
   Given Eu devo me cadastrar na plataforma utilizando o nome "Igor" "Pancheski" com o email "igor@igor.com" e a senha "teste123" e com o nome de usuario "igorpancheski"
   Then Eu devo logar no sistema com username "igorpancheski" e senha "teste123"
   Then Eu devo cadastrar uma tarefa com o conteudo "Lavar o carro" e a data de finalização é "0" dia após da data atual
   Then Eu devo cadastrar uma tarefa com o conteudo "Buscar remédio" e a data de finalização é "1" dia após da data atual
   Then Eu devo cadastrar uma tarefa com o conteudo "Buscar Marmita" e a data de finalização é "0" dia após da data atual
   Then Eu devo finalizar a tarefa criada, a operação deverá ser "permitida"
   Then Deve ser listado as tarefas com o filtro "todos"
   Then Deve ser listado as tarefas com o filtro "finalizadas"
   Then Deve ser listado as tarefas com o filtro "pendentes"