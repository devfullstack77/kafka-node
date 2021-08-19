const { Kafka, logLevel } = require('kafkajs')
const params = require('../config/kafka')

/**
 * Export the configured Kafka instance
 */

const config = Object.assign({
    logLevel: logLevel.INFO,
    clientId: `clientId_${new Date().getTime().toString()}`,
    groupId: `groupId_${new Date().getTime().toString()}`,
}, params);

const kafka = new Kafka({
    brokers: [config.brokers],
    ssl: config.ssl,
    sasl: config.sasl,
    logLevel: logLevel.INFO
})

module.exports = {
    config,
    kafka
}
