Feature: Cadastro de tarefas
   Cadastro de tarefas

Scenario Outline: Cadastrando tarefa para o próximo dia e tentando finalizar na data atual
   Given Eu devo me cadastrar na plataforma utilizando o nome "<firstname>" "<lastname>" com o email "<email>" e a senha "<password>" e com o nome de usuario "<username>"
   Then Eu devo logar no sistema com username "<username>" e senha "<password>"
   Then Eu devo cadastrar uma tarefa com o conteudo "<contentTodo>" e a data de finalização é "<afterNDays>" dia após da data atual
   Then Eu devo finalizar a tarefa criada, a operação deverá ser "<onUpdateResult>"

Examples:
   | firstname | lastname | email             | password | username | contentTodo | afterNDays | onUpdateResult |
   | Igor      | Ferreira | igor@igor.com.br  | senha123 | igorprx  | Dormir1      | 0         | permitida      | TRUE
   | Igor      | Ferreira | igor@igor.com.br  | senha123 | igorprx  | Dormir2      | 1         | negada         | TRUE
   | Igor      | Ferreira | igor@igor.com.br  | senha123 | igorprx  | Dormir3      | -1        | permitida      | FALSE
   | Igor      | Ferreira | igor@igor.com.br  | senha123 | igorprx  | Dormir4      | -1        | permitida      | TRUE
   | Igor      | Ferreira | igor@igor.com.br  | senha123 | igorprx  | Dormir4      | 2         | negada         | FALSE