# Hello Stranger

#### Introdução


Muito obrigado por separar um tempo para ver meu repositório, saiba que esse código aqui gerado foi feito pela minha melhor e mais recente versão. Talvez eu tenha deixado passar alguns bugs, mas fazer o'que, foi pouco tempo! 

Queria agradecer também a oportunidade, nunca tinha participado de um desafio como esse para falar a verdade, gostei muito, mas vamos para oque interessa!

#### Sobre o frontend

O frontend dessa aplicação foi desenvolvido com nextJS, eu procurei usar packages somente no que fosse necessário, mas também quis mostrar um desenvolvimento agil que é oque as empresas precisam hoje em dia. Então você vai encontrar tanto códigos vanilla como uns NPM da vida, sobre os pacotes podemos listar:
 -  Material UI
 -  Material Icons
 -  React Hook Form
 -  SweetAlerts 2 

Procurei usar o gerenciamento de estado vanilla do react que é o use context pois não achei necessário o uso de redux, e também me concentrei em deixar a aplicação com um container global, para simular mesmo um software simples.

#### Como roda o frontend

Você deve ter o docker instalado e o docker compose também para rodar o banco de dados, depois é somente rodar o comando docker-compose -d 

Para rodar o backend você deve instalar as deps usando npm install ou yarn e depois configurar a URL do DATABASE_URL no .env nesse padrão

postgres://[username]:[password]@localhost:[port]/postgres

Depois rodar as migrate para que as tabelas possam ser criadas:

yarn prisma migrate dev

E o sistema estará pronto para uso! Qualquer dúvida estou à disposição nos contatos


