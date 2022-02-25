# Hello 

#### Introdução


Muito obrigado por separar um tempo para ver meu repositório, saiba que esse código aqui gerado foi feito pela minha melhor e mais recente versão. Talvez eu tenha deixado passar alguns bugs, mas fazer o'que, foi pouco tempo! 

Queria agradecer também a oportunidade, nunca tinha participado de um desafio como esse para falar a verdade, gostei muito, mas vamos para oque interessa!

#### Sobre o backend

No backend usei NODEJS com Typescript, também usei o ORM prisma!

#### Executando o backend

Primeiramente devemos executar o banco de dados, para isso você deve ter o docker e docker compose instalado em sua maquina e executar o seguinte comando
 - docker-compose up -d

Depois disso devemos instalar as dependencias do backend executando o seguinte comando: 
 - yarn

Depois devemos executar as configurações do prisma, primeiramente vamos criar o arquivo .env com essa const:
 - DATABASE_URL="postgres://postgres:123456@localhost:5432/postgres"

Depois devemos instalar o client do prisma:
 - yarn add @prisma/client prisma -G

Depois devemos rodar o comando para o prisma identificar essa variavel: 
 - npx prisma generate

E por fim rodar as migrates:
 - npx prisma migrate dev

Depois disso devemos executar o backend e ele estará pronto para uso na porta 3333:
- yarn dev  
