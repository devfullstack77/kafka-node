# Projeto Modelo NodeJs + KafkaJs 


[![GitHub issues](https://img.shields.io/github/issues/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/issues) [![GitHub forks](https://img.shields.io/github/forks/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/network) [![GitHub stars](https://img.shields.io/github/stars/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/stargazers) [![GitHub license](https://img.shields.io/github/license/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/blob/main/LICENSE) <img src="https://img.shields.io/badge/coverage-34.3-brightgreen"/>


## Descrição 
Projeto template para a utilização do Kafka com Node Js.

## Objetivo 
Um template de uso rápido e fácil para iniciar uma plataforma distribuída de mesnsagens.


## 🚀 Tecnologias utilizadas
- [Node.js](https://nodejs.org/en/) 
- [KafkaJs](https://kafka.js.org/) 
- [Jest](https://jestjs.io/pt-BR/)
- [Docker](https://docs.docker.com/)
- [Confluent](https://docs.confluent.io/5.0.0/installation/docker/docs/installation/single-node-client.html)


## 🎲 Instalação

1- Iniciando o ambiente kafka-single-node com o docker-compose
```bash
# acessar a pasta 
├── docker
│   └── kafka-single-node
│       └── docker-compose.yml

# inicie o compose com o comando abaixo 
$ docker-compose up -d

# você deve ver o seguinte no console 
$ Starting kafka-single-node_zookeeper_1 ... done
$ Starting kafka-single-node_kafka_1     ... done

# digite o comando abaixo para listar o compose 
$  docker-compose ps

# resultado
            Name                         Command            State                    Ports                  
------------------------------------------------------------------------------------------------------------
kafka-single-node_kafka_1       /etc/confluent/docker/run   Up      0.0.0.0:9092->9092/tcp,:::9092->9092/tcp
kafka-single-node_zookeeper_1   /etc/confluent/docker/run   Up      2181/tcp, 2888/tcp, 3888/tcp  
```

2- Instalando as dependências da aplicação 

```bash
$ npm install
```



## ✨ Iniciando a aplicação

> Importante !
> Abrir um terminal para o Producer e outro para o Consumer, para visualizar a mensagem sendo consumida.

#### ✅ Producer
```bash
# iniciar o producer  
$ npm run start:pc

# aguardando a digitação
nodejs-kafka@1.0.0 start:pc
node ./src/producer/console.js

# enviando mensagem
Testando o envio pelo console

# retorno da mensagem enfileirada
[ QUEUED ] : {"event":{"created":"2021-08-19T03:18:02.325Z","topic":"my-topic"},"error":null}
```

#### ✅ Consumer
```bash
# iniciando o consumer
$ npm run start:consumer

# obtendo as mensagens
[ CONSUMER ] [ TOPIC: my-topic] Read message {
  key: null,
  topic: 'my-topic',
  value: '"Testando o envio pelo console"',
  headers: {},
  timestamp: '1629343492886',
  partition: 0
}
```



## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Configuração
No arquivo config/kafka.js, fica alguns atributos de configurção como:
* tópico 
* broker

```bash
├── config
│   └── kafka.js

# Conteúdo do arquivo 
module.exports = {
    ssl: process.env.SSL || false,
    sasl: process.env.SASL || false,
    topic: process.env.TOPIC || 'my-topic',
    brokers: process.env.BROKER || 'localhost:9092',
}
```

 ## Estrutura de pastas 

```bash
├── docker
│   └── kafka-single-node
│       └── docker-compose.yml
├── package.json
├── package-lock.json
├── README.md
├── Roteiro.js
└── src
    ├── common
    │   └── connection.js
    ├── config
    │   └── kafka.js
    ├── consumer
    │   ├── index.js
    │   └── start.js
    ├── producer
    │   ├── console.js
    │   └── index.js
    └── test
        ├── consumer.test.js
        └── producer.test.js
```
