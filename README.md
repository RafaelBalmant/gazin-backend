# Hello Stranger

#### Introdução


Muito obrigado por separar um tempo para ver meu repositório, saiba que esse código aqui gerado foi feito pela minha melhor e mais recente versão. Talvez eu tenha deixado passar alguns bugs, mas fazer o'que, foi pouco tempo! 

Queria agradecer também a oportunidade, nunca tinha participado de um desafio como esse para falar a verdade, gostei muito, mas vamos para oque interessa!

#### Sobre o backend

No backend usei NODEJS com Typescript, também usei o ORM prisma!

#### Como roda o backend

Você deve ter o docker instalado e o docker compose também para rodar o banco de dados, depois é somente rodar o comando docker-compose -d 

Para rodar o backend você deve instalar as deps usando npm install ou yarn e depois configurar a URL do DATABASE_URL no .env nesse padrão

Para gerar o seu .env você deve rodar o comando 

npx prisma generate

postgres://[username]:[password]@localhost:[port]/postgres

obs: o usuario é postgres e a senha é 123456

Depois rodar as migrate para que as tabelas possam ser criadas:

yarn prisma migrate dev

E o sistema estará pronto para uso! Qualquer dúvida estou à disposição nos contatos




