const { kafka, config } = require('../common/connection')

/**
 * Displaying the message
 * @param  {} msg 
 */
async function readMsg(msg) {
  console.log(`[ CONSUMER ] [ TOPIC: ${config.topic}] Read message`, msg)
  return msg
}

/**
 * Worker to consume Kafka messages from a specific topic
 */
async function run() {

  const consumer = kafka.consumer({ groupId: config.groupId })
  const msg = {
    key: null,
    topic: null,
    value: null,
    headers: null,
    timestamp: null,
    partition: null
  }
  try {
    await consumer.subscribe({ topic: config.topic, fromBeginning: true })
    await consumer.run({
      eachMessage: async function ({ topic, partition, message }) {
        msg.topic = topic
        msg.key = message.key
        msg.partition = partition
        msg.headers = message.headers
        msg.timestamp = message.timestamp
        msg.value = message.value.toString()
        readMsg(msg)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  run
}