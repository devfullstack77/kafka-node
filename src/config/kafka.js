
module.exports = {
    ssl: process.env.SSL || false,
    sasl: process.env.SASL || false,
    topic: process.env.TOPIC || 'my-topic',
    brokers: process.env.BROKER || 'localhost:9092',
}