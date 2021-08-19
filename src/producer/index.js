const { kafka, config } = require('../common/connection')

/**
 * Post messages on a specific topic
 * @param  {} message value
 * return Json 
 */
async function run(message, topic) {

  const status = {
    event: {},
    error: null
  }

  const producer = kafka.producer()

  try {
    await producer.connect()
    await producer.send({
      topic: topic || config.topic,
      messages: [
        {
          value: JSON.stringify(message)
        }
      ]
    })

    status.event = {
      created: new Date().toISOString(),
      topic: topic || config.topic
    }
  } catch (err) {
    status.error = err.message
  } finally {
    producer.disconnect()
  }
  return status
}

module.exports = { run }
